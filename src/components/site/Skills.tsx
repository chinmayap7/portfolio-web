import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    title: "Frontend Development",
    points: [
      "React.js",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
    ],
    body: "Building responsive and user-friendly interfaces with React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    points: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
    body: "Developing backend applications and REST APIs using Node.js and Express.js with practical authentication experience.",
  },
  {
    title: "Database",
    points: [
      "MongoDB",
      "SQL",
      "Database Design",
      "CRUD Operations",
    ],
    body: "Working with MongoDB and SQL for storing, managing, and retrieving application data.",
  },
  {
    title: "Development Tools",
    points: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
    body: "Using Git, GitHub, Postman, and VS Code for development, API testing, version control, and project management.",
  },
  {
    title: "Programming & Problem Solving",
    points: [
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
    ],
    body: "Practicing programming fundamentals, data structures, algorithms, and problem-solving using Java and Python.",
  },
];

export function Skills() {
  const [open, setOpen] = useState(0);

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="My Skills"
        title="What I"
        highlight="Work With"
        description="Technologies and tools I use to build and improve web applications."
        align="left"
      />

      <div className="mt-12">
        <div className="grid gap-3 lg:grid-cols-2">
          {services.map((service, index) => {
            const isOpen = open === index;

            return (
              <Reveal key={service.title} delay={index * 70}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className={cn(
                    "h-full w-full rounded-3xl border border-border p-5 text-left transition-all duration-500 sm:p-6",
                    isOpen
                      ? "bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[var(--shadow-glow)]"
                      : "bg-surface hover:border-primary/60 hover:bg-surface-2",
                  )}
                >
                  <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
                    <span
                      className={cn(
                        "text-xs font-semibold",
                        isOpen ? "opacity-80" : "text-muted-foreground",
                      )}
                    >
                      0{index + 1}
                    </span>

                    <span className="truncate font-display text-base font-bold sm:text-lg">
                      {service.title}
                    </span>

                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-500",
                        isOpen
                          ? "rotate-180 bg-background text-primary"
                          : "bg-surface-2 text-primary",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      isOpen
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {service.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full bg-background/25 px-3 py-1 text-xs font-medium"
                          >
                            {point}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-sm opacity-90">
                        {service.body}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}