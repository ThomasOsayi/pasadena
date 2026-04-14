import type { ReactNode } from "react";

type FAQItem = {
  numeral: string;
  question: ReactNode;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    numeral: "i.",
    question: (
      <>
        How long does an <em className="italic text-burgundy">estimate</em>{" "}
        actually take?
      </>
    ),
    answer:
      "Most estimates are delivered within 24 hours of the site visit. The site visit itself is scheduled within 48 hours of your request. So from form submission to proposal in hand: typically 3–5 business days.",
  },
  {
    numeral: "ii.",
    question: (
      <>
        Is there a <em className="italic text-burgundy">cost</em> for the
        estimate?
      </>
    ),
    answer:
      "No. Site visits and written proposals are always free, with no obligation. We don't charge for consultations because the first conversation is how we both figure out whether we're a good fit.",
  },
  {
    numeral: "iii.",
    question: (
      <>
        Do you take <em className="italic text-burgundy">small jobs</em>?
      </>
    ),
    answer:
      "Yes. From a single doorframe replacement to a full historic restoration, we bring the same standard of craftsmanship to every project. There's no minimum job size.",
  },
  {
    numeral: "iv.",
    question: (
      <>
        Do you work <em className="italic text-burgundy">outside Pasadena</em>?
      </>
    ),
    answer:
      "We primarily serve Pasadena, Altadena, South Pasadena, San Marino, La Cañada Flintridge, and surrounding Southern California. For larger commercial and institutional projects, we've worked as far as Long Beach and Edwards Air Force Base.",
  },
  {
    numeral: "v.",
    question: (
      <>
        Are you <em className="italic text-burgundy">licensed and insured</em>?
      </>
    ),
    answer:
      "Yes — CSLB License #421907, surety-bonded for institutional and federal contracts, and fully insured with general liability, workers' comp, and project-specific coverage. Documentation available upon request.",
  },
  {
    numeral: "vi.",
    question: (
      <>
        What&rsquo;s the <em className="italic text-burgundy">payment schedule</em>?
      </>
    ),
    answer:
      "Standard progress-based payment: a deposit at contract signing, then payments tied to project milestones. Exact terms are outlined in every proposal before any work begins. No surprises.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="bg-cream-warm py-24 lg:py-32">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <span className="eyebrow eyebrow-centered mb-[22px]">
            Common Questions
          </span>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-[22px]">
            Before you{" "}
            <em className="italic text-burgundy font-normal">reach out</em>.
          </h2>
        </div>

        {/* FAQ list */}
        <dl className="max-w-[860px] mx-auto border-t border-line m-0">
          {faqs.map((faq) => (
            <div
              key={faq.numeral}
              className="grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-2 sm:gap-6 py-8 border-b border-line"
            >
              <dt className="font-display italic text-base text-burgundy m-0">
                {faq.numeral}
              </dt>
              <dd className="m-0">
                <h3 className="font-display text-[21px] font-medium leading-[1.3] mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-ink-soft leading-[1.7] text-[15px]">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}