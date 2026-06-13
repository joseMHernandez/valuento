import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  BUDGET_VALUES,
  REVENUE_VALUES,
  type LeadPayload,
} from "@/lib/leads";

// Basic, dependency-free email sanity check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Partial<LeadPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const monthly_revenue = body.monthly_revenue;
  const scaling_budget = body.scaling_budget;

  // ---- validation ----
  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!monthly_revenue || !REVENUE_VALUES.includes(monthly_revenue)) {
    return NextResponse.json({ error: "Please select a revenue range." }, { status: 400 });
  }
  if (!scaling_budget || !BUDGET_VALUES.includes(scaling_budget)) {
    return NextResponse.json({ error: "Please select a budget range." }, { status: 400 });
  }

  // ---- persist to Supabase ----
  // Wrapped so that any unexpected throw (e.g. Supabase not yet configured)
  // still returns JSON the client can parse, instead of an opaque 500 page.
  try {
    const { data, error } = await getSupabaseAdmin()
      .from("leads")
      .insert({ name, email, monthly_revenue, scaling_budget })
      .select()
      .single();

    if (error) {
      console.error("[lead] supabase insert failed:", error);
      return NextResponse.json(
        { error: "Could not save your submission. Please try again." },
        { status: 500 }
      );
    }

    // ---- forward to CRM (wire up later) ----
    // The lead is already safely stored above, so a CRM failure must never
    // break the user's submission — we fire it best-effort and only log.
    try {
      await forwardToCrm(data);
    } catch (err) {
      console.error("[lead] CRM forward failed (lead still saved in Supabase):", err);
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return NextResponse.json(
      { error: "Could not save your submission. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * TODO(crm): connect your CRM here.
 *
 * `lead` is the row that was just inserted into Supabase (includes id + created_at).
 * Most CRMs are a single authenticated POST, e.g.:
 *
 *   await fetch(process.env.CRM_WEBHOOK_URL!, {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *       Authorization: `Bearer ${process.env.CRM_API_KEY}`,
 *     },
 *     body: JSON.stringify({
 *       email: lead.email,
 *       name: lead.name,
 *       properties: {
 *         monthly_revenue: lead.monthly_revenue,
 *         scaling_budget: lead.scaling_budget,
 *       },
 *     }),
 *   });
 *
 * Add CRM_WEBHOOK_URL / CRM_API_KEY to .env.local when you're ready.
 */
async function forwardToCrm(lead: Record<string, unknown>): Promise<void> {
  if (!process.env.CRM_WEBHOOK_URL) return; // no-op until configured
  void lead;
}
