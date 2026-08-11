import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ecommerce from "@/assets/project-ecommerce.jpg";
import analytics from "@/assets/project-analytics.jpg";
import chat from "@/assets/project-chat.jpg";
import { Reveal, SectionHeading } from "./Reveal";

type Project = {
  title: string;
  body: string;
  tools: string[];
  features: string[];
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Nova Commerce — Headless Storefront",
    body: "A MERN storefront with catalogue search, checkout and an admin dashboard for inventory.",
    tools: ["React", "Node", "MongoDB", "Stripe"],
    features: ["Stripe checkout", "Faceted search", "Admin dashboard", "Order tracking"],
    image: ecommerce,
    href: "https://nova-commerce.vercel.app",
  },
  {
    title: "Pulse Analytics — SaaS Dashboard",
    body: "Real-time metrics platform with role-based access and websocket-driven charts.",
    tools: ["TypeScript", "Express", "Redis", "Recharts"],
    features: ["Live websockets", "Role-based access", "Scheduled reports", "CSV export"],
    image: analytics,
    href: "https://pulse-analytics.vercel.app",
  },
  {
    title: "Loop — Team Chat Application",
    body: "Realtime messaging app with presence, typing indicators and file sharing.",
    tools: ["Socket.io", "React", "MongoDB"],
    features: ["Presence & typing", "File sharing", "Push notifications", "Threaded replies"],
    image: chat,
    href: "https://loop-chat.vercel.app",
  },
  {
    title: "Orbit CRM — Sales Pipeline",
    body: "Drag-and-drop deal pipeline with automated follow-ups and email sync.",
    tools: ["Next.js", "Node", "PostgreSQL"],
    features: ["Kanban pipeline", "Email sync", "Automations", "Team reporting"],
    image: analytics,
    href: "https://orbit-crm.vercel.app",
  },
  {
    title: "Fleetly — Logistics Tracker",
    body: "Live vehicle tracking with route optimisation and driver performance insights.",
    tools: ["React", "Express", "MongoDB", "Maps API"],
    features: ["Live GPS", "Route optimiser", "Driver scores", "Geofencing"],
    image: ecommerce,
    href: "https://fleetly-app.vercel.app",
  },
  {
    title: "Learnly — Course Platform",
    body: "Video-first learning platform with quizzes, certificates and progress tracking.",
    tools: ["Next.js", "Node", "MongoDB", "Mux"],
    features: ["Video lessons", "Quizzes", "Certificates", "Progress tracking"],
    image: chat,
    href: "https://learnly-platform.vercel.app",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="My Portfolio"
        title="Selected"
        highlight="Projects"
        description="Products I designed, built and shipped end to end."
        align="left"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.title} delay={(index % 4) * 90}>
            <article className="surface-card group flex h-full flex-col overflow-hidden">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="relative block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-foreground/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-display text-lg font-bold text-balance transition-colors hover:text-primary sm:text-xl"
                  >
                    {project.title}
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open ${project.title} live site`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-accent)] text-primary-foreground transition-transform duration-300 hover:scale-110"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{project.body}</p>

                <div>
                  <p className="text-[11px] tracking-widest text-muted-foreground uppercase">Tools used</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] tracking-widest text-muted-foreground uppercase">Features</p>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {projects.length > 4 ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {showAll ? "Show less" : `View all projects (${projects.length})`}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
