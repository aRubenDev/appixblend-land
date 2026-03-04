"use client"

import { useRef, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ColophonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.from(columns, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t("colophon.label")}</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">{t("colophon.title")}</h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
        {/* Services */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.services")}</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">{t("colophon.services.1")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.services.2")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.services.3")}</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.stack")}</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">LangChain</li>
            <li className="font-mono text-xs text-foreground/80">OpenAI / Claude</li>
            <li className="font-mono text-xs text-foreground/80">Next.js</li>
            <li className="font-mono text-xs text-foreground/80">Python</li>
          </ul>
        </div>

        {/* Industries */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.industries")}</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">{t("colophon.industries.1")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.industries.2")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.industries.3")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.industries.4")}</li>
          </ul>
        </div>

        {/* Location */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.location")}</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">{t("colophon.location.1")}</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.location.2")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.contact")}</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hello@appixblend.com"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Twitter/X
              </a>
            </li>
          </ul>
        </div>

        {/* Year */}
        <div className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{t("colophon.year")}</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">2025</li>
            <li className="font-mono text-xs text-foreground/80">{t("colophon.year.2")}</li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col gap-6"
      >
        {/* Legal links */}
        <div className="flex items-center gap-6">
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

        {/* Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            {t("colophon.copyright")}
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">{t("colophon.tagline")}</p>
        </div>
      </div>
    </section>
  )
}
