"use client"

import { LegalLayout } from "@/components/legal-layout"
import { useI18n } from "@/lib/i18n"

export default function PrivacyPage() {
  const { locale } = useI18n()

  return (
    <LegalLayout>
      {locale === "es" ? <PrivacyES /> : <PrivacyEN />}
    </LegalLayout>
  )
}

function PrivacyES() {
  return (
    <>
      <header className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Legal</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          POL{"I\u0301"}TICA DE PRIVACIDAD
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {"U\u0301"}ltima actualizaci{"o\u0301"}n: 1 de marzo de 2026
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            1. Informaci{"o\u0301"}n que Recopilamos
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            En APPIXBLEND, recopilamos informaci{"o\u0301"}n para proporcionar y mejorar nuestros servicios de automatizaci{"o\u0301"}n e inteligencia artificial:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Datos de contacto:</strong> nombre, correo electr{"o\u0301"}nico, empresa y tel{"e\u0301"}fono cuando nos contacta o solicita nuestros servicios.
              </div>
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Datos de uso:</strong> informaci{"o\u0301"}n sobre c{"o\u0301"}mo interact{"u\u0301"}a con nuestro sitio web y servicios.
              </div>
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Datos de proyecto:</strong> informaci{"o\u0301"}n proporcionada para la configuraci{"o\u0301"}n de agentes de IA y flujos de trabajo automatizados.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            2. C{"o\u0301"}mo Utilizamos su Informaci{"o\u0301"}n
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            Utilizamos la informaci{"o\u0301"}n recopilada para:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Proporcionar, mantener y mejorar nuestros servicios de automatizaci{"o\u0301"}n
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Entrenar y optimizar agentes de IA espec{"i\u0301"}ficos para su organizaci{"o\u0301"}n
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Comunicarnos con usted sobre actualizaciones y nuevas funcionalidades
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Cumplir con obligaciones legales y regulatorias
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            3. Seguridad de los Datos
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Implementamos medidas de seguridad t{"e\u0301"}cnicas y organizativas para proteger su informaci{"o\u0301"}n personal. Esto incluye cifrado de datos en tr{"a\u0301"}nsito y en reposo, controles de acceso estrictos y auditor{"i\u0301"}as de seguridad regulares. Nuestros agentes de IA procesan datos en entornos seguros y aislados, sin compartir informaci{"o\u0301"}n entre clientes.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            4. Inteligencia Artificial y Datos
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Los datos procesados por nuestros agentes de IA se utilizan exclusivamente para el prop{"o\u0301"}sito acordado con cada cliente. No utilizamos datos de un cliente para entrenar modelos que beneficien a otros clientes. Los modelos de IA se ejecutan en infraestructura dedicada y los datos se eliminan seg{"u\u0301"}n las pol{"i\u0301"}ticas de retenci{"o\u0301"}n acordadas en cada contrato.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            5. Compartir Informaci{"o\u0301"}n
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            No vendemos ni compartimos su informaci{"o\u0301"}n personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios (proveedores de infraestructura cloud), cuando sea requerido por ley, o cuando usted nos haya dado su consentimiento expl{"i\u0301"}cito.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            6. Sus Derechos
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Usted tiene derecho a acceder, rectificar, eliminar y portar sus datos personales. Tambi{"e\u0301"}n puede oponerse al procesamiento de sus datos o solicitar la limitaci{"o\u0301"}n del mismo. Para ejercer estos derechos, contacte con nosotros en{" "}
            <a href="mailto:aruben.guerra@gmail.com" className="text-accent hover:underline">
              aruben.guerra@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            7. Cookies
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Utilizamos cookies esenciales para el funcionamiento del sitio web y cookies anal{"i\u0301"}ticas para comprender c{"o\u0301"}mo los usuarios interact{"u\u0301"}an con nuestro sitio. Puede gestionar sus preferencias de cookies en cualquier momento a trav{"e\u0301"}s de la configuraci{"o\u0301"}n de su navegador.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            8. Contacto
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Para cualquier pregunta sobre esta pol{"i\u0301"}tica de privacidad, puede contactarnos en{" "}
          </p>
            <ul className="space-y-2 ml-4">
              <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
                Por correo electr{"o\u0301"}nico: <a href="mailto:aruben.guerra@gmail.com" className="text-accent hover:underline">
                  aruben.guerra@gmail.com
                </a>
              </li>
            </ul>
        </section>
      </div>
    </>
  )
}

function PrivacyEN() {
  return (
    <>
      <header className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Legal</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          PRIVACY POLICY
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Last updated: March 3, 2026
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            1. Information We Collect
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            At APPIXBLEND, we collect information to provide and improve our automation and AI services:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Contact data:</strong> name, email, company, and phone when you contact us or request our services.
              </div>
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Usage data:</strong> information about how you interact with our website and services.
              </div>
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground/80">Project data:</strong> information provided for the configuration of AI agents and automated workflows.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            2. How We Use Your Information
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
            We use the collected information to:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Provide, maintain, and improve our automation services
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Train and optimize AI agents specific to your organization
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Communicate with you about updates and new features
            </li>
            <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
              Comply with legal and regulatory obligations
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            3. Data Security
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We implement technical and organizational security measures to protect your personal information. This includes encryption of data in transit and at rest, strict access controls, and regular security audits. Our AI agents process data in secure, isolated environments without sharing information between clients.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            4. Artificial Intelligence and Data
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Data processed by our AI agents is used exclusively for the purpose agreed upon with each client. We do not use one client{"'"}s data to train models that benefit other clients. AI models run on dedicated infrastructure and data is deleted according to retention policies agreed upon in each contract.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            5. Information Sharing
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We do not sell or share your personal information with third parties, except when necessary to provide our services (cloud infrastructure providers), when required by law, or when you have given us your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            6. Your Rights
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            You have the right to access, rectify, delete, and port your personal data. You may also object to the processing of your data or request its limitation. To exercise these rights, contact us at{" "}
            <a href="mailto:aruben.guerra@gmail.com" className="text-accent hover:underline">
              aruben.guerra@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            7. Cookies
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We use essential cookies for website functionality and analytics cookies to understand how users interact with our site. You can manage your cookie preferences at any time through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-4 text-accent">
            8. Contact
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            For any questions about this privacy policy, you can contact us at{" "}
          </p>
            <ul className="space-y-2 ml-4">
              <li className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent mt-1.5 flex-shrink-0" />
                By email: <a href="mailto:aruben.guerra@gmail.com" className="text-accent hover:underline"> aruben.guerra@gmail.com</a>
              </li>
            </ul>
        </section>
      </div>
    </>
  )
}
