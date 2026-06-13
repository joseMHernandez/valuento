"use client";

import { useState } from "react";
import {
  REVENUE_OPTIONS,
  BUDGET_OPTIONS,
  type RevenueValue,
  type BudgetValue,
} from "@/lib/leads";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Step = 0 | 1 | 2;

export default function LeadForm() {
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [revenue, setRevenue] = useState<RevenueValue | "">("");
  const [budget, setBudget] = useState<BudgetValue | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const step1Valid = name.trim().length > 0 && EMAIL_RE.test(email.trim());

  async function submit(finalBudget: BudgetValue) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          monthly_revenue: revenue,
          scaling_budget: finalBudget,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card/60 p-8 text-center md:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight">
          You&apos;re on the list, {name.trim().split(" ")[0]}.
        </h3>
        <p className="mt-3 text-muted">
          We&apos;ll review your numbers and reach out. Want to skip the wait?
          Grab a slot now.
        </p>
        <a
          href="https://cal.com/valuento"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
        >
          Book my 20-min review →
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card/60 p-6 text-left md:p-8">
      {/* progress */}
      <div className="mb-6 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i <= step ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Step 1: name + email */}
      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm text-muted">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              autoFocus
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-muted">Work email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
            />
          </div>
          <button
            type="button"
            disabled={!step1Valid}
            onClick={() => setStep(1)}
            className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            Continue →
          </button>
        </div>
      )}

      {/* Step 2: revenue */}
      {step === 1 && (
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">
            What&apos;s your business doing in annual revenue?
          </h3>
          <p className="text-sm text-muted">This tells us where you are today.</p>
          <div className="mt-2 grid gap-2">
            {REVENUE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setRevenue(opt.value);
                  setStep(2);
                }}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors hover:border-accent ${
                  revenue === opt.value
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background"
                }`}
              >
                <span>{opt.label}</span>
                <span className="text-muted">→</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="mt-2 text-sm text-muted hover:text-foreground"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: budget */}
      {step === 2 && (
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight">
            How much are you ready to invest per month to scale?
          </h3>
          <p className="text-sm text-muted">No wrong answer — it helps us tailor the plan.</p>
          <div className="mt-2 grid gap-2">
            {BUDGET_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                disabled={loading}
                onClick={() => {
                  setBudget(opt.value);
                  submit(opt.value);
                }}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors hover:border-accent disabled:opacity-50 ${
                  budget === opt.value
                    ? "border-accent bg-accent/10"
                    : "border-border bg-background"
                }`}
              >
                <span>{opt.label}</span>
                <span className="text-muted">{loading && budget === opt.value ? "…" : "→"}</span>
              </button>
            ))}
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="button"
            onClick={() => setStep(1)}
            disabled={loading}
            className="mt-2 text-sm text-muted hover:text-foreground disabled:opacity-50"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
