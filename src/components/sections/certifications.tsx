import { Section } from "../section";
import { CertificateCard } from "../certificate-card";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  if (!certifications.length) return null;
  const sorted = [...certifications].sort((a, b) => (b.issuedISO ?? "").localeCompare(a.issuedISO ?? ""));
  return (
    <Section
      id="certifications"
      index="06"
      eyebrow="Certifications"
      title="Certifications & coursework."
      intro="Original certificates, viewable and downloadable as issued."
    >
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {sorted.map((cert) => (
          <li key={cert.pdf} data-reveal>
            <CertificateCard cert={cert} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
