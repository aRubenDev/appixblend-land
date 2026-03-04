"use client"

import { LegalLayout } from "@/components/legal-layout"
import { useI18n } from "@/lib/i18n"

export default function TermsPage() {
  const { locale } = useI18n()

  return (
    <LegalLayout>
      {locale === "es" ? <TermsES /> : <TermsEN />}
    </LegalLayout>
  )
}

function TermsES() {
  return (
    <>
      <header className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Legal</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          TÉRMINOS Y CONDICIONES
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {"U\u0301"}ltima actualizaci{"o\u0301"}n: 3 de marzo de 2026
        </p>
      </header>

      <div className="space-y-12">

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            1. Interpretaci{"o\u0301"}n
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Las palabras cuyas letras iniciales est{"a\u0301"}n en may{"u\u0301"}scula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendr{"a\u0301"}n el mismo significado independientemente de si aparecen en singular o en plural.
          </p>
        </section>
        
        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            2. Aceptaci{"o\u0301"}n de los T{"e\u0301"}rminos
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Al acceder y utilizar los servicios de APPIXBLEND, usted acepta estar sujeto a estos T{"e\u0301"}rminos y Condiciones. Si no est{"a\u0301"} de acuerdo con alguna parte de estos t{"e\u0301"}rminos, no podr{"a\u0301"} acceder al servicio. Estos t{"e\u0301"}rminos aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen nuestros servicios de automatizaci{"o\u0301"}n e inteligencia artificial.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            3. Descripci{"o\u0301"}n de los Servicios
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            APPIXBLEND proporciona servicios de automatizaci{"o\u0301"}n de procesos y agentes de inteligencia artificial, incluyendo pero no limitado a:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Dise{"n\u0303"}o e implementaci{"o\u0301"}n de flujos de trabajo automatizados
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Desarrollo de agentes de IA personalizados
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Integraci{"o\u0301"}n de sistemas y plataformas
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Procesamiento inteligente de documentos
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Consultor{"i\u0301"}a en automatizaci{"o\u0301"}n empresarial
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            4. Propiedad Intelectual
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Todo el contenido, c{"o\u0301"}digo fuente, dise{"n\u0303"}os, logotipos, marcas comerciales y dem{"a\u0301"}s material presentado en este sitio web es propiedad exclusiva de APPIXBLEND o de sus licenciantes. Queda prohibida su reproducci{"o\u0301"}n, distribuci{"o\u0301"}n o uso sin autorizaci{"o\u0301"}n previa por escrito. Los desarrollos personalizados creados para clientes se rigen por los acuerdos individuales de cada proyecto.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            5. Uso Aceptable
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Usted se compromete a utilizar nuestros servicios {"u\u0301"}nicamente para fines legales y de acuerdo con estos t{"e\u0301"}rminos. Queda prohibido el uso de nuestros agentes de IA para actividades ilegales, discriminatorias, difamatorias o que infrinjan derechos de terceros. Nos reservamos el derecho de suspender o cancelar el acceso a cualquier usuario que viole estas condiciones.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            6. Limitaci{"o\u0301"}n de Responsabilidad
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            APPIXBLEND no ser{"a\u0301"} responsable de da{"n\u0303"}os indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de nuestros servicios. Nuestros agentes de IA proporcionan recomendaciones y automatizaciones, pero las decisiones finales de negocio siguen siendo responsabilidad del cliente. Los resultados pueden variar seg{"u\u0301"}n la calidad de los datos y la configuraci{"o\u0301"}n del sistema.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            7. Modificaciones
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Nos reservamos el derecho de modificar estos t{"e\u0301"}rminos en cualquier momento. Los cambios entrar{"a\u0301"}n en vigor inmediatamente despu{"e\u0301"}s de su publicaci{"o\u0301"}n en este sitio web. El uso continuado de nuestros servicios despu{"e\u0301"}s de cualquier modificaci{"o\u0301"}n constituye la aceptaci{"o\u0301"}n de los nuevos t{"e\u0301"}rminos.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            8. Contacto
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Si tiene alguna pregunta sobre estos T{"e\u0301"}rminos y Condiciones, puede contactarnos:
            <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Por correo electr{"o\u0301"}nico: <a href="mailto: aruben.guerra@gmail.com" className="text-accent hover:underline"> aruben.guerra@gmail.com</a>
            </li>
            </ul>
          </p>
        </section>
      </div>
    </>
  )
}

function TermsEN() {
  return (
    <>
      <header className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Legal</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          TERMS & CONDITIONS
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Last updated: March 3, 2026
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-(--font-bebas) text-2xl tracking-tight mb-4 text-accent">
            1. Interpretation
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            2. Acceptance of Terms
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            By accessing and using APPIXBLEND services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service. These terms apply to all visitors, users, and others who access or use our automation and artificial intelligence services.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            3. Description of Services
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            APPIXBLEND provides process automation and AI agent services, including but not limited to:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Design and implementation of automated workflows
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Development of custom AI agents
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              System and platform integration
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Intelligent document processing
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Enterprise automation consulting
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            4. Intellectual Property
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            All content, source code, designs, logos, trademarks, and other material presented on this website is the exclusive property of APPIXBLEND or its licensors. Reproduction, distribution, or use without prior written authorization is prohibited. Custom developments created for clients are governed by individual project agreements.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            5. Acceptable Use
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            You agree to use our services only for lawful purposes and in accordance with these terms. The use of our AI agents for illegal, discriminatory, defamatory activities, or activities that infringe third-party rights is prohibited. We reserve the right to suspend or cancel access for any user who violates these conditions.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            6. Limitation of Liability
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            APPIXBLEND shall not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use our services. Our AI agents provide recommendations and automations, but final business decisions remain the responsibility of the client. Results may vary depending on data quality and system configuration.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            7. Modifications
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will take effect immediately upon publication on this website. Continued use of our services after any modification constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            8. Contact
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            If you have any questions about these Terms and Conditions, You can contact us:
            <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              By email: <a href="mailto: aruben.guerra@gmail.com" className="text-accent hover:underline"> aruben.guerra@gmail.com</a>
            </li>
            </ul>
          </p>
        </section>
      </div>
    </>
  )
}
