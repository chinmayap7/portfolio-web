import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const education = [
  {
    title: "B.Tech, Computer Science & Engineering",
    org: "GIET BBSR, Under BPUT University",
    period: "2022 — 2026 • CGPA: 8.09",
  },
];

const experience = [
  {
    title: "MERN Stack Developer Intern",
    org: "Web Bocket Software Solutions",
    period: "Internship",
  },
  {
    title: "Full Stack Developer Intern",
    org: "East Coast Railway",
    period: "Internship",
  },
];

function Timeline({
  id,
  icon: Icon,
  heading,
  items,
}: {
  id: string;
  icon: typeof Briefcase;
  heading: string;
  items: { title: string; org: string; period: string }[];
}) {
  return (
    <div id={id} className="surface-card scroll-mt-28 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>

        <h3 className="font-display text-xl font-bold">{heading}</h3>
      </div>

      <ol className="mt-8 space-y-6 border-l border-border pl-6">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute top-1.5 -left-[1.87rem] h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

            <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-4">
              <div className="min-w-0">
                <p className="font-semibold">{item.title}</p>

                <p className="text-sm text-muted-foreground">
                  {item.org}
                </p>
              </div>

              <span className="w-fit rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground">
                {item.period}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Education & Work"
        title="My Academic and"
        highlight="Professional Journey"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Timeline
            id="education"
            icon={GraduationCap}
            heading="Education"
            items={education}
          />
        </Reveal>

        <Reveal delay={120}>
          <Timeline
            id="experience"
            icon={Briefcase}
            heading="Work Experience"
            items={experience}
          />
        </Reveal>
      </div>
    </section>
  );
}