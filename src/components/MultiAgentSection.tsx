'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: 'Specializzazione',
    description: 'Ogni agente e ottimizzato per un solo compito: cerca, analizza, scrive o verifica.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Parallelizzazione',
    description: 'Piu agenti lavorano contemporaneamente. Cio che richiederebbe ore si completa in minuti.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Qualita superiore',
    description: 'Agenti focalizzati producono risultati migliori di un singolo agente generalista.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Robustezza',
    description: 'Se un agente sbaglia, gli altri possono compensare e correggere. Il sistema e resiliente.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface UseCase {
  title: string;
  steps: string[];
  icon: React.ReactNode;
}

const useCases: UseCase[] = [
  {
    title: 'Ricerca scientifica',
    steps: ['Cerca paper rilevanti', 'Riassumi i risultati', 'Identifica gap nella letteratura'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Sviluppo software',
    steps: ['Scrivi il codice', 'Esegui i test', 'Revisiona la qualita', 'Documenta tutto'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Analisi di business',
    steps: ['Raccogli dati di mercato', 'Analizza i competitor', 'Crea proiezioni', 'Compila il report'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

interface TimelineEntry {
  period: string;
  label: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    period: '2026-2027',
    label: 'Per sviluppatori e aziende',
    description: 'Framework come CrewAI e AutoGen rendono accessibile la creazione di team di agenti.',
  },
  {
    period: '2027-2028',
    label: 'Nei prodotti consumer',
    description: 'ChatGPT, Claude e altri integrano team di agenti direttamente nelle loro interfacce.',
  },
  {
    period: '2028-2030',
    label: 'Adozione mainstream',
    description: 'I sistemi multi-agent diventano lo standard per task complessi, come oggi usiamo le app.',
  },
];

const workflowSteps = [
  { agent: 'Orchestrator Agent', task: 'Riceve il compito e lo distribuisce agli specialisti', color: 'var(--accent-primary)' },
  { agent: 'Research Agent', task: 'Trova 20 fonti verificate sul mercato', color: '#3b82f6' },
  { agent: 'Data Analyst Agent', task: 'Analizza pattern e statistiche', color: '#8b5cf6' },
  { agent: 'Writer Agent', task: 'Scrive in modo chiaro e conciso', color: '#06b6d4' },
  { agent: 'Fact-Checker Agent', task: 'Verifica ogni dato e affermazione', color: '#22c55e' },
  { agent: 'Orchestrator Agent', task: 'Combina i risultati → Report professionale', color: 'var(--accent-primary)' },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function FishIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 12c0-3.5 3.5-7 9.5-7 0 3.5-3.5 7-9.5 7z" />
      <path d="M6.5 12c0 3.5 3.5 7 9.5 7 0-3.5-3.5-7-9.5-7z" />
      <circle cx="4" cy="12" r="1" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MultiAgentSection() {
  return (
    <div className="max-w-6xl mx-auto">

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
            J.9
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Sistemi Multi-Agent
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Quando un singolo agente non basta: team di AI specializzate che collaborano.
          </p>
        </div>
      </AnimatedSection>

      {/* ---- 1. Single Worker vs Expert Team ---- */}
      <AnimatedSection>
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span style={{ color: 'var(--accent-primary)' }}>
              <UsersIcon />
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Un lavoratore solo vs. un team di esperti
            </h3>
          </div>
          <p
            className="text-sm text-center max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            La differenza fondamentale che rende i sistemi multi-agent cosi potenti.
          </p>

          <div className="glass-card p-6 sm:p-8 mb-6 max-w-4xl mx-auto">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              {/* LEFT - Sovraccarico */}
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.18)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                {/* Person icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '2px solid rgba(239, 68, 68, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                {/* Stacked task boxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                  {['Ricerca', 'Analisi', 'Scrittura', 'Fact-check', 'Formattazione'].map((task) => (
                    <div
                      key={task}
                      style={{
                        background: 'rgba(239, 68, 68, 0.08)',
                        border: '1px solid rgba(239, 68, 68, 0.15)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--color-error)',
                        textAlign: 'center',
                      }}
                    >
                      {task}
                    </div>
                  ))}
                </div>

                {/* Label */}
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-error)', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    SOVRACCARICO
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    1 persona, 5 compiti, qualita 6/10
                  </p>
                </div>
              </div>

              {/* RIGHT - Team di esperti */}
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.18)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                {/* Specialist rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                  {[
                    { name: 'Ricercatore', emoji: '\uD83D\uDD0D' },
                    { name: 'Analista', emoji: '\uD83D\uDCCA' },
                    { name: 'Scrittore', emoji: '\u270D\uFE0F' },
                    { name: 'Verificatore', emoji: '\u2705' },
                    { name: 'Coordinatore', emoji: '\uD83C\uDFAF' },
                  ].map((specialist) => (
                    <div
                      key={specialist.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(34, 197, 94, 0.08)',
                        border: '1px solid rgba(34, 197, 94, 0.15)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'rgba(34, 197, 94, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-success)' }}>
                        {specialist.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Label */}
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-success)', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    TEAM DI ESPERTI
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    5 specialisti, qualita 9/10
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl">
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Multi-agent = team di specialisti AI. Invece di un singolo modello che fa tutto, piu agenti collaborano, ognuno con il proprio ruolo.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- 2. Come funziona - Esempio pratico ---- */}
      <AnimatedSection delay={0.1}>
        <div className="mb-14">
          <h3
            className="text-xl font-semibold mb-2 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Come funziona
          </h3>
          <p
            className="text-sm text-center max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Esempio: Creare un report di analisi mercato
          </p>

          {/* Workflow steps */}
          <div className="glass-card p-6 sm:p-8 mb-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: `${step.color}15`,
                      color: step.color,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-semibold" style={{ color: step.color }}>
                        {step.agent}
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}> — </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{step.task}</span>
                    </p>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <span className="flex-shrink-0 mt-1" style={{ color: 'var(--text-muted)', opacity: 0.4 }}>
                      <ArrowRightIcon />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Before/After image */}
          <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
            <p
              className="text-sm font-semibold mb-6 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Il risultato: prima e dopo il multi-agent
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              {/* PRIMA */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  PRIMA
                </p>

                {/* Single chatbot icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>

                {/* Tasks listed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                  {['Ricerca', 'Analisi', 'Scrittura', 'Verifica', 'Formattazione'].map((task) => (
                    <div
                      key={task}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        padding: '5px 10px',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        textAlign: 'center',
                      }}
                    >
                      {task}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Tutto sequenziale, un solo agente
                </p>
              </div>

              {/* Arrow */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              {/* DOPO */}
              <div
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.18)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.1em' }}>
                  DOPO
                </p>

                {/* Orchestrator box */}
                <div
                  style={{
                    width: '100%',
                    background: 'rgba(249, 115, 22, 0.1)',
                    border: '1px solid rgba(249, 115, 22, 0.25)',
                    borderRadius: '10px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                  }}
                >
                  Orchestratore
                </div>

                {/* Connection lines (simple visual) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '1px',
                        height: '16px',
                        background: 'rgba(249, 115, 22, 0.3)',
                      }}
                    />
                  ))}
                </div>

                {/* 4 specialist boxes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', width: '100%' }}>
                  {[
                    { name: 'Ricerca', color: '#3b82f6' },
                    { name: 'Analisi', color: '#8b5cf6' },
                    { name: 'Scrittura', color: '#06b6d4' },
                    { name: 'Verifica', color: '#22c55e' },
                  ].map((agent) => (
                    <div
                      key={agent.name}
                      style={{
                        background: `${agent.color}12`,
                        border: `1px solid ${agent.color}30`,
                        borderRadius: '8px',
                        padding: '8px 6px',
                        textAlign: 'center',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: agent.color,
                      }}
                    >
                      {agent.name}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Parallelo, specializzato, coordinato
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- 3. Vantaggi ---- */}
      <AnimatedSection delay={0.15}>
        <div className="mb-14">
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Vantaggi dei sistemi multi-agent
          </h3>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto" staggerDelay={0.08}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="glass-card p-5 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <h4
                      className="text-sm font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {benefit.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* ---- 4. Il banco di pesci ---- */}
      <AnimatedSection delay={0.2}>
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span style={{ color: 'var(--accent-primary)' }}>
              <FishIcon />
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Il banco di pesci
            </h3>
          </div>
          <p
            className="text-sm text-center max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Coordinazione emergente: quando non serve un capo
          </p>

          <div className="glass-card p-6 sm:p-8 max-w-3xl mx-auto">
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Migliaia di pesci che si muovono in formazione perfetta. Nessun &ldquo;leader&rdquo; che da ordini. Solo tre regole semplici:
            </p>

            <div className="space-y-2 mb-6">
              {[
                'Resta vicino ai vicini',
                'Evita le collisioni',
                'Nuota nella direzione media del gruppo',
              ].map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                  style={{
                    background: 'rgba(59, 130, 246, 0.06)',
                    border: '1px solid rgba(59, 130, 246, 0.12)',
                  }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {rule}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--text-secondary)' }}
            >
              Alcuni sistemi multi-agent funzionano allo stesso modo: nessun coordinatore centrale, ma un comportamento emergente. Gli agenti seguono regole semplici e il risultato complessivo e intelligente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(34, 197, 94, 0.06)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-success)' }}>
                  Vantaggio
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Piu flessibile, si adatta automaticamente a situazioni impreviste.
                </p>
              </div>

              <div
                className="px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(249, 115, 22, 0.06)',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
                  Svantaggio
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Piu difficile da controllare e prevedere nei risultati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- 5. Cosa NON e multi-agent: Moltbook ---- */}
      <AnimatedSection delay={0.25}>
        <div className="mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span style={{ color: 'var(--color-error)' }}>
              <AlertIcon />
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Cosa NON e multi-agent: Moltbook
            </h3>
          </div>
          <p
            className="text-sm text-center max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Una distinzione importante da capire.
          </p>

          <div
            className="max-w-3xl mx-auto px-6 py-6 rounded-2xl"
            style={{
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.18)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
              {/* Moltbook */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(239, 68, 68, 0.12)',
                      color: 'var(--color-error)',
                    }}
                  >
                    Moltbook
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    'Milioni di agenti che chiacchierano liberamente',
                    'Nessun obiettivo comune',
                    'Nessuna coordinazione',
                    'Esperimento sociale',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex-shrink-0 mt-1" style={{ color: 'var(--color-error)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multi-agent system */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(34, 197, 94, 0.12)',
                      color: 'var(--color-success)',
                    }}
                  >
                    Sistema multi-agent
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    'Agenti con ruoli specifici',
                    'Obiettivo condiviso e chiaro',
                    'Coordinazione strutturata',
                    'Team che lavora',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex-shrink-0 mt-1" style={{ color: 'var(--color-success)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="quote-block p-4 rounded-xl" style={{ borderColor: 'var(--color-error)' }}>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Moltbook e un esperimento sociale. Un sistema multi-agent e un team che lavora.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- 6. Dove si stanno usando gia ---- */}
      <AnimatedSection delay={0.3}>
        <div className="mb-14">
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Dove si stanno usando gia
          </h3>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto" staggerDelay={0.08}>
            {useCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <div className="glass-card p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {useCase.icon}
                    </div>
                    <h4
                      className="text-sm font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {useCase.title}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {useCase.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                          style={{
                            background: 'rgba(249, 115, 22, 0.1)',
                            color: 'var(--accent-primary)',
                          }}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* ---- 7. Quando arriveranno per tutti? ---- */}
      <AnimatedSection delay={0.35}>
        <div className="mb-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span style={{ color: 'var(--accent-primary)' }}>
              <ClockIcon />
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Quando arriveranno per tutti?
            </h3>
          </div>
          <p
            className="text-sm text-center max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            La roadmap dei sistemi multi-agent.
          </p>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            {timeline.map((entry, idx) => (
              <div key={idx} className="glass-card p-5 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span
                    className="text-xs font-black px-3 py-1.5 rounded-full inline-block"
                    style={{
                      background: idx === 0 ? 'var(--accent-primary)' : idx === 1 ? 'rgba(249, 115, 22, 0.7)' : 'rgba(249, 115, 22, 0.4)',
                      color: '#fff',
                    }}
                  >
                    {entry.period}
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {entry.label}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl">
            <p
              className="text-sm leading-relaxed mb-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              La visione di Anthropic:
            </p>
            <p
              className="text-base font-semibold leading-relaxed"
              style={{ color: 'var(--text-primary)' }}
            >
              &ldquo;A country of geniuses in a data center&rdquo;
            </p>
            <p
              className="text-sm mt-2"
              style={{ color: 'var(--text-muted)' }}
            >
              Un paese di geni dentro un data center. Team di agenti AI specializzati che collaborano per risolvere i problemi piu complessi dell&apos;umanita.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
