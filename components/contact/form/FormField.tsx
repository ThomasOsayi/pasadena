"use client";

import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  full?: boolean;
  children?: ReactNode;
};

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  full,
  children,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col ${full ? "col-span-full" : ""}`}>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold"
      >
        {label}
        {required && <span className="text-burgundy ml-0.5">*</span>}
      </label>

      {children ?? (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans placeholder:text-ink-muted placeholder:opacity-50"
        />
      )}
    </div>
  );
}