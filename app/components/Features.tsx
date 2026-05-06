export const Features = () => (
  <section id="keunggulan" style={{ padding: "100px 0", background: "var(--white)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 64 }} className="reveal">
        <span className="section-label">MENGAPA NICEGAS</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em" }}>
          Keunggulan &amp; Spesifikasi
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="benefits-grid">
        {[
          {
            num: "01",
            tag: "ECO-FRIENDLY",
            title: "100% Ramah Lingkungan",
            desc: "Mengurangi emisi karbon secara nyata. Energi bersih tanpa emisi berbahaya, mengubah limbah yang mencemari menjadi energi terbarukan.",
          },
          {
            num: "02",
            tag: "Rp4.000/KG",
            title: "Harga Sangat Ekonomis",
            desc: "Hanya Rp4.000 per kilogram — jauh lebih terjangkau dibanding LPG atau CNG konvensional. Hemat untuk rumah tangga dan industri.",
          },
          {
            num: "03",
            tag: "2L — INDUSTRI",
            title: "Berbagai Ukuran",
            desc: "Tersedia dalam kemasan 2 liter, 2 kilogram, 5 kilogram, hingga tabung besar untuk kebutuhan industri skala besar.",
          },
          {
            num: "04",
            tag: "CH₄ 92%",
            title: "Bebas Bau & Aman",
            desc: "Melalui pemurnian berlapis, NICEGAS bebas bau (H₂S < 200 ppm) dengan kemurnian CH₄ hingga 92%. Aman digunakan sehari-hari.",
          },
        ].map((b, i) => (
          <div key={i} className="panel reveal" style={{
            transitionDelay: `${i * 0.08}s`,
            borderRight: i < 3 ? "none" : undefined,
            borderTop: "3px solid transparent",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderTopColor = "var(--orange)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderTopColor = "transparent"; }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "var(--gray-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontWeight: 800, fontSize: 14, color: "var(--orange)", letterSpacing: "0.05em" }}>{b.num}</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", background: "rgba(242,101,34,0.08)", padding: "4px 10px" }}>
                {b.tag}
              </span>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "var(--gray-900)", marginBottom: 12, letterSpacing: "-0.01em" }}>
              {b.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
