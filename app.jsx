// Linktree — David — minimalista
// Mobile-first. PORT / FOLIO arriba, fila de iconos abajo.

const LINKS = [
{
  label: "Instagram",
  href: "https://www.instagram.com/david.confidencial/",
  icon: "ig"
},
{
  label: "YouTube",
  href: "https://www.youtube.com/@DavidConfidencial/videos",
  icon: "yt"
},
{
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/lopezdsteban/?locale=es",
  icon: "li"
},
{
  label: "WhatsApp",
  href: "https://wa.me/573192441585",
  icon: "wa"
},
{
  label: "Email",
  href: "mailto:steban@univercityaiconsult.tech",
  icon: "mail"
}];


function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "ig") return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>);

  if (name === "yt") return (
    <svg {...common}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10 9.5 L15 12 L10 14.5 Z" fill="currentColor" stroke="none" />
    </svg>);

  if (name === "li") return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="7" r="0.6" fill="currentColor" />
      <path d="M11 17v-7M11 13c0-2 1.5-3 3-3s2.5 1 2.5 3v4" />
    </svg>);

  if (name === "wa") return (
    <svg {...common}>
      <path d="M3 21l1.6-4.6A8 8 0 1 1 8 19.4L3 21z" />
      <path d="M9 9.5c0 4 3 6.5 6 6.5l1-1.5-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2L9.5 9c-.3 0-.5.2-.5.5z" fill="currentColor" stroke="none" />
    </svg>);

  if (name === "mail") return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>);

  return null;
}

const MISSION_IMAGES = [
  "assets/mission/01-vista-operador.png",
  "assets/mission/02-vista-director.png",
  "assets/mission/03-misiones.png",
  "assets/mission/04-celulas.png",
  "assets/mission/05-taller.png",
  "assets/mission/07-nuevo-proyecto.png",
  "assets/mission/00-original.png"
];

function MissionSlide({ ariaHidden, tabIndex }) {
  return (
    <div
      className="lt-marquee-item lt-marquee-item--photo lt-mission lt-marquee-item--labeled"
      aria-label="Mission Control — KAIROS dashboard"
      aria-hidden={ariaHidden}
      tabIndex={tabIndex}>
      {MISSION_IMAGES.map((src) =>
        <div
          key={src}
          className="lt-mission-frame"
          style={{ backgroundImage: `url('${src}')` }} />
      )}
      <div className="lt-marquee-overlay" aria-hidden="true">
        <span className="lt-marquee-label">Mission Control</span>
      </div>
    </div>);
}

const PRICING_SERVICES = [
  {
    title: "Revenue Leak Audit",
    price: "$2K – $5K  ·  2–3 weeks",
    desc: "A full diagnostic of where your business is losing money — broken processes, misaligned pricing, operational blind spots. You get a detailed report with findings ranked by impact and a prioritized roadmap to fix them."
  },
  {
    title: "Predictable Revenue Architecture",
    price: "$4K – $25K  ·  4–8 weeks",
    desc: "We take the findings from the audit and turn them into real infrastructure: sales pipelines, automation workflows, retention systems, and the metrics to track it all. This is where strategy becomes something that actually runs."
  },
  {
    title: "Living System Retainer",
    price: "$500 – $3K  /  month",
    desc: "Ongoing maintenance of the system we built. Monthly optimization, new automations as your business evolves, KPI monitoring, and continuous tuning. The system stays sharp because someone's always watching it."
  },
  {
    title: "Agentic Strategy & Implementation",
    price: "$5K – $20K  ·  4–8 weeks",
    desc: "End-to-end consulting: we diagnose which business processes benefit from AI agents, design the agentic architecture — what each agent does, how they communicate, where humans stay in the loop — and then build and deploy the whole thing. This isn't a strategy deck that collects dust. You get working agents in production."
  },
  {
    title: "Automation Workshop",
    price: "$1K – $5K  ·  1 day",
    desc: "A hands-on, in-person or virtual workshop where your team builds their first AI automation from scratch. No slides-only sessions. Everyone leaves with something that works."
  },
  {
    title: "Blockchain Contract Auditing",
    price: "Per engagement",
    desc: "Security review of smart contracts (Solidity, Rust/Solana, Move) before mainnet deployment. Static and dynamic analysis, detection of known vulnerability patterns — reentrancy, overflow, access control flaws — attack simulation, and a severity-classified report. Includes remediation guidance and a re-audit after fixes."
  }
];

function PricingDial() {
  const stepDeg = 360 / PRICING_SERVICES.length;
  const [angle, setAngle] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const wrapRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const lastIdxRef = React.useRef(0);

  const idx =
    ((-Math.round(angle / stepDeg)) % PRICING_SERVICES.length +
      PRICING_SERVICES.length) % PRICING_SERVICES.length;

  // Detente thump (haptic where supported) every time the visible idx changes
  React.useEffect(() => {
    if (lastIdxRef.current !== idx) {
      lastIdxRef.current = idx;
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try { navigator.vibrate(18); } catch (_) {}
      }
    }
  }, [idx]);

  const onDown = (e) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const rOuter = rect.width / 2;
    const rInner = rOuter * 0.74;
    // Only react when the press lands on the outer ring (the circumference band).
    if (dist < rInner || dist > rOuter * 1.02) return;

    setDragging(true);
    setHasInteracted(true);
    dragRef.current = { startY: e.clientY, startAngle: angle };
    if (e.pointerId !== undefined && wrap.setPointerCapture) {
      try { wrap.setPointerCapture(e.pointerId); } catch (_) {}
    }
  };

  const onMove = (e) => {
    if (!dragging || !dragRef.current) return;
    const dy = e.clientY - dragRef.current.startY;
    // 64px of vertical travel ≈ one detente (stepDeg). Drag up = forward (next service).
    const next = dragRef.current.startAngle - (dy * (stepDeg / 64));
    setAngle(next);
    if (e.cancelable) e.preventDefault();
  };

  const onUp = () => {
    if (!dragging) return;
    setDragging(false);
    dragRef.current = null;
    // Snap to nearest detente so the dial always rests on a major tick.
    const snapped = Math.round(angle / stepDeg) * stepDeg;
    setAngle(snapped);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(45); } catch (_) {}
    }
  };

  const s = PRICING_SERVICES[idx];

  return (
    <div className={"lt-pricing " + (dragging ? "lt-pricing--dragging" : "lt-pricing--locked")}>
      <div className="lt-pricing-content" key={idx}>
        <h3 className="lt-pricing-title">{s.title}</h3>
        <div className="lt-pricing-price">{s.price}</div>
        <p className="lt-pricing-desc">{s.desc}</p>
      </div>

      <div
        className="lt-pricing-dial-wrap"
        ref={wrapRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        aria-hidden="true">
        <div
          className={"lt-pricing-dial " + (dragging ? "lt-pricing-dial--dragging" : "")}
          style={{ transform: `rotate(${angle}deg)` }}>
          <svg viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="lt-dial-face" cx="34%" cy="30%" r="78%">
                <stop offset="0%" stopColor="#42424c" />
                <stop offset="38%" stopColor="#222229" />
                <stop offset="78%" stopColor="#0f0f15" />
                <stop offset="100%" stopColor="#06060b" />
              </radialGradient>
              <radialGradient id="lt-dial-ring" cx="35%" cy="32%" r="80%">
                <stop offset="0%" stopColor="#7c7c88" />
                <stop offset="35%" stopColor="#41414a" />
                <stop offset="75%" stopColor="#1c1c24" />
                <stop offset="100%" stopColor="#08080d" />
              </radialGradient>
              <linearGradient id="lt-dial-bevel" x1="0.3" y1="0" x2="0.7" y2="1">
                <stop offset="0%" stopColor="rgba(255,245,225,0.55)" />
                <stop offset="45%" stopColor="rgba(255,245,225,0.04)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
              </linearGradient>
              <radialGradient id="lt-dial-hub" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#3a3a44" />
                <stop offset="60%" stopColor="#1c1c24" />
                <stop offset="100%" stopColor="#08080d" />
              </radialGradient>
            </defs>

            {/* Outer ring (metallic) */}
            <circle r="99" fill="url(#lt-dial-ring)" />
            {/* Knurling — many fine radial slashes give the rim grip texture */}
            {Array.from({ length: 96 }).map((_, i) => {
              const a = (i / 96) * Math.PI * 2;
              return (
                <line
                  key={"k" + i}
                  x1={Math.cos(a) * 98} y1={Math.sin(a) * 98}
                  x2={Math.cos(a) * 91} y2={Math.sin(a) * 91}
                  stroke="rgba(255,255,255,0.07)" strokeWidth="0.55" />);
            })}
            {/* outer rim shadow line */}
            <circle r="99" fill="none" stroke="rgba(0,0,0,0.65)" strokeWidth="1.2" />
            <circle r="91" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="0.6" />

            {/* Inner brushed face */}
            <circle r="88" fill="url(#lt-dial-face)" />
            {/* top-light bevel — soft sheen across the face */}
            <circle r="88" fill="url(#lt-dial-bevel)" opacity="0.22" />
            {/* face inner shadow ring */}
            <circle r="86" fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />
            <circle r="84" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.4" />

            {/* Major ticks — one per service */}
            {PRICING_SERVICES.map((_, i) => {
              const a = (i / PRICING_SERVICES.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <g key={"M" + i}>
                  <line
                    x1={Math.cos(a) * 84} y1={Math.sin(a) * 84}
                    x2={Math.cos(a) * 66} y2={Math.sin(a) * 66}
                    stroke="rgba(0,0,0,0.7)" strokeWidth="2.6" />
                  <line
                    x1={Math.cos(a) * 84} y1={Math.sin(a) * 84}
                    x2={Math.cos(a) * 66} y2={Math.sin(a) * 66}
                    stroke="rgba(244,241,234,0.92)" strokeWidth="1.5" />
                </g>);
            })}

            {/* Fine ticks (skipping major positions) */}
            {Array.from({ length: 60 }).map((_, i) => {
              if (i % (60 / PRICING_SERVICES.length) === 0) return null;
              const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
              return (
                <line
                  key={"m" + i}
                  x1={Math.cos(a) * 84} y1={Math.sin(a) * 84}
                  x2={Math.cos(a) * 78} y2={Math.sin(a) * 78}
                  stroke="rgba(244,241,234,0.36)" strokeWidth="0.5" />);
            })}

            {/* Inner concentric rings (subtle machined feel) */}
            <circle r="58" fill="none" stroke="rgba(244,241,234,0.10)" strokeWidth="0.5" />
            <circle r="44" fill="none" stroke="rgba(244,241,234,0.06)" strokeWidth="0.4" />

            {/* Center hub — like a screw bolt */}
            <circle r="22" fill="url(#lt-dial-hub)" stroke="rgba(0,0,0,0.6)" strokeWidth="0.6" />
            <circle r="22" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
            <circle r="14" fill="#0a0a12" stroke="rgba(255,255,255,0.10)" strokeWidth="0.4" />
            {/* Screw slot */}
            <line x1="-9" y1="0" x2="9" y2="0" stroke="rgba(0,0,0,0.7)" strokeWidth="1.4" />
            <line x1="-9" y1="-0.6" x2="9" y2="-0.6" stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
            <circle r="2.4" fill="rgba(244,241,234,0.85)" />
          </svg>
        </div>

        {/* Phosphorescent up/down hint — pulses on the visible rim until the
            user touches it. Independent layer so the dial can rotate underneath. */}
        {/* static pointer notch reading the current detente */}
        <div className="lt-pricing-pointer" />
      </div>

      {/* Phosphorescent hint — rendered OUTSIDE the dial-wrap so it doesn't
          inherit dial-wrap's drop-shadow filter (which flattens children
          into a rectangular layer and visually clips the glow). The
          additive blend lets the gas halo bleed freely across the section. */}
      {!hasInteracted && (
        <div className="lt-pricing-hint" aria-hidden="true">
          <svg viewBox="-140 -140 280 280" preserveAspectRatio="xMidYMid meet" overflow="visible">
            <path
              d="M -94 -28 A 98 98 0 0 0 -94 28"
              fill="none"
              stroke="rgb(60, 255, 130)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.55" />
            <path
              d="M -94 -28 A 98 98 0 0 0 -94 28"
              fill="none"
              stroke="rgb(150, 255, 180)"
              strokeWidth="3"
              strokeLinecap="round" />
            <path
              d="M -94 -28 A 98 98 0 0 0 -94 28"
              fill="none"
              stroke="rgb(245, 255, 245)"
              strokeWidth="1"
              strokeLinecap="round" />
            <path d="M -88 -38 L -82 -45 L -76 -38"
              fill="none" stroke="rgb(60, 255, 130)" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
            <path d="M -88 -38 L -82 -45 L -76 -38"
              fill="none" stroke="rgb(245, 255, 245)" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round" />
            <path d="M -88 38 L -82 45 L -76 38"
              fill="none" stroke="rgb(60, 255, 130)" strokeWidth="4"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
            <path d="M -88 38 L -82 45 L -76 38"
              fill="none" stroke="rgb(245, 255, 245)" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>);
}

const COMMUNITIES = [
  { label: "TETR College", img: "assets/communities/tetr.png", href: "https://www.instagram.com/tetr.college/" },
  { label: "30X", img: "assets/communities/30x.png", href: "https://www.instagram.com/crece30x/" },
  { label: "Untitled Project", img: "assets/communities/untitled-project.png", href: "https://www.instagram.com/untitl3d.project/" },
  { label: "Club KSE", img: "assets/communities/clubkse.png", href: "https://www.instagram.com/clubkse/" }
];

/* Coffee CTA — tap opens the native date picker; on date selection,
   open WhatsApp with a pre-filled message that includes the chosen date. */
function CoffeeCTA() {
  const inputRef = React.useRef(null);
  const PHONE = "573192441585";

  const onClick = (e) => {
    e.preventDefault();
    const input = inputRef.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try { input.showPicker(); return; } catch (_) {}
    }
    input.focus();
    try { input.click(); } catch (_) {}
  };

  const onChange = (e) => {
    const v = e.target.value;
    if (!v) return;
    const d = new Date(v + "T12:00:00");
    const formatted = d.toLocaleDateString("es-CO", {
      weekday: "long", day: "numeric", month: "long"
    });
    const msg = `Hola David! Me gustaría que nos tomemos un café el ${formatted}. ¿Confirmamos hora? ☕`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    e.target.value = "";
  };

  const todayISO = new Date().toISOString().slice(0, 10);

  return (
    <div className="lt-cta-wrap">
      <a
        className="lt-cta"
        href="#"
        onClick={onClick}
        role="button">
        <span className="lt-cta-text">let's get a</span>
        <span className="lt-cta-emoji" aria-hidden="true">☕</span>
      </a>
      <input
        ref={inputRef}
        type="date"
        className="lt-cta-date"
        min={todayISO}
        onChange={onChange}
        aria-label="Pick a date for our coffee chat" />
    </div>);
}

function App() {
  return (
    <main className="lt">
      <div className="lt-shell">

        <header className="lt-header">
          <span className="lt-eyebrow">GRATEFULLY 🇨🇴</span>
          <h1 className="lt-title">
            <img className="lt-bird" src="assets/colibri-cutout.png?v=3" alt="" aria-hidden="true" />
            <span className="lt-row lt-row-port">
              <span className="lt-letter">P</span>
              <span className="lt-letter">O</span>
              <span className="lt-letter">R</span>
              <span className="lt-letter">T</span>
            </span>
            <span className="lt-row lt-row-folio">
              <span className="lt-letter">F</span>
              <span className="lt-letter">O</span>
              <span className="lt-letter lt-letter-over">L</span>
              <span className="lt-letter lt-letter-over">I</span>
              <span className="lt-letter lt-letter-over">O</span>
            </span>
          </h1>
        </header>

        <section className="lt-id-block">
          <p className="lt-name">David Steban López</p>
          <nav className="lt-icons" aria-label="Links">
            {LINKS.map((l) =>
            <a
              key={l.label}
              className="lt-icon-btn"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              title={l.label}>
                <Icon name={l.icon} />
              </a>
            )}
          </nav>
        </section>

        <section className="lt-block">
          <h2 className="lt-section-title">WORK PROJECTS</h2>
          <div className="lt-marquee" aria-label="Work projects gallery">
            <div className="lt-marquee-track">
              {/* Slide 1 — CIA consulting site (live screenshot, links out) */}
              <a
                className="lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled"
                href="https://ai-intel-clone-8xcv.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CIA Store — Consultoría de IA (open in new tab)"
                style={{backgroundImage: "url('assets/cia-cover.png?v=1')"}}>
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">CIA Store</span>
                </div>
              </a>
              {/* Slide 2 — Mission Control dashboard (cycles through 8 views) */}
              <MissionSlide />
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled">
                <video
                  className="lt-marquee-video"
                  src="assets/cozy-room.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto" />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Omniscient</span>
                </div>
              </div>
              {/* Duplicates for seamless loop */}
              <a
                className="lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled"
                href="https://ai-intel-clone-8xcv.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                style={{backgroundImage: "url('assets/cia-cover.png?v=1')"}}>
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">CIA Store</span>
                </div>
              </a>
              <MissionSlide ariaHidden={true} tabIndex={-1} />
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled" aria-hidden="true">
                <video
                  className="lt-marquee-video"
                  src="assets/cozy-room.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  tabIndex={-1} />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Omniscient</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lt-block">
          <h2 className="lt-section-title">STRATEGIC CAPABILITIES</h2>
          <div className="lt-marquee lt-marquee--alt" aria-label="Strategic capabilities gallery">
            <div className="lt-marquee-track">
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled">
                <video
                  className="lt-marquee-video"
                  src="assets/systems-thinking.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto" />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Systems Thinking</span>
                </div>
              </div>
              <div
                className="lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled"
                style={{backgroundImage: "url('assets/business-development.jpeg')"}}>
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Business Development</span>
                </div>
              </div>
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--neon-green lt-marquee-item--labeled">
                <video
                  className="lt-marquee-video"
                  src="assets/blockchain-audit.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto" />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Blockchain Contract Auditing</span>
                </div>
              </div>
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled" aria-hidden="true">
                <video
                  className="lt-marquee-video"
                  src="assets/systems-thinking.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  tabIndex={-1} />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Systems Thinking</span>
                </div>
              </div>
              <div
                className="lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled"
                aria-hidden="true"
                style={{backgroundImage: "url('assets/business-development.jpeg')"}}>
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Business Development</span>
                </div>
              </div>
              <div className="lt-marquee-item lt-marquee-item--video lt-marquee-item--neon-green lt-marquee-item--labeled" aria-hidden="true">
                <video
                  className="lt-marquee-video"
                  src="assets/blockchain-audit.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  tabIndex={-1} />
                <div className="lt-marquee-overlay" aria-hidden="true">
                  <span className="lt-marquee-label">Blockchain Contract Auditing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lt-block">
          <h2 className="lt-section-title">PRICING</h2>
          <PricingDial />
        </section>

        <section className="lt-block">
          <h2 className="lt-section-title">COMMUNITIES</h2>
          <div className="lt-communities" aria-label="Communities">
            {COMMUNITIES.map((c) =>
              <a
                key={c.label}
                className="lt-community-btn"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                title={c.label}>
                <img src={c.img} alt={c.label} draggable="false" />
              </a>
            )}
          </div>
        </section>

        <CoffeeCTA />

        <div className="lt-qr">
          <img src="assets/qr-david.png?v=1" alt="QR — David Steban López" />
        </div>

        <footer className="lt-foot">
          <span>© 2026 · all links one tap away</span>
        </footer>

      </div>
    </main>);

}

function DesktopBlock() {
  return (
    <div className="lt-desktop-block" aria-hidden="true">
      <span className="lt-desktop-block-icon">📱</span>
      <h2 className="lt-desktop-block-title">Sólo móvil & tablet</h2>
      <p className="lt-desktop-block-msg">
        Este portfolio está diseñado para celular y tablet. Abrilo desde tu
        teléfono o iPad para verlo bien.
      </p>
    </div>);
}

function Root() {
  return (
    <>
      <App />
      <DesktopBlock />
    </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

/* ===== Marquee drag/touch =====
   Auto-scrolls right (CSS keeps doing this) and lets the user drag with
   finger/mouse in either direction. On release, auto-scroll resumes
   smoothly from the dragged position. Loop wraps seamlessly because the
   track is duplicated [A B C A B C]; we keep the offset in [-halfWidth, 0]. */
function initMarquees() {
  document.querySelectorAll('.lt-marquee').forEach((wrap) => {
    const track = wrap.querySelector('.lt-marquee-track');
    if (!track || track.dataset.dragInit) return;
    track.dataset.dragInit = "1";

    const cs = getComputedStyle(track);
    const dur = parseFloat(cs.animationDuration) || 88;
    // Strategic Capabilities scrolls leftward (the rest scroll right).
    const reverse = wrap.classList.contains('lt-marquee--alt');
    track.style.animation = 'none';
    track.style.willChange = 'transform';

    let halfWidth = () => track.scrollWidth / 2;
    let offset = -halfWidth();
    let lastT = performance.now();
    let dragging = false;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let resumeAt = 0;
    let moved = false;
    let activeItem = null;
    let releaseTimer = null;
    const MOVE_THRESHOLD = 8;

    const wrapOffset = () => {
      const hw = halfWidth();
      while (offset > 0) offset -= hw;
      while (offset < -hw) offset += hw;
    };

    const tick = (now) => {
      const dt = (now - lastT) / 1000;
      lastT = now;
      if (!dragging && now >= resumeAt) {
        offset += (halfWidth() / dur) * dt * (reverse ? -1 : 1);
        wrapOffset();
      }
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame((t) => { lastT = t; tick(t); });

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
    const getY = (e) => (e.touches ? e.touches[0].clientY : e.clientY);
    const findItemAt = (x, y) => {
      const el = document.elementFromPoint(x, y);
      return el ? el.closest('.lt-marquee-item') : null;
    };
    const setActive = (item) => {
      if (activeItem === item) return;
      if (activeItem) activeItem.classList.remove('lt-marquee-item--active');
      activeItem = item;
      if (item) item.classList.add('lt-marquee-item--active');
    };

    const onDown = (e) => {
      dragging = true;
      moved = false;
      startX = getX(e);
      startY = getY(e);
      startOffset = offset;
      if (releaseTimer) { clearTimeout(releaseTimer); releaseTimer = null; }
      setActive(findItemAt(startX, startY));
      if (e.pointerId !== undefined) {
        pointerId = e.pointerId;
        try { wrap.setPointerCapture(pointerId); } catch (_) {}
      }
    };
    const onMove = (e) => {
      if (!dragging) return;
      const x = getX(e);
      const dx = x - startX;
      if (Math.abs(dx) > MOVE_THRESHOLD) moved = true;
      offset = startOffset + dx;
      wrapOffset();
      setActive(findItemAt(x, getY(e)));
      if (moved && e.cancelable) e.preventDefault();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      resumeAt = performance.now() + 800;
      // Hold the label visible for 30ms after release, then let CSS fade.
      const itemAtRelease = activeItem;
      releaseTimer = setTimeout(() => {
        if (activeItem === itemAtRelease) {
          itemAtRelease && itemAtRelease.classList.remove('lt-marquee-item--active');
          activeItem = null;
        }
        releaseTimer = null;
      }, 30);
      if (pointerId !== null) {
        try { wrap.releasePointerCapture(pointerId); } catch (_) {}
        pointerId = null;
      }
    };

    // If the gesture turned into a drag, suppress the click so links
    // (e.g. CIA Store) don't navigate away.
    wrap.addEventListener('click', (e) => {
      if (moved) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      // reset on next tick so subsequent real clicks aren't blocked
      setTimeout(() => { moved = false; }, 0);
    }, true);

    // Block native HTML drag (image/link ghost-drag)
    wrap.querySelectorAll('a, img, video').forEach((el) => {
      el.setAttribute('draggable', 'false');
      el.addEventListener('dragstart', (ev) => ev.preventDefault());
    });

    if (window.PointerEvent) {
      wrap.addEventListener('pointerdown', onDown);
      wrap.addEventListener('pointermove', onMove);
      wrap.addEventListener('pointerup', onUp);
      wrap.addEventListener('pointercancel', onUp);
      wrap.addEventListener('pointerleave', onUp);
    } else {
      wrap.addEventListener('touchstart', onDown, { passive: true });
      wrap.addEventListener('touchmove', onMove, { passive: false });
      wrap.addEventListener('touchend', onUp);
      wrap.addEventListener('mousedown', onDown);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    }
  });
}
// React 18 createRoot renders asynchronously, so we may need to retry
// until the marquees are actually in the DOM.
(function tryInit(retries) {
  initMarquees();
  const tracks = document.querySelectorAll('.lt-marquee-track');
  const allInit = tracks.length > 0 && Array.from(tracks).every((t) => t.dataset.dragInit);
  if (!allInit && retries > 0) {
    setTimeout(() => tryInit(retries - 1), 50);
  }
})(20);
