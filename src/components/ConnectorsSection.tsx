'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface PlatformConnector {
  name: string;
  services: string[];
  setup: string;
  note: string;
  icon: React.ReactNode;
}

const platformConnectors: PlatformConnector[] = [
  {
    name: 'ChatGPT',
    services: ['Gmail', 'Calendar', 'Drive', 'OneDrive', 'Slack', 'Notion'],
    setup: 'Impostazioni → Connessioni → Attiva servizi',
    note: 'L\'ecosistema piu ampio di connettori. Ogni nuovo servizio richiede autorizzazione esplicita.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <path d="M12 2a10 10 0 0 0-7.38 16.75" />
        <path d="M12 2v10l6 3.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    services: ['Gmail', 'Drive', 'Calendar', 'Docs', 'Sheets', 'Maps'],
    setup: 'Automatico con account Google (usa @Gmail, @Drive, @Calendar)',
    note: 'Integrazione nativa con Google Workspace. Non serve configurare nulla se usate gia un account Google.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" />
        <path d="M12 8v8" />
        <path d="M8 10l4 2 4-2" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    services: ['Documenti caricati', 'Projects con contesto fisso'],
    setup: 'Create Project → Upload docs',
    note: 'Approccio piu controllato: sapete esattamente cosa l\'AI vede. Nessun accesso esterno automatico.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
  },
];


/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const KeyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const PlugIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8v5a6 6 0 0 1-12 0V8h12z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ConnectorsSection() {
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
            J.2
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            I Connettori
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            L&apos;AI accede ai vostri strumenti di lavoro quando glielo chiedete.
          </p>
        </div>
      </AnimatedSection>

      {/* Visual: cos'è un connettore */}
      <AnimatedSection>
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className="glass-card p-8 text-center"
            style={{ borderColor: 'rgba(249, 115, 22, 0.3)' }}
          >
            <span
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto"
              style={{ background: 'rgba(249, 115, 22, 0.12)', color: 'var(--accent-primary)' }}
            >
              <PlugIcon />
            </span>
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Un connettore = un permesso di accesso
            </h3>
            <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Quando connettete Gmail, Drive o Calendar all&apos;AI, le state dando il <strong>permesso</strong> di
              accedere a quei servizi. L&apos;AI non agisce da sola: risponde quando <strong>voi</strong> glielo chiedete,
              durante la conversazione.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl p-4" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-2xl mb-1">📧</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Email</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>&ldquo;Cerca l&apos;ultima email di Marco&rdquo;</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-2xl mb-1">📁</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Documenti</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>&ldquo;Riassumi il contratto ABC&rdquo;</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-2xl mb-1">📅</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Calendario</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>&ldquo;Cosa ho in agenda domani?&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 1. Keys Metaphor */}
      <AnimatedSection>
        <div className="quote-block py-6">
          <div className="flex items-start gap-3 mb-4">
            <span style={{ color: 'var(--accent-primary)' }}>
              <KeyIcon />
            </span>
            <div>
              <p className="text-lg font-medium mb-2" style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}>
                Pensate a dare le chiavi di casa a un assistente...
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                &ldquo;Tieni le chiavi, cosi quando ti chiamo puoi entrare e trovare quello che mi serve.&rdquo;
              </p>
              <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>
                Un connettore funziona esattamente cosi: date all&apos;AI le &ldquo;chiavi&rdquo; dei vostri servizi
                (email, documenti, calendario), e lei le usa <strong>solo quando glielo chiedete</strong>.
                Niente accessi automatici, niente sorprese.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Before/After Conversation */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Prima e dopo i connettori
        </h3>
        <div className="glass-card p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* BEFORE */}
            <div className="p-6" style={{ borderRight: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(239, 68, 68, 0.15)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-error)' }}>
                  Senza connettore
                </span>
              </div>
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  borderLeft: '3px solid var(--color-error)',
                  color: 'var(--text-secondary)',
                }}
              >
                <p className="mb-2" style={{ color: 'var(--text-muted)' }}>Voi scrivete:</p>
                <p>&ldquo;Ecco il testo del contratto che ho ricevuto: <span style={{ color: 'var(--text-muted)' }}>[incollate 5 pagine di testo]</span>. Puoi riassumerlo?&rdquo;</p>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Dovete trovare il file, aprirlo, copiare tutto, incollare nella chat...
              </p>
            </div>

            {/* AFTER */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(34, 197, 94, 0.15)' }}
                >
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-success)' }}>
                  Con connettore
                </span>
              </div>
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderLeft: '3px solid var(--color-success)',
                  color: 'var(--text-secondary)',
                }}
              >
                <p className="mb-2" style={{ color: 'var(--text-muted)' }}>Voi scrivete:</p>
                <p>&ldquo;Cerca nel mio Drive il contratto con Fornitore ABC e riassumilo.&rdquo;</p>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Una frase. L&apos;AI cerca, trova, legge, riassume.
              </p>
            </div>
          </div>

          {/* Bottom highlight */}
          <div
            className="px-6 py-4 text-center text-sm font-medium"
            style={{
              background: 'var(--bg-elevated)',
              borderTop: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <span style={{ color: 'var(--accent-primary)' }}>
              <ArrowRightIcon />
            </span>{' '}
            L&apos;AI cerca, trova, legge, riassume. Tutto in una singola richiesta.
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Platform Connector Cards */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Connettori nelle piattaforme principali
        </h3>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {platformConnectors.map((platform) => (
            <StaggerItem key={platform.name}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {platform.icon}
                  </span>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {platform.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {platform.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div
                  className="rounded-lg p-3 text-xs mb-3"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                >
                  <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Setup:</span>{' '}
                  {platform.setup}
                </div>

                <p className="text-sm mt-auto" style={{ color: 'var(--text-muted)' }}>
                  {platform.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 4. Privacy Callout */}
      <AnimatedSection>
        <div className="warning-card">
          <div className="flex items-start gap-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(249, 115, 22, 0.15)', color: 'var(--color-warning)' }}
            >
              <ShieldIcon />
            </span>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Privacy: cosa state davvero condividendo
              </h4>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Quando connettete un servizio, state dando accesso ai vostri dati a un&apos;azienda esterna.
                L&apos;AI puo leggere le vostre email, i vostri documenti, il vostro calendario.
                Non e un problema in se, ma dovete esserne consapevoli.
              </p>
              <div
                className="rounded-xl p-4"
                style={{
                  background: 'rgba(249, 115, 22, 0.06)',
                  borderLeft: '3px solid var(--color-warning)',
                }}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  La regola pratica:
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Connettete solo quello che sareste a vostro agio a condividere con un assistente umano
                  molto efficiente ma che lavora per un&apos;azienda esterna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
