import { ArrowUpRight, Github, Linkedin, Twitter, Quote } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";
import { Reveal } from "./Reveal";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const tags = [
  { label: "MongoDB", role: "Database" },
  { label: "Express + Node", role: "Backend" },
  { label: "React", role: "Frontend" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell relative grid grid-cols-[1.15fr_0.85fr] items-center gap-4 pt-6 pb-14 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

        {/* Intro */}
        <div className="col-start-1 row-start-1 flex min-w-0 flex-col items-start text-left lg:self-end">

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-medium text-muted-foreground sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-primary" />
              MERN Stack Developer
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-4 max-w-full font-display text-3xl leading-[1.05] font-bold sm:mt-6 sm:text-6xl lg:text-7xl">
              I'm{" "}
              <span className="text-gradient-accent whitespace-nowrap">
                Chinmaya Panigrahy
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-xs text-muted-foreground sm:mt-4 sm:text-base">
              B.Tech CSE graduate and aspiring MERN Stack Developer building
              responsive and user-friendly web applications.
            </p>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal
          delay={160}
          className="relative col-start-2 row-start-1 w-full self-center lg:row-span-2 lg:ml-auto lg:max-w-md"
        >
          <img
            src={portrait}
            alt="Chinmaya Panigrahy - MERN Stack Developer"
            width={1024}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="relative w-[120%] max-w-none -translate-x-2 rounded-t-[5rem] object-cover sm:rounded-t-[10rem]"
          />
        </Reveal>

        {/* Details */}
        <div className="col-span-2 col-start-1 row-start-2 flex flex-col items-start text-left lg:col-span-1 lg:self-start">

          <Reveal delay={200} className="mt-8 grid w-full gap-4 sm:grid-cols-2">

            <div className="surface-card px-5 py-4">
              <p className="font-display text-2xl font-bold text-primary">
                2 Internships
              </p>

              <p className="text-xs text-muted-foreground">
                MERN & Full Stack Development
              </p>
            </div>

            <div className="surface-card px-5 py-4">
              <Quote className="h-5 w-5 text-primary" />

              <p className="mt-2 text-sm text-muted-foreground">
                Passionate about learning, building projects and improving my
                development skills.
              </p>
            </div>

          </Reveal>

          <Reveal delay={260} className="mt-6 w-full">
            <ul className="flex flex-wrap gap-2">

              {tags.map((tag) => (
                <li
                  key={tag.label}
                  className="flex items-center gap-2"
                >
                  <span className="text-xs text-muted-foreground">
                    {tag.role}
                  </span>

                  <span className="rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {tag.label}
                  </span>
                </li>
              ))}

            </ul>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex flex-wrap gap-3">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              View Projects

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>

          </Reveal>

        </div>
      </div>
    </section>
  );
}