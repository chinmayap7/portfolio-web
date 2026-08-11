import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Tools } from "@/components/site/Tools";
import { Journey } from "@/components/site/Journey";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

const title = "Chinmaya Panigrahy — MERN Stack Developer Portfolio";

const description =
  "Portfolio of Chinmaya Panigrahy, a MERN stack developer building fast, scalable React, Node.js and MongoDB products. See projects, experience and get in touch.";

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },

      { name: "twitter:card", content: "summary_large_image" },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Chinmaya Panigrahy",
          jobTitle: "MERN Stack Developer",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressCountry: "IN",
          },
          email: "cpanigrahy869@gmail.com",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}