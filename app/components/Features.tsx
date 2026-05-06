import { useMemo } from "react";

export const Features = () => {
  const benefits = useMemo(
    () => [
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M13 3C13 3 6 7 6 14C6 18.4 9.1 21.4 13 21C16.9 21.4 20 18.4 20 14C20 7 13 3 13 3Z" fill="var(--green)" opacity="0.8" />
            <path d="M10 14L12 16L16 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "100% Ramah Lingkungan",
        desc: "Mengurangi emisi karbon secara nyata. Energi bersih tanpa emisi berbahaya, mengubah limbah yang mencemari menjadi sumber energi terbarukan.",
        tag: "Eco-Friendly",
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="10" fill="none" stroke="var(--orange)" strokeWidth="2" />
            <text x="13" y="17" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--orange)">Rp</text>
          </svg>
        ),
        title: "Harga Sangat Ekonomis",
        desc: "Hanya sekitar Rp4.000 per kilogram — jauh lebih terjangkau dibanding LPG atau CNG konvensional. Hemat biaya energi untuk rumah tangga dan industri.",
        tag: "Rp4.000/kg",
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="4" y="8" width="7" height="15" rx="3" fill="var(--orange)" opacity="0.4" />
            <rect x="13" y="5" width="9" height="18" rx="3" fill="var(--orange)" opacity="0.7" />
            <rect x="7" y="12" width="5" height="8" rx="2" fill="var(--orange)" />
          </svg>
        ),
        title: "Berbagai Ukuran Tersedia",
        desc: "Tersedia dalam kemasan 2 liter, 2 kilogram, 5 kilogram, hingga tabung besar untuk kebutuhan industri. Fleksibel sesuai kebutuhan Anda.",
        tag: "2L – Industri",
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect x="4" y="10" width="18" height="13" rx="3" fill="none" stroke="var(--green)" strokeWidth="2" />
            <path d="M9 10V7C9 4.8 11 3 13 3C15 3 17 4.8 17 7V10" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="13" cy="16" r="2.5" fill="var(--green)" />
          </svg>
        ),
        title: "Bebas Bau & Aman",
        desc: "Melalui proses pemurnian berlapis, NICEGAS bebas dari bau tidak sedap (H₂S < 200 ppm) dan memiliki kemurnian CH₄ hingga 92%. Aman digunakan sehari-hari.",
        tag: "CH₄ 92%",
      },
    ],
    [],
  );

  return (
    <section id="keunggulan" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
          <span className="section-label">Mengapa NICEGAS?</span>
          <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16 }}>
            Keunggulan &amp; Spesifikasi Produk
          </h2>
          <p style={{ color: "var(--slate-700)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Bahan bakar masa depan — mengubah limbah menjadi energi murah. Lebih ringan, sangat aman, dan 100% ramah lingkungan.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="icon-wrap">{b.icon}</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--orange)", background: "rgba(242,101,34,0.10)", padding: "3px 10px", borderRadius: 99, fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                  {b.tag}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", color: "var(--slate-900)", marginBottom: 10, marginTop: 12 }}>
                {b.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--slate-700)", lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
