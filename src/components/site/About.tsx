import { GraduationCap, Rocket, Briefcase } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { icon: Briefcase, value: "2", label: "Internships completed" },
  { icon: Rocket, value: "2+", label: "Full-stack projects" },
  { icon: GraduationCap, value: "B.Tech", label: "Computer Science & Engineering" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="Who is"
        highlight="Chinmaya Panigrahy?"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">

        {/* About Content */}
        <Reveal className="surface-card p-6 sm:p-9">

          <p className="text-base leading-relaxed text-muted-foreground">
            I'm a Computer Science and Engineering graduate with hands-on
            experience in MERN Stack development. I enjoy building responsive,
            user-friendly web applications using React.js, Node.js,
            Express.js, and MongoDB.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I have gained practical experience through internships and
            full-stack projects, including a Job Portal and a Railway ID Card
            Generator. I'm continuously improving my development and
            problem-solving skills while learning new technologies.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Name", "Chinmaya Panigrahy"],
              ["Location", "Hyderabad,Ameerpet"],
              ["Email", "cpanigrahy869@gmail.com"],
              ["Availability", "Open to opportunities"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-border bg-surface-2/60 px-4 py-3"
              >
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {k}
                </p>

                <p className="mt-1 truncate text-sm font-semibold">
                  {v}
                </p>
              </div>
            ))}
          </div>

        </Reveal>

        {/* Stats */}
        <div className="grid gap-6">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className="surface-card flex items-center gap-4 p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <stat.icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="font-display text-2xl font-bold">
                  {stat.value}
                </p>

                <p className="truncate text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}