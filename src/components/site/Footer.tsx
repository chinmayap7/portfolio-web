import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">

        {/* About */}
        <div>
          <p className="font-display text-2xl font-bold">
            Chinmaya<span className="text-primary">.</span>
          </p>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            B.Tech Computer Science & Engineering graduate and aspiring
            Full-Stack Developer passionate about building modern web
            applications using the MERN stack.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <p className="text-sm font-semibold">Navigate</p>

          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold">Get in touch</p>

          <div className="mt-4 space-y-3">

            {/* Email */}
            <a
              href="mailto:cpanigrahy869@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>cpanigrahy869@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+917853023536"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 7853023536</span>
            </a>

            {/* Location */}
            <p className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Hyderabad, India</span>
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row md:px-8">

          <p>
            © {new Date().getFullYear()} Chinmaya Panigrahy. All rights reserved.
          </p>

          <p>
            Built with React, Node.js, Express &amp; MongoDB.
          </p>

        </div>
      </div>
    </footer>
  );
}