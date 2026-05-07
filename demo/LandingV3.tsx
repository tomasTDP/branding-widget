import { FeedbackWidget } from 'feedback-widget'

const apiBase = import.meta.env.VITE_API_BASE
const projectId = import.meta.env.VITE_PROJECT_ID

const SANS = '"Switzer", -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif'
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

const Pill = ({ children, fg = INK, border = INK, bg = 'transparent', size = 13, weight = 500, padding = '6px 14px' }: any) => (
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

const LOGO_SRC = '/Serif.io.png'
const LOGO_RATIO = 396 / 108 // intrinsic aspect

const WordmarkRaw = ({ height = 18, invert = false }: { height?: number; invert?: boolean }) => (
  <img
    src={LOGO_SRC}
    alt="Serif.io"
    width={Math.round(height * LOGO_RATIO)}
    height={height}
    style={{
      display: 'block',
      filter: invert ? 'invert(1)' : 'none',
    }}
  />
)

const Wordmark = ({ size = 18, fg = INK, border = INK, padding }: { size?: number; fg?: string; border?: string; padding?: string }) => {
  const padY = Math.round(size * 0.55)
  const padX = Math.round(size * 1.2)
  const invert = fg !== INK
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: padding ?? `${padY}px ${padX}px`, borderRadius: 9999,
      border: border ? `1px solid ${border}` : 'none',
      background: 'transparent',
      lineHeight: 1, whiteSpace: 'nowrap',
    }}>
      <WordmarkRaw height={size} invert={invert} />
    </span>
  )
}

const Caption = ({ children, color = STONE, size = 11 }: any) => (
  <span style={{
    fontFamily: MONO, fontSize: size, color, letterSpacing: '0.16em', textTransform: 'uppercase',
  }}>{children}</span>
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
    <span>Serif.io · Branding Proposal · 2026</span>
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
        <Wordmark size={13} padding="5px 13px" />
        <Caption color={STONE}>Branding Proposal · Vol. 01</Caption>
      </div>
      <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
        {['01 Cover', '02 Brief', '03 Strategy', '04 Mark', '05 Color', '06 Type', '07 Voice', '08 Applied', '09 Close'].map((t) => (
          <a key={t} href={`#${t.split(' ')[0]}`} style={{
            fontFamily: MONO, fontSize: 11, color: STONE, letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
          }}>{t}</a>
        ))}
      </div>
      <Pill size={11} fg={COBALT} border={COBALT} weight={600} padding="4px 10px">Draft v0.4</Pill>
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
        <Caption color={COBALT} size={13}>↳ A branding proposal</Caption>

        <div style={{ marginTop: 32 }}>
          <WordmarkRaw height={220} />
        </div>

        <div style={{ marginTop: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <p style={{
            fontSize: 28, lineHeight: 1.3, color: SLATE, margin: 0, maxWidth: 720, fontWeight: 400, letterSpacing: '-0.015em',
          }}>
            A monochromatic, typographic, single-accent identity for a feedback tool that takes craft seriously.
          </p>
          <Wordmark size={20} padding="10px 22px" />
        </div>
      </div>

      <div style={{
        marginTop: 80, paddingTop: 24, borderTop: `1px solid ${INK}`,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        fontFamily: MONO, fontSize: 11, color: SLATE, letterSpacing: '0.04em',
      }}>
        {[
          ['Project', 'Serif.io'],
          ['Stage', 'Pre-launch · Public beta'],
          ['Prepared by', 'Brand · Tomás Fernández'],
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
          <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: 0, color: INK }}>
            Define what<br />Serif.io looks,<br />sounds, and<br /><span style={{ color: COBALT }}>feels</span> like.
          </h2>
        </div>

        <div style={{ paddingTop: 24 }}>
          <p style={{ fontSize: 22, lineHeight: 1.5, color: SLATE, margin: '0 0 56px', maxWidth: 640, letterSpacing: '-0.005em' }}>
            Serif.io is a visual feedback widget for product teams. It lives on the page, not in a ticket queue.
            The brand needs to signal craft to designers without alienating PMs and engineers — and survive being shrunk to a 16px favicon.
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
                <span style={{ fontSize: 16, color: INK, lineHeight: 1.5 }}>{b.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 03 — STRATEGY (the idea)
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
          Name it Serif. Use <span style={{ color: COBALT }}>zero serifs.</span>
        </h2>
        <p style={{ fontSize: 22, lineHeight: 1.5, color: SLATE, margin: '40px 0 0', maxWidth: 720, letterSpacing: '-0.005em' }}>
          The name signals craft and editorial restraint. The visual identity refuses literalism.
          That tension is the brand: confident enough to name itself for a detail it doesn't show.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 80 }}>
        {[
          {
            n: '01',
            title: 'Quiet',
            desc: 'Designers turn off ads, hate gradients, mute notifications. We earn attention by deserving it.',
            example: 'Cream paper. Black ink. One accent. No drop-shadows, no glow effects, no auto-play hero videos.',
          },
          {
            n: '02',
            title: 'Deliberate',
            desc: 'Every shape solves something. If we can\'t name what an element does, it doesn\'t ship.',
            example: 'A pill outline holds the wordmark. The italic is reserved. The cobalt only appears where it pays for itself.',
          },
          {
            n: '03',
            title: 'Editorial',
            desc: 'We sound like a person who\'s read books and shipped product, not a vendor reading a deck.',
            example: '"Ship the fix. Skip the ticket." Four-word verbs. Strong nouns. No "synergize."',
          },
        ].map((p) => (
          <div key={p.n} style={{
            padding: 32, background: '#fff', borderRadius: 14, border: `1px solid ${RULE}`,
            display: 'flex', flexDirection: 'column', gap: 18, minHeight: 360,
          }}>
            <Caption>Pillar / {p.n}</Caption>
            <h3 style={{ fontFamily: SANS, fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, color: INK, lineHeight: 1 }}>
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

// 04 — THE MARK (wordmark + monogram, the anchor)
const Mark = () => (
  <section id="04" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="04" total="09" title="The mark" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ The wordmark</Caption>
        <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: '24px 0 0' }}>
          The pill <em style={{ fontStyle: 'normal', color: COBALT }}>is</em> the brand.
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: SLATE, margin: '32px 0 0', maxWidth: 760 }}>
          A rounded outline, Switzer Medium, no fill. The pill is the constant — it makes the wordmark recognizable
          at every scale, on every surface, before a single other element is added.
        </p>
      </div>

      {/* Hero wordmark */}
      <div style={{
        padding: '120px 64px', background: '#fff', borderRadius: 22, border: `1px solid ${RULE}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
      }}>
        <Wordmark size={104} padding="44px 96px" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 80 }}>
        <div style={{ padding: 56, background: INK, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240 }}>
          <Wordmark size={48} fg={PAPER} border={PAPER} padding="20px 44px" />
        </div>
        <div style={{ padding: 56, background: COBALT, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 240 }}>
          <Wordmark size={48} fg="#fff" border="#fff" padding="20px 44px" />
        </div>
      </div>

      {/* Sizes */}
      <div style={{ marginTop: 80, marginBottom: 80 }}>
        <Caption>↳ Sizes · 11px to 48px</Caption>
        <div style={{
          marginTop: 24, padding: 56, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          <Wordmark size={48} padding="20px 44px" />
          <Wordmark size={32} padding="14px 30px" />
          <Wordmark size={20} padding="10px 22px" />
          <Wordmark size={14} padding="7px 15px" />
          <Wordmark size={11} padding="5px 12px" />
        </div>
      </div>

      {/* Monogram */}
      <div style={{ marginTop: 80 }}>
        <Caption color={COBALT} size={13}>↳ Below 24px · the monogram</Caption>
        <h3 style={{ fontFamily: SANS, fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1, margin: '24px 0 32px' }}>
          The S that survives a favicon.
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ padding: 56, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 24 }}>
            {[96, 64, 48, 32, 16].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: s, height: s, borderRadius: s * 0.24, background: INK,
                  color: PAPER, fontFamily: SANS, fontWeight: 700, fontSize: s * 0.55,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.04em',
                }}>S</div>
                <Caption>{s}px</Caption>
              </div>
            ))}
          </div>
          <div style={{ padding: 56, background: COBALT, borderRadius: 18, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 24 }}>
            {[96, 64, 48, 32, 16].map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: s, height: s, borderRadius: s * 0.24, background: '#fff',
                  color: COBALT, fontFamily: SANS, fontWeight: 700, fontSize: s * 0.55,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.04em',
                }}>S</div>
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
        <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: '24px 0 0' }}>
          Five tones.<br /><span style={{ color: COBALT }}>One accent.</span>
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: SLATE, margin: '32px 0 0', maxWidth: 720 }}>
          A monochromatic warm-grey scale carries 95% of the surface. Cobalt does the other 5% — actions,
          links, marks, and the rare element that must be unmissable.
        </p>
      </div>

      {/* Palette grid */}
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

      {/* Cobalt full-bleed manifesto */}
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
            Reads like fountain-pen ink. Different enough from Linear's purple
            and Vercel's black. Strong enough to mark the action without taking the page.
          </p>
        </div>
      </div>
    </div>
  </section>
)

// 06 — TYPE
const Type = () => (
  <section id="06" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="06" total="09" title="The type" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ One family</Caption>
        <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: '24px 0 0' }}>
          Switzer. Five weights.<br /><span style={{ color: COBALT }}>No italic, no pairings.</span>
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: SLATE, margin: '32px 0 0', maxWidth: 720 }}>
          Variety comes from scale and weight, not from family-mixing. The single-typeface rule keeps the system
          honest — and makes the brand survive any redesign without a re-licensing call.
        </p>
      </div>

      {/* Type scale */}
      <div style={{ borderTop: `1px solid ${INK}`, marginBottom: 64 }}>
        {[
          { tag: 'Display', size: 96, weight: 700, sample: 'Ship the fix.' },
          { tag: 'H1', size: 56, weight: 700, sample: 'Visual feedback for product teams.' },
          { tag: 'H2', size: 40, weight: 700, sample: 'Three primitives. Built like good type.' },
          { tag: 'Lead', size: 22, weight: 400, sample: 'A single React component. Two lines. No config.' },
          { tag: 'Body', size: 16, weight: 400, sample: 'Drop a pin on any element. Leave a comment. Approve, reject, ship.' },
          { tag: 'Mono', size: 12, weight: 500, sample: 'SERIF.IO · v0.4 · 07 MAY 2026', mono: true },
        ].map((t) => (
          <div key={t.tag} style={{
            display: 'grid', gridTemplateColumns: '120px 100px 1fr', alignItems: 'baseline', gap: 32,
            padding: '24px 0', borderBottom: `1px solid ${RULE}`,
          }}>
            <Caption>{t.tag}</Caption>
            <span style={{ fontFamily: MONO, fontSize: 11, color: STONE }}>{t.size}/{t.weight}</span>
            <span style={{
              fontFamily: t.mono ? MONO : SANS, fontSize: t.size, fontWeight: t.weight,
              letterSpacing: t.mono ? '0.16em' : (t.size > 32 ? '-0.035em' : '-0.015em'),
              lineHeight: 1.05, color: INK, textTransform: t.mono ? 'uppercase' : 'none',
            }}>
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      {/* Weight ladder */}
      <div style={{
        padding: 48, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24,
      }}>
        {[
          { weight: 400, label: 'Regular' },
          { weight: 500, label: 'Medium' },
          { weight: 600, label: 'Semi Bold' },
          { weight: 700, label: 'Bold' },
          { weight: 800, label: 'Extra Bold' },
        ].map((w) => (
          <div key={w.weight}>
            <span style={{
              fontFamily: SANS, fontWeight: w.weight, fontSize: 80, letterSpacing: '-0.045em', lineHeight: 1, color: INK,
            }}>Aa</span>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 14, color: INK, fontWeight: 600 }}>{w.label}</div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: STONE, marginTop: 2 }}>Switzer {w.weight}</div>
            </div>
          </div>
        ))}
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
        <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: '24px 0 0' }}>
          Short sentences.<br />Strong verbs.<br /><span style={{ color: COBALT }}>No "synergize."</span>
        </h2>
      </div>

      {/* Sample */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 80 }}>
        <div style={{ padding: 48, background: '#fff', borderRadius: 18, border: `1px solid ${RULE}` }}>
          <Caption>↳ Hero copy · sample</Caption>
          <h3 style={{
            fontFamily: SANS, fontSize: 44, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05,
            margin: '20px 0 16px', color: INK,
          }}>
            Visual feedback,<br />directly on your product.
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
            Nothing pinned yet.
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

      {/* Yes / no pairs */}
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
              <p style={{ fontFamily: SANS, fontSize: 28, fontWeight: 600, color: INK, margin: '14px 0 0', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                "{yes}"
              </p>
            </div>
            <div style={{ padding: '32px 0 32px 32px' }}>
              <Caption color={STONE}>We don't</Caption>
              <p style={{ fontFamily: SANS, fontSize: 28, fontWeight: 500, color: STONE, margin: '14px 0 0', lineHeight: 1.3, letterSpacing: '-0.02em', textDecoration: 'line-through' }}>
                "{no}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// 08 — APPLIED (the dream — multiple mockups)
const Applied = () => (
  <section id="08" style={{ padding: '120px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SlideMeta num="08" total="09" title="In the wild" />

      <div style={{ marginBottom: 80 }}>
        <Caption color={COBALT} size={13}>↳ The system, applied</Caption>
        <h2 style={{ fontFamily: SANS, fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.96, margin: '24px 0 0' }}>
          Six surfaces.<br /><span style={{ color: COBALT }}>One brand.</span>
        </h2>
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
            <Pill size={10} fg={COBALT} border={COBALT} weight={600} padding="3px 8px">Live</Pill>
          </div>
          <div style={{ padding: '64px 56px', position: 'relative' }}>
            <Wordmark size={14} padding="6px 14px" />
            <h3 style={{ fontFamily: SANS, fontSize: 64, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.98, margin: '36px 0 18px' }}>
              Ship the fix.<br />Skip the ticket.
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

        {/* App icon mockup */}
        <div style={{ padding: 56, background: COBALT, borderRadius: 18, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 380 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)',
          }} />
          <div style={{
            width: 180, height: 180, borderRadius: 40, background: '#fff',
            color: COBALT, fontFamily: SANS, fontWeight: 700, fontSize: 100,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '-0.04em',
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.5) inset',
          }}>S</div>
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
          <Wordmark size={13} padding="5px 13px" />
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

        {/* OG image / social */}
        <div style={{
          padding: 32, background: INK, borderRadius: 18,
          minHeight: 260, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <Wordmark size={12} fg={PAPER} border={PAPER} padding="4px 12px" />
          <div>
            <div style={{ fontFamily: SANS, fontSize: 32, fontWeight: 700, color: PAPER, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Visual feedback<br />for product teams.
            </div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: STONE, marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              SERIF.IO · NOW IN BETA
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 18 }}>
            <Caption color={STONE}>FIG. 04 — OG IMAGE</Caption>
          </div>
        </div>

        {/* T-shirt / merch */}
        <div style={{
          padding: 32, background: SURFACE, borderRadius: 18, border: `1px solid ${RULE}`,
          minHeight: 260, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', padding: '64px 44px', borderRadius: 14, border: `1px solid ${RULE}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          }}>
            <Wordmark size={16} padding="7px 16px" />
            <span style={{ fontFamily: SANS, fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em', color: INK, lineHeight: 1 }}>
              Ship the fix.
            </span>
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 18 }}>
            <Caption>FIG. 05 — MERCH</Caption>
          </div>
        </div>
      </div>

      {/* Billboard / typographic moment */}
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
            Tickets are where good ideas wait six weeks.
          </h3>
          <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 14 }}>
            <Wordmark size={16} fg="#fff" border="#fff" padding="7px 16px" />
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
        <span>Serif.io · Branding Proposal · 2026</span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Caption color="rgba(247,243,233,0.55)" size={13}>↳ The thesis</Caption>

        <h2 style={{
          fontFamily: SANS, fontSize: 'clamp(80px, 12vw, 200px)', fontWeight: 700,
          letterSpacing: '-0.05em', lineHeight: 0.9, margin: '32px 0 0',
        }}>
          Ship the fix.<br /><span style={{ color: COBALT }}>Skip the ticket.</span>
        </h2>

        <p style={{
          fontSize: 24, lineHeight: 1.45, color: 'rgba(247,243,233,0.75)',
          margin: '56px 0 0', maxWidth: 720, fontWeight: 400, letterSpacing: '-0.005em',
        }}>
          A brand named after a typographic detail it doesn't show — because the brand isn't
          about typography. It's about the same instinct: the small, deliberate move that makes the whole thing better.
        </p>
      </div>

      {/* Next steps */}
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: `1px solid rgba(247,243,233,0.12)` }}>
        <Caption color="rgba(247,243,233,0.55)">↳ If approved · next steps</Caption>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { n: '01', t: 'Lock tokens', d: 'Promote palette + type to design library. Hand off to engineering.' },
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
          <Wordmark size={14} fg={PAPER} border={PAPER} padding="6px 14px" />
          <Caption color="rgba(247,243,233,0.55)">Branding Proposal · Vol. 01 · 2026</Caption>
        </div>
        <Caption color="rgba(247,243,233,0.55)">↳ Thank you · brand@serif.io</Caption>
      </div>
    </div>
  </section>
)

export function LandingV3() {
  return (
    <div style={{ fontFamily: SANS, color: INK, background: PAPER, minHeight: '100vh' }}>
      <style>{`
        .v3 *::selection { background: ${COBALT}; color: #fff; }
        .v3 a { color: inherit; text-decoration: none; }
      `}</style>
      <div className="v3">
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

      {apiBase && projectId && <FeedbackWidget projectId={projectId} apiBase={apiBase} />}
    </div>
  )
}
