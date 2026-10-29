import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RevealOnScroll } from "@/components/reveal";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { QuoteBand } from "@/components/sections/quote";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { RecognitionSection } from "@/components/sections/recognition";
import { CertificationsSection } from "@/components/sections/certifications";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { navItems, siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "Electrical & Electronic Engineering Student, Researcher",
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
  sameAs: Object.values(profile.links),
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header items={navItems} name={profile.name} initials={profile.initials} />
      <main id="main">
        <Hero />
        <About />
        <QuoteBand />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <RecognitionSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <RevealOnScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
