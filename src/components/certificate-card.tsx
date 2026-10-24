"use client";

import { Download, ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import type { Certification } from "@/data/types";

export function CertificateCard({ cert }: { cert: Certification }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `cert-${cert.pdf.replace(/\W+/g, "-")}`;
  const portrait = cert.thumbnail.height > cert.thumbnail.width;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong">
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={`relative flex aspect-[4/3] w-full justify-center overflow-hidden border-b border-line bg-bg-elevated px-[7%] ${
          portrait ? "items-start pt-6" : "items-center"
        }`}
        aria-label={`Preview certificate: ${cert.title}`}
      >
        <Image
          src={cert.thumbnail.src}
          alt=""
          width={cert.thumbnail.width}
          height={cert.thumbnail.height}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          loading="lazy"
          className="h-auto w-full rounded-sm shadow-[0_8px_30px_-12px_rgb(0_0_0/0.35)] transition-transform duration-500 group-hover:-translate-y-1"
        />
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="size-3.5" aria-hidden="true" /> Preview
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] tracking-[0.14em] text-ink-subtle uppercase">
          {cert.issued ? <time dateTime={cert.issuedISO}>{cert.issued}</time> : "Certificate"}
        </p>
        <h3 id={titleId} className="mt-2 text-lg leading-snug font-medium tracking-tight text-pretty">
          {cert.title}
        </h3>
        <p className="mt-1 text-sm text-ink-muted">
          {cert.issuer}
          {cert.via ? <span className="text-ink-subtle"> · {cert.via}</span> : null}
        </p>
        {cert.description ? <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{cert.description}</p> : null}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-xs font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
            aria-describedby={titleId}
          >
            <ExternalLink className="size-3.5" aria-hidden="true" /> View certificate
          </a>
          <a
            href={cert.pdf}
            download
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-xs font-medium text-ink transition-colors hover:border-ink"
            aria-describedby={titleId}
          >
            <Download className="size-3.5" aria-hidden="true" /> Download
          </a>
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby={`${titleId}-dlg`}
        className="m-auto max-h-[92dvh] w-[min(960px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink"
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="flex max-h-[92dvh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line p-4 sm:p-5">
            <div className="min-w-0">
              <h3 id={`${titleId}-dlg`} className="text-base font-medium text-pretty sm:text-lg">
                {cert.title}
              </h3>
              <p className="text-sm text-ink-muted">
                {cert.issuer}
                {cert.issued ? ` · ${cert.issued}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-bg-elevated"
              aria-label="Close preview"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto bg-bg-elevated p-3 sm:p-6">
            <Image
              src={cert.thumbnail.src}
              alt={`${cert.title} certificate issued to Md Obayed Reza Hridoy by ${cert.issuer}`}
              width={cert.thumbnail.width}
              height={cert.thumbnail.height}
              sizes="(min-width: 1000px) 900px, 95vw"
              className="mx-auto h-auto w-full max-w-[900px] rounded-sm shadow-lg"
            />
            {cert.pages > 1 ? (
              <p className="mt-3 text-center text-xs text-ink-subtle">
                Page 1 of {cert.pages}. Open the PDF to see the full document, including the transcript.
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line p-4 sm:p-5">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-bg hover:bg-accent hover:text-accent-ink"
            >
              <ExternalLink className="size-4" aria-hidden="true" /> Open original PDF
            </a>
            <a
              href={cert.pdf}
              download
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-5 text-sm font-medium hover:border-ink"
            >
              <Download className="size-4" aria-hidden="true" /> Download
            </a>
            {cert.verifyUrl ? (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm text-ink-muted hover:text-ink"
              >
                Verify on issuer site
              </a>
            ) : null}
          </div>
        </div>
      </dialog>
    </article>
  );
}
