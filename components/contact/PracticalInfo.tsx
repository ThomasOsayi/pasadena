type DayRow = {
  day: string;
  hours: string;
  closed?: boolean;
};

const hoursRows: DayRow[] = [
  { day: "Monday", hours: "7:30 AM – 5:00 PM" },
  { day: "Tuesday", hours: "7:30 AM – 5:00 PM" },
  { day: "Wednesday", hours: "7:30 AM – 5:00 PM" },
  { day: "Thursday", hours: "7:30 AM – 5:00 PM" },
  { day: "Friday", hours: "7:30 AM – 4:00 PM" },
  { day: "Saturday", hours: "By appointment", closed: true },
  { day: "Sunday", hours: "Closed", closed: true },
];

export default function PracticalInfo() {
  return (
    <section className="bg-paper pt-[100px] pb-24 lg:pb-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-line">
          {/* Cell 1: Office Hours */}
          <div className="px-9 pt-11 pb-12 border-r border-b border-line">
            <div className="font-display italic text-[13px] text-brass mb-5">
              i.
            </div>
            <h3 className="font-display text-[22px] font-medium mb-[18px]">
              <em className="italic text-burgundy font-medium">Office</em> Hours
            </h3>
            <dl className="flex flex-col gap-2.5 m-0">
              {hoursRows.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex justify-between text-sm pb-2 ${
                    i < hoursRows.length - 1 ? "border-b border-line-soft" : ""
                  } ${row.closed ? "text-ink-muted" : "text-ink-soft"}`}
                >
                  <dt className="font-display font-normal m-0">{row.day}</dt>
                  <dd className="m-0">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Cell 2: Parking & Access */}
          <div className="px-9 pt-11 pb-12 border-r border-b border-line">
            <div className="font-display italic text-[13px] text-brass mb-5">
              ii.
            </div>
            <h3 className="font-display text-[22px] font-medium mb-[18px]">
              <em className="italic text-burgundy font-medium">Parking</em> &amp;
              Access
            </h3>
            <p className="text-ink-soft leading-[1.75] text-sm">
              Visitor parking is available directly in front of the office on
              Marengo Avenue. Additional street parking on Union Street and Walnut
              Street.
            </p>
            <p className="text-ink-soft leading-[1.75] text-sm mt-3">
              The office is fully wheelchair accessible. ADA-compliant entry
              through the main front entrance.
            </p>
            <p className="text-ink-soft leading-[1.75] text-sm mt-3">
              Metro Gold Line: Memorial Park Station, 4-minute walk.
            </p>
          </div>

          {/* Cell 3: After Hours */}
          <div className="px-9 pt-11 pb-12 border-r border-b border-line">
            <div className="font-display italic text-[13px] text-brass mb-5">
              iii.
            </div>
            <h3 className="font-display text-[22px] font-medium mb-[18px]">
              <em className="italic text-burgundy font-medium">After</em> Hours
            </h3>
            <p className="text-ink-soft leading-[1.75] text-sm">
              For emergencies — water damage, urgent structural issues, active
              leaks — call the main line and leave a message. Someone from the team
              checks voicemail every two hours during business days.
            </p>
            <p className="text-ink-soft leading-[1.75] text-sm mt-3">
              For non-urgent inquiries outside business hours, email is the fastest
              way to reach us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}