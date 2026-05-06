export const Partners = () => (
  <section id="mitra" style={{ padding: "100px 0", background: "var(--slate-100)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
        <span className="section-label">Kemitraan &amp; Dukungan</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16 }}>
          Didukung oleh Institusi Terpercaya
        </h2>
        <p style={{ color: "var(--slate-700)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          NICEGAS adalah hasil kolaborasi lintas prodi dan kemitraan strategis antara akademisi, pemerintah, dan industri.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="partner-grid">
        {[
          {
            icon: "🎓",
            role: "Pengembang",
            name: "ITENAS Bandung",
            desc: "Kolaborasi lintas prodi: Teknik Mesin, Teknik Kimia, dan Informatika.",
            bg: "rgba(242,101,34,0.08)",
          },
          {
            icon: "🏛️",
            role: "Pendanaan",
            name: "Kemdiktisaintek & LPDP",
            desc: "Melalui Program PRPB skema Inklusivitas.",
            bg: "rgba(45,106,79,0.08)",
          },
          {
            icon: "🏢",
            role: "Dukungan Pemerintah",
            name: "Pemprov Jawa Barat",
            desc: "Dukungan kebijakan dan implementasi pilot project di 3 lokasi.",
            bg: "rgba(59,130,246,0.08)",
          },
          {
            icon: "🐴",
            role: "Mitra Operasional",
            name: "Bandung Equestrian Sport",
            desc: "Mitra operasional miniplant untuk pengolahan limbah ternak.",
            bg: "rgba(168,85,247,0.08)",
          },
          {
            icon: "⛽",
            role: "Mitra Operasional",
            name: "PT Geo Petro Hinalang",
            desc: "Mitra operasional miniplant pendukung infrastruktur energi.",
            bg: "rgba(234,179,8,0.08)",
          },
          {
            icon: "🚀",
            role: "Komersialisasi (Spin-off)",
            name: "PT REKINAS",
            desc: "PT Rekayasa Industri Itenas — spin-off untuk komersialisasi produk.",
            bg: "rgba(242,101,34,0.08)",
          },
        ].map((p, i) => (
          <div key={i} className="partner-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="partner-icon" style={{ background: p.bg }}>
              {p.icon}
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--orange)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-display)" }}>
              {p.role}
            </span>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "var(--slate-900)", marginTop: 8, marginBottom: 8 }}>
              {p.name}
            </h4>
            <p style={{ fontSize: 13, color: "var(--slate-700)", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
