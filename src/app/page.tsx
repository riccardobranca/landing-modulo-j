import { AnimatedSection } from '@/components/AnimatedSection';
import APISection from '@/components/APISection';
import ConnectorsSection from '@/components/ConnectorsSection';
import MCPSection from '@/components/MCPSection';
import MindsetSection from '@/components/MindsetSection';
import AutomationToolsSection from '@/components/AutomationToolsSection';
import AIAutomationSection from '@/components/AIAutomationSection';
import AgentsSection from '@/components/AgentsSection';
import OpenClawSection from '@/components/OpenClawSection';
import MultiAgentSection from '@/components/MultiAgentSection';
import VibeCodingSection from '@/components/VibeCodingSection';

function MacroAreaBanner({ part, title, subtitle }: { part: number; title: string; subtitle: string }) {
  return (
    <section
      className="py-10 px-6"
      style={{
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span
            className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
            style={{
              color: 'var(--accent-primary)',
              background: 'rgba(249, 115, 22, 0.08)',
              border: '1px solid rgba(249, 115, 22, 0.15)',
            }}
          >
            PARTE {part}
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function ModuloJ() {
  return (
    <main className="gradient-mesh min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-4">MODULO J</p>
            <h1 className="heading-hero mb-6">
              L&apos;AI che <span className="text-gradient">Agisce</span>
            </h1>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              L&apos;AI non è solo chat: può accedere ai vostri strumenti,
              automatizzare il lavoro ripetitivo, agire in autonomia,
              e persino creare software.
              In questo modulo scopriamo come l&apos;AI sta passando
              dal &quot;rispondere&quot; al &quot;fare&quot;.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="quote-block">
              <strong>TL;DR</strong> — Le API sono il modo in cui i software comunicano tra loro.
              I connettori danno all&apos;AI accesso ai vostri strumenti.
              Le automazioni risparmiano ore di lavoro ripetitivo.
              Gli agenti pianificano ed eseguono obiettivi da soli.
              E con il &quot;vibe coding&quot; chiunque può creare software descrivendolo a parole.
              Questo modulo costruisce questi concetti uno sopra l&apos;altro,
              dal più semplice al più avanzato.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PARTE 1 — Fondamenta                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <MacroAreaBanner
        part={1}
        title="Le Fondamenta"
        subtitle="Come comunicano i software tra loro e come l&apos;AI accede ai vostri strumenti"
      />

      <section id="api" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <APISection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <section id="connettori" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ConnectorsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <MCPSection />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PARTE 2 — Automazioni                                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <MacroAreaBanner
        part={2}
        title="Le Automazioni"
        subtitle="Il mindset, le piattaforme e il ruolo dell&apos;AI nel lavoro che gira da solo"
      />

      <section id="mindset" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <MindsetSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <section id="strumenti" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AutomationToolsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <section id="ai-automazioni" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AIAutomationSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PARTE 3 — L'AI che agisce                                  */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <MacroAreaBanner
        part={3}
        title="L&apos;AI che Agisce"
        subtitle="Dagli assistenti agli agenti autonomi: l&apos;AI che pianifica, decide e collabora"
      />

      <section id="agenti" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AgentsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <section id="openclaw" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <OpenClawSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      <section id="multi-agent" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <MultiAgentSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* PARTE 4 — Creazione                                        */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <MacroAreaBanner
        part={4}
        title="La Creazione"
        subtitle="Creare software senza scrivere codice: il vibe coding"
      />

      <VibeCodingSection />

      {/* Key Takeaways */}
      <section className="py-16 px-6 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-8">Key Takeaways</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { n: '1', text: 'Le API sono camerieri — Portano ordini tra software. Non dovete cucinare, basta saper ordinare' },
                { n: '2', text: 'Connettori ≠ Automazioni — Il connettore risponde quando chiedete; l\'automazione lavora da sola' },
                { n: '3', text: 'MCP = USB-C dell\'AI — Uno standard per collegare qualsiasi AI a qualsiasi strumento' },
                { n: '4', text: 'Trigger + Condizione + Azione — La logica universale di ogni automazione, dalla sveglia a Make' },
                { n: '5', text: 'L\'AI capisce l\'intento — Classifica email, estrae dati, genera contenuti: fa ciò che i filtri tradizionali non possono' },
                { n: '6', text: 'Gli agenti pianificano e agiscono — Ricevono obiettivi, non comandi. Decidono come raggiungerli' },
                { n: '7', text: 'I titoli virali mentono — OpenClaw/Moltbook sembrava fantascienza, era pattern matching + cattiva sicurezza' },
                { n: '8', text: 'Multi-agent = team di esperti — Più agenti specializzati battono un singolo generalista' },
                { n: '9', text: 'Vibe coding: descrivete, create — Dal convertitore di temperatura al sito web, senza scrivere codice' },
                { n: '10', text: 'Partite dal basso rischio — Prima monitoraggio e ricerca, poi analisi, infine azioni con conseguenze reali' },
              ].map((item) => (
                <div key={item.n} className="glass-card p-4 flex gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {item.n}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-6">Per approfondire</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Connettori e MCP</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      MCP Docs
                    </a>{' '}
                    — Documentazione ufficiale
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      ChatGPT Connectors
                    </a>{' '}
                    — Connettori integrati
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Automazione</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Zapier
                    </a>{' '}
                    — 7.000+ integrazioni
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Make
                    </a>{' '}
                    — Visual workflow builder
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      n8n
                    </a>{' '}
                    — Open source, self-hosted
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Agenti e Vibe Coding</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://github.com/openclaw" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      OpenClaw
                    </a>{' '}
                    — Caso studio agente AI virale
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Lovable
                    </a>{' '}
                    — Vibe coding accessibile
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Claude Artifacts
                    </a>{' '}
                    — Demo in 2 minuti, gratis
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">Fine Modulo J</p>
          <p className="text-[var(--text-secondary)]">
            Dalle API ai connettori, dalle automazioni agli agenti, dal vibe coding ai sistemi multi-agent.
            Ora sapete dove siamo e dove stiamo andando.
          </p>
        </div>
      </footer>
    </main>
  );
}
