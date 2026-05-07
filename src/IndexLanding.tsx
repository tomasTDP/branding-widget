const SANS = '"Switzer", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif'
const SERIF = '"Instrument Serif", "Iowan Old Style", Georgia, serif'
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace'

const PAPER = '#F7F3E9'
const SURFACE = '#FDFBF4'
const STONE = '#BDB6A6'
const SLATE = '#5A5650'
const INK = '#15140F'
const COBALT = '#2B4CC7'
const RULE = 'rgba(21,20,15,0.08)'

type Variant = {
  href: string
  tag: string
  title: string
  desc: string
  meta: string
  primary?: boolean
}

const VARIANTS: Variant[] = [
  {
    href: '/v4',
    tag: 'Option 01 · Proposal',
    title: 'Serif · italic terminal',
    desc: 'A 9-slide branding deck. Switzer paired with Instrument Serif italic — the brand wears its name once, in the f.',
    meta: 'Branding proposal · Switzer + Instrument Serif',
    primary: true,
  },
  {
    href: '/v3',
    tag: 'Option 02 · Proposal',
    title: 'Serif.io · sans only',
    desc: 'A 9-slide branding deck. Switzer alone — the brand named after a typographic detail it refuses to show.',
    meta: 'Branding proposal · Switzer',
    primary: true,
  },
  {
    href: '/v2',
    tag: 'Variant',
    title: 'Landing · modern subverted',
    desc: 'Early experiment: editorial DNA expressed through a clean modern landing with the seri[f] wordmark.',
    meta: 'Landing variant',
  },
  {
    href: '/v1',
    tag: 'Variant',
    title: 'Landing · monochromatic',
    desc: 'Marketing landing in the Serif system: monochromatic warm-grey scale with cobalt as the only accent.',
    meta: 'Landing variant',
  },
]

export function IndexLanding() {
  return (
    <div style={{ fontFamily: SANS, color: INK, background: PAPER, minHeight: '100vh' }}>
      <style>{`
        .idx *::selection { background: ${COBALT}; color: #fff; }
        .idx a { text-decoration: none; color: inherit; display: block; }
        .idx .card { transition: transform 0.18s, border-color 0.18s, box-shadow 0.18s; }
        .idx .card:hover { transform: translateY(-2px); border-color: rgba(21,20,15,0.18); box-shadow: 0 18px 40px -20px rgba(21,20,15,0.18); }
      `}</style>

      <div className="idx">
        {/* Header */}
        <header style={{
          padding: '24px 40px', borderBottom: `1px solid ${RULE}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: `${PAPER}E8`, backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/Serif-logo.png" alt="Serif" height={20} style={{ display: 'block' }} />
            <span style={{
              fontFamily: MONO, fontSize: 11, color: STONE,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              Branding Proposal · 2026
            </span>
          </div>
          <a
            href="https://github.com/tomasTDP/branding-widget"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: MONO, fontSize: 11, color: SLATE,
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}
          >
            ↳ GitHub
          </a>
        </header>

        {/* Hero */}
        <section style={{ padding: '120px 40px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <span style={{
              fontFamily: MONO, fontSize: 12, color: COBALT, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              ↳ A branding proposal for Serif.io
            </span>

            <h1 style={{
              fontFamily: SANS, fontSize: 'clamp(64px, 10vw, 160px)', fontWeight: 700,
              letterSpacing: '-0.045em', lineHeight: 0.92, margin: '32px 0 0', color: INK,
            }}>
              Two takes on<br />
              <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: COBALT }}>
                the same name.
              </span>
            </h1>

            <p style={{
              fontSize: 22, lineHeight: 1.5, color: SLATE,
              margin: '48px 0 0', maxWidth: 720, fontWeight: 400, letterSpacing: '-0.005em',
            }}>
              Serif is a visual feedback widget for product teams. Two branding directions, both
              monochromatic, both single-accent — but one shows the serif and the other refuses to.
              Pick a slide deck below.
            </p>
          </div>
        </section>

        {/* Versions */}
        <section style={{ padding: '40px 40px 120px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 16,
              fontFamily: MONO, fontSize: 11, color: STONE,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              paddingBottom: 18, borderBottom: `1px solid ${RULE}`, marginBottom: 32,
            }}>
              <span style={{ color: COBALT, fontWeight: 600 }}>§ Versions</span>
              <span style={{ flex: 1, height: 1, background: RULE }} />
              <span>{VARIANTS.length} routes</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {VARIANTS.map((v) => (
                <a key={v.href} href={v.href}>
                  <div className="card" style={{
                    padding: 36, background: SURFACE, border: `1px solid ${RULE}`, borderRadius: 18,
                    minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '5px 12px', borderRadius: 9999,
                        border: `1px solid ${v.primary ? COBALT : INK}`,
                        color: v.primary ? COBALT : INK,
                        fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: '-0.005em',
                      }}>
                        {v.tag}
                      </span>
                      <span style={{
                        fontFamily: MONO, fontSize: 12, color: STONE, letterSpacing: '0.04em',
                      }}>
                        {v.href}
                      </span>
                    </div>

                    <div>
                      <h3 style={{
                        fontFamily: SANS, fontSize: 32, fontWeight: 700, letterSpacing: '-0.025em',
                        lineHeight: 1.05, margin: '0 0 14px', color: INK,
                      }}>
                        {v.title}
                      </h3>
                      <p style={{
                        fontSize: 16, lineHeight: 1.55, color: SLATE,
                        margin: 0, maxWidth: 480,
                      }}>
                        {v.desc}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      paddingTop: 20, borderTop: `1px solid ${RULE}`,
                    }}>
                      <span style={{
                        fontFamily: MONO, fontSize: 11, color: STONE,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>
                        {v.meta}
                      </span>
                      <span style={{
                        fontFamily: SANS, fontSize: 13, color: COBALT, fontWeight: 600,
                      }}>
                        Open →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '32px 40px', borderTop: `1px solid ${RULE}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: SURFACE, fontFamily: MONO, fontSize: 11, color: STONE,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <span>Serif · Branding Proposal · Vol. 01 · 2026</span>
          <span>↳ tomas@serif.io</span>
        </footer>
      </div>
    </div>
  )
}
