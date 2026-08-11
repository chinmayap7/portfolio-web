import { useState, type FormEvent } from "react";
import {
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionHeading } from "./Reveal";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255),

  subject: z
    .string()
    .trim()
    .min(3, "Subject is too short")
    .max(150),

  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more (10+ characters)")
    .max(2000),
});

type Fields = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "cpanigrahy869@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=cpanigrahy869@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+917853023536",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
  },
];

const empty: Fields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);

  const [errors, setErrors] = useState<
    Partial<Record<keyof Fields, string>>
  >({});

  const [status, setStatus] = useState<Status>("idle");

  const [feedback, setFeedback] = useState("");

  const update = (key: keyof Fields, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: undefined,
    }));
  };

const onSubmit = async (event: FormEvent) => {
  event.preventDefault();

  const parsed = schema.safeParse(values);

  if (!parsed.success) {
    const next: Partial<Record<keyof Fields, string>> = {};

    parsed.error.issues.forEach((issue) => {
      const key = issue.path[0] as keyof Fields;

      if (!next[key]) {
        next[key] = issue.message;
      }
    });

    setErrors(next);
    setStatus("idle");
    return;
  }

  setStatus("loading");

  // 1. Save message to Supabase
  const { error: dbError } = await supabase
    .from("contact_messages")
    .insert(parsed.data);

  if (dbError) {
    console.error("Database error:", dbError);

    setStatus("error");
    setFeedback("Unable to save your message. Please try again.");

    return;
  }

  // 2. Send email notification
  const { data: emailData, error: emailError } =
    await supabase.functions.invoke("send-contact-email", {
      body: {
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
      },
    });

  console.log("Email response:", emailData);
  console.error("Email error:", emailError);

  if (emailError) {
    setStatus("error");
    setFeedback(
      "Message saved successfully, but email notification failed.",
    );

    return;
  }

  // 3. Success
  setStatus("success");
  setFeedback(
    "Thanks for reaching out — I'll get back to you soon.",
  );

  setValues(empty);
};

  const field =
    "w-full rounded-2xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <SectionHeading
  eyebrow="Contact Me"
  title="Let's Connect"
  highlight="& Work Together"
  description={
  <span className="font-bold">
    Have a project, job opportunity, or any questions? Feel free to reach out.
    I'd be happy to discuss how I can help.
  </span>
}
/>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

        {/* Contact Details */}
        <Reveal className="flex flex-col gap-4">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="surface-card flex items-center gap-4 p-5"
            >
              {/* Icon */}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <detail.icon className="h-5 w-5" />
              </span>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {detail.label}
                </p>

                <p className="mt-1 truncate text-sm font-semibold">
                  {detail.value}
                </p>
              </div>

              {/* Gmail Icon */}
              {detail.href ? (
                <a
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Send email to ${detail.value}`}
                  title="Send Email"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface-2 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ))}

          {/* Availability */}

        </Reveal>

        {/* Contact Form */}
        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="surface-card p-6 sm:p-8"
          >

            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-muted-foreground"
                >
                  Your name
                </label>

                <input
                  id="name"
                  className={field}
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />

                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-muted-foreground"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  className={field}
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />

                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Subject */}
            <div className="mt-4">
              <label
                htmlFor="subject"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Subject
              </label>

              <input
                id="subject"
                className={field}
                value={values.subject}
                onChange={(e) => update("subject", e.target.value)}
                aria-invalid={Boolean(errors.subject)}
              />

              {errors.subject ? (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            {/* Message */}
            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                className={`${field} resize-none`}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />

              {errors.message ? (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {/* Send Message */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            {/* Success */}
            {status === "success" ? (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {feedback}
              </p>
            ) : null}

            {/* Error */}
            {status === "error" ? (
              <p
                role="alert"
                className="mt-4 flex items-center gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {feedback}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}