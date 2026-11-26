import { WorkCard } from "./WorkCard";
import cover from "@/assets/work-card-cover.png";

type CaseItem = {
  number: string;
  title: string;
  summary: string;
  role: string;
  achieved: string;
};

const cases: CaseItem[] = [
  {
    number: "01",
    title: "NAME",
    summary: "Website redesign for a small business to simplify the booking journey.",
    role: "Mapped the customer decision flow, redesigned the booking steps, built the prototype.",
    achieved: "Shorter booking flow, clearer next steps, fewer drop-offs before checkout.",
  },
  {
    number: "02",
    title: "APP for Students",
    summary: "App design for students getting prepared for entry maths exams.",
    role: "Created a Teacher persona, the flow to assign a task, and the persona's dashboard.",
    achieved: "Clear flow for a Teacher persona, with the capability to complete the task.",
  },
  {
    number: "03",
    title: "NAME",
    summary: "Online store redesign to make browsing and checkout easier on mobile.",
    role: "Defined the information architecture, redesigned product pages and checkout.",
    achieved: "Simplified navigation and a shorter, clearer checkout flow.",
  },
  {
    number: "04",
    title: "NAME",
    summary: "Admin dashboard for managing bookings and daily schedules.",
    role: "Designed the dashboard layout, appointment list, and scheduling flow.",
    achieved: "Faster day-to-day scheduling with fewer manual errors.",
  },
];

export function Cases() {
  return (
    <section id="works" className="flex w-full flex-col gap-8 px-6 py-16 sm:px-8">
      <h2 className="text-display text-ink">Cases</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((item) => (
          <WorkCard
            key={item.number}
            href="#"
            number={item.number}
            title={item.title}
            summary={item.summary}
            role={item.role}
            achieved={item.achieved}
            image={cover}
            imageAlt={`Cover picture of ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
}
