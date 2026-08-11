import { Reveal, SectionHeading } from "./Reveal";

const tools = [
  { name: "React", level: 90, short: "Re" },
  { name: "Node.js", level: 80, short: "No" },
  { name: "TypeScript", level: 65, short: "Ts" },
  { name: "MongoDB", level: 85, short: "Mo" },
  { name: "Express.js", level: 80, short: "Ex" },
  { name: "Supabase", level: 70, short: "Su" },
  { name: "SQL", level: 65, short: "Sq" },
];

export function Tools() {
  return (
    <section id="tools" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="My Stack"
        title="Exploring the Tools"
        highlight="Behind My Designs"
        description="The everyday toolkit I use to design, build and ship products."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 80}>
            <article className="surface-card group relative overflow-hidden p-5">
              <span className="absolute top-4 right-4 rounded-full bg-[image:var(--gradient-accent)] px-2.5 py-0.5 text-[11px] font-bold text-primary-foreground">
                {tool.level}%
              </span>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-surface-2 font-display text-base font-bold text-primary">
                  {tool.short}
                </span>
                <h3 className="font-display text-lg font-bold">{tool.name}</h3>
              </div>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  style={{ width: `${tool.level}%` }}
                  className="h-full rounded-full bg-[image:var(--gradient-accent)] transition-all duration-700 group-hover:opacity-90"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
