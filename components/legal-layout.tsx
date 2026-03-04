"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { BitmapChevron } from "@/components/bitmap-chevron"
import type { ReactNode } from "react"

export function LegalLayout({ children }: { children: ReactNode }) {
  const { t } = useI18n()

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 px-6 md:px-20 lg:px-32 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 mb-16"
        >
          <BitmapChevron className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>{t("legal.back")}</span>
        </Link>

        {/* Content */}
        <article className="max-w-3xl">
          {children}
        </article>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/20 max-w-3xl">
          <div className="flex items-center gap-6 mb-4">
            <Link
              href="/terms"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {t("colophon.terms")}
            </Link>
            <span className="w-px h-3 bg-border/40" />
            <Link
              href="/privacy"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {t("colophon.privacy")}
            </Link>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            {t("colophon.copyright")}
          </p>
        </div>
      </div>
    </div>
  )
}
