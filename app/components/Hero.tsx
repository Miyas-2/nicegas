import Image from "next/image";

export const Hero = () => (
  <section style={{ minHeight: "100vh", paddingTop: 64, background: "var(--gray-50)", position: "relative", overflow: "hidden" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 60px", width: "100%", position: "relative", zIndex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
        {/* Left: Text */}
        <div>
          <div style={{ borderLeft: "3px solid var(--orange)", paddingLeft: 12, marginBottom: 32 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)" }}>
              INOVASI BIO-CNG — ITENAS BANDUNG
            </span>
          </div>
          <h1 className="hero-headline" style={{ fontSize: "3.2rem", fontWeight: 800, lineHeight: 1.08, color: "var(--gray-900)", marginBottom: 24, letterSpacing: "-0.03em" }}>
            Mengubah
            <br />
            Biogas Menjadi
            <br />
            <span style={{ color: "var(--orange)" }}>Energi Bersih.</span>
          </h1>
          <p style={{ fontSize: 16, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>
            NICEGAS adalah inovasi Bio-CNG hasil pemurnian biogas yang bebas bau, aman, dan siap digunakan sebagai energi bersih terbarukan — untuk rumah tangga maupun industri.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#pesan" className="btn-primary" style={{ padding: "14px 36px" }}>
              PESAN SEKARANG
            </a>
            <a href="#masalah" className="btn-outline" style={{ padding: "14px 36px" }}>
              PELAJARI LANJUT
            </a>
          </div>

          {/* Stats bar */}
          <div style={{ display: "flex", borderTop: "1px solid var(--gray-200)", paddingTop: 24 }}>
            {([
              ["Rp4.000", "PER KILOGRAM"],
              ["92%", "KEMURNIAN CH₄"],
              ["100%", "RAMAH LINGKUNGAN"],
            ] as const).map(([val, label], i) => (
              <div key={label} style={{ flex: 1, paddingLeft: i > 0 ? 24 : 0, borderLeft: i > 0 ? "1px solid var(--gray-200)" : "none" }}>
                <div style={{ fontWeight: 800, fontSize: "1.6rem", color: "var(--orange)", letterSpacing: "-0.02em" }}>{val}</div>
                <div style={{ fontSize: 10, color: "var(--gray-500)", fontWeight: 600, letterSpacing: "0.12em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product photo */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 480, aspectRatio: "2063/1697" }}>
            <Image
              src="/images/nicegas_orange.png"
              alt="Tabung NICEGAS Bio-CNG"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          {/* Overlay data badge */}
          <div style={{ position: "absolute", bottom: 16, left: 16, background: "var(--charcoal)", padding: "14px 20px", color: "#fff", zIndex: 2 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "var(--orange)", marginBottom: 4 }}>EMISI CO₂</div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>−78%</div>
          </div>
          <div style={{ position: "absolute", top: 16, right: 16, background: "var(--orange)", padding: "14px 20px", color: "#fff", zIndex: 2 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 4 }}>KAPASITAS</div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>2 Liter</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
