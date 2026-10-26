import { Section } from "../section";
import { CertificateList } from "../certificate-list";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  if (!certifications.length) return null;
  const sorted = [...certifications].sort((a, b) => (b.issuedISO ?? "").localeCompare(a.issuedISO ?? ""));
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Certifications & coursework."
      intro="Original certificates, grouped by year. Preview any of them, or open the PDF as issued."
    >
      <CertificateList certs={sorted} />
    </Section>
  );
}
