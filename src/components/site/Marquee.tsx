const items = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TypeScript",
  "Next.js",
  "SQL",
  "Excel",
  "HTML",
  "CSS",
  "Java Script"
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 2} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 pr-6 font-display text-lg font-semibold whitespace-nowrap text-muted-foreground sm:text-xl"
              >
                {item}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
