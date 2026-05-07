

const SANS = '"Switzer", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif'
const SERIF = '"Instrument Serif", "Iowan Old Style", "Apple Garamond", Georgia, serif'
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace'

const BG = '#f8f6f1'
const SURFACE = '#fefdfa'
const INK = '#15140f'
const INK_2 = '#3a3833'
const MUTED = '#8c887e'
const RULE = 'rgba(21,20,15,0.08)'
const VERMILLION = '#dc3a26'

// Wordmark: "Seri" sans + "f" serif. The single deliberate detail.
const Wordmark = ({ size = 22, color = INK }: { size?: number; color?: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', color, lineHeight: 1 }}>
    <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: size, letterSpacing: '-0.03em' }}>seri</span>
    <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: size * 1.1, marginLeft: -size * 0.02, lineHeight: 0.9 }}>f</span>
  </span>
)

// Monogram: clean sans T + S, with single serif on the T.
const Monogram = ({ size = 28, fg = '#fff', bg = INK }: { size?: number; fg?: string; bg?: string }) => (
  <div style={{
    width: size, height: size, borderRadius: size * 0.22, background: bg,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: SANS, fontWeight: 700, fontSize: size * 0.5, color: fg, letterSpacing: '-0.03em',
  }}>
    <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: size * 0.62, marginRight: -1 }}>T</span>
    <span>S</span>
  </div>
)

export function LandingV2() {
  return (
    <div style={{ fontFamily: SANS, color: INK, background: BG, minHeight: '100vh' }}>
      <style>{`
        .v2 *::selection { background: ${VERMILLION}; color: #fff; }
        .v2 a { color: inherit; text-decoration: none; }
        .v2 .nav-link { transition: color 0.15s; }
        .v2 .nav-link:hover { color: ${INK}; }
        .v2 .cta-primary { transition: background 0.15s, transform 0.15s; }
        .v2 .cta-primary:hover { background: #0a0907; transform: translateY(-1px); }
        .v2 .cta-secondary { transition: border-color 0.15s, color 0.15s; }
        .v2 .cta-secondary:hover { border-color: ${INK}; color: ${INK}; }
        .v2 .card { transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s; }
        .v2 .card:hover { transform: translateY(-2px); border-color: rgba(21,20,15,0.16); box-shadow: 0 12px 32px -16px rgba(21,20,15,0.18); }
        @keyframes v2-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .v2-pin { animation: v2-float 3.4s ease-in-out infinite; }
      `}</style>

      <div className="v2">
        {/* Nav */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(248,246,241,0.78)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${RULE}`,
        }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Monogram size={26} />
                <Wordmark size={20} />
              </a>
              <div style={{ display: 'flex', gap: 24 }}>
                {['Features', 'Pricing', 'Changelog', 'Docs'].map((t) => (
                  <a key={t} href={`#${t.toLowerCase()}`} className="nav-link" style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>{t}</a>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <a href="#" className="nav-link" style={{ fontSize: 13, color: MUTED, fontWeight: 500 }}>Sign in</a>
              <a href="#" className="cta-primary" style={{
                padding: '8px 16px', borderRadius: 8, background: INK, color: '#fff',
                fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                Get Serif <span style={{ opacity: 0.5 }}>→</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ padding: '88px 32px 72px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '5px 12px 5px 5px', borderRadius: 9999,
              background: SURFACE, border: `1px solid ${RULE}`,
              fontSize: 12, fontWeight: 500, color: INK_2, marginBottom: 28,
            }}>
              <span style={{
                padding: '2px 8px', borderRadius: 9999, background: VERMILLION, color: '#fff',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
              }}>NEW</span>
              v0.4 — Comments as proofreader marks
            </div>

            <h1 style={{
              fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.04em',
              margin: '0 auto 24px', maxWidth: 880, color: INK,
            }}>
              Visual feedback,{' '}
              <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: VERMILLION }}>
                built like good type.
              </span>
            </h1>
            <p style={{
              fontSize: 19, lineHeight: 1.55, color: INK_2, maxWidth: 580, margin: '0 auto 40px', fontWeight: 400,
            }}>
              Drop pins, leave comments, ship the fix — without leaving the page. The small, deliberate
              feedback layer for product teams.
            </p>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 64 }}>
              <a href="#" className="cta-primary" style={{
                padding: '13px 26px', borderRadius: 10, background: INK, color: '#fff',
                fontSize: 14, fontWeight: 600,
              }}>
                Start free →
              </a>
              <a href="#how" className="cta-secondary" style={{
                padding: '13px 26px', borderRadius: 10, background: SURFACE, border: `1px solid ${RULE}`,
                color: INK_2, fontSize: 14, fontWeight: 500,
              }}>
                How it works
              </a>
            </div>

            {/* Mockup */}
            <div style={{
              maxWidth: 880, margin: '0 auto',
              background: SURFACE, borderRadius: 14, overflow: 'hidden',
              border: `1px solid ${RULE}`,
              boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 30px 60px -20px rgba(21,20,15,0.18), 0 8px 24px -10px rgba(21,20,15,0.08)',
              textAlign: 'left', position: 'relative',
            }}>
              {/* Title bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px',
                borderBottom: `1px solid ${RULE}`, background: '#f1eee7',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e0ddd4' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e0ddd4' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e0ddd4' }} />
                </div>
                <div style={{
                  flex: 1, marginLeft: 8, padding: '5px 14px', borderRadius: 6,
                  background: SURFACE, fontFamily: MONO, fontSize: 11, color: MUTED, textAlign: 'center',
                  border: `1px solid ${RULE}`,
                }}>
                  acme-app.vercel.app
                </div>
              </div>
              {/* Page content */}
              <div style={{ padding: '40px 48px 48px', position: 'relative', minHeight: 320, background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: INK }} />
                    <div style={{ width: 60, height: 9, borderRadius: 3, background: '#d8d4cc' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 14 }}>
                    <div style={{ width: 40, height: 8, borderRadius: 3, background: '#e8e4dc' }} />
                    <div style={{ width: 40, height: 8, borderRadius: 3, background: '#e8e4dc' }} />
                    <div style={{ width: 60, height: 26, borderRadius: 6, background: INK }} />
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: 30 }}>
                  <div style={{ width: 300, height: 13, borderRadius: 4, background: INK, margin: '0 auto 10px' }} />
                  <div style={{ width: 220, height: 13, borderRadius: 4, background: INK, margin: '0 auto 18px' }} />
                  <div style={{ width: 260, height: 7, borderRadius: 3, background: '#dad6cd', margin: '0 auto 6px' }} />
                  <div style={{ width: 200, height: 7, borderRadius: 3, background: '#dad6cd', margin: '0 auto 22px' }} />
                  <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                    <div style={{ width: 90, height: 30, borderRadius: 6, background: INK }} />
                    <div style={{ width: 90, height: 30, borderRadius: 6, background: SURFACE, border: `1px solid ${RULE}` }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  {[0, 1, 2].map((j) => (
                    <div key={j} style={{ width: 130, padding: 14, borderRadius: 9, background: BG, border: `1px solid ${RULE}` }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: '#e0dcd2', marginBottom: 10 }} />
                      <div style={{ width: '78%', height: 8, borderRadius: 3, background: '#d8d4cc', marginBottom: 6 }} />
                      <div style={{ width: '58%', height: 6, borderRadius: 3, background: '#e8e4dc' }} />
                    </div>
                  ))}
                </div>

                {/* Modern UI pins — dark rounded square with avatar letter */}
                {[
                  { top: 56, left: 64, char: 'A', delay: 0 },
                  { top: 18, right: 92, char: 'J', delay: 0.6 },
                  { bottom: 78, left: '46%', char: 'M', delay: 1.2 },
                ].map((p, i) => (
                  <div key={i} className="v2-pin" style={{
                    position: 'absolute',
                    top: p.top as any, left: p.left as any, right: p.right as any, bottom: p.bottom as any,
                    animationDelay: `${p.delay}s`,
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: INK, color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: SANS, fontSize: 12, fontWeight: 700,
                      boxShadow: '0 6px 14px -4px rgba(21,20,15,0.4)',
                      border: `1.5px solid #fff`,
                    }}>
                      {p.char}
                    </div>
                  </div>
                ))}

                {/* Comment popover */}
                <div style={{
                  position: 'absolute', top: 40, left: 96,
                  background: INK, borderRadius: 10, padding: '8px 10px 8px 12px',
                  display: 'flex', alignItems: 'center', gap: 10,
                  boxShadow: '0 12px 24px -8px rgba(21,20,15,0.25)',
                  fontFamily: SANS,
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, background: VERMILLION,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: '#fff',
                  }}>A</div>
                  <span style={{ color: '#e8e4dc', fontSize: 12, whiteSpace: 'nowrap', fontWeight: 500 }}>
                    headline could be tighter
                  </span>
                  <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.12)' }} />
                  <span style={{ fontFamily: SERIF, fontStyle: 'italic', color: VERMILLION, fontSize: 13 }}>
                    stet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section style={{
          padding: '36px 32px', borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}`,
          background: SURFACE,
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 36, justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0 }}>
              Built by teams from
            </span>
            <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
              {['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Supabase'].map((n) => (
                <span key={n} style={{ fontSize: 15, fontWeight: 700, color: '#bcb8ad', letterSpacing: '-0.01em' }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{ padding: '96px 32px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 56, maxWidth: 580 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: VERMILLION, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                Features
              </div>
              <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', margin: '0 0 14px', lineHeight: 1.05 }}>
                Built for the <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>small details</span>.
              </h2>
              <p style={{ fontSize: 17, color: INK_2, margin: 0, lineHeight: 1.55 }}>
                Three primitives, sharp and predictable. Nothing else gets in the way of shipping the fix.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                {
                  num: '01',
                  title: 'Pin anywhere',
                  desc: 'Click any element to drop a pin. Coordinates persist across redeploys, so feedback never drifts off the page.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={VERMILLION} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  num: '02',
                  title: 'Live collaboration',
                  desc: 'Send a single link. Your team sees pins and comments in real time — no screenshots, no Slack threads, no friction.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={VERMILLION} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  num: '03',
                  title: 'Stet, strike, ship',
                  desc: 'Approve, reject, resolve — every comment leaves a clean audit trail. Editor controls borrowed from print.',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={VERMILLION} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
              ].map((f, i) => (
                <div key={i} className="card" style={{
                  background: SURFACE, border: `1px solid ${RULE}`, borderRadius: 14, padding: 26,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: '#fef0ec', border: `1px solid #f7d4cb`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {f.icon}
                    </div>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: MUTED }}>§ {f.num}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.015em' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: INK_2, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" style={{ padding: '96px 32px', borderTop: `1px solid ${RULE}` }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 56 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: VERMILLION, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                How it works
              </div>
              <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', margin: 0, lineHeight: 1.05 }}>
                Three steps, <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>no friction</span>.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { step: '01', title: 'Install', desc: 'Add a single React component. Two lines of code, no config.' },
                { step: '02', title: 'Share', desc: 'Send the URL. Your team pins comments directly on the live product.' },
                { step: '03', title: 'Resolve', desc: 'Open the sidebar. Approve, reject, or stet — every comment, recorded.' },
              ].map((s, i) => (
                <div key={i} className="card" style={{
                  padding: 28, borderRadius: 14,
                  background: SURFACE, border: `1px solid ${RULE}`,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    fontFamily: SERIF, fontStyle: 'italic', fontSize: 56, fontWeight: 400,
                    color: VERMILLION, lineHeight: 0.9, marginBottom: 18,
                  }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.015em' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: INK_2, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" style={{ padding: '96px 32px', borderTop: `1px solid ${RULE}` }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: VERMILLION, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                Pricing
              </div>
              <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', margin: '0 0 12px', lineHeight: 1.05 }}>
                Simple, like a <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>masthead</span>.
              </h2>
              <p style={{ fontSize: 16, color: INK_2, margin: 0 }}>Start free. Upgrade when the team grows.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {[
                {
                  name: 'Free',
                  price: '$0',
                  desc: 'For individuals & side projects.',
                  feats: ['1 project', 'Up to 50 comments', 'Pin & comment', 'Basic sidebar'],
                  cta: 'Get started',
                  primary: false,
                },
                {
                  name: 'Pro',
                  price: '$19',
                  desc: 'For teams shipping fast.',
                  feats: ['Unlimited projects', 'Unlimited comments', 'Approve / reject workflow', 'Priority support', 'Custom branding'],
                  cta: 'Upgrade to Pro',
                  primary: true,
                },
              ].map((p, i) => (
                <div key={i} style={{
                  background: p.primary ? INK : SURFACE,
                  color: p.primary ? '#fff' : INK,
                  border: p.primary ? '1px solid transparent' : `1px solid ${RULE}`,
                  borderRadius: 16, padding: 32, position: 'relative', overflow: 'hidden',
                }}>
                  {p.primary && (
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      padding: '3px 9px', borderRadius: 9999,
                      background: VERMILLION, fontSize: 10, fontWeight: 700, letterSpacing: '0.04em', color: '#fff',
                    }}>
                      RECOMMENDED
                    </div>
                  )}
                  <div style={{
                    fontSize: 12, fontWeight: 600,
                    color: p.primary ? '#a8a39a' : MUTED,
                    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12,
                  }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em' }}>{p.price}</span>
                    <span style={{ fontSize: 14, color: p.primary ? '#a8a39a' : MUTED }}>/mo</span>
                  </div>
                  <div style={{ fontSize: 14, color: p.primary ? '#a8a39a' : MUTED, marginBottom: 26 }}>{p.desc}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {p.feats.map((f) => (
                      <li key={f} style={{ fontSize: 14, color: p.primary ? '#d4d0c6' : INK_2, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={VERMILLION} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={p.primary ? 'cta-primary' : 'cta-secondary'} style={{
                    display: 'block', textAlign: 'center', padding: '12px 0', borderRadius: 10, fontSize: 14, fontWeight: 600,
                    background: p.primary ? VERMILLION : SURFACE,
                    color: p.primary ? '#fff' : INK,
                    border: p.primary ? 'none' : `1px solid ${RULE}`,
                  }}>
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '96px 32px', borderTop: `1px solid ${RULE}` }}>
          <div style={{
            maxWidth: 880, margin: '0 auto',
            background: INK, color: '#fff', borderRadius: 18, padding: '64px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(circle at 50% 100%, ${VERMILLION}26 0%, transparent 60%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                <Monogram size={44} fg="#fff" bg="rgba(255,255,255,0.08)" />
              </div>
              <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', margin: '0 0 14px', lineHeight: 1.05 }}>
                Ship the fix.<br/>
                <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: VERMILLION }}>Skip the ticket.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#a8a39a', margin: '0 0 28px' }}>
                Start collecting visual feedback in minutes. Free for small teams.
              </p>
              <a href="#" className="cta-primary" style={{
                display: 'inline-block', padding: '14px 32px', borderRadius: 10,
                background: '#fff', color: INK, fontSize: 14, fontWeight: 600,
              }}>
                Get Serif — free →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '36px 32px', borderTop: `1px solid ${RULE}` }}>
          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Monogram size={26} />
              <Wordmark size={18} color={INK_2} />
              <span style={{ fontSize: 12, color: MUTED, fontFamily: MONO, marginLeft: 6 }}>theserif.com</span>
            </div>
            <div style={{ display: 'flex', gap: 22, fontSize: 13, color: MUTED }}>
              {['GitHub', 'Docs', 'X', 'Contact'].map((t) => (
                <a key={t} href="#" className="nav-link">{t}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>

    </div>
  )
}
