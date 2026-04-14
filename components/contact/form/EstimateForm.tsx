"use client";

import { useState, FormEvent } from "react";
import FormField from "./FormField";
import PillGroup from "./PillGroup";
import BudgetSelector from "./BudgetSelector";
import FileDropzone from "./FileDropzone";

const projectTypes = [
  "Full Renovation",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Addition",
  "Historic Restoration",
  "Custom Cabinetry",
  "Commercial Buildout",
  "Roofing",
  "Other",
] as const;

const userTypes = [
  "Homeowner",
  "Real Estate Agent",
  "Commercial Business Owner",
  "Property Manager",
  "Architect / Designer",
  "Other",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const referralSources = [
  "Google search",
  "Referral from friend",
  "Past client",
  "Realtor recommendation",
  "Drove by the office",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  userType: string;
  projectType: string;
  budget: string;
  address: string;
  timeline: string;
  referral: string;
  message: string;
  files: File[];
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  userType: userTypes[0],
  projectType: projectTypes[0],
  budget: "25k-100k",
  address: "",
  timeline: timelines[0],
  referral: referralSources[0],
  message: "",
  files: [],
};

export default function EstimateForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real backend
    console.log("Estimate request submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialState);
    }, 5000);
  }

  return (
    <section id="estimate" className="bg-paper pt-[100px] pb-24 lg:pb-32">
      <div className="container-site">
        <div className="relative grid lg:grid-cols-[1fr_1.5fr] border border-line min-h-[600px]">
          {/* "Primary Action" tab */}
          <div className="absolute -top-3 left-12 bg-burgundy text-cream px-4 py-1.5 text-[10px] tracking-[0.16em] uppercase font-semibold">
            Primary Action
          </div>

          {/* LEFT: Dark sidebar with pitch + mini-process */}
          <aside className="relative bg-ink text-cream px-9 py-12 lg:px-12 lg:py-16 overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-[30%] -right-[30%] w-[600px] h-[600px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(184, 137, 61, 0.14) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <span className="eyebrow eyebrow-light mb-7">
                Request an Estimate
              </span>
              <h2 className="font-display text-[clamp(32px,3.5vw,46px)] font-light leading-[1.05] mt-7 mb-7">
                A proposal{" "}
                <em className="italic text-brass-light font-normal">
                  by tomorrow
                </em>
                .
              </h2>
              <p className="text-cream/72 mb-8 leading-[1.7] text-[15px]">
                Tell us what you&rsquo;re thinking. We&rsquo;ll schedule a site visit
                within 48 hours, and deliver a detailed proposal within 24 hours of
                that visit.
              </p>

              <ol className="flex flex-col gap-4 pt-8 border-t border-cream/12 list-none">
                {[
                  {
                    n: "i",
                    title: "You submit this form",
                    sub: "Takes about 2 minutes",
                  },
                  {
                    n: "ii",
                    title: "We schedule a site visit",
                    sub: "Within 48 hours",
                  },
                  {
                    n: "iii",
                    title: "You get a detailed proposal",
                    sub: "Within 24 hours of visit",
                  },
                  {
                    n: "iv",
                    title: "We build it",
                    sub: "On schedule, on budget",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-4">
                    <div className="w-7 h-7 border border-brass-light text-brass-light grid place-items-center font-display italic text-sm flex-shrink-0 rounded-full">
                      {step.n}
                    </div>
                    <div className="font-display text-[15px] text-cream leading-snug">
                      {step.title}
                      <span className="block font-sans text-[11px] text-cream/50 mt-0.5 tracking-wide">
                        {step.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <div className="bg-paper px-9 py-12 lg:px-14 lg:py-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="font-display italic text-[48px] text-burgundy mb-4">
                  Thank you.
                </div>
                <p className="text-ink-soft max-w-[420px] leading-[1.7] mb-2">
                  We&rsquo;ve received your estimate request and will respond within
                  24 hours to schedule your site visit.
                </p>
                <p className="text-[12px] text-ink-muted tracking-wide">
                  A confirmation email is on its way to {form.email}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-[28px] font-normal mb-1.5">
                  Start your estimate
                </h3>
                <p className="text-ink-muted text-sm mb-10">
                  All fields marked{" "}
                  <span className="text-burgundy">*</span> are required.
                  Estimated completion time: 2–3 minutes.
                </p>

                {/* SECTION 1: About You */}
                <div className="mb-9">
                  <div className="flex items-baseline gap-2.5 mb-5">
                    <span
                      aria-hidden
                      className="w-6 h-px bg-burgundy flex-shrink-0"
                    />
                    <span className="text-[10px] tracking-[0.16em] uppercase text-burgundy font-semibold">
                      About You
                    </span>
                    <span className="font-display italic text-[11px] text-brass">
                      step one
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-[18px]">
                    <FormField
                      label="Full Name"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(v) => updateField("name", v)}
                      required
                    />
                    <FormField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(626) 555-0100"
                      value={form.phone}
                      onChange={(v) => updateField("phone", v)}
                      required
                    />
                  </div>

                  <div className="mb-[18px]">
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(v) => updateField("email", v)}
                      required
                      full
                    />
                  </div>

                  <FormField
                    label="Are you a homeowner, agent, or business?"
                    name="userType"
                    value={form.userType}
                    onChange={(v) => updateField("userType", v)}
                    full
                  >
                    <select
                      id="userType"
                      value={form.userType}
                      onChange={(e) => updateField("userType", e.target.value)}
                      className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans w-full"
                    >
                      {userTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* SECTION 2: Project Type */}
                <div className="mb-9">
                  <PillGroup
                    label="Project Type"
                    step="step two"
                    options={projectTypes}
                    value={form.projectType}
                    onChange={(v) => updateField("projectType", v)}
                  />
                </div>

                {/* SECTION 3: Budget */}
                <div className="mb-9">
                  <BudgetSelector
                    label="Estimated Budget"
                    step="step three"
                    value={form.budget}
                    onChange={(v) => updateField("budget", v)}
                  />
                </div>

                {/* SECTION 4: Project Details */}
                <div className="mb-7">
                  <div className="flex items-baseline gap-2.5 mb-5">
                    <span
                      aria-hidden
                      className="w-6 h-px bg-burgundy flex-shrink-0"
                    />
                    <span className="text-[10px] tracking-[0.16em] uppercase text-burgundy font-semibold">
                      Project Details
                    </span>
                    <span className="font-display italic text-[11px] text-brass">
                      step four
                    </span>
                  </div>

                  <div className="mb-[18px]">
                    <FormField
                      label="Project Address"
                      name="address"
                      placeholder="Street address, city, zip"
                      value={form.address}
                      onChange={(v) => updateField("address", v)}
                      required
                      full
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-[18px]">
                    <FormField
                      label="Timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={(v) => updateField("timeline", v)}
                    >
                      <select
                        id="timeline"
                        value={form.timeline}
                        onChange={(e) =>
                          updateField("timeline", e.target.value)
                        }
                        className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans w-full"
                      >
                        {timelines.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField
                      label="How did you hear about us?"
                      name="referral"
                      value={form.referral}
                      onChange={(v) => updateField("referral", v)}
                    >
                      <select
                        id="referral"
                        value={form.referral}
                        onChange={(e) =>
                          updateField("referral", e.target.value)
                        }
                        className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans w-full"
                      >
                        {referralSources.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <div className="mb-5">
                    <FormField
                      label="Tell us about your project"
                      name="message"
                      value={form.message}
                      onChange={(v) => updateField("message", v)}
                      required
                      full
                    >
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          updateField("message", e.target.value)
                        }
                        placeholder="Scope, goals, any constraints we should know about. The more detail, the more accurate the proposal."
                        rows={4}
                        className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors font-sans resize-y min-h-[90px] placeholder:text-ink-muted placeholder:opacity-50 w-full"
                      />
                    </FormField>
                  </div>

                  <FileDropzone
                    onFilesSelected={(files) => updateField("files", files)}
                  />
                </div>

                {/* Form actions */}
                <div className="pt-8 border-t border-line flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-xs text-ink-muted max-w-[320px] leading-relaxed">
                    By submitting, you agree to be contacted about your project. We
                    never share your info.
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250"
                  >
                    Send Estimate Request
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
      </div>
    </section>
  );
}