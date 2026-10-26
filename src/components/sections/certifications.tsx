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
      title="Certificates."
      intro="Newest first. Tap a certificate to preview it, or open the original PDF."
    >
      <CertificateList certs={sorted} />
    </Section>
  );
}
