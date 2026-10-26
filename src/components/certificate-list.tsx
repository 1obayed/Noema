"use client";

import { ChevronLeft, ChevronRight, Download, ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Certification } from "@/data/types";

export function CertificateList({ certs }: { certs: Certification[] }) {
  const [active, setActive] = useState<Certification | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const open = (cert: Certification) => {
    setActive(cert);
    dialog.current?.showModal();
  };

  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 24), behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    setIndex(Math.round(el.scrollLeft / (card.getBoundingClientRect().width + 24)));
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-subtle tabular-nums" aria-live="polite">
          <span className="font-medium text-ink">{String(Math.min(index + 1, certs.length)).padStart(2, "0")}</span> /{" "}
          {String(certs.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous certificates"
            disabled={index === 0}
            className="inline-flex size-11 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-bg disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next certificates"
            className="inline-flex size-11 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-bg"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Horizontal shelf: scales to any number of certificates without growing the page. */}
      <ul
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Certificates, scroll horizontally"
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {certs.map((cert) => (
          <li key={cert.pdf} className="relative w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
            <article className="group flex h-full flex-col">
              <button
                type="button"
                onClick={() => open(cert)}
                aria-label={`Preview certificate: ${cert.title}`}
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-band p-5"
              >
                <Image
                  src={cert.thumbnail.src}
                  alt=""
                  width={cert.thumbnail.width}
                  height={cert.thumbnail.height}
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 80vw"
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain shadow-[0_10px_30px_-14px_rgb(0_0_0/0.45)] transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] font-medium text-bg opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  <Maximize2 className="size-3.5" aria-hidden="true" /> Preview
                </span>
              </button>
              <div className="flex flex-1 flex-col border-x border-b border-line-strong/60 p-5">
                <p className="text-[11px] font-medium tracking-[0.18em] text-ink-subtle uppercase">
                  {cert.issuer}
                  {cert.issued ? (
                    <>
                      {" · "}
                      <time dateTime={cert.issuedISO}>{cert.issued}</time>
                    </>
                  ) : null}
                </p>
                <h3 className="mt-2 font-display text-xl leading-snug text-pretty">{cert.title}</h3>
                <div className="mt-auto flex gap-4 pt-5 text-sm font-medium">
                  <a href={cert.pdf} target="_blank" rel="noopener" className="inline-flex min-h-10 items-center gap-1.5 underline-offset-4 hover:underline">
                    <ExternalLink className="size-3.5" aria-hidden="true" /> View
                    <span className="sr-only"> {cert.title}</span>
                  </a>
                  <a href={cert.pdf} download className="inline-flex min-h-10 items-center gap-1.5 text-ink-muted underline-offset-4 hover:text-ink hover:underline">
                    <Download className="size-3.5" aria-hidden="true" /> Download
                    <span className="sr-only"> {cert.title}</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

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
