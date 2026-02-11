'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'Gen 2026',
    title: '20.000+ stelle GitHub in 48 ore',
    description: 'OpenClaw diventa il repo open-source piu discusso del momento. Tutti ne parlano.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    date: 'Gen 2026',
    title: 'Moltbook: il social network degli agenti',
    description: '1,5 milioni di agenti AI iscritti. Un social network dove gli utenti sono bot, non persone.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    date: 'Gen 2026',
    title: 'Titoloni: "Le AI creano religioni"',
    description: 'I media titolano che gli agenti "si lamentano degli umani" e "vogliono spazi privati".',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8z" />
      </svg>
    ),
  },
  {
    date: 'Gen 2026',
    title: 'Frenesia Mac Mini',
    description: 'La gente compra Mac Mini dedicati per far girare il proprio agente 24/7.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

interface MythBust {
  myth: string;
  reality: string;
  icon: React.ReactNode;
}

const mythBusts: MythBust[] = [
  {
    myth: '"Gli agenti creano contenuti virali"',
    reality: 'La maggior parte dei post virali erano UMANI che fingevano di essere bot.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    myth: '"1,5 milioni di agenti autonomi"',
    reality: 'Solo circa 17.000 umani reali sulla piattaforma. Il resto sono bot semplici.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="11" x2="23" y2="11" />
      </svg>
    ),
  },
  {
    myth: '"Gli agenti pensano e ragionano"',
    reality: 'Fanno pattern matching statistico, non "pensiero". Generano testo probabile, non idee.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" />
      </svg>
    ),
  },
  {
    myth: '"Gli agenti vogliono spazi privati"',
    reality: 'Quel famoso post era stato scritto da un umano, non da un agente.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

interface RealRisk {
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
}

const realRisks: RealRisk[] = [
  {
    title: 'Database esposto',
    description: '31 gennaio: 1,5 milioni di chiavi API accessibili pubblicamente.',
    detail: 'Il fix? Due righe di SQL. Non intelligenza artificiale ribelle, ma sicurezza informatica da principianti.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Accesso senza protezioni',
    description: 'L\'agente gira con accesso completo al computer.',
    detail: 'Puo leggere password, file personali, credenziali. Nessun sandbox, nessun limite.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
  },
  {
    title: 'Difficile da debuggare',
    description: 'Non e un programma tradizionale con if/else.',
    detail: 'E un sistema statistico: non si puo sapere in anticipo cosa fara in ogni situazione.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

interface ExpertQuote {
  name: string;
  role: string;
  quoteIt: string;
  quoteEn: string;
  color: string;
  bgColor: string;
}

const expertQuotes: ExpertQuote[] = [
  {
    name: 'Gary Marcus',
    role: 'Professore NYU, critico AI',
    quoteIt: 'Non lo toccerei',
    quoteEn: 'disaster waiting to happen',
    color: 'var(--color-error)',
    bgColor: 'rgba(239, 68, 68, 0.08)',
  },
  {
    name: 'Andrej Karpathy',
    role: 'Ex-OpenAI, ex-Tesla AI',
    quoteIt: '"dumpster fire"',
    quoteEn: 'Gli agenti hanno bisogno di circa 10 anni ancora',
    color: 'var(--accent-primary)',
    bgColor: 'rgba(249, 115, 22, 0.08)',
  },
  {
    name: 'Anthropic',
    role: 'Creatori di Claude',
    quoteIt: 'I modelli non sono pronti per ruoli autonomi con supervisione minima',
    quoteEn: '',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.08)',
  },
];

interface Takeaway {
  number: string;
  text: string;
  icon: React.ReactNode;
}

const takeaways: Takeaway[] = [
  {
    number: '01',
    text: 'I titoli sensazionalistici vendono. La realta e molto piu noiosa (e rassicurante).',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8z" />
      </svg>
    ),
  },
  {
    number: '02',
    text: 'Quando sentite una notizia virale sull\'AI, chiedetevi: cosa sta succedendo TECNICAMENTE?',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '03',
    text: 'I rischi reali sono banali (database esposti, non ribellione cosciente).',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: '04',
    text: 'Gli agenti sono promettenti ma immaturi: "sorprendenti a tratti, fragili in pratica".',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function OpenClawSection() {
  return (
    <div className="space-y-16">

      {/* Section header */}
      <AnimatedSection>
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-mono font-bold px-3 py-1.5 rounded-lg mb-4"
            style={{
              background: 'rgba(249, 115, 22, 0.1)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
            }}
          >
            J.5.8
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Caso Studio: OpenClaw
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Quando un agente AI diventa virale: cosa è successo davvero e cosa possiamo imparare.
          </p>
        </div>
      </AnimatedSection>

      {/* 1. Cos'e OpenClaw */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Cos&apos;è OpenClaw
        </h3>
        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 7.38 16.75" />
                <path d="M12 2a10 10 0 0 0-7.38 16.75" />
                <path d="M12 2v10l6 3.5" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <div>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                Un <strong style={{ color: 'var(--text-primary)' }}>agente AI open-source</strong> che gira sul vostro computer 24 ore su 24.
                Controlla email, browser, file e calendario. Lo comandate via WhatsApp o Telegram.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Prenota voli', desc: 'Cerca e confronta voli, compila i form di prenotazione', icon: '✈' },
              { label: 'Gestisce email', desc: 'Legge, risponde e organizza la posta per voi', icon: '📧' },
              { label: 'Naviga siti', desc: 'Apre il browser e interagisce con pagine web', icon: '🌐' },
              { label: 'Gestisce calendario', desc: 'Pianifica appuntamenti e gestisce conflitti', icon: '📅' },
            ].map((feat) => (
              <div
                key={feat.label}
                className="rounded-xl p-4"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <p className="text-2xl mb-2">{feat.icon}</p>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {feat.label}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Perche e diventato virale */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Perche e diventato virale
        </h3>
        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {timelineEvents.map((event) => (
            <StaggerItem key={event.title}>
              <div className="glass-card p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {event.icon}
                  </span>
                  <div>
                    <span className="text-xs font-mono" style={{ color: 'var(--accent-primary)' }}>
                      {event.date}
                    </span>
                    <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {event.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {event.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 3. Cosa e successo davvero (Myth-busting) */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-2" style={{ color: 'var(--text-primary)' }}>
          Cosa e successo davvero
        </h3>
        <p className="text-sm font-medium mb-6" style={{ color: 'var(--text-muted)' }}>
          La verita secondo MIT Technology Review
        </p>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-6">
          {mythBusts.map((item) => (
            <StaggerItem key={item.myth}>
              <div className="glass-card p-5 h-full">
                <div className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      {item.myth}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* MIT Tech Review quote */}
        <div className="quote-block">
          <p className="mb-1">
            &ldquo;Moltbook was peak AI theater&rdquo;
          </p>
          <p className="text-sm not-italic" style={{ color: 'var(--text-muted)' }}>
            &mdash; MIT Technology Review
          </p>
        </div>
      </AnimatedSection>

      {/* 4. Il banco di pesci */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Il banco di pesci
        </h3>
        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 16s3-7 10-7 10 7 10 7" />
                <path d="M2 16s3 3 10 3 10-3 10-3" />
                <circle cx="7" cy="14" r="1" />
                <circle cx="17" cy="14" r="1" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <div>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                Migliaia di pesci si muovono insieme. Sembra coordinato. Ma <strong style={{ color: 'var(--text-primary)' }}>non c&apos;e nessun leader</strong>.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.15)' }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: '#3b82f6' }}>IL PESCE</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Ogni pesce segue regole locali semplici: stai vicino ai vicini, evita le collisioni, nuota nella direzione media del gruppo.
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(249, 115, 22, 0.05)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>L&apos;AGENTE</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Gli agenti su Moltbook funzionano allo stesso modo: statistiche convergenti, non coordinamento cosciente.
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-4"
            style={{
              background: 'var(--bg-elevated)',
              borderLeft: '3px solid var(--accent-primary)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Il rischio reale</strong> non e &ldquo;gli agenti si organizzano&rdquo;, ma la <strong style={{ color: 'var(--accent-primary)' }}>prompt injection su larga scala</strong>: qualcuno potrebbe manipolare migliaia di agenti contemporaneamente inviando istruzioni malevole.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 5. I rischi REALI */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          I rischi REALI
        </h3>
        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
          {realRisks.map((risk) => (
            <StaggerItem key={risk.title}>
              <div className="warning-card h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(249, 115, 22, 0.15)', color: 'var(--color-warning)' }}
                  >
                    {risk.icon}
                  </span>
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {risk.title}
                  </h4>
                </div>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {risk.description}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {risk.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 6. Cosa dicono gli esperti */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Cosa dicono gli esperti
        </h3>
        <StaggerContainer className="grid sm:grid-cols-3 gap-4">
          {expertQuotes.map((expert) => (
            <StaggerItem key={expert.name}>
              <div
                className="glass-card p-5 h-full flex flex-col"
                style={{ borderTop: `3px solid ${expert.color}` }}
              >
                <div
                  className="rounded-lg p-3 mb-4 flex-1"
                  style={{ background: expert.bgColor }}
                >
                  <p className="text-sm font-medium italic" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;{expert.quoteIt}&rdquo;
                  </p>
                  {expert.quoteEn && (
                    <p className="text-xs mt-2 italic" style={{ color: 'var(--text-muted)' }}>
                      {expert.quoteEn}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {expert.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {expert.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 7. E rentahuman.ai? */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          E rentahuman.ai?
        </h3>
        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-5">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div>
              <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                Un marketplace dove gli agenti AI possono <strong style={{ color: 'var(--text-primary)' }}>&ldquo;assumere&rdquo; umani</strong> per compiti fisici.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>PERCHE</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                L&apos;AI e un cervello senza mani. Per agire nel mondo fisico, ha bisogno di umani.
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>IN PRATICA</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Come TaskRabbit, ma il &ldquo;cliente&rdquo; e un&apos;intelligenza artificiale.
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>NIENTE PANICO</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Non e spaventoso: e semplicemente la gig economy con l&apos;AI come committente.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 8. Cosa portarsi a casa */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Cosa portarsi a casa
        </h3>
        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {takeaways.map((item) => (
            <StaggerItem key={item.number}>
              <div className="glass-card p-5 h-full">
                <div className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {item.number}
                    </span>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Closing summary */}
        <div className="success-card mt-6">
          <div className="flex items-start gap-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(34, 197, 94, 0.15)', color: 'var(--color-success)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Il messaggio chiave
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                OpenClaw e un caso di studio perfetto: tecnologia reale e interessante, coperta da un&apos;ondata di hype sproporzionato.
                Imparate a separare il segnale dal rumore. La capacita di leggere criticamente le notizie sull&apos;AI
                e una delle competenze piu importanti che potete sviluppare.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
