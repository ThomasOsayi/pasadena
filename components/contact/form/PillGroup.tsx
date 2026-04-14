"use client";

type PillGroupProps = {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  step?: string;
};

export default function PillGroup({
  label,
  options,
  value,
  onChange,
  step,
}: PillGroupProps) {
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

      <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const isActive = option === value;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option)}
              className={`px-4 py-2.5 text-xs font-semibold tracking-[0.06em] border cursor-pointer transition-all duration-250 ${
                isActive
                  ? "bg-burgundy border-burgundy text-cream"
                  : "bg-paper border-line text-ink-soft hover:border-burgundy hover:text-burgundy"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}