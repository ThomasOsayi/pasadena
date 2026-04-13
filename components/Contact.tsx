"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "Residential Renovation",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real backend / email service
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialState);
    }, 4000);
  }

  return (
    <section id="contact" className="bg-paper py-24 lg:py-32">
      <div className="container-site grid lg:grid-cols-2 border border-line">
        {/* Left: dark info panel */}
        <div className="bg-ink text-cream p-10 lg:p-14">
          <span className="eyebrow eyebrow-light mb-7">Get In Touch</span>
          <h2 className="font-display text-[clamp(36px,3.8vw,52px)] font-light leading-[1.05] mt-7 mb-8">
            Let&apos;s build something{" "}
            <em className="italic text-brass-light font-normal">that lasts</em>.
          </h2>
          <p className="text-cream/75 mb-10 leading-[1.7]">
            Tell us about your project. We&apos;ll respond with a detailed estimate
            within 24 hours - and walk you through every step before a single nail goes
            in.
          </p>

          <div className="flex flex-col gap-[18px]">
            {/* Address */}
            <div className="flex items-center gap-4 pb-[18px] border-b border-cream/12">
              <div className="w-9 h-9 border border-cream/25 grid place-items-center shrink-0 text-brass-light">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-cream/55">
                  Visit Us
                </div>
                <div className="font-display text-[17px] text-cream mt-0.5">
                  135 N. Marengo Ave, Pasadena CA 91101
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 pb-[18px] border-b border-cream/12">
              <div className="w-9 h-9 border border-cream/25 grid place-items-center shrink-0 text-brass-light">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-cream/55">
                  Call
                </div>
                <a
                  href="tel:6263569600"
                  className="font-display text-[17px] text-cream mt-0.5 block hover:text-brass-light transition-colors"
                >
                  626.356.9600
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-cream/25 grid place-items-center shrink-0 text-brass-light">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-cream/55">
                  Email
                </div>
                <a
                  href="mailto:admin@pasadenainteriors.com"
                  className="font-display text-[17px] text-cream mt-0.5 block hover:text-brass-light transition-colors"
                >
                  admin@pasadenainteriors.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-paper p-10 lg:p-14">
          <h3 className="font-display text-[28px] font-normal mb-2">
            Request an Estimate
          </h3>
          <div className="text-ink-muted text-sm mb-8">
            We typically respond within 24 hours.
          </div>

          {submitted ? (
            <div className="border border-burgundy bg-burgundy/5 p-6 text-center">
              <div className="font-display text-2xl text-burgundy mb-2">
                Thank you.
              </div>
              <p className="text-ink-soft text-sm">
                We&apos;ve received your inquiry and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(626) 555-0100"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold block">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors"
                >
                  <option>Residential Renovation</option>
                  <option>Commercial Construction</option>
                  <option>Interior Design</option>
                  <option>Historic Restoration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold block">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Scope, timeline, address, anything we should know..."
                  rows={3}
                  className="w-full border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors resize-y min-h-[80px] font-sans"
                />
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-ink-muted">
                  We&apos;ll never share your information.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-widest uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250"
                >
                  Send Inquiry
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
};

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans"
      />
    </div>
  );
}
