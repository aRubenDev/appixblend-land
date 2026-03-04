"use client"

import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center border border-border/60 bg-card/80 backdrop-blur-md overflow-hidden">
      <button
        onClick={() => setLocale("es")}
        className={cn(
          "relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
          locale === "es"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-label="Cambiar a espa\u00f1ol"
      >
        ES
      </button>
      <div className="w-px h-4 bg-border/40" />
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
          locale === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
