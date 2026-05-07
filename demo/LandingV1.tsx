import { FeedbackWidget } from 'feedback-widget'

const apiBase = import.meta.env.VITE_API_BASE
const projectId = import.meta.env.VITE_PROJECT_ID

const SANS = '"Switzer", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif'
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace'

// Palette · monochromatic warm-grey scale + cobalt as the only accent
const PAPER = '#F7F3E9'
const SURFACE = '#FDFBF4'
const BONE = '#E5DECB'
const STONE = '#BDB6A6'
const SLATE = '#5A5650'
const INK = '#15140F'
const COBALT = '#2B4CC7'
const COBALT_DEEP = '#1F389B'
const RULE = 'rgba(21,20,15,0.08)'
const RULE_STRONG = 'rgba(21,20,15,0.16)'

// Pill — the master brand mark.
const Pill = ({
  children, padding = '8px 18px', size = 16, fg = INK, bg = 'transparent',
  border = INK, weight = 500, shadow = false,
}: {
  children: React.ReactNode
  padding?: string
  size?: number
  fg?: string
  bg?: string
  border?: string
  weight?: number
  shadow?: boolean
}) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding, borderRadius: 9999,
    border: border ? `1px solid ${border}` : 'none',
    background: bg, color: fg,
    fontFamily: SANS, fontWeight: weight, fontSize: size, letterSpacing: '-0.01em',
    boxShadow: shadow ? '0 1px 2px rgba(21,20,15,0.04)' : 'none',
    lineHeight: 1, whiteSpace: 'nowrap',
  }}>
    {children}
  </span>
)

const Wordmark = ({ size = 16, fg = INK, border = INK, padding = '7px 16px' }: { size?: number; fg?: string; border?: string; padding?: string }) => (
  <Pill size={size} fg={fg} border={border} padding={padding} weight={500}>
    Serif.io
  </Pill>
)

export function LandingV1() {
  return (
    <div style={{ fontFamily: SANS, color: INK, background: PAPER, minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        .v1 *::selection { background: ${COBALT}; color: #fff; }
        .v1 a { color: inherit; text-decoration: none; }
        .v1 button { font-family: ${SANS}; }

        .v1 .nav-link { transition: color 0.15s; color: ${SLATE}; }
        .v1 .nav-link:hover { color: ${INK}; }

        .v1 .pill-cta { transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.15s; cursor: pointer; }
        .v1 .pill-cta:hover { transform: translateY(-1px); }
        .v1 .pill-cta-primary:hover { background: ${COBALT_DEEP}; }
        .v1 .pill-cta-ghost:hover { background: ${INK}; color: ${PAPER}; border-color: ${INK}; }

        @keyframes v1-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes v1-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0; } }
        @keyframes v1-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes v1-counter { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes v1-trace { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }

        .v1-pin { animation: v1-float 3.6s ease-in-out infinite; }
        .v1-pulse::after {
          content: ''; position: absolute; inset: -4px; border-radius: inherit;
          border: 2px solid ${COBALT}; animation: v1-pulse 2s ease-out infinite;
        }
        .v1-marquee { animation: v1-marquee 40s linear infinite; }

        .v1 .underline-hover { background-image: linear-gradient(${INK}, ${INK}); background-size: 0 1px; background-position: 0 100%; background-repeat: no-repeat; transition: background-size 0.25s; }
        .v1 .underline-hover:hover { background-size: 100% 1px; }

        .v1 .feature-spread h3 { font-feature-settings: "ss01"; }
      `}</style>

      <div className="v1">

        {/* ── NAV ───────────────────────────────────── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          padding: '20px 40px',
          background: `${PAPER}E0`, backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${RULE}`,
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <a href="/"><Wordmark /></a>

            <div style={{ display: 'flex', gap: 28, fontSize: 14 }}>
              {['Product', 'Pricing', 'Customers', 'Changelog', 'Docs'].map((t) => (
                <a key={t} href={`#${t.toLowerCase()}`} className="nav-link" style={{ fontWeight: 500 }}>{t}</a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <a href="#" className="nav-link" style={{ fontSize: 14, fontWeight: 500 }}>Sign in</a>
              <button className="pill-cta pill-cta-primary" style={{
                padding: '9px 20px', borderRadius: 9999, border: 'none',
                background: COBALT, color: '#fff', fontSize: 14, fontWeight: 600,
              }}>
                Get Serif.io →
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO ──────────────────────────────────── */}
        <section style={{ padding: '140px 40px 120px', position: 'relative' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 56 }}>
              <Pill padding="6px 12px" size={12} fg={COBALT} border={COBALT} weight={600}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: COBALT, position: 'relative', display: 'inline-block',
                }} className="v1-pulse" />
                Now in public beta
              </Pill>
              <Pill padding="6px 12px" size={12} fg={SLATE} border={RULE_STRONG} weight={500}>
                v0.4 · Approve & reject workflow
              </Pill>
            </div>

            <h1 style={{
              fontFamily: SANS, fontSize: 'clamp(64px, 9vw, 132px)', fontWeight: 700,
              lineHeight: 0.94, letterSpacing: '-0.045em',
              margin: '0 0 48px', color: INK, maxWidth: 1100,
            }}>
              The fastest path<br />from <span style={{ color: COBALT }}>this looks off</span><br />to <em style={{ fontStyle: 'normal', textDecoration: 'underline', textDecorationThickness: '4px', textUnderlineOffset: '12px', textDecorationColor: COBALT }}>this is shipped.</em>
            </h1>

            <div style={{
              display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end',
              maxWidth: 1100,
            }}>
              <p style={{
                fontSize: 22, lineHeight: 1.45, color: SLATE, margin: 0, maxWidth: 580,
                fontWeight: 400, letterSpacing: '-0.005em',
              }}>
                Drop a pin on any element. Leave a comment. Approve, reject, ship.
                Visual feedback that lives on the page — not in a ticket queue.
              </p>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-start' }}>
                <button className="pill-cta pill-cta-primary" style={{
                  padding: '14px 28px', borderRadius: 9999, border: 'none',
                  background: COBALT, color: '#fff', fontSize: 15, fontWeight: 600, letterSpacing: '-0.005em',
                }}>
                  Start free →
                </button>
                <button className="pill-cta pill-cta-ghost" style={{
                  padding: '14px 28px', borderRadius: 9999, border: `1px solid ${INK}`,
                  background: 'transparent', color: INK, fontSize: 15, fontWeight: 500, letterSpacing: '-0.005em',
                }}>
                  Watch the 60s demo
                </button>
              </div>
            </div>
          </div>

          {/* Hero meta strip */}
          <div style={{
            position: 'absolute', bottom: 30, left: 0, right: 0,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0 40px',
            fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            <span>SCROLL · 001 / OVERVIEW</span>
            <span>SERIF.IO — VISUAL FEEDBACK FOR PRODUCT TEAMS</span>
            <span>EST. 2026</span>
          </div>
        </section>

        {/* ── DEMO STRIP (live-feeling product preview) ─ */}
        <section style={{
          padding: '0 40px 120px', position: 'relative',
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            position: 'relative',
          }}>
            {/* Floating browser */}
            <div style={{
              background: '#fff', borderRadius: 18, overflow: 'hidden',
              border: `1px solid ${RULE}`,
              boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 60px 120px -40px rgba(21,20,15,0.25), 0 30px 60px -30px rgba(21,20,15,0.12)',
              position: 'relative',
            }}>
              {/* Title bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px',
                borderBottom: `1px solid ${RULE}`, background: BONE,
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#e0ddd2','#e0ddd2','#e0ddd2'].map((c, i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, padding: '6px 14px', borderRadius: 7,
                  background: SURFACE, fontFamily: MONO, fontSize: 12, color: SLATE, textAlign: 'center',
                  border: `1px solid ${RULE}`, marginLeft: 12, letterSpacing: '0.02em',
                }}>
                  acme-app.com
                </div>
                <Pill padding="4px 10px" size={11} fg={COBALT} border={COBALT} weight={600}>
                  Live · 4 viewers
                </Pill>
              </div>

              {/* Canvas */}
              <div style={{
                padding: '64px 80px 80px', position: 'relative', minHeight: 460, background: '#fff',
              }}>
                {/* fake hero */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                  <div style={{ width: 72, height: 24, borderRadius: 9999, background: '#f0ecdf', margin: '0 auto 24px', border: `1px solid ${RULE}` }} />
                  <div style={{ width: 380, height: 18, borderRadius: 6, background: INK, margin: '0 auto 12px' }} />
                  <div style={{ width: 280, height: 18, borderRadius: 6, background: INK, margin: '0 auto 22px' }} />
                  <div style={{ width: 320, height: 9, borderRadius: 4, background: '#dad6cd', margin: '0 auto 8px' }} />
                  <div style={{ width: 240, height: 9, borderRadius: 4, background: '#dad6cd', margin: '0 auto 28px' }} />
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                    <div style={{ width: 110, height: 36, borderRadius: 9999, background: COBALT }} />
                    <div style={{ width: 110, height: 36, borderRadius: 9999, background: SURFACE, border: `1px solid ${RULE}` }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                  {[0, 1, 2, 3].map((j) => (
                    <div key={j} style={{ width: 150, padding: 18, borderRadius: 12, background: PAPER, border: `1px solid ${RULE}` }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: '#e0dcd2', marginBottom: 12 }} />
                      <div style={{ width: '78%', height: 9, borderRadius: 3, background: '#d8d4cc', marginBottom: 6 }} />
                      <div style={{ width: '60%', height: 7, borderRadius: 3, background: '#e8e4dc', marginBottom: 4 }} />
                      <div style={{ width: '40%', height: 7, borderRadius: 3, background: '#e8e4dc' }} />
                    </div>
                  ))}
                </div>

                {/* Pin trace path */}
                <svg style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  pointerEvents: 'none',
                }}>
                  <path
                    d="M 110 110 Q 280 60 380 180 T 700 280 T 480 380"
                    stroke={COBALT}
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    fill="none"
                    opacity="0.35"
                  />
                </svg>

                {/* Pins */}
                {[
                  { top: 90, left: 96, char: 'A', delay: 0, label: 'Ana — change CTA copy?' },
                  { top: 200, right: 140, char: 'J', delay: 0.6, label: '' },
                  { bottom: 120, left: '46%', char: 'M', delay: 1.2, label: 'Resolved 2m ago', resolved: true },
                ].map((p, i) => (
                  <div key={i} className="v1-pin" style={{
                    position: 'absolute',
                    top: p.top as any, left: p.left as any, right: p.right as any, bottom: p.bottom as any,
                    animationDelay: `${p.delay}s`,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 9,
                      background: p.resolved ? '#fff' : COBALT,
                      color: p.resolved ? COBALT : '#fff',
                      border: `1.5px solid ${p.resolved ? COBALT : '#fff'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: SANS, fontSize: 12, fontWeight: 700,
                      boxShadow: '0 6px 14px -4px rgba(43,76,199,0.4)',
                      flexShrink: 0,
                    }}>
                      {p.resolved ? '✓' : p.char}
                    </div>
                    {p.label && (
                      <span style={{
                        background: INK, color: '#fff',
                        fontSize: 12, fontWeight: 500, padding: '6px 10px', borderRadius: 9999,
                        whiteSpace: 'nowrap',
                        boxShadow: '0 8px 20px -8px rgba(21,20,15,0.4)',
                      }}>
                        {p.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating sidebar preview */}
            <div style={{
              position: 'absolute', top: 80, right: -36,
              width: 280, background: SURFACE, borderRadius: 14, padding: 16,
              border: `1px solid ${RULE}`,
              boxShadow: '0 30px 60px -20px rgba(21,20,15,0.18), 0 12px 30px -12px rgba(21,20,15,0.1)',
              transform: 'rotate(2.5deg)',
            }}>
              <div style={{ fontSize: 11, color: STONE, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
                Open · 3
              </div>
              {[
                { name: 'Ana', text: 'Change CTA copy — "Start free" feels generic', time: '2m', cobalt: true },
                { name: 'Jul', text: 'Card spacing too tight on the right', time: '14m' },
                { name: 'Mat', text: 'Headline could be sharper', time: '1h' },
              ].map((c, i) => (
                <div key={i} style={{
                  padding: '12px 0', borderBottom: i < 2 ? `1px solid ${RULE}` : 'none',
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, background: c.cobalt ? COBALT : INK,
                    color: '#fff', fontSize: 11, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{c.name[0]}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: INK }}>{c.name}</span>
                      <span style={{ fontSize: 11, color: STONE, fontFamily: MONO }}>{c.time}</span>
                    </div>
                    <p style={{ fontSize: 12, lineHeight: 1.4, color: SLATE, margin: 0 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOGO MARQUEE ──────────────────────────── */}
        <section style={{
          padding: '32px 0', borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}`,
          overflow: 'hidden', background: SURFACE,
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', marginBottom: 18 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: STONE,
              textTransform: 'uppercase', letterSpacing: '0.16em',
              margin: 0, fontFamily: MONO,
            }}>
              ↳ Trusted by product teams shipping at
            </p>
          </div>
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="v1-marquee" style={{
              display: 'flex', alignItems: 'center', gap: 64,
              whiteSpace: 'nowrap', paddingRight: 64,
            }}>
              {[...Array(2)].flatMap((_, set) =>
                ['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Supabase', 'Resend', 'Railway', 'Anthropic', 'Arc'].map((name, i) => (
                  <span key={`${set}-${i}`} style={{
                    fontSize: 28, fontWeight: 700, color: STONE,
                    letterSpacing: '-0.025em',
                  }}>{name}</span>
                ))
              )}
            </div>
          </div>
        </section>

        {/* ── COBALT MANIFESTO ──────────────────────── */}
        <section style={{
          background: COBALT, color: '#fff',
          padding: '160px 40px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 32,
            }}>
              ¶ A small, deliberate manifesto
            </div>
            <h2 style={{
              fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 700,
              lineHeight: 1.02, letterSpacing: '-0.035em', margin: '0 0 40px',
              maxWidth: 1100,
            }}>
              Tickets are where good ideas go to <span style={{ textDecoration: 'line-through', textDecorationThickness: '5px', opacity: 0.5 }}>die</span> wait six weeks.
            </h2>
            <p style={{
              fontSize: 22, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)',
              margin: '0 0 48px', maxWidth: 720, fontWeight: 400,
            }}>
              Every screenshot in Slack. Every "see comment 47" in Linear. Every Loom that nobody watches.
              These are receipts of the same problem: <strong>the feedback is in one place, the product is in another.</strong>
            </p>
            <p style={{
              fontSize: 22, lineHeight: 1.5, color: '#fff', margin: 0, maxWidth: 720,
              fontWeight: 500, letterSpacing: '-0.005em',
            }}>
              Serif.io puts feedback on the page. So the feedback dies, but the fix doesn't.
            </p>
          </div>
        </section>

        {/* ── FEATURES (magazine spreads) ──────────── */}
        <section id="product" style={{ padding: '160px 40px 80px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 120 }}>
              <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
                <Pill padding="5px 12px" size={11} fg={COBALT} border={COBALT} weight={600}>
                  § 02 · The product
                </Pill>
                <h2 style={{
                  fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em',
                  margin: '24px 0 24px', lineHeight: 1.02, color: INK,
                }}>
                  Three primitives.<br />Built like good type.
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.55, color: SLATE, margin: 0, maxWidth: 380 }}>
                  Pin, comment, resolve. The whole product is three actions you already know.
                  Everything else gets out of your way.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
                {[
                  {
                    n: '01',
                    title: 'Pin anywhere.',
                    desc: 'Click any element to drop a pin. Coordinates persist across redeploys, so feedback never drifts off the page.',
                    bullet: 'Works with any React app · Two lines to install · No config needed',
                  },
                  {
                    n: '02',
                    title: 'Comment in context.',
                    desc: 'Threads live next to the element they\'re about. Mention teammates, paste screenshots, attach the URL. The page is the conversation.',
                    bullet: 'Real-time threads · @mentions · Screenshot paste · Per-element history',
                  },
                  {
                    n: '03',
                    title: 'Resolve, ship, move on.',
                    desc: 'Approve a comment to mark it shipped. Reject to archive. Every decision leaves an audit trail — no black boxes.',
                    bullet: 'Approve / reject / archive · Audit trail · Per-comment status · CSV export',
                  },
                ].map((f, i) => (
                  <div key={i} className="feature-spread" style={{
                    paddingTop: 40, borderTop: `1px solid ${INK}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 28 }}>
                      <span style={{ fontFamily: MONO, fontSize: 13, color: STONE, letterSpacing: '0.08em' }}>
                        FEATURE / {f.n}
                      </span>
                      <span style={{ height: 1, flex: 1, background: RULE }} />
                    </div>
                    <h3 style={{
                      fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em',
                      lineHeight: 1.02, margin: '0 0 24px', color: INK,
                    }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: 19, lineHeight: 1.55, color: SLATE, margin: '0 0 24px', maxWidth: 600 }}>
                      {f.desc}
                    </p>
                    <p style={{
                      fontFamily: MONO, fontSize: 13, color: SLATE, margin: 0, letterSpacing: '0.02em',
                    }}>
                      {f.bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMMENTS WALL (social proof) ──────────── */}
        <section id="customers" style={{
          padding: '120px 40px', background: SURFACE, borderTop: `1px solid ${RULE}`,
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 32 }}>
              <div>
                <Pill padding="5px 12px" size={11} fg={COBALT} border={COBALT} weight={600}>
                  § 03 · The wall
                </Pill>
                <h2 style={{
                  fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em',
                  margin: '20px 0 0', lineHeight: 1.02, maxWidth: 700,
                }}>
                  Pinned. By teams who ship for a living.
                </h2>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 13, color: SLATE, textAlign: 'right' }}>
                <div style={{ fontSize: 32, color: INK, fontWeight: 700, letterSpacing: '-0.03em', fontFamily: SANS }}>
                  12,847
                </div>
                <div style={{ marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Fixes shipped this month
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { name: 'Ana Reyes', role: 'Head of Design, Dotwork', avatar: COBALT,
                  text: 'We deleted our "Design QA" Slack channel. The pins are the channel now. The team ships 2x faster.',
                  long: true },
                { name: 'Jul Hernández', role: 'PM, Mileway', avatar: INK,
                  text: '“See comment 47” died here.' },
                { name: 'Marko V.', role: 'Founder, Olin', avatar: COBALT,
                  text: 'Feels like Linear for visual feedback — minimal but it gets the whole job done.' },
                { name: 'Sara Lin', role: 'Eng Lead, Sprig', avatar: INK,
                  text: 'Two lines to install. Two days for the whole org to switch off Notion screenshots.', long: true },
                { name: 'Diego B.', role: 'CD, Bricked', avatar: COBALT,
                  text: 'The fastest "this looks off → this is fixed" loop I\'ve used.' },
                { name: 'Talia O.', role: 'Designer, Plait', avatar: INK,
                  text: 'It respects the page. That alone earned my switch.' },
              ].map((c, i) => (
                <div key={i} style={{
                  background: '#fff', border: `1px solid ${RULE}`, borderRadius: 14, padding: 24,
                  gridColumn: c.long ? 'span 2' : 'span 1',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 200,
                }}>
                  <p style={{
                    fontSize: c.long ? 22 : 17, lineHeight: 1.45, color: INK, margin: '0 0 24px',
                    letterSpacing: '-0.005em', fontWeight: c.long ? 500 : 400,
                  }}>
                    {c.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 9, background: c.avatar,
                      color: '#fff', fontSize: 13, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {c.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: INK, lineHeight: 1.3 }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: STONE, fontFamily: MONO }}>{c.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────── */}
        <section id="pricing" style={{ padding: '120px 40px' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ marginBottom: 56 }}>
              <Pill padding="5px 12px" size={11} fg={COBALT} border={COBALT} weight={600}>
                § 04 · Pricing
              </Pill>
              <h2 style={{
                fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em',
                margin: '20px 0 12px', lineHeight: 1.02,
              }}>
                Two plans. No surprises.
              </h2>
              <p style={{ fontSize: 18, color: SLATE, margin: 0 }}>
                Start free, upgrade when the team grows. No per-seat creep.
              </p>
            </div>

            <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
              {[
                {
                  name: 'Free',
                  price: '$0',
                  desc: 'For individuals & side projects.',
                  feats: ['1 project', 'Up to 50 comments', 'Pin & comment', 'Basic sidebar'],
                  cta: 'Start free',
                  primary: false,
                },
                {
                  name: 'Pro',
                  price: '$19',
                  perks: 'per editor / month',
                  desc: 'For teams shipping fast.',
                  feats: ['Unlimited projects', 'Unlimited comments', 'Approve / reject workflow', 'Priority support', 'Custom branding'],
                  cta: 'Upgrade to Pro',
                  primary: true,
                },
              ].map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '180px 1fr 1.2fr 200px',
                  alignItems: 'center', gap: 32,
                  padding: '40px 0',
                  borderTop: i === 1 ? `1px solid ${RULE}` : 'none',
                }}>
                  <div>
                    <Pill padding="5px 12px" size={11} fg={p.primary ? COBALT : INK} border={p.primary ? COBALT : INK} weight={600}>
                      {p.name.toUpperCase()}
                    </Pill>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
                        {p.price}
                      </span>
                      <span style={{ fontSize: 14, color: STONE }}>/mo</span>
                    </div>
                    <div style={{ fontSize: 13, color: STONE, marginTop: 6, fontFamily: MONO, letterSpacing: '0.02em' }}>
                      {p.perks ?? p.desc}
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {p.feats.map((f) => (
                      <li key={f} style={{
                        fontSize: 14, color: SLATE, display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COBALT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={p.primary ? 'pill-cta pill-cta-primary' : 'pill-cta pill-cta-ghost'} style={{
                    padding: '14px 28px', borderRadius: 9999,
                    border: p.primary ? 'none' : `1px solid ${INK}`,
                    background: p.primary ? COBALT : 'transparent',
                    color: p.primary ? '#fff' : INK, fontSize: 14, fontWeight: 600,
                    width: '100%',
                  }}>
                    {p.cta} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <section style={{ padding: '120px 40px', background: SURFACE, borderTop: `1px solid ${RULE}` }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <Pill padding="5px 12px" size={11} fg={COBALT} border={COBALT} weight={600}>
              § 05 · Questions
            </Pill>
            <h2 style={{
              fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em',
              margin: '20px 0 56px', lineHeight: 1.02,
            }}>
              Things people ask before installing.
            </h2>
            <div>
              {[
                ['Does it work outside React?', 'Today: React 18+ and Next.js. Vue and Svelte adapters are planned for Q3.'],
                ['How are pins persisted across deploys?', 'Coordinates are stored relative to a CSS selector + element index, not pixel position. So redeploys, A/B tests, and refactors don\'t orphan feedback.'],
                ['What about authenticated pages?', 'Serif.io respects your auth. The widget mounts post-auth and pins are scoped to the route.'],
                ['Can we self-host?', 'Pro plans can self-host the data plane. The widget is open source.'],
                ['Is there an API?', 'Yes. REST + Webhooks. Every comment, every status change, every approve/reject hits your endpoint.'],
              ].map(([q, a], i) => (
                <details key={i} style={{
                  borderTop: `1px solid ${RULE}`,
                  padding: '28px 0',
                  borderBottom: i === 4 ? `1px solid ${RULE}` : 'none',
                }}>
                  <summary style={{
                    fontSize: 22, fontWeight: 600, color: INK, cursor: 'pointer',
                    listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    letterSpacing: '-0.015em',
                  }}>
                    {q}
                    <span style={{ fontFamily: MONO, fontSize: 14, color: STONE, fontWeight: 400 }}>
                      0{i + 1} ↓
                    </span>
                  </summary>
                  <p style={{ fontSize: 17, lineHeight: 1.55, color: SLATE, margin: '16px 0 0', maxWidth: 720 }}>
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING ──────────────────────────────── */}
        <section style={{
          background: INK, color: PAPER,
          padding: '180px 40px 120px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: -200, left: '50%', transform: 'translateX(-50%)',
            width: 1000, height: 1000, borderRadius: '50%',
            background: `radial-gradient(circle, ${COBALT}40 0%, transparent 60%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(64px, 9vw, 144px)', fontWeight: 700,
              lineHeight: 0.95, letterSpacing: '-0.045em',
              margin: '0 0 56px',
            }}>
              Ship the fix.<br />
              <span style={{ color: COBALT }}>Skip the ticket.</span>
            </h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 80 }}>
              <button className="pill-cta pill-cta-primary" style={{
                padding: '16px 36px', borderRadius: 9999, border: 'none',
                background: COBALT, color: '#fff', fontSize: 16, fontWeight: 600,
              }}>
                Start free →
              </button>
              <button style={{
                padding: '16px 36px', borderRadius: 9999, border: `1px solid rgba(247,243,233,0.3)`,
                background: 'transparent', color: PAPER, fontSize: 16, fontWeight: 500, cursor: 'pointer',
                fontFamily: SANS,
              }}>
                Read the docs
              </button>
            </div>
            <Wordmark size={18} fg={PAPER} border={PAPER} padding="9px 20px" />
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────── */}
        <footer style={{
          background: INK, color: STONE, padding: '64px 40px 40px',
          borderTop: `1px solid rgba(247,243,233,0.08)`,
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48,
            paddingBottom: 56, borderBottom: `1px solid rgba(247,243,233,0.08)`,
          }}>
            <div>
              <Wordmark fg={PAPER} border={PAPER} />
              <p style={{ fontSize: 14, lineHeight: 1.55, color: STONE, margin: '20px 0 0', maxWidth: 320 }}>
                Visual feedback for product teams. Built in 2026 by people who got tired of screenshots.
              </p>
            </div>
            {[
              { title: 'Product', items: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Company', items: ['About', 'Customers', 'Blog', 'Careers'] },
              { title: 'Resources', items: ['Docs', 'API', 'Community', 'Status'] },
              { title: 'Legal', items: ['Privacy', 'Terms', 'Security', 'DPA'] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 11, fontWeight: 600, color: PAPER, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>
                  {col.title}
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="underline-hover" style={{ fontSize: 14, color: STONE }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{
            maxWidth: 1280, margin: '0 auto', paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: MONO, fontSize: 12, letterSpacing: '0.04em',
          }}>
            <span>SERIF.IO · EST. 2026 · ALL RIGHTS</span>
            <span>↳ Built on the open web</span>
          </div>
        </footer>
      </div>

      {apiBase && projectId && <FeedbackWidget projectId={projectId} apiBase={apiBase} />}
    </div>
  )
}
