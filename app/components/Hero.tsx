export const HeroIllustration = () => (
  <div className="hero-illustration animate-float">
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
      <rect width="520" height="480" rx="24" fill="#FFF4EE" />
      <ellipse cx="260" cy="430" rx="220" ry="24" fill="rgba(242,101,34,0.10)" />
      {/* Main biogas tank */}
      <rect x="130" y="260" width="260" height="160" rx="16" fill="#fff" stroke="#F26522" strokeWidth="2.5" />
      <ellipse cx="260" cy="260" rx="130" ry="50" fill="#F26522" opacity="0.18" />
      <ellipse cx="260" cy="260" rx="130" ry="50" fill="none" stroke="#F26522" strokeWidth="2.5" />
      <ellipse cx="210" cy="250" rx="30" ry="10" fill="#fff" opacity="0.5" />
      {/* Pipeline left */}
      <rect x="60" y="320" width="74" height="12" rx="6" fill="#F26522" opacity="0.6" />
      <rect x="60" y="312" width="12" height="80" rx="6" fill="#F26522" opacity="0.6" />
      {/* Waste bin */}
      <rect x="28" y="350" width="52" height="64" rx="10" fill="#0F172A" opacity="0.10" />
      <rect x="20" y="342" width="68" height="14" rx="7" fill="#0F172A" opacity="0.15" />
      <line x1="42" y1="370" x2="66" y2="370" stroke="#F26522" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="42" y1="382" x2="60" y2="382" stroke="#F26522" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Pipeline right */}
      <rect x="388" y="320" width="72" height="12" rx="6" fill="#F26522" opacity="0.6" />
      <rect x="448" y="280" width="12" height="60" rx="6" fill="#F26522" opacity="0.6" />
      {/* Flame */}
      <ellipse cx="454" cy="275" rx="18" ry="8" fill="#FF8A4C" opacity="0.4" />
      <path d="M446 275 C446 255 458 248 460 260 C462 248 472 240 470 258 C476 248 480 262 474 274 C468 280 450 280 446 275Z" fill="#F26522" />
      <path d="M450 275 C450 263 458 258 459 265 C461 258 467 254 466 264 C469 258 471 266 468 274 C464 278 452 278 450 275Z" fill="#FF8A4C" />
      {/* Control panel */}
      <rect x="192" y="295" width="136" height="100" rx="10" fill="#F8F9FB" stroke="rgba(242,101,34,0.3)" strokeWidth="1.5" />
      <circle cx="225" cy="330" r="18" fill="#fff" stroke="#F26522" strokeWidth="2" />
      <path d="M225 317 L225 330 L235 330" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
      <circle cx="295" cy="330" r="18" fill="#fff" stroke="#2D6A4F" strokeWidth="1.5" opacity="0.6" />
      <circle cx="215" cy="365" r="5" fill="#22C55E" />
      <circle cx="235" cy="365" r="5" fill="#F26522" />
      <circle cx="255" cy="365" r="5" fill="#22C55E" />
      <circle cx="275" cy="365" r="5" fill="#22C55E" />
      {/* Chimney */}
      <rect x="155" y="200" width="26" height="64" rx="6" fill="#0F172A" opacity="0.12" />
      <circle cx="168" cy="185" r="10" fill="#94A3B8" opacity="0.25" />
      <circle cx="162" cy="170" r="8" fill="#94A3B8" opacity="0.18" />
      {/* Eco leaf */}
      <circle cx="430" cy="120" r="40" fill="rgba(45,106,79,0.10)" />
      <path d="M430 100 C430 100 410 108 410 125 C410 140 422 148 430 145 C438 148 450 140 450 125 C450 108 430 100 430 100Z" fill="#2D6A4F" opacity="0.6" />
      <line x1="430" y1="145" x2="430" y2="160" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Particles */}
      <circle cx="90" cy="180" r="4" fill="#F26522" opacity="0.3" />
      <circle cx="400" cy="160" r="3" fill="#F26522" opacity="0.25" />
      <circle cx="340" cy="100" r="5" fill="#2D6A4F" opacity="0.3" />
      {/* Label */}
      <text x="260" y="310" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="15" fill="#F26522" opacity="0.7">NICEGAS</text>
      <text x="260" y="328" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#334155" opacity="0.5">BIO-CNG SYSTEM</text>
    </svg>
    {/* Floating stat chips */}
    <div className="stat-chip reveal" style={{ position: "absolute", top: "10%", left: "-8%", transitionDelay: "0.4s" }}>
      <span style={{ fontSize: 11, color: "var(--slate-400)", fontWeight: 600, fontFamily: "var(--font-display)" }}>EMISI CO₂</span>
      <span style={{ fontSize: 20, fontWeight: 800, color: "#2D6A4F", fontFamily: "var(--font-display)" }}>−78%</span>
    </div>
    <div className="stat-chip reveal" style={{ position: "absolute", bottom: "20%", right: "-6%" }}>
      <span style={{ fontSize: 11, color: "var(--slate-400)", fontWeight: 600, fontFamily: "var(--font-display)" }}>KEMURNIAN CH₄</span>
      <span style={{ fontSize: 20, fontWeight: 800, color: "var(--orange)", fontFamily: "var(--font-display)" }}>92%</span>
    </div>
  </div>
);

export const Hero = () => (
  <section className="hero" style={{ display: "flex", alignItems: "center", padding: "80px 0 40px" }}>
    <div className="hero-bg-blob" />
    <div className="hero-bg-dots" />
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px", width: "100%", position: "relative", zIndex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
        <div>
          <div className="badge animate-fade-in" style={{ marginBottom: 24 }}>
            <span className="badge-dot" />
            Inovasi Bio-CNG ITENAS Bandung
          </div>
          <h1 className="hero-headline animate-fade-up" style={{ fontSize: "2.9rem", fontWeight: 900, lineHeight: 1.15, color: "var(--slate-900)", marginBottom: 20 }}>
            Mengubah Biogas
            <br />
            Menjadi <span className="gradient-text">Energi Bersih</span>
            <br />
            Terbarukan.
          </h1>
          <p className="animate-fade-up delay-200" style={{ fontSize: "1.05rem", color: "var(--slate-700)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
            NICEGAS adalah inovasi Bio-CNG hasil pemurnian biogas yang bebas bau, aman, dan siap digunakan sebagai energi bersih terbarukan — untuk rumah tangga maupun industri.
          </p>
          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 40 }}>
            <a href="#pesan" className="btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
              Pesan Sekarang →
            </a>
            <a href="#masalah" style={{ textDecoration: "none", color: "var(--slate-700)", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              Pelajari lebih lanjut
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
          <div className="animate-fade-up delay-400" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {([["Rp4.000", "Per Kilogram"], ["92%", "Kemurnian CH₄"], ["100%", "Ramah Lingkungan"]] as const).map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "var(--orange)" }}>{val}</div>
                <div style={{ fontSize: 12, color: "var(--slate-400)", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-fade-in delay-300">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
);
