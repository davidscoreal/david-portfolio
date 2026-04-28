(() => {
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
      label: "X",
      href: "https://x.com/Elev8wDavid",
      icon: "x"
    },
    {
      label: "Email",
      href: "mailto:steban@univercityaiconsult.tech",
      icon: "mail"
    }
  ];
  function Icon({ name }) {
    const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
    if (name === "ig") return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "4" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "6.5", r: "0.8", fill: "currentColor" }));
    if (name === "yt") return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "2.5", y: "6", width: "19", height: "12", rx: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M10 9.5 L15 12 L10 14.5 Z", fill: "currentColor", stroke: "none" }));
    if (name === "li") return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "7", y1: "10", x2: "7", y2: "17" }), /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M11 17v-7M11 13c0-2 1.5-3 3-3s2.5 1 2.5 3v4" }));
    if (name === "wa") return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("path", { d: "M3 21l1.6-4.6A8 8 0 1 1 8 19.4L3 21z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 9.5c0 4 3 6.5 6 6.5l1-1.5-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2L9.5 9c-.3 0-.5.2-.5.5z", fill: "currentColor", stroke: "none" }));
    if (name === "mail") return /* @__PURE__ */ React.createElement("svg", { ...common }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 7l9 6 9-6" }));
    if (name === "x") return /* @__PURE__ */ React.createElement("svg", { ...common, fill: "currentColor", stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }));
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
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-mission lt-marquee-item--labeled",
        "aria-label": "Mission Control \u2014 KAIROS dashboard",
        "aria-hidden": ariaHidden,
        tabIndex
      },
      MISSION_IMAGES.map(
        (src) => /* @__PURE__ */ React.createElement(
          "div",
          {
            key: src,
            className: "lt-mission-frame",
            style: { backgroundImage: `url('${src}')` }
          }
        )
      ),
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Mission Control"))
    );
  }
  const LOVE_IMAGES = [
    "assets/love/01-manifesto.png",
    "assets/love/02-deterministic.jpg",
    "assets/love/03-nexus-protocol.jpg",
    "assets/love/04-impact-matrix.jpg"
  ];
  function LoveSlide({ ariaHidden, tabIndex }) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-mission lt-love lt-marquee-item--labeled",
        "aria-label": "Love Protocol \u2014 deterministic coordination layer",
        "aria-hidden": ariaHidden,
        tabIndex
      },
      LOVE_IMAGES.map(
        (src) => /* @__PURE__ */ React.createElement(
          "div",
          {
            key: src,
            className: "lt-mission-frame",
            style: { backgroundImage: `url('${src}')` }
          }
        )
      ),
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Love Protocol"))
    );
  }
  const LEAD_ENDPOINT = "https://script.google.com/macros/s/AKfycbw-bI8fdA1W4pjBG3QaFyPReowh8gMxU2cNE9rw2UfUl9Mg92K76XFlvD3_OyPVW5QTMw/exec";
  const COUNTRIES = [
    { code: "+57", flag: "\u{1F1E8}\u{1F1F4}", name: "Colombia" },
    { code: "+52", flag: "\u{1F1F2}\u{1F1FD}", name: "M\xE9xico" },
    { code: "+34", flag: "\u{1F1EA}\u{1F1F8}", name: "Espa\xF1a" },
    { code: "+1",  flag: "\u{1F1FA}\u{1F1F8}", name: "USA / Canada" },
    { code: "+55", flag: "\u{1F1E7}\u{1F1F7}", name: "Brasil" },
    { code: "other", flag: "\u{1F310}", name: "Otro" }
  ];
  function LeadSheet({ open, service, onClose }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [country, setCountry] = React.useState("+57");
    const [customCode, setCustomCode] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState("idle");
    const [errors, setErrors] = React.useState({});
    const [mounted, setMounted] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const sheetRef = React.useRef(null);
    const dragRef = React.useRef(null);
    const [dragY, setDragY] = React.useState(0);
    React.useEffect(() => {
      if (open) {
        setMounted(true);
        document.body.style.overflow = "hidden";
        // Defer enough that the browser commits the initial translateY(100%)
        // paint before we flip to visible (otherwise React batches and the
        // slide-up animation is skipped).
        const t = setTimeout(() => setVisible(true), 24);
        return () => {
          clearTimeout(t);
          document.body.style.overflow = "";
        };
      } else {
        setVisible(false);
        const t = setTimeout(() => {
          setMounted(false);
          setStatus("idle");
          setErrors({});
          setDragY(0);
        }, 460);
        return () => clearTimeout(t);
      }
    }, [open]);
    React.useEffect(() => {
      if (status === "success") {
        const t = setTimeout(() => onClose(), 2400);
        return () => clearTimeout(t);
      }
    }, [status, onClose]);
    if (!mounted) return null;
    const validate = () => {
      const e = {};
      if (!name.trim()) e.name = "Tu nombre";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Email inv\xE1lido";
      const phoneDigits = phone.replace(/\D/g, "");
      if (phoneDigits.length < 7) e.phone = "M\xEDn. 7 d\xEDgitos";
      if (country === "other" && !/^\+\d{1,4}$/.test(customCode.trim())) e.customCode = "+xx";
      setErrors(e);
      return Object.keys(e).length === 0;
    };
    const submit = async (ev) => {
      ev.preventDefault();
      if (!validate()) return;
      setStatus("submitting");
      const code = country === "other" ? customCode.trim() : country;
      const payload = {
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        name: name.trim(),
        email: email.trim(),
        phone: code + " " + phone.replace(/\D/g, ""),
        country_code: code,
        service: service || "(general)",
        message: message.trim(),
        source: "portfolio"
      };
      try {
        if (LEAD_ENDPOINT) {
          await fetch(LEAD_ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload)
          });
        } else {
          console.log("[lead]", payload);
          await new Promise((r) => setTimeout(r, 600));
        }
        setStatus("success");
        setName(""); setEmail(""); setPhone(""); setMessage(""); setCustomCode("");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };
    const onHandleDown = (e) => {
      dragRef.current = { startY: e.clientY };
      if (e.pointerId !== void 0 && e.currentTarget.setPointerCapture) {
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
      }
    };
    const onHandleMove = (e) => {
      if (!dragRef.current) return;
      const dy = Math.max(0, e.clientY - dragRef.current.startY);
      setDragY(dy);
    };
    const onHandleUp = () => {
      if (!dragRef.current) return;
      const dy = dragY;
      dragRef.current = null;
      if (dy > 110) {
        onClose();
      } else {
        setDragY(0);
      }
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-sheet-root " + (visible ? "lt-sheet-root--open" : ""),
        "aria-hidden": !visible
      },
      /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-backdrop", onClick: onClose }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: sheetRef,
          className: "lt-sheet",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Solicitar informaci\xF3n",
          style: { transform: `translateY(${dragY}px)` }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "lt-sheet-handle-area",
            onPointerDown: onHandleDown,
            onPointerMove: onHandleMove,
            onPointerUp: onHandleUp,
            onPointerCancel: onHandleUp
          },
          /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-handle" })
        ),
        status === "success"
          ? /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-success" },
              /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-success-icon" }, "✓"),
              /* @__PURE__ */ React.createElement("h3", null, "\xA1Gracias!"),
              /* @__PURE__ */ React.createElement("p", null, "Te contacto en menos de 24h. Sigue explorando."),
              /* @__PURE__ */ React.createElement("button", { type: "button", className: "lt-sheet-close-btn", onClick: onClose }, "Cerrar")
            )
          : /* @__PURE__ */ React.createElement("form", { className: "lt-sheet-form", onSubmit: submit, noValidate: true },
              /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-eyebrow" }, service || "Solicitar info"),
              /* @__PURE__ */ React.createElement("h3", { className: "lt-sheet-title" }, "Cu\xE9ntame"),
              /* @__PURE__ */ React.createElement("p", { className: "lt-sheet-sub" }, "D\xE9jame tu info y te contacto personalmente."),
              /* @__PURE__ */ React.createElement("label", { className: "lt-field" + (errors.name ? " lt-field--err" : "") },
                /* @__PURE__ */ React.createElement("span", null, "Nombre"),
                /* @__PURE__ */ React.createElement("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), placeholder: "Tu nombre", autoComplete: "name" })
              ),
              /* @__PURE__ */ React.createElement("label", { className: "lt-field" + (errors.email ? " lt-field--err" : "") },
                /* @__PURE__ */ React.createElement("span", null, "Email"),
                /* @__PURE__ */ React.createElement("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "tu@email.com", autoComplete: "email", inputMode: "email" })
              ),
              /* @__PURE__ */ React.createElement("div", { className: "lt-field-row" },
                /* @__PURE__ */ React.createElement("label", { className: "lt-field lt-field--country" },
                  /* @__PURE__ */ React.createElement("span", null, "Pa\xEDs"),
                  /* @__PURE__ */ React.createElement("select", { value: country, onChange: (e) => setCountry(e.target.value) },
                    COUNTRIES.map((c) => /* @__PURE__ */ React.createElement("option", { key: c.code, value: c.code },
                      c.flag + "  " + (c.code === "other" ? c.name : c.code + " " + c.name)
                    ))
                  )
                ),
                country === "other"
                  ? /* @__PURE__ */ React.createElement("label", { className: "lt-field lt-field--ccode" + (errors.customCode ? " lt-field--err" : "") },
                      /* @__PURE__ */ React.createElement("span", null, "C\xF3digo"),
                      /* @__PURE__ */ React.createElement("input", { type: "tel", value: customCode, onChange: (e) => setCustomCode(e.target.value), placeholder: "+44", inputMode: "tel" })
                    )
                  : null,
                /* @__PURE__ */ React.createElement("label", { className: "lt-field lt-field--phone" + (errors.phone ? " lt-field--err" : "") },
                  /* @__PURE__ */ React.createElement("span", null, "Tel\xE9fono"),
                  /* @__PURE__ */ React.createElement("input", { type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "300 123 4567", autoComplete: "tel", inputMode: "tel" })
                )
              ),
              /* @__PURE__ */ React.createElement("label", { className: "lt-field" },
                /* @__PURE__ */ React.createElement("span", null, "Mensaje (opcional)"),
                /* @__PURE__ */ React.createElement("textarea", { value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Cu\xE9ntame brevemente tu contexto", rows: 3 })
              ),
              status === "error"
                ? /* @__PURE__ */ React.createElement("div", { className: "lt-sheet-err-msg" }, "Algo fall\xF3. Probemos de nuevo.")
                : null,
              /* @__PURE__ */ React.createElement(
                "button",
                {
                  type: "submit",
                  className: "lt-sheet-submit",
                  disabled: status === "submitting"
                },
                status === "submitting" ? "Enviando…" : "Enviar"
              )
            )
      )
    );
  }
  const PRICING_SERVICES = [
    {
      title: "Revenue Leak Audit",
      price: "$2K \u2013 $5K  \xB7  2\u20133 weeks",
      desc: "A full diagnostic of where your business is losing money \u2014 broken processes, misaligned pricing, operational blind spots. You get a detailed report with findings ranked by impact and a prioritized roadmap to fix them."
    },
    {
      title: "Predictable Revenue Architecture",
      price: "$4K \u2013 $25K  \xB7  4\u20138 weeks",
      desc: "We take the findings from the audit and turn them into real infrastructure: sales pipelines, automation workflows, retention systems, and the metrics to track it all. This is where strategy becomes something that actually runs."
    },
    {
      title: "Living System Retainer",
      price: "$500 \u2013 $3K  /  month",
      desc: "Ongoing maintenance of the system we built. Monthly optimization, new automations as your business evolves, KPI monitoring, and continuous tuning. The system stays sharp because someone's always watching it."
    },
    {
      title: "Agentic Strategy & Implementation",
      price: "$5K \u2013 $20K  \xB7  4\u20138 weeks",
      desc: "End-to-end consulting: we diagnose which business processes benefit from AI agents, design the agentic architecture \u2014 what each agent does, how they communicate, where humans stay in the loop \u2014 and then build and deploy the whole thing. This isn't a strategy deck that collects dust. You get working agents in production."
    },
    {
      title: "Automation Workshop",
      price: "$1K \u2013 $5K  \xB7  1 day",
      desc: "A hands-on, in-person or virtual workshop where your team builds their first AI automation from scratch. No slides-only sessions. Everyone leaves with something that works."
    },
    {
      title: "Blockchain Contract Auditing",
      price: "Per engagement",
      desc: "Security review of smart contracts (Solidity, Rust/Solana, Move) before mainnet deployment. Static and dynamic analysis, detection of known vulnerability patterns \u2014 reentrancy, overflow, access control flaws \u2014 attack simulation, and a severity-classified report. Includes remediation guidance and a re-audit after fixes."
    }
  ];
  function PricingDial() {
    const stepDeg = 360 / PRICING_SERVICES.length;
    const [angle, setAngle] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);
    const wrapRef = React.useRef(null);
    const dragRef = React.useRef(null);
    const lastIdxRef = React.useRef(0);
    const idx = (-Math.round(angle / stepDeg) % PRICING_SERVICES.length + PRICING_SERVICES.length) % PRICING_SERVICES.length;
    React.useEffect(() => {
      if (lastIdxRef.current !== idx) {
        lastIdxRef.current = idx;
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          try {
            navigator.vibrate(18);
          } catch (_) {
          }
        }
      }
    }, [idx]);
    const onDown = (e) => {
      // Touch only — no mouse, no stylus. The dial is for mobile.
      if (e.pointerType && e.pointerType !== "touch") return;
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
      if (dist < rInner || dist > rOuter * 1.02) return;
      setDragging(true);
      // Angular drag: record the touch's angle relative to the dial center,
      // and rotate the dial by however many degrees the finger sweeps around.
      const startTouchAngle = Math.atan2(dy, dx) * 180 / Math.PI;
      dragRef.current = { startTouchAngle, startAngle: angle };
      if (e.pointerId !== void 0 && wrap.setPointerCapture) {
        try {
          wrap.setPointerCapture(e.pointerId);
        } catch (_) {
        }
      }
    };
    const onMove = (e) => {
      if (!dragging || !dragRef.current) return;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const currentTouchAngle = Math.atan2(dy, dx) * 180 / Math.PI;
      let delta = currentTouchAngle - dragRef.current.startTouchAngle;
      // Unwrap so successive swipes accumulate naturally
      while (delta > 180) delta -= 360;
      while (delta < -180) delta += 360;
      setAngle(dragRef.current.startAngle + delta);
      if (e.cancelable) e.preventDefault();
    };
    const onUp = () => {
      if (!dragging) return;
      setDragging(false);
      dragRef.current = null;
      const snapped = Math.round(angle / stepDeg) * stepDeg;
      setAngle(snapped);
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(45);
        } catch (_) {
        }
      }
    };
    const s = PRICING_SERVICES[idx];
    return /* @__PURE__ */ React.createElement("div", { className: "lt-pricing " + (dragging ? "lt-pricing--dragging" : "lt-pricing--locked") }, /* @__PURE__ */ React.createElement("div", { className: "lt-pricing-content", key: idx }, /* @__PURE__ */ React.createElement("h3", { className: "lt-pricing-title" }, s.title), /* @__PURE__ */ React.createElement("div", { className: "lt-pricing-price" }, s.price), /* @__PURE__ */ React.createElement("p", { className: "lt-pricing-desc" }, s.desc)), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-pricing-dial-wrap",
        ref: wrapRef,
        onPointerDown: onDown,
        onPointerMove: onMove,
        onPointerUp: onUp,
        onPointerCancel: onUp,
        "aria-hidden": "true"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "lt-pricing-dial " + (dragging ? "lt-pricing-dial--dragging" : ""),
          style: { transform: `rotate(${angle}deg)` }
        },
        /* @__PURE__ */ React.createElement("svg", { viewBox: "-100 -100 200 200", preserveAspectRatio: "xMidYMid meet" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: "lt-dial-face", cx: "34%", cy: "30%", r: "78%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#42424c" }), /* @__PURE__ */ React.createElement("stop", { offset: "38%", stopColor: "#222229" }), /* @__PURE__ */ React.createElement("stop", { offset: "78%", stopColor: "#0f0f15" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#06060b" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "lt-dial-ring", cx: "35%", cy: "32%", r: "80%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#7c7c88" }), /* @__PURE__ */ React.createElement("stop", { offset: "35%", stopColor: "#41414a" }), /* @__PURE__ */ React.createElement("stop", { offset: "75%", stopColor: "#1c1c24" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#08080d" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "lt-dial-bevel", x1: "0.3", y1: "0", x2: "0.7", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "rgba(255,245,225,0.55)" }), /* @__PURE__ */ React.createElement("stop", { offset: "45%", stopColor: "rgba(255,245,225,0.04)" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "rgba(0,0,0,0.55)" })), /* @__PURE__ */ React.createElement("radialGradient", { id: "lt-dial-hub", cx: "35%", cy: "30%", r: "80%" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#3a3a44" }), /* @__PURE__ */ React.createElement("stop", { offset: "60%", stopColor: "#1c1c24" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#08080d" }))), /* @__PURE__ */ React.createElement("circle", { r: "99", fill: "url(#lt-dial-ring)" }), Array.from({ length: 96 }).map((_, i) => {
          const a = i / 96 * Math.PI * 2;
          return /* @__PURE__ */ React.createElement(
            "line",
            {
              key: "k" + i,
              x1: Math.cos(a) * 98,
              y1: Math.sin(a) * 98,
              x2: Math.cos(a) * 91,
              y2: Math.sin(a) * 91,
              stroke: "rgba(255,255,255,0.07)",
              strokeWidth: "0.55"
            }
          );
        }), /* @__PURE__ */ React.createElement("circle", { r: "99", fill: "none", stroke: "rgba(0,0,0,0.65)", strokeWidth: "1.2" }), /* @__PURE__ */ React.createElement("circle", { r: "91", fill: "none", stroke: "rgba(0,0,0,0.5)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("circle", { r: "88", fill: "url(#lt-dial-face)" }), /* @__PURE__ */ React.createElement("circle", { r: "88", fill: "url(#lt-dial-bevel)", opacity: "0.22" }), /* @__PURE__ */ React.createElement("circle", { r: "86", fill: "none", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("circle", { r: "84", fill: "none", stroke: "rgba(255,255,255,0.05)", strokeWidth: "0.4" }), PRICING_SERVICES.map((_, i) => {
          const a = i / PRICING_SERVICES.length * Math.PI * 2 - Math.PI / 2;
          return /* @__PURE__ */ React.createElement("g", { key: "M" + i }, /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: Math.cos(a) * 84,
              y1: Math.sin(a) * 84,
              x2: Math.cos(a) * 66,
              y2: Math.sin(a) * 66,
              stroke: "rgba(0,0,0,0.7)",
              strokeWidth: "2.6"
            }
          ), /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: Math.cos(a) * 84,
              y1: Math.sin(a) * 84,
              x2: Math.cos(a) * 66,
              y2: Math.sin(a) * 66,
              stroke: "rgba(244,241,234,0.92)",
              strokeWidth: "1.5"
            }
          ));
        }), Array.from({ length: 60 }).map((_, i) => {
          if (i % (60 / PRICING_SERVICES.length) === 0) return null;
          const a = i / 60 * Math.PI * 2 - Math.PI / 2;
          return /* @__PURE__ */ React.createElement(
            "line",
            {
              key: "m" + i,
              x1: Math.cos(a) * 84,
              y1: Math.sin(a) * 84,
              x2: Math.cos(a) * 78,
              y2: Math.sin(a) * 78,
              stroke: "rgba(244,241,234,0.36)",
              strokeWidth: "0.5"
            }
          );
        }), /* @__PURE__ */ React.createElement("circle", { r: "58", fill: "none", stroke: "rgba(244,241,234,0.10)", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("circle", { r: "44", fill: "none", stroke: "rgba(244,241,234,0.06)", strokeWidth: "0.4" }), /* @__PURE__ */ React.createElement("circle", { r: "22", fill: "url(#lt-dial-hub)", stroke: "rgba(0,0,0,0.6)", strokeWidth: "0.6" }), /* @__PURE__ */ React.createElement("circle", { r: "22", fill: "none", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.5" }), /* @__PURE__ */ React.createElement("circle", { r: "14", fill: "#0a0a12", stroke: "rgba(255,255,255,0.10)", strokeWidth: "0.4" }), /* @__PURE__ */ React.createElement("line", { x1: "-9", y1: "0", x2: "9", y2: "0", stroke: "rgba(0,0,0,0.7)", strokeWidth: "1.4" }), /* @__PURE__ */ React.createElement("line", { x1: "-9", y1: "-0.6", x2: "9", y2: "-0.6", stroke: "rgba(255,255,255,0.18)", strokeWidth: "0.4" }), /* @__PURE__ */ React.createElement("circle", { r: "2.4", fill: "rgba(244,241,234,0.85)" }))
      ),
      /* @__PURE__ */ React.createElement("div", { className: "lt-pricing-pointer" })
    ));
  }
  const COMMUNITIES = [
    { label: "TETR College", img: "assets/communities/tetr.png", href: "https://www.instagram.com/tetr.college/" },
    { label: "30X", img: "assets/communities/30x.png", href: "https://www.instagram.com/crece30x/" },
    { label: "Untitled Project", img: "assets/communities/untitled-project.png", href: "https://www.instagram.com/untitl3d.project/" },
    { label: "Club KSE", img: "assets/communities/clubkse.png", href: "https://www.instagram.com/clubkse/" }
  ];
  function CoffeeCTA() {
    const inputId = "lt-coffee-date";
    const PHONE = "573192441585";
    const onChange = (e) => {
      const v = e.target.value;
      if (!v) return;
      const d = /* @__PURE__ */ new Date(v + "T12:00:00");
      const formatted = d.toLocaleDateString("es-CO", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });
      const msg = `Hola David! Me gustar\xEDa que nos tomemos un caf\xE9 el ${formatted}. \xBFConfirmamos hora? \u2615`;
      const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      e.target.value = "";
    };
    const todayISO = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return /* @__PURE__ */ React.createElement("div", { className: "lt-cta-wrap" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        id: inputId,
        type: "date",
        className: "lt-cta-date",
        min: todayISO,
        onChange,
        "aria-label": "Pick a date for our coffee chat"
      }
    ), /* @__PURE__ */ React.createElement("label", { className: "lt-cta", htmlFor: inputId }, /* @__PURE__ */ React.createElement("span", { className: "lt-cta-text" }, "let's get a"), /* @__PURE__ */ React.createElement("span", { className: "lt-cta-emoji", "aria-hidden": "true" }, "\u2615")));
  }
  function App() {
    const [leadOpen, setLeadOpen] = React.useState(false);
    const [leadService, setLeadService] = React.useState(PRICING_SERVICES[0].title);
    const openLead = () => {
      const t = document.querySelector(".lt-pricing-title")?.textContent;
      if (t) setLeadService(t);
      setLeadOpen(true);
    };
    const closeLead = () => setLeadOpen(false);
    return /* @__PURE__ */ React.createElement("main", { className: "lt" }, /* @__PURE__ */ React.createElement(LeadSheet, { open: leadOpen, service: leadService, onClose: closeLead }), /* @__PURE__ */ React.createElement("div", { className: "lt-shell" }, /* @__PURE__ */ React.createElement("header", { className: "lt-header" }, /* @__PURE__ */ React.createElement("span", { className: "lt-eyebrow" }, "GRATEFULLY \u{1F1E8}\u{1F1F4}"), /* @__PURE__ */ React.createElement("h1", { className: "lt-title" }, /* @__PURE__ */ React.createElement("img", { className: "lt-bird", src: "assets/colibri-cutout.png?v=3", alt: "", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "lt-row lt-row-port" }, /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "P"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "O"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "R"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "T")), /* @__PURE__ */ React.createElement("span", { className: "lt-row lt-row-folio" }, /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "F"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter" }, "O"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter lt-letter-over" }, "L"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter lt-letter-over" }, "I"), /* @__PURE__ */ React.createElement("span", { className: "lt-letter lt-letter-over" }, "O")))), /* @__PURE__ */ React.createElement("section", { className: "lt-id-block" }, /* @__PURE__ */ React.createElement("p", { className: "lt-name" }, "David Steban R L\xF3pez"), /* @__PURE__ */ React.createElement("nav", { className: "lt-icons", "aria-label": "Links" }, LINKS.map(
      (l) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: l.label,
          className: "lt-icon-btn",
          href: l.href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": l.label,
          title: l.label
        },
        /* @__PURE__ */ React.createElement(Icon, { name: l.icon })
      )
    ))), /* @__PURE__ */ React.createElement("section", { className: "lt-block" }, /* @__PURE__ */ React.createElement("h2", { className: "lt-section-title" }, "WORK PROJECTS"), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee", "aria-label": "Work projects gallery" }, /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-track" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled",
        href: "https://ai-intel-clone-8xcv.vercel.app/",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "CIA Store \u2014 Consultor\xEDa de IA (open in new tab)",
        style: { backgroundImage: "url('assets/cia-cover.png?v=1')" }
      },
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "CIA Store"))
    ), /* @__PURE__ */ React.createElement(MissionSlide, null), /* @__PURE__ */ React.createElement(LoveSlide, null), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled", role: "link", tabIndex: 0, onClick: () => window.open("https://github.com/davidscoreal", "_blank", "noopener,noreferrer"), onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") window.open("https://github.com/davidscoreal", "_blank", "noopener,noreferrer"); }, "aria-label": "GitHub — davidscoreal (open in new tab)" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/cozy-room.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Omniscient"))), /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled",
        href: "https://ai-intel-clone-8xcv.vercel.app/",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-hidden": "true",
        tabIndex: -1,
        style: { backgroundImage: "url('assets/cia-cover.png?v=1')" }
      },
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "CIA Store"))
    ), /* @__PURE__ */ React.createElement(MissionSlide, { ariaHidden: true, tabIndex: -1 }), /* @__PURE__ */ React.createElement(LoveSlide, { ariaHidden: true, tabIndex: -1 }), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/cozy-room.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        tabIndex: -1
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Omniscient")))))), /* @__PURE__ */ React.createElement("section", { className: "lt-block" }, /* @__PURE__ */ React.createElement("h2", { className: "lt-section-title" }, "STRATEGIC CAPABILITIES"), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee lt-marquee--alt", "aria-label": "Strategic capabilities gallery" }, /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-track" }, /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/systems-thinking.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Systems Thinking"))), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled",
        style: { backgroundImage: "url('assets/business-development.jpeg')" }
      },
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Business Development"))
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--neon-green lt-marquee-item--labeled" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/blockchain-audit.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Blockchain Contract Auditing"))), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--labeled", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/systems-thinking.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        tabIndex: -1
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Systems Thinking"))), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "lt-marquee-item lt-marquee-item--photo lt-marquee-item--labeled",
        "aria-hidden": "true",
        style: { backgroundImage: "url('assets/business-development.jpeg')" }
      },
      /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Business Development"))
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-item lt-marquee-item--video lt-marquee-item--neon-green lt-marquee-item--labeled", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        className: "lt-marquee-video",
        src: "assets/blockchain-audit.mp4",
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "auto",
        tabIndex: -1
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "lt-marquee-overlay", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-marquee-label" }, "Blockchain Contract Auditing")))))), /* @__PURE__ */ React.createElement("section", { className: "lt-block" }, /* @__PURE__ */ React.createElement("h2", { className: "lt-section-title" }, "PRICING"), /* @__PURE__ */ React.createElement(PricingDial, null), /* @__PURE__ */ React.createElement("button", { type: "button", className: "lt-pricing-cta-bar", onClick: openLead }, "Solicitar info →")), /* @__PURE__ */ React.createElement("section", { className: "lt-block" }, /* @__PURE__ */ React.createElement("h2", { className: "lt-section-title" }, "COMMUNITIES"), /* @__PURE__ */ React.createElement("div", { className: "lt-communities", "aria-label": "Communities" }, COMMUNITIES.map(
      (c) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: c.label,
          className: "lt-community-btn",
          href: c.href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": c.label,
          title: c.label
        },
        /* @__PURE__ */ React.createElement("img", { src: c.img, alt: c.label, draggable: "false" })
      )
    ))), /* @__PURE__ */ React.createElement(CoffeeCTA, null), /* @__PURE__ */ React.createElement("div", { className: "lt-qr" }, /* @__PURE__ */ React.createElement("img", { src: "assets/qr-david.png?v=1", alt: "QR \u2014 David Steban L\xF3pez" })), /* @__PURE__ */ React.createElement("footer", { className: "lt-foot" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 \xB7 all links one tap away"))));
  }
  function DesktopBlock() {
    return /* @__PURE__ */ React.createElement("div", { className: "lt-desktop-block", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "lt-desktop-block-icon" }, "\u{1F4F1}"), /* @__PURE__ */ React.createElement("h2", { className: "lt-desktop-block-title" }, "S\xF3lo m\xF3vil & tablet"), /* @__PURE__ */ React.createElement("p", { className: "lt-desktop-block-msg" }, "Este portfolio est\xE1 dise\xF1ado para celular y tablet. Abrilo desde tu tel\xE9fono o iPad para verlo bien."));
  }
  function Root() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(App, null), /* @__PURE__ */ React.createElement(DesktopBlock, null));
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(Root, null));
  function initMarquees() {
    document.querySelectorAll(".lt-marquee").forEach((wrap) => {
      const track = wrap.querySelector(".lt-marquee-track");
      if (!track || track.dataset.dragInit) return;
      track.dataset.dragInit = "1";
      const cs = getComputedStyle(track);
      const dur = parseFloat(cs.animationDuration) || 88;
      const reverse = wrap.classList.contains("lt-marquee--alt");
      track.style.animation = "none";
      track.style.willChange = "transform";
      let halfWidth = () => track.scrollWidth / 2;
      let offset = -halfWidth();
      let lastT = performance.now();
      let dragging = false;
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let startOffset = 0;
      let moved = false;
      let activeItem = null;
      let releaseTimer = null;
      let lastMoveX = 0;
      let lastMoveT = 0;
      let dragVelocity = 0;
      let releaseVelocity = 0;
      let releaseTime = 0;
      // After releasing a touch: hold the marquee static for HOLD_MS so the
      // user can finish reading what they tapped, then ramp back to baseVel
      // over RAMP_MS. Total dwell ≈ 7s.
      const HOLD_MS = 5e3;
      const RAMP_MS = 2e3;
      const MOVE_THRESHOLD = 8;
      const wrapOffset = () => {
        const hw = halfWidth();
        while (offset > 0) offset -= hw;
        while (offset < -hw) offset += hw;
      };
      const tick = (now) => {
        const dt = (now - lastT) / 1e3;
        lastT = now;
        if (!dragging) {
          const baseVel = halfWidth() / dur * (reverse ? -1 : 1);
          let velocity;
          if (releaseTime > 0) {
            const elapsed = now - releaseTime;
            if (elapsed < HOLD_MS) {
              velocity = 0;
            } else if (elapsed < HOLD_MS + RAMP_MS) {
              const k = (elapsed - HOLD_MS) / RAMP_MS;
              const eased = 1 - Math.pow(1 - k, 3);
              velocity = baseVel * eased;
            } else {
              velocity = baseVel;
              releaseTime = 0;
              releaseVelocity = 0;
            }
          } else {
            velocity = baseVel;
          }
          offset += velocity * dt;
          wrapOffset();
        }
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame((t) => {
        lastT = t;
        tick(t);
      });
      const getX = (e) => e.touches ? e.touches[0].clientX : e.clientX;
      const getY = (e) => e.touches ? e.touches[0].clientY : e.clientY;
      const findItemAt = (x, y) => {
        const el = document.elementFromPoint(x, y);
        return el ? el.closest(".lt-marquee-item") : null;
      };
      const setActive = (item) => {
        if (activeItem === item) return;
        if (activeItem) {
          activeItem.classList.remove("lt-marquee-item--active");
          // Resume any paused video inside the previously-active slide
          const prevVid = activeItem.querySelector("video");
          if (prevVid && prevVid.paused) {
            const p = prevVid.play();
            if (p && p.catch) p.catch(() => {});
          }
        }
        activeItem = item;
        if (item) {
          item.classList.add("lt-marquee-item--active");
          // Pause the video so the user can read the label without motion
          const vid = item.querySelector("video");
          if (vid && !vid.paused) vid.pause();
        }
      };
      const onDown = (e) => {
        dragging = true;
        moved = false;
        startX = getX(e);
        startY = getY(e);
        startOffset = offset;
        lastMoveX = startX;
        lastMoveT = e.timeStamp || performance.now();
        dragVelocity = 0;
        releaseTime = 0;
        if (releaseTimer) {
          clearTimeout(releaseTimer);
          releaseTimer = null;
        }
        setActive(findItemAt(startX, startY));
        if (e.pointerId !== void 0) {
          pointerId = e.pointerId;
          try {
            wrap.setPointerCapture(pointerId);
          } catch (_) {
          }
        }
      };
      const onMove = (e) => {
        if (!dragging) return;
        const x = getX(e);
        const t = e.timeStamp || performance.now();
        const dx = x - startX;
        if (Math.abs(dx) > MOVE_THRESHOLD) moved = true;
        offset = startOffset + dx;
        wrapOffset();
        const moveDt = (t - lastMoveT) / 1e3;
        if (moveDt > 0) {
          const v = (x - lastMoveX) / moveDt;
          dragVelocity = dragVelocity * 0.4 + v * 0.6;
        }
        lastMoveX = x;
        lastMoveT = t;
        setActive(findItemAt(x, getY(e)));
        if (moved && e.cancelable) e.preventDefault();
      };
      const onUp = () => {
        if (!dragging) return;
        dragging = false;
        releaseVelocity = dragVelocity;
        releaseTime = performance.now();
        const itemAtRelease = activeItem;
        releaseTimer = setTimeout(() => {
          if (activeItem === itemAtRelease) {
            itemAtRelease && itemAtRelease.classList.remove("lt-marquee-item--active");
            activeItem = null;
          }
          releaseTimer = null;
        }, 7000);
        if (pointerId !== null) {
          try {
            wrap.releasePointerCapture(pointerId);
          } catch (_) {
          }
          pointerId = null;
        }
      };
      wrap.addEventListener("click", (e) => {
        if (moved) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
        setTimeout(() => {
          moved = false;
        }, 0);
      }, true);
      wrap.querySelectorAll("a, img, video").forEach((el) => {
        el.setAttribute("draggable", "false");
        el.addEventListener("dragstart", (ev) => ev.preventDefault());
      });
      if (window.PointerEvent) {
        wrap.addEventListener("pointerdown", onDown);
        wrap.addEventListener("pointermove", onMove);
        wrap.addEventListener("pointerup", onUp);
        wrap.addEventListener("pointercancel", onUp);
        wrap.addEventListener("pointerleave", onUp);
      } else {
        wrap.addEventListener("touchstart", onDown, { passive: true });
        wrap.addEventListener("touchmove", onMove, { passive: false });
        wrap.addEventListener("touchend", onUp);
        wrap.addEventListener("mousedown", onDown);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      }
    });
  }
  (function tryInit(retries) {
    initMarquees();
    const tracks = document.querySelectorAll(".lt-marquee-track");
    const allInit = tracks.length > 0 && Array.from(tracks).every((t) => t.dataset.dragInit);
    if (!allInit && retries > 0) {
      setTimeout(() => tryInit(retries - 1), 50);
    }
  })(20);
})();
