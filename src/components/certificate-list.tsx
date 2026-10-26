"use client";

import { ChevronDown, Download, ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Certification } from "@/data/types";

/** Rows shown before "Show all". Keeps the section short as the list grows. */
const INITIAL = 6;

export function CertificateList({ certs }: { certs: Certification[] }) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<Certification | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = expanded ? certs : certs.slice(0, INITIAL);
  const years = Array.from(new Set(visible.map((c) => c.issuedISO?.slice(0, 4) ?? "Other")));

  const open = (cert: Certification) => {
    setActive(cert);
    dialog.current?.showModal();
  };

  return (
    <div>
      <p className="mb-8 text-sm text-ink-subtle">
        {certs.length} certificates · newest first
      </p>

      <ol className="divide-y divide-line-strong/60 border-y border-line-strong/60">
        {years.map((year) => (
          <li key={year} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10">
            <p className="text-4xl font-light tracking-tight sm:text-5xl">{year}</p>
            <ul className="divide-y divide-line">
              {visible
                .filter((c) => (c.issuedISO?.slice(0, 4) ?? "Other") === year)
                .map((cert) => (
                  <li key={cert.pdf} className="grid grid-cols-[5rem_1fr] items-start gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[6.5rem_1fr_auto] sm:items-center sm:gap-6">
                    <button
                      type="button"
                      onClick={() => open(cert)}
                      aria-label={`Preview certificate: ${cert.title}`}
                      className="group relative block overflow-hidden border border-line bg-surface"
                    >
                      <Image
                        src={cert.thumbnail.src}
                        alt=""
                        width={cert.thumbnail.width}
                        height={cert.thumbnail.height}
                        sizes="104px"
                        loading="lazy"
                        className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-bg opacity-0 transition group-hover:bg-ink/50 group-hover:opacity-100 group-focus-visible:bg-ink/50 group-focus-visible:opacity-100">
                        <Maximize2 className="size-4" aria-hidden="true" />
                      </span>
                    </button>
                    <div className="min-w-0">
                      <h3 className="text-[15px] leading-snug font-semibold text-pretty sm:text-base">{cert.title}</h3>
                      <p className="mt-0.5 text-sm text-ink-muted">
                        {cert.issuer}
                        {cert.via ? <span className="text-ink-subtle"> · {cert.via}</span> : null}
                      </p>
                      {cert.issued ? (
                        <p className="mt-0.5 text-xs text-ink-subtle">
                          <time dateTime={cert.issuedISO}>{cert.issued}</time>
                        </p>
                      ) : null}
                    </div>
                    <div className="col-span-2 flex flex-wrap gap-2 sm:col-span-1 sm:justify-end">
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex min-h-10 items-center gap-1.5 bg-ink px-3.5 text-xs font-medium text-bg hover:opacity-80"
                      >
                        <ExternalLink className="size-3.5" aria-hidden="true" /> View
                        <span className="sr-only"> {cert.title}</span>
                      </a>
                      <a
                        href={cert.pdf}
                        download
                        className="inline-flex min-h-10 items-center gap-1.5 border border-line-strong px-3.5 text-xs font-medium hover:border-ink"
                      >
                        <Download className="size-3.5" aria-hidden="true" /> Download
                        <span className="sr-only"> {cert.title}</span>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>

      {certs.length > INITIAL ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-8 inline-flex min-h-11 items-center gap-2 border border-ink px-5 text-sm font-medium hover:bg-ink hover:text-bg"
        >
          {expanded ? "Show fewer" : `Show all ${certs.length} certificates`}
          <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      ) : null}

      <dialog
        ref={dialog}
        aria-labelledby="cert-dialog-title"
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto max-h-[92dvh] w-[min(960px,calc(100vw-1.5rem))] overflow-hidden border border-line bg-surface p-0 text-ink"
      >
        {active ? (
          <div className="flex max-h-[92dvh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-line p-4 sm:p-5">
              <div className="min-w-0">
                <h3 id="cert-dialog-title" className="text-base font-medium text-pretty sm:text-lg">
                  {active.title}
                </h3>
                <p className="text-sm text-ink-muted">
                  {active.issuer}
                  {active.issued ? ` · ${active.issued}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="inline-flex size-11 shrink-0 items-center justify-center hover:bg-bg-elevated"
                aria-label="Close preview"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-bg-elevated p-3 sm:p-6">
              <Image
                src={active.thumbnail.src}
                alt={`${active.title} certificate issued to Md Obayed Reza Hridoy by ${active.issuer}`}
                width={active.thumbnail.width}
                height={active.thumbnail.height}
                sizes="(min-width: 1000px) 900px, 95vw"
                className="mx-auto h-auto w-full max-w-[900px] shadow-lg"
              />
              {active.pages > 1 ? (
                <p className="mt-3 text-center text-xs text-ink-subtle">
                  Page 1 of {active.pages}. Open the PDF to see the full document, including the transcript.
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-line p-4 sm:p-5">
              <a
                href={active.pdf}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center gap-1.5 bg-ink px-5 text-sm font-medium text-bg hover:opacity-80"
              >
                <ExternalLink className="size-4" aria-hidden="true" /> Open original PDF
              </a>
              <a
                href={active.pdf}
                download
                className="inline-flex min-h-11 items-center gap-1.5 border border-line-strong px-5 text-sm font-medium hover:border-ink"
              >
                <Download className="size-4" aria-hidden="true" /> Download
              </a>
              {active.verifyUrl ? (
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 px-4 text-sm text-ink-muted hover:text-ink"
                >
                  Verify on issuer site
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
