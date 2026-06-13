/**
 * Shared lead-capture definitions. Imported by both the client form
 * (src/components/LeadForm.tsx) and the server route (src/app/api/lead/route.ts)
 * so the option values can never drift between what we render and what we accept.
 */

export const REVENUE_OPTIONS = [
  { value: "50k-100k", label: "$50K – $100K" },
  { value: "100k-250k", label: "$100K – $250K" },
  { value: "250k-500k", label: "$250K – $500K" },
  { value: "500k-1m", label: "$500K – $1M" },
  { value: "1m-plus", label: "$1M+" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-2k", label: "Under $2K / mo" },
  { value: "2k-5k", label: "$2K – $5K / mo" },
  { value: "5k-10k", label: "$5K – $10K / mo" },
  { value: "10k-25k", label: "$10K – $25K / mo" },
  { value: "25k-plus", label: "$25K+ / mo" },
] as const;

export type RevenueValue = (typeof REVENUE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];

export const REVENUE_VALUES = REVENUE_OPTIONS.map((o) => o.value);
export const BUDGET_VALUES = BUDGET_OPTIONS.map((o) => o.value);

export interface LeadPayload {
  name: string;
  email: string;
  monthly_revenue: RevenueValue;
  scaling_budget: BudgetValue;
}
