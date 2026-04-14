"use client";

import { useState, FormEvent } from "react";

type QuickFormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: QuickFormState = {
  name: "",
  email: "",
  message: "",
};

export default function GeneralContact() {
  const [form, setForm] = useState<QuickFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to real backend
    console.log("Quick message submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialState);
    }, 4000);
  }

  return (
    <section className="bg-cream py-24 lg:py-32 border-t border-line-soft">
      <div className="container-site">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end mb-[70px]">
          <div>
            <span className="eyebrow">Other Ways to Reach Us</span>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-6">
              Not ready for a full estimate?{" "}
              <em className="italic text-burgundy font-normal">Just say hi</em>.
            </h2>
          </div>
          <p className="text-ink-soft max-w-[540px] leading-[1.75]">
            If you&rsquo;re a vendor, a realtor partner, or you just have a question
            that isn&rsquo;t about a specific project — here&rsquo;s how to reach the
            right person without filling out the full estimate form.
          </p>
        </div>

        {/* Methods + Quick form */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
          {/* Methods grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line">
            {/* Call */}
            <a
              href="tel:6263569600"
              className="block px-[30px] pt-9 pb-10 bg-paper border-r border-b border-line transition-colors duration-300 hover:bg-cream-warm"
            >
              <div className="w-9 h-9 border border-burgundy grid place-items-center text-burgundy mb-5">
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
              <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold mb-1.5">
                Call the Office
              </div>
              <div className="font-display text-[19px] font-medium text-ink mb-1.5 leading-[1.3]">
                626.356.9600
              </div>
              <div className="text-xs text-ink-muted leading-[1.5]">
                Mon–Fri, 7:30 AM–5:00 PM PT
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:admin@pasadenainteriors.com"
              className="block px-[30px] pt-9 pb-10 bg-paper border-r border-b border-line transition-colors duration-300 hover:bg-cream-warm"
            >
              <div className="w-9 h-9 border border-burgundy grid place-items-center text-burgundy mb-5">
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
              <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold mb-1.5">
                General Inquiries
              </div>
              <div className="font-display text-[19px] font-medium text-ink mb-1.5 leading-[1.3] break-all">
                admin@pasadenainteriors.com
              </div>
              <div className="text-xs text-ink-muted leading-[1.5]">
                Replies within one business day
              </div>
            </a>

            {/* Visit */}
            <div className="px-[30px] pt-9 pb-10 bg-paper border-r border-b border-line">
              <div className="w-9 h-9 border border-burgundy grid place-items-center text-burgundy mb-5">
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
              <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold mb-1.5">
                Visit the Office
              </div>
              <div className="font-display text-[19px] font-medium text-ink mb-1.5 leading-[1.3]">
                135 N. Marengo Ave
              </div>
              <div className="text-xs text-ink-muted leading-[1.5]">
                Pasadena, CA 91101 · Visitor parking in front
              </div>
            </div>

            {/* Fax */}
            <div className="px-[30px] pt-9 pb-10 bg-paper border-r border-b border-line">
              <div className="w-9 h-9 border border-burgundy grid place-items-center text-burgundy mb-5">
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
              <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold mb-1.5">
                Fax
              </div>
              <div className="font-display text-[19px] font-medium text-ink mb-1.5 leading-[1.3]">
                626.356.9625
              </div>
              <div className="text-xs text-ink-muted leading-[1.5]">
                Yes, we still have one
              </div>
            </div>
          </div>

          {/* Quick form */}
          <div className="bg-paper border border-line p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="font-display italic text-[36px] text-burgundy mb-3">
                  Message sent.
                </div>
                <p className="text-ink-soft leading-[1.7] max-w-[320px]">
                  We&rsquo;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-2xl font-medium mb-1.5">
                  Quick Message
                </h3>
                <p className="text-ink-muted text-[13px] mb-7">
                  For general questions that don&rsquo;t need an estimate.
                </p>

                <div className="flex flex-col gap-[18px] mb-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="quick-name"
                      className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold"
                    >
                      Name
                    </label>
                    <input
                      id="quick-name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors placeholder:text-ink-muted placeholder:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="quick-email"
                      className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold"
                    >
                      Email
                    </label>
                    <input
                      id="quick-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors placeholder:text-ink-muted placeholder:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="quick-message"
                      className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-2 font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      id="quick-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="What's on your mind?"
                      rows={4}
                      className="border-0 border-b border-line bg-transparent py-2.5 text-sm text-ink outline-none focus:border-burgundy transition-colors resize-y min-h-[90px] placeholder:text-ink-muted placeholder:opacity-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250 cursor-pointer mt-2"
                >
                  Send Message
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}