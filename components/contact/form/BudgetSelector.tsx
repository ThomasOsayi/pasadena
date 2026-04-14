"use client";

type BudgetOption = {
  id: string;
  amount: string;
  note: string;
};

const budgetOptions: readonly BudgetOption[] = [
  { id: "under-25k", amount: "Under $25K", note: "Small Job" },
  { id: "25k-100k", amount: "$25K–$100K", note: "Mid-Size" },
  { id: "100k-500k", amount: "$100K–$500K", note: "Major" },
  { id: "500k-plus", amount: "$500K+", note: "Large Scale" },
];

type BudgetSelectorProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  step?: string;
};

export default function BudgetSelector({
  label,
  value,
  onChange,
  step,
}: BudgetSelectorProps) {
  return (
    <div>
      <div className="flex items-baseline gap-2.5 mb-5">
        <span
          aria-hidden
          className="w-6 h-px bg-burgundy flex-shrink-0"
        />
        <span className="text-[10px] tracking-[0.16em] uppercase text-burgundy font-semibold">
          {label}
        </span>
        {step && (
          <span className="font-display italic text-[11px] text-brass">
            {step}
          </span>
        )}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
        role="radiogroup"
        aria-label={label}
      >
        {budgetOptions.map((option) => {
          const isActive = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option.id)}
              className={`flex flex-col items-center justify-center text-center px-3 py-4 border cursor-pointer transition-all duration-250 ${
                isActive
                  ? "bg-burgundy border-burgundy text-cream"
                  : "bg-paper border-line text-ink hover:border-burgundy"
              }`}
            >
              <span
                className={`font-display text-base font-medium block mb-1 ${
                  isActive ? "text-cream" : "text-ink"
                }`}
              >
                {option.amount}
              </span>
              <span
                className={`text-[9.5px] tracking-[0.1em] uppercase font-semibold ${
                  isActive ? "text-cream/75" : "text-ink-muted"
                }`}
              >
                {option.note}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}