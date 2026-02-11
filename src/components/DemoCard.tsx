import { AnimatedSection } from '@/components/AnimatedSection';

interface DemoCardProps {
  title: string;
  description: string;
  link?: { url: string; label: string };
  duration?: string;
}

export default function DemoCard({ title, description, link, duration }: DemoCardProps) {
  return (
    <AnimatedSection>
      <div
        className="rounded-2xl p-5 sm:p-6 my-8"
        style={{
          background: 'rgba(249, 115, 22, 0.04)',
          borderLeft: '4px solid var(--accent-primary)',
          border: '1px solid rgba(249, 115, 22, 0.15)',
          borderLeftWidth: '4px',
          borderLeftColor: 'var(--accent-primary)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(249, 115, 22, 0.12)', color: 'var(--accent-primary)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            {/* Badge + duration */}
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#fff',
                }}
              >
                DEMO LIVE
              </span>
              {duration && (
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  ~{duration}
                </span>
              )}
            </div>

            {/* Title */}
            <h4
              className="text-base font-bold mb-1.5"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </h4>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              {description}
            </p>

            {/* Link button */}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:translate-y-[-1px]"
                style={{
                  background: 'var(--gradient-primary)',
                  color: '#fff',
                  boxShadow: '0 2px 8px rgba(249, 115, 22, 0.25)',
                }}
              >
                {link.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
