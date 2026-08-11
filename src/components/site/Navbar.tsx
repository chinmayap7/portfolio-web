import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import cpLogo from "@/assets/cp-logo.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
      },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        className={cn(
          "mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-3 rounded-full border border-border px-3 py-2.5 transition-all duration-500 sm:px-4",
          scrolled
            ? "bg-surface/85 shadow-[var(--shadow-card)] backdrop-blur-xl"
            : "bg-surface/50 backdrop-blur-md",
        )}
      >
        {/* Logo + Name */}
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2"
        >
          <img
            src={cpLogo}
            alt="Chinmaya Panigrahy Logo"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />

          {/* <span className="whitespace-nowrap font-display text-base font-bold">
            Chinmaya..
          </span> */}
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-2">
          <ul className="hidden items-center justify-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300",
                    active === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Button */}
          <ThemeToggle />

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-surface/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open
            ? "max-h-[32rem] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  active === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile Resume */}
          <li>
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-accent)] px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}