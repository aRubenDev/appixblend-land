"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "es" | "en"

type Translations = {
  [key: string]: {
    es: string
    en: string
  }
}

const translations: Translations = {
  // Nav
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.updates": { es: "Novedades", en: "Updates" },
  "nav.solutions": { es: "Soluciones", en: "Solutions" },
  "nav.principles": { es: "Principios", en: "Principles" },
  "nav.about": { es: "Nosotros", en: "About" },

  // Hero
  "hero.label": { es: "AUTOMATIZAR", en: "AUTOMATE" },
  "hero.subtitle": { es: "Automatizaci\u00f3n de Procesos & Agentes IA", en: "Process Automation & AI Agents" },
  "hero.description": {
    es: "Construimos agentes inteligentes que automatizan tus flujos de trabajo de principio a fin. Desde tareas repetitivas hasta toma de decisiones complejas, nuestros sistemas de IA trabajan para que t\u00fa no tengas que hacerlo.",
    en: "We build intelligent agents that automate your workflows end-to-end. From repetitive tasks to complex decision-making, our AI systems work so you don\u2019t have to.",
  },
  "hero.cta": { es: "Ver Soluciones", en: "See Our Solutions" },
  "hero.cta2": { es: "\u00daltimas Novedades", en: "Latest Updates" },
  "hero.tag": { es: "Automatizaci\u00f3n con IA", en: "AI-Powered Automation" },

  // Signals
  "signals.label": { es: "01 / Novedades", en: "01 / Updates" },
  "signals.title": { es: "\u00daLTIMOS LANZAMIENTOS", en: "LATEST LAUNCHES" },
  "signals.0.title": { es: "Agent Mesh", en: "Agent Mesh" },
  "signals.0.note": {
    es: "Framework de orquestaci\u00f3n multi-agente para gesti\u00f3n aut\u00f3noma de procesos empresariales.",
    en: "Multi-agent orchestration framework for autonomous business process management.",
  },
  "signals.1.title": { es: "FlowForge", en: "FlowForge" },
  "signals.1.note": {
    es: "Constructor de workflows no-code impulsado por LLMs para pipelines de automatizaci\u00f3n empresarial.",
    en: "No-code workflow builder powered by LLMs for enterprise automation pipelines.",
  },
  "signals.2.title": { es: "DataPulse", en: "DataPulse" },
  "signals.2.note": {
    es: "Agentes de extracci\u00f3n y transformaci\u00f3n de datos en tiempo real para documentos no estructurados.",
    en: "Real-time data extraction and transformation agents for unstructured documents.",
  },
  "signals.3.title": { es: "AutoResolve", en: "AutoResolve" },
  "signals.3.note": {
    es: "Sistema de soporte al cliente impulsado por IA con enrutamiento y resoluci\u00f3n inteligente de tickets.",
    en: "AI-driven customer support system with intelligent ticket routing and resolution.",
  },
  "signals.4.title": { es: "SyncBridge", en: "SyncBridge" },
  "signals.4.note": {
    es: "Agentes de integraci\u00f3n multiplataforma que conectan y sincronizan toda tu infraestructura tecnol\u00f3gica.",
    en: "Cross-platform integration agents that connect and sync your entire tech stack.",
  },

  // Work
  "work.label": { es: "02 / Soluciones", en: "02 / Solutions" },
  "work.title": { es: "NUESTRAS SOLUCIONES", en: "OUR SOLUTIONS" },
  "work.subtitle": {
    es: "Productos impulsados por IA para automatizaci\u00f3n de workflows, agentes inteligentes y optimizaci\u00f3n de procesos empresariales.",
    en: "AI-powered products for workflow automation, intelligent agents, and enterprise process optimization.",
  },
  "work.0.title": { es: "Workflow AI", en: "Workflow AI" },
  "work.0.medium": { es: "Automatizaci\u00f3n de Procesos", en: "Process Automation" },
  "work.0.description": {
    es: "Automatizaci\u00f3n de flujos de trabajo de principio a fin usando agentes inteligentes que aprenden de tu equipo y optimizan procesos en tiempo real.",
    en: "End-to-end workflow automation using intelligent agents that learn from your team and optimize processes in real-time.",
  },
  "work.1.title": { es: "Agent Hub", en: "Agent Hub" },
  "work.1.medium": { es: "Sistema Multi-Agente", en: "Multi-Agent System" },
  "work.1.description": {
    es: "Plataforma centralizada de orquestaci\u00f3n para desplegar y gestionar agentes de IA en toda tu organizaci\u00f3n.",
    en: "Centralized orchestration platform for deploying and managing AI agents across your organization.",
  },
  "work.2.title": { es: "DocMind", en: "DocMind" },
  "work.2.medium": { es: "Inteligencia Documental", en: "Document Intelligence" },
  "work.2.description": {
    es: "Procesamiento de documentos impulsado por IA que extrae, clasifica y enruta informaci\u00f3n autom\u00e1ticamente.",
    en: "AI-powered document processing that extracts, classifies, and routes information automatically.",
  },
  "work.3.title": { es: "ChatOps", en: "ChatOps" },
  "work.3.medium": { es: "IA Conversacional", en: "Conversational AI" },
  "work.3.description": {
    es: "Asistentes de IA personalizados integrados en Slack, Teams y tus herramientas internas.",
    en: "Custom AI assistants integrated into Slack, Teams, and your internal tools.",
  },
  "work.4.title": { es: "PipelineX", en: "PipelineX" },
  "work.4.medium": { es: "Automatizaci\u00f3n de Datos", en: "Data Automation" },
  "work.4.description": {
    es: "Pipelines de datos automatizados con ETL impulsado por IA, detecci\u00f3n de anomal\u00edas y dashboards de reporting en tiempo real.",
    en: "Automated data pipelines with AI-driven ETL, anomaly detection, and real-time reporting dashboards.",
  },
  "work.5.title": { es: "GuardRail", en: "GuardRail" },
  "work.5.medium": { es: "Monitoreo de IA", en: "AI Monitoring" },
  "work.5.description": {
    es: "Capa de observabilidad y seguridad para todos tus agentes de IA y sistemas automatizados.",
    en: "Observability and safety layer for all your AI agents and automated systems.",
  },

  // Principles
  "principles.label": { es: "03 / Principios", en: "03 / Principles" },
  "principles.title": { es: "NUESTRO ENFOQUE", en: "OUR APPROACH" },
  "principles.0.title1": { es: "AUTOMATIZA", en: "AUTOMATE" },
  "principles.0.title2": { es: " TODO", en: " EVERYTHING" },
  "principles.0.description": {
    es: "Si un proceso puede automatizarse, debe automatizarse. Eliminamos el trabajo repetitivo para que tu equipo se enfoque en lo que importa.",
    en: "If a process can be automated, it should be. We eliminate repetitive work so your team focuses on what matters.",
  },
  "principles.1.title1": { es: "AGENTES", en: "AGENTS" },
  "principles.1.title2": { es: " QUE APRENDEN", en: " THAT LEARN" },
  "principles.1.description": {
    es: "Nuestros agentes de IA se adaptan a la l\u00f3gica de tu negocio, mejorando con cada interacci\u00f3n y decisi\u00f3n.",
    en: "Our AI agents adapt to your business logic, improving with every interaction and decision.",
  },
  "principles.2.title1": { es: "HUMANO ", en: "HUMAN " },
  "principles.2.title2": { es: "EN EL CENTRO", en: "IN THE LOOP" },
  "principles.2.description": {
    es: "La IA se encarga del trabajo pesado mientras los humanos mantienen el control sobre las decisiones cr\u00edticas. Confianza a trav\u00e9s de la transparencia.",
    en: "AI handles the heavy lifting while humans retain control over critical decisions. Trust through transparency.",
  },
  "principles.3.title1": { es: "ESCALA ", en: "SCALE " },
  "principles.3.title2": { es: "SIN L\u00cdMITES", en: "WITHOUT LIMITS" },
  "principles.3.description": {
    es: "De 10 tareas a 10 millones. Nuestra infraestructura de automatizaci\u00f3n crece con tu negocio, no en su contra.",
    en: "From 10 tasks to 10 million. Our automation infrastructure grows with your business, not against it.",
  },

  // Colophon
  "colophon.label": { es: "04 / Nosotros", en: "04 / About" },
  "colophon.title": { es: "SOBRE NOSOTROS", en: "ABOUT US" },
  "colophon.services": { es: "Servicios", en: "Services" },
  "colophon.services.1": { es: "Agentes IA", en: "AI Agents" },
  "colophon.services.2": { es: "Automatizaci\u00f3n de Procesos", en: "Process Automation" },
  "colophon.services.3": { es: "Dise\u00f1o de Workflows", en: "Workflow Design" },
  "colophon.stack": { es: "Stack Tecnol\u00f3gico", en: "Tech Stack" },
  "colophon.industries": { es: "Industrias", en: "Industries" },
  "colophon.industries.1": { es: "SaaS", en: "SaaS" },
  "colophon.industries.2": { es: "Fintech", en: "Fintech" },
  "colophon.industries.3": { es: "E-commerce", en: "E-commerce" },
  "colophon.industries.4": { es: "Salud", en: "Healthcare" },
  "colophon.location": { es: "Ubicaci\u00f3n", en: "Location" },
  "colophon.location.1": { es: "Remote-first", en: "Remote-first" },
  "colophon.location.2": { es: "Global", en: "Global" },
  "colophon.contact": { es: "Contacto", en: "Contact" },
  "colophon.year": { es: "A\u00f1o", en: "Year" },
  "colophon.year.2": { es: "En curso", en: "Ongoing" },
  "colophon.copyright": { es: "\u00a9 2025 APPIXBLEND. Todos los derechos reservados.", en: "\u00a9 2025 APPIXBLEND. All rights reserved." },
  "colophon.tagline": { es: "Automatizando el futuro. Un agente a la vez.", en: "Automating the future. One agent at a time." },
  "colophon.terms": { es: "T\u00e9rminos y Condiciones", en: "Terms & Conditions" },
  "colophon.privacy": { es: "Pol\u00edtica de Privacidad", en: "Privacy Policy" },

  // Legal pages
  "legal.back": { es: "Volver al inicio", en: "Back to home" },
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: "es",
  setLocale: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const t = useCallback(
    (key: string) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[locale] || key
    },
    [locale],
  )

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
