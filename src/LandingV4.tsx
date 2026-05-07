

const SANS = '"Switzer", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif'
const SERIF = '"Instrument Serif", "Iowan Old Style", "Apple Garamond", Georgia, serif'
const MONO = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace'

const PAPER = '#F7F3E9'
const SURFACE = '#FDFBF4'
const BONE = '#E5DECB'
const STONE = '#BDB6A6'
const SLATE = '#5A5650'
const INK = '#15140F'
const COBALT = '#2B4CC7'
const RULE = 'rgba(21,20,15,0.08)'
const RULE_STRONG = 'rgba(21,20,15,0.16)'

// ──────────────────────────────────────────────────────────
// Atoms
// ──────────────────────────────────────────────────────────

// Logo PNG · the master mark
const LOGO_SRC = '/Serif-logo.png'
const LOGO_RATIO = 302 / 140 // intrinsic aspect

const WordmarkRaw = ({ height = 28, invert = false }: { height?: number; invert?: boolean }) => (
  <img
    src={LOGO_SRC}
    alt="Serif"
    width={Math.round(height * LOGO_RATIO)}
    height={height}
    style={{ display: 'block', filter: invert ? 'invert(1)' : 'none' }}
  />
)

// Live "Seri[f]" composition — used as a typographic specimen, not as the wordmark.
const SerifMark = ({ size = 28, color = INK, weight = 500 }: { size?: number; color?: string; weight?: number }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline', color, lineHeight: 1, letterSpacing: '-0.02em' }}>
    <span style={{ fontFamily: SANS, fontWeight: weight, fontSize: size }}>Seri</span>
    <span style={{
      fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
      fontSize: size * 1.14, lineHeight: 0.88,
      marginLeft: -size * 0.015,
    }}>f</span>
  </span>
)

const Pill = ({ children, fg = INK, border = INK, bg = 'transparent', padding = '6px 14px' }: any) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding, borderRadius: 9999,
    border: border ? `1px solid ${border}` : 'none',
    background: bg, color: fg, lineHeight: 1, whiteSpace: 'nowrap',
  }}>
    {children}
  </span>
)

const PillCaption = ({ children, fg = INK, border = INK, bg = 'transparent', size = 13, weight = 500, padding = '6px 14px' }: any) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding, borderRadius: 9999,
    border: border ? `1px solid ${border}` : 'none',
    background: bg, color: fg,
    fontFamily: SANS, fontWeight: weight, fontSize: size, letterSpacing: '-0.01em',
    lineHeight: 1, whiteSpace: 'nowrap',
  }}>
    {children}
  </span>
)

// Wordmark = pill containing the PNG logo
const Wordmark = ({ size = 20, fg = INK, border = INK, padding }: { size?: number; fg?: string; border?: string; padding?: string }) => {
  const padY = Math.round(size * 0.55)
  const padX = Math.round(size * 1.1)
  const invert = fg !== INK
  return (
    <Pill fg={fg} border={border} padding={padding ?? `${padY}px ${padX}px`}>
      <WordmarkRaw height={size} invert={invert} />
    </Pill>
  )
}

// Monogram = S sans + f italic serif inside a rounded square
const Monogram = ({ size = 48, fg = PAPER, bg = INK }: { size?: number; fg?: string; bg?: string }) => (
  <div style={{
    width: size, height: size, borderRadius: size * 0.24, background: bg,
    display: 'inline-flex', alignItems: 'baseline', justifyContent: 'center',
    paddingTop: size * 0.16, paddingLeft: size * 0.04,
  }}>
    <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: size * 0.55, color: fg, letterSpacing: '-0.04em', lineHeight: 1 }}>S</span>
    <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: size * 0.7, color: fg, lineHeight: 0.88, marginLeft: -size * 0.04 }}>f</span>
  </div>
)

const Caption = ({ children, color = STONE, size = 11 }: any) => (
  <span style={{
    fontFamily: MONO, fontSize: size, color, letterSpacing: '0.16em', textTransform: 'uppercase',
  }}>{children}</span>
)

// Display headline helper — Instrument Serif italic for the emphasized word
const Display = ({ children, size = 80, color = INK, lineHeight = 0.96, italic = false }: any) => (
  <h2 style={{
    fontFamily: italic ? SERIF : SANS,
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: size, fontWeight: italic ? 400 : 700,
    letterSpacing: '-0.04em', lineHeight, margin: 0, color,
  }}>{children}</h2>
)

// Italic emphasis word
const Em = ({ children, color = COBALT }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color }}>{children}</span>
)

const SlideMeta = ({ num, total, title }: { num: string; total: string; title: string }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.16em', textTransform: 'uppercase',
    paddingBottom: 18, borderBottom: `1px solid ${RULE}`, marginBottom: 56,
  }}>
    <span>
      <span style={{ color: COBALT, fontWeight: 600 }}>{num}</span>
      <span style={{ margin: '0 8px', color: STONE }}>/</span>
      <span>{total}</span>
    </span>
    <span style={{ color: SLATE }}>{title}</span>
    <span>Serif · Branding · Option 01 · 2026</span>
  </div>
)

// ──────────────────────────────────────────────────────────
// Slides
// ──────────────────────────────────────────────────────────

const NavBar = () => (
  <nav style={{
    position: 'sticky', top: 0, zIndex: 100,
    background: `${PAPER}E6`, backdropFilter: 'blur(14px)',
    borderBottom: `1px solid ${RULE}`, padding: '14px 32px',
  }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Wordmark size={14} padding="6px 14px" />
        <Caption color={STONE}>Branding · Option 01 · Vol. 01</Caption>
      </div>
      <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
        {['01 Cover', '02 Brief', '03 Strategy', '04 Mark', '05 Color', '06 Type', '07 Voice', '08 Applied', '09 Close'].map((t) => (
          <a key={t} href={`#${t.split(' ')[0]}`} style={{
            fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>{t}</a>
        ))}
      </div>
      <PillCaption size={11} fg={COBALT} border={COBALT} weight={600} padding="4px 10px">Draft v0.4</PillCaption>
    </div>
  </nav>
)

// 01 — COVER
const Cover = () => (
  <section id="01" style={{ minHeight: '100vh', padding: '80px 40px 60px', display: 'flex', flexDirection: 'column' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.16em', textTransform: 'uppercase',
        marginBottom: 96,
      }}>
        <span>Confidential · For internal review</span>
        <span>01 / 09 · Cover</span>
        <span>07 May 2026</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Caption color={COBALT} size={13}>↳ A branding proposal · Option 01</Caption>

        <div style={{ marginTop: 32 }}>
          <WordmarkRaw height={260} />
        </div>

        <div style={{ marginTop: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <h1 style={{
            fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.05,
            letterSpacing: '-0.015em', margin: 0, color: SLATE, maxWidth: 880,
          }}>
            Visual feedback directly on your product.
          </h1>
          <Wordmark size={20} padding="10px 22px" />
        </div>
      </div>

      <div style={{
        marginTop: 80, paddingTop: 24, borderTop: `1px solid ${INK}`,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        fontFamily: MONO, fontSize: 11, color: SLATE, letterSpacing: '0.04em',
      }}>
        {[
          ['Project', 'Serif · serif.io'],
          ['Stage', 'Pre-launch · Public beta'],
          ['Direction', 'Option 01 · The italic terminal'],
          ['Reviewers', 'Founders + design lead'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ color: STONE, textTransform: 'uppercase', marginBottom: 6 }}>{k}</div>
            <div style={{ color: INK, fontFamily: SANS, fontSize: 14, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// 02 — BRIEF
const Brief = () => (
  <section id="02" style={{ padding: '120px 40px', borderTop: `1px solid ${RULE}` }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="02" total="09" title="The brief" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
        <div>
          <Display size={80}>
            Define what<br />Serif looks,<br /><Em>sounds</Em>, and<br />feels like.
          </Display>
        </div>

        <div style={{ paddingTop: 24 }}>
          <p style={{
            fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
            fontSize: 28, lineHeight: 1.3, color: SLATE, margin: '0 0 56px',
            maxWidth: 720, letterSpacing: '-0.005em',
          }}>
            Serif is a visual feedback widget for product teams. It lives on the page, not in a ticket queue.
            The brand needs to signal craft to designers — and survive being shrunk to a 16px favicon.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${INK}` }}>
            {[
              { k: 'Audience', v: 'Designer-first teams shipping product weekly. PMs and engineers second.' },
              { k: 'Tone', v: 'Considered, dry, confident-not-corporate. Editorial without pastiche.' },
              { k: 'Constraints', v: 'Must compete next to Linear, Vercel, Notion. Must be unmistakable at 16px.' },
              { k: 'Out of scope', v: 'Mascots. Gradients. Stock photography. The colour purple.' },
            ].map((b) => (
              <div key={b.k} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32,
                padding: '20px 0', borderBottom: `1px solid ${RULE}`,
              }}>
                <Caption>{b.k}</Caption>
                <span style={{ fontFamily: SANS, fontSize: 16, color: INK, lineHeight: 1.5 }}>{b.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 03 — STRATEGY
const Strategy = () => (
  <section id="03" style={{ padding: '120px 40px', background: SURFACE, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="03" total="09" title="The idea" />

      <div style={{ marginBottom: 96 }}>
        <Caption color={COBALT} size={13}>↳ The strategic move</Caption>
        <h2 style={{
          fontFamily: SANS, fontSize: 'clamp(64px, 8vw, 112px)', fontWeight: 700,
          letterSpacing: '-0.045em', lineHeight: 0.98, margin: '24px 0 0', color: INK, maxWidth: 1200,
        }}>
          Name it Serif.<br /><Em>Show one.</Em>
        </h2>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
          fontSize: 26, lineHeight: 1.4, color: SLATE, margin: '40px 0 0', maxWidth: 760,
        }}>
          The wordmark contains exactly one serif — the italic <Em>f</Em>. Everything else is sans.
          The brand wears its name once, at the smallest deliberate detail. That single curve is the whole identity.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 80 }}>
        {[
          {
            n: '01',
            title: 'Quiet',
            desc: 'Designers turn off ads, hate gradients, mute notifications. We earn attention by deserving it.',
            example: 'Cream paper. Black ink. One accent. The italic f does the heavy lifting — no other ornament needed.',
          },
          {
            n: '02',
            title: 'Deliberate',
            desc: 'Every shape solves something. The italic terminal isn\'t decoration — it\'s the brand thesis in one curve.',
            example: 'A pill outline holds the wordmark. The italic f is reserved for headlines and the wordmark, never body.',
          },
          {
            n: '03',
            title: 'Editorial',
            desc: 'We sound like a person who\'s read books and shipped product, not a vendor reading a deck.',
            example: '"Ship the fix." Strong verb. The italic earns its place when the language earns it.',
          },
        ].map((p) => (
          <div key={p.n} style={{
            padding: 32, background: '#fff', borderRadius: 14, border: `1px solid ${RULE}`,
            display: 'flex', flexDirection: 'column', gap: 18, minHeight: 360,
          }}>
            <Caption>Pillar / {p.n}</Caption>
            <h3 style={{
              fontFamily: SANS, fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em',
              margin: 0, color: INK, lineHeight: 1,
            }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: SLATE, margin: 0 }}>{p.desc}</p>
            <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: `1px solid ${RULE}` }}>
              <Caption color={COBALT}>↳ In practice</Caption>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: SLATE, margin: '10px 0 0' }}>{p.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// 04 — THE MARK
const Mark = () => (
  <section id="04" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="04" total="09" title="The mark" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ The wordmark</Caption>
        <Display size={80}>
          The pill holds the<br /><Em>italic f.</Em>
        </Display>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
          fontSize: 24, lineHeight: 1.4, color: SLATE, margin: '32px 0 0', maxWidth: 760,
        }}>
          A rounded outline holds Switzer Medium next to a single Instrument Serif italic terminal.
          The serif is reserved — one letter, one place, one moment of warmth in an otherwise modern system.
        </p>
      </div>

      {/* Hero wordmark */}
      <div style={{
        padding: '120px 64px', background: '#fff', borderRadius: 22, border: `1px solid ${RULE}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
      }}>
        <Wordmark size={120} padding="48px 96px" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 80 }}>
        <div style={{ padding: 56, background: INK, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240 }}>
          <Wordmark size={48} fg={PAPER} border={PAPER} padding="22px 44px" />
        </div>
        <div style={{ padding: 56, background: COBALT, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240 }}>
          <Wordmark size={48} fg="#fff" border="#fff" padding="22px 44px" />
        </div>
      </div>

      {/* Construction zoom */}
      <div style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <Caption>↳ The single deliberate detail</Caption>
          <div style={{
            marginTop: 24, padding: 64, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            <WordmarkRaw height={180} />
            <div style={{
              position: 'absolute', bottom: 24, right: 32,
              fontFamily: MONO, fontSize: 11, color: COBALT, letterSpacing: '0.06em',
            }}>
              ↑ Instrument Serif italic, 1.14× cap
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 24 }}>
          {[
            ['Family · sans', 'Switzer, Medium (500)'],
            ['Family · serif', 'Instrument Serif, Italic (Regular)'],
            ['Tracking', '-0.02em'],
            ['Italic ratio', '1.14× cap-height'],
            ['Italic offset', '-0.015× cap (tucks into "Seri")'],
            ['Pill radius', '9999px (full)'],
            ['Border', '1px solid Ink'],
            ['Min size', '14px @ desktop · pill ≥ 32px height'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', borderBottom: `1px solid ${RULE}`, paddingBottom: 12, fontSize: 13 }}>
              <span style={{ fontFamily: MONO, color: STONE, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11 }}>{k}</span>
              <span style={{ color: INK, fontFamily: MONO }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div style={{ marginBottom: 80 }}>
        <Caption>↳ Sizes · 14px to 56px</Caption>
        <div style={{
          marginTop: 24, padding: 56, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          <Wordmark size={56} padding="22px 44px" />
          <Wordmark size={36} padding="16px 32px" />
          <Wordmark size={24} padding="12px 24px" />
          <Wordmark size={18} padding="9px 18px" />
          <Wordmark size={14} padding="7px 15px" />
        </div>
      </div>

      {/* Monogram */}
      <div style={{ marginTop: 80 }}>
        <Caption color={COBALT} size={13}>↳ Below 24px · the monogram</Caption>
        <Display size={44}>
          The S<Em>f</Em> that survives a favicon.
        </Display>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ padding: 56, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 24 }}>
            {[96, 64, 48, 32, 16].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <Monogram size={s} fg={PAPER} bg={INK} />
                <Caption>{s}px</Caption>
              </div>
            ))}
          </div>
          <div style={{ padding: 56, background: COBALT, borderRadius: 18, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 24 }}>
            {[96, 64, 48, 32, 16].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <Monogram size={s} fg={COBALT} bg="#fff" />
                <Caption color="rgba(255,255,255,0.7)">{s}px</Caption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 05 — COLOR
const Color = () => (
  <section id="05" style={{ padding: '120px 40px', background: SURFACE, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="05" total="09" title="The colour" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ The accent rule</Caption>
        <Display size={80}>
          Five tones.<br /><Em>One accent.</Em>
        </Display>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
          fontSize: 24, lineHeight: 1.4, color: SLATE, margin: '32px 0 0', maxWidth: 720,
        }}>
          A monochromatic warm-grey scale carries 95% of the surface. Cobalt does the other 5% —
          actions, links, marks, and the rare element that must be unmissable.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, marginBottom: 80 }}>
        {[
          { name: 'Paper', hex: PAPER, role: 'Background', text: INK },
          { name: 'Bone', hex: BONE, role: 'Surface', text: INK },
          { name: 'Stone', hex: STONE, role: 'Muted', text: INK },
          { name: 'Slate', hex: SLATE, role: 'Body', text: PAPER },
          { name: 'Ink', hex: INK, role: 'Display', text: PAPER },
          { name: 'Cobalt', hex: COBALT, role: 'Accent', text: '#fff', accent: true },
        ].map((c) => (
          <div key={c.name} style={{
            aspectRatio: '0.85', borderRadius: 18, background: c.hex,
            border: c.name === 'Paper' ? `1px solid ${RULE}` : 'none',
            position: 'relative', padding: 22,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              {c.accent && (
                <span style={{
                  fontFamily: MONO, fontSize: 9, color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                }}>Single accent</span>
              )}
            </div>
            <div>
              <div style={{ fontFamily: SANS, fontSize: 24, fontWeight: 700, color: c.text, letterSpacing: '-0.025em' }}>
                {c.name}
              </div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: c.text, opacity: 0.7, marginTop: 4 }}>
                {c.hex.toUpperCase()}
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: c.text, opacity: 0.55, marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {c.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: COBALT, borderRadius: 22, color: '#fff',
        padding: '120px 64px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 880 }}>
          <Caption color="rgba(255,255,255,0.6)" size={13}>↳ Why cobalt</Caption>
          <p style={{
            fontFamily: SANS, fontSize: 56, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.05,
            margin: '24px 0 0',
          }}>
            Reads like fountain-pen ink — the same instrument that makes a serif a serif.
            The accent and the wordmark agree on one thing: <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>craft is in the curve.</em>
          </p>
        </div>
      </div>
    </div>
  </section>
)

// 06 — TYPE (the dual-family pairing — the hero of Option 1)
const Type = () => (
  <section id="06" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="06" total="09" title="The type" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ Two families. One rule.</Caption>
        <Display size={80}>
          Switzer for system.<br /><Em>Instrument Serif</Em><br />for warmth.
        </Display>
        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
          fontSize: 24, lineHeight: 1.4, color: SLATE, margin: '32px 0 0', maxWidth: 760,
        }}>
          Switzer holds 99% of the system — UI, body, captions, navigation. Instrument Serif italic is reserved
          for the wordmark terminal and one emphasis word per headline. The pairing rule is strict: never both for body, never both for nav.
        </p>
      </div>

      {/* Family showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 64 }}>
        <div style={{ padding: 56, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}` }}>
          <Caption>↳ Switzer · Sans</Caption>
          <div style={{ marginTop: 24, fontFamily: SANS, fontSize: 140, fontWeight: 700, color: INK, letterSpacing: '-0.045em', lineHeight: 0.95 }}>
            Aa
          </div>
          <div style={{ marginTop: 18, fontFamily: SANS, fontSize: 17, color: SLATE, lineHeight: 1.55 }}>
            The system typeface. Carries every UI surface, every body paragraph, every caption.
            Five weights from Regular to Extra Bold.
          </div>
          <div style={{ marginTop: 18, fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            INDIANTYPE FOUNDRY · FONTSHARE · 2022
          </div>
        </div>

        <div style={{ padding: 56, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}` }}>
          <Caption>↳ Instrument Serif · Display italic</Caption>
          <div style={{ marginTop: 24, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 160, color: INK, letterSpacing: '-0.015em', lineHeight: 0.95 }}>
            Aa
          </div>
          <div style={{
            marginTop: 18, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
            fontSize: 19, color: SLATE, lineHeight: 1.5,
          }}>
            The accent typeface. Reserved for the wordmark f, plus one emphasis word per headline.
            Earned, not sprinkled.
          </div>
          <div style={{ marginTop: 18, fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            INSTRUMENT · GOOGLE FONTS · 2023
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div style={{ borderTop: `1px solid ${INK}`, marginBottom: 64 }}>
        {[
          { tag: 'Display · sans', size: 96, weight: 700, family: SANS, italic: false, sample: 'Ship the fix.' },
          { tag: 'Display · italic', size: 96, weight: 400, family: SERIF, italic: true, sample: 'Ship the fix.' },
          { tag: 'H1', size: 56, weight: 700, family: SANS, italic: false, sample: 'Visual feedback for product teams.' },
          { tag: 'H2 · italic accent', size: 40, weight: 700, family: SANS, italic: false, sample: 'Three primitives. Built like good type.' },
          { tag: 'Lead', size: 22, weight: 400, family: SANS, italic: false, sample: 'A single React component. Two lines. No config.' },
          { tag: 'Body', size: 16, weight: 400, family: SANS, italic: false, sample: 'Drop a pin on any element. Leave a comment. Approve, reject, ship.' },
          { tag: 'Editorial body', size: 19, weight: 400, family: SERIF, italic: true, sample: 'A brand named after a typographic detail it almost doesn\'t show.' },
          { tag: 'Mono', size: 12, weight: 500, family: MONO, italic: false, mono: true, sample: 'SERIF · OPTION 01 · 07 MAY 2026' },
        ].map((t, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '160px 100px 1fr', alignItems: 'baseline', gap: 32,
            padding: '24px 0', borderBottom: `1px solid ${RULE}`,
          }}>
            <Caption>{t.tag}</Caption>
            <span style={{ fontFamily: MONO, fontSize: 11, color: STONE }}>{t.size}/{t.weight}</span>
            <span style={{
              fontFamily: t.family, fontStyle: t.italic ? 'italic' : 'normal',
              fontSize: t.size, fontWeight: t.weight,
              letterSpacing: t.mono ? '0.16em' : (t.size > 32 && !t.italic ? '-0.035em' : '-0.015em'),
              lineHeight: 1.05, color: INK, textTransform: t.mono ? 'uppercase' : 'none',
            }}>
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      {/* Pairing rule */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <div style={{ padding: 40, background: PAPER, borderRadius: 14, border: `1px solid ${RULE}` }}>
          <Caption color={COBALT}>Do · italic for emphasis</Caption>
          <h3 style={{ fontFamily: SANS, fontSize: 36, fontWeight: 700, color: INK, margin: '20px 0 0', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Ship the fix. <Em>Skip</Em> the ticket.
          </h3>
        </div>
        <div style={{ padding: 40, background: PAPER, borderRadius: 14, border: `1px solid ${RULE}`, opacity: 0.6 }}>
          <Caption color={STONE}>Don't · italic for body</Caption>
          <p style={{
            fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
            fontSize: 22, color: INK, margin: '20px 0 0', lineHeight: 1.4,
            textDecoration: 'line-through',
          }}>
            Drop a pin on any element. Leave a comment. The whole loop on one page.
          </p>
        </div>
      </div>
    </div>
  </section>
)

// 07 — VOICE
const Voice = () => (
  <section id="07" style={{ padding: '120px 40px', background: SURFACE, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="07" total="09" title="The voice" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ How we sound</Caption>
        <Display size={80}>
          Short sentences.<br />Strong verbs.<br /><Em>One italic.</Em>
        </Display>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 80 }}>
        <div style={{ padding: 48, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}` }}>
          <Caption>↳ Hero copy · sample</Caption>
          <h3 style={{
            fontFamily: SANS, fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05,
            margin: '20px 0 16px', color: INK,
          }}>
            Visual feedback,<br /><Em>directly</Em> on your product.
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: SLATE, margin: 0 }}>
            Drop a pin. Leave a comment. Ship the fix. The whole loop on one page.
          </p>
        </div>

        <div style={{ padding: 48, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}` }}>
          <Caption>↳ Empty state · sample</Caption>
          <h3 style={{
            fontFamily: SANS, fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2,
            margin: '20px 0 14px', color: INK,
          }}>
            Nothing pinned <Em>yet</Em>.
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: SLATE, margin: '0 0 20px' }}>
            Click any element on the page to drop your first pin. The team will see it instantly.
          </p>
          <button style={{
            padding: '10px 20px', borderRadius: 9999, border: 'none',
            background: COBALT, color: '#fff', fontFamily: SANS, fontSize: 13, fontWeight: 600,
          }}>Show me how →</button>
        </div>
      </div>

      <Caption>↳ We say · we don't</Caption>
      <div style={{ marginTop: 24, borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}` }}>
        {[
          ['Ship the fix.', 'Streamline cross-functional alignment.'],
          ['Pin anywhere.', 'Empower stakeholders to provide actionable feedback.'],
          ['Two lines to install.', 'Onboarding journey optimized for time-to-value.'],
          ['We don\'t do tickets.', 'We are reimagining the asynchronous feedback experience.'],
        ].map(([yes, no], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            borderBottom: i === 3 ? 'none' : `1px solid ${RULE}`,
          }}>
            <div style={{ padding: '32px 32px 32px 0', borderRight: `1px solid ${RULE}` }}>
              <Caption color={COBALT}>We say</Caption>
              <p style={{
                fontFamily: SANS, fontSize: 28, fontWeight: 600, color: INK,
                margin: '14px 0 0', lineHeight: 1.3, letterSpacing: '-0.02em',
              }}>
                "{yes}"
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 32px' }}>
              <Caption color={STONE}>We don't</Caption>
              <p style={{
                fontFamily: SANS, fontSize: 28, fontWeight: 500, color: STONE,
                margin: '14px 0 0', lineHeight: 1.3, letterSpacing: '-0.02em', textDecoration: 'line-through',
              }}>
                "{no}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// 08 — APPLIED
const Applied = () => (
  <section id="08" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="08" total="09" title="In the wild" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ The system, applied</Caption>
        <Display size={80}>
          Six surfaces.<br /><Em>One italic.</Em>
        </Display>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Web — landing hero */}
        <div style={{ padding: 0, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}`, overflow: 'hidden', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 20px', borderBottom: `1px solid ${RULE}`, background: BONE,
          }}>
            <div style={{ display: 'flex', gap: 5 }}>{[0,1,2].map(i => <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: '#e0ddd2' }} />)}</div>
            <div style={{ flex: 1, marginLeft: 12, padding: '4px 12px', borderRadius: 6, background: SURFACE, fontFamily: MONO, fontSize: 11, color: SLATE, textAlign: 'center', border: `1px solid ${RULE}` }}>serif.io</div>
            <PillCaption size={10} fg={COBALT} border={COBALT} weight={600} padding="3px 8px">Live</PillCaption>
          </div>
          <div style={{ padding: '64px 56px', position: 'relative' }}>
            <Wordmark size={14} padding="7px 15px" />
            <h3 style={{ fontFamily: SANS, fontSize: 64, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.98, margin: '36px 0 18px' }}>
              Ship the fix.<br /><Em>Skip</Em> the ticket.
            </h3>
            <p style={{ fontSize: 17, color: SLATE, margin: '0 0 28px', maxWidth: 480, lineHeight: 1.5 }}>
              Visual feedback for product teams. Drop a pin. Leave a comment. Done.
            </p>
            <button style={{ padding: '12px 26px', borderRadius: 9999, border: 'none', background: COBALT, color: '#fff', fontFamily: SANS, fontSize: 14, fontWeight: 600 }}>Start free →</button>
            <div style={{ position: 'absolute', top: 80, right: 60, display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: COBALT, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 11, fontWeight: 700, border: '1.5px solid #fff', boxShadow: '0 6px 14px -4px rgba(43,76,199,0.4)' }}>A</div>
              <div style={{ background: INK, borderRadius: 9, padding: '5px 9px 5px 11px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#d4d0c6', fontFamily: SANS, fontSize: 11, fontWeight: 500 }}>Sharper verb?</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 18, right: 24 }}>
            <Caption>FIG. 01 — LANDING</Caption>
          </div>
        </div>

        {/* App icon */}
        <div style={{ padding: 56, background: COBALT, borderRadius: 18, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 380 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)',
          }} />
          <div style={{
            width: 180, height: 180, borderRadius: 40, background: '#fff',
            display: 'inline-flex', alignItems: 'baseline', justifyContent: 'center',
            paddingTop: 28, paddingLeft: 8,
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.5) inset',
          }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 100, color: COBALT, letterSpacing: '-0.04em', lineHeight: 1 }}>S</span>
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 130, color: COBALT, lineHeight: 0.88, marginLeft: -8 }}>f</span>
          </div>
          <div style={{ position: 'absolute', bottom: 18, right: 24 }}>
            <Caption color="rgba(255,255,255,0.6)">FIG. 02 — APP ICON</Caption>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Business card */}
        <div style={{
          padding: '48px 40px', background: PAPER, borderRadius: 18, border: `1px solid ${RULE}`,
          minHeight: 260, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <Wordmark size={14} padding="7px 15px" />
          <div>
            <div style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: INK, letterSpacing: '-0.015em' }}>
              Tomás Fernández
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: SLATE, marginTop: 4, letterSpacing: '0.04em' }}>
              FOUNDER · TOMAS@SERIF.IO
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 18 }}>
            <Caption>FIG. 03 — BIZ CARD</Caption>
          </div>
        </div>

        {/* OG image */}
        <div style={{
          padding: 32, background: INK, borderRadius: 18,
          minHeight: 260, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <Wordmark size={12} fg={PAPER} border={PAPER} padding="6px 13px" />
          <div>
            <div style={{ fontFamily: SANS, fontSize: 32, fontWeight: 700, color: PAPER, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Visual feedback<br />for product <Em>teams</Em>.
            </div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: STONE, marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              SERIF · NOW IN BETA
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 18 }}>
            <Caption color={STONE}>FIG. 04 — OG IMAGE</Caption>
          </div>
        </div>

        {/* Merch */}
        <div style={{
          padding: 32, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
          minHeight: 260, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', padding: '64px 44px', borderRadius: 14, border: `1px solid ${RULE}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          }}>
            <Wordmark size={16} padding="8px 17px" />
            <span style={{ fontFamily: SANS, fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', color: INK, lineHeight: 1 }}>
              Ship the <Em>fix</Em>.
            </span>
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 18 }}>
            <Caption>FIG. 05 — MERCH</Caption>
          </div>
        </div>
      </div>

      {/* Billboard */}
      <div style={{
        padding: '88px 64px', background: COBALT, borderRadius: 18, color: '#fff',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-30%', right: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <Caption color="rgba(255,255,255,0.65)" size={11}>↳ FIG. 06 — Out-of-home / billboard</Caption>
          <h3 style={{
            fontFamily: SANS, fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 700,
            letterSpacing: '-0.045em', lineHeight: 0.95, margin: '32px 0 0', maxWidth: 1100,
          }}>
            Tickets are where good ideas <em style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, color: '#fff' }}>wait</em> six weeks.
          </h3>
          <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 14 }}>
            <Wordmark size={16} fg="#fff" border="#fff" padding="8px 17px" />
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
              Visual feedback for product teams
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 09 — CLOSE
const Close = () => (
  <section id="09" style={{
    background: INK, color: PAPER, padding: '160px 40px 100px',
    position: 'relative', overflow: 'hidden', minHeight: '100vh',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      position: 'absolute', bottom: -300, left: '50%', transform: 'translateX(-50%)',
      width: 1100, height: 1100, borderRadius: '50%',
      background: `radial-gradient(circle, ${COBALT}40 0%, transparent 60%)`,
    }} />

    <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontFamily: MONO, fontSize: 11, color: 'rgba(247,243,233,0.4)', letterSpacing: '0.16em', textTransform: 'uppercase',
        paddingBottom: 18, borderBottom: `1px solid rgba(247,243,233,0.1)`, marginBottom: 56,
      }}>
        <span><span style={{ color: COBALT, fontWeight: 600 }}>09</span> / 09</span>
        <span style={{ color: STONE }}>Close</span>
        <span>Serif · Branding · Option 01 · 2026</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Caption color="rgba(247,243,233,0.55)" size={13}>↳ The thesis</Caption>

        <h2 style={{
          fontFamily: SANS, fontSize: 'clamp(80px, 12vw, 200px)', fontWeight: 700,
          letterSpacing: '-0.05em', lineHeight: 0.9, margin: '32px 0 0',
        }}>
          Ship the fix.<br /><span style={{ color: COBALT, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>Skip</span> the ticket.
        </h2>

        <p style={{
          fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
          fontSize: 26, lineHeight: 1.45, color: 'rgba(247,243,233,0.8)',
          margin: '56px 0 0', maxWidth: 760, letterSpacing: '-0.005em',
        }}>
          A brand named after a typographic detail — that shows the detail exactly once.
          The italic f is the whole identity in one curve. Everything else is sans, in service.
        </p>
      </div>

      {/* Next steps */}
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: `1px solid rgba(247,243,233,0.12)` }}>
        <Caption color="rgba(247,243,233,0.55)">↳ If approved · next steps</Caption>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { n: '01', t: 'Lock tokens', d: 'Promote palette + dual-family stack to design library. Hand off to engineering.' },
            { n: '02', t: 'Apply to product', d: 'Roll palette + components through the live dashboard.' },
            { n: '03', t: 'Ship landing', d: 'Build serif.io marketing site on the new system. 2 weeks.' },
            { n: '04', t: 'Launch beta', d: 'Public beta with the new identity. Press kit + OG ready.' },
          ].map((s) => (
            <div key={s.n}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: COBALT, letterSpacing: '0.08em', fontWeight: 600 }}>
                STEP / {s.n}
              </span>
              <h3 style={{ fontFamily: SANS, fontSize: 22, fontWeight: 600, color: PAPER, letterSpacing: '-0.02em', margin: '14px 0 8px' }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(247,243,233,0.6)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 80, paddingTop: 24, borderTop: `1px solid rgba(247,243,233,0.12)`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Wordmark size={14} fg={PAPER} border={PAPER} padding="7px 15px" />
          <Caption color="rgba(247,243,233,0.55)">Branding · Option 01 · Vol. 01 · 2026</Caption>
        </div>
        <Caption color="rgba(247,243,233,0.55)">↳ Thank you · brand@serif.io</Caption>
      </div>
    </div>
  </section>
)

export function LandingV4() {
  return (
    <div style={{ fontFamily: SANS, color: INK, background: PAPER, minHeight: '100vh' }}>
      <style>{`
        .v4 *::selection { background: ${COBALT}; color: #fff; }
        .v4 a { color: inherit; text-decoration: none; }
      `}</style>
      <div className="v4">
        <NavBar />
        <Cover />
        <Brief />
        <Strategy />
        <Mark />
        <Color />
        <Type />
        <Voice />
        <Applied />
        <Close />
      </div>

    </div>
  )
}
