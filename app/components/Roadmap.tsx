export const Roadmap = () => (
  <section id="roadmap" className="roadmap-section" style={{ padding: "100px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
        <span className="section-label-green">Rencana Implementasi</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16 }}>
          Pilot Project &amp; Roadmap
        </h2>
        <p style={{ color: "var(--slate-700)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          Pemerintah Provinsi Jawa Barat dan ITENAS akan melakukan uji coba lapangan di tiga lokasi strategis untuk menguji nilai keekonomian dan mempercepat implementasi.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="roadmap-grid">
        {[
          {
            location: "Pangalengan",
            icon: "🏔️",
            desc: "Kawasan peternakan sapi perah terbesar di Jawa Barat dengan 19.000 ekor sapi. Lokasi utama pilot project dengan potensi limbah terbesar.",
            status: "Prioritas Utama",
            color: "var(--orange)",
          },
          {
            location: "Lembang",
            icon: "🌿",
            desc: "Kawasan agrowisata dan peternakan di dataran tinggi Bandung Barat. Potensi besar untuk integrasi biogas dengan sektor pariwisata dan pertanian.",
            status: "Tahap Perencanaan",
            color: "var(--green)",
          },
          {
            location: "Parongpong",
            icon: "🌾",
            desc: "Daerah pertanian dan peternakan yang berkembang pesat. Cocok untuk pengujian distribusi NICEGAS ke rumah tangga dan UMKM lokal.",
            status: "Tahap Perencanaan",
            color: "var(--green)",
          },
        ].map((item, i) => (
          <div key={i} className="roadmap-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
            <div style={{ marginBottom: 12 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, color: item.color,
                background: item.color === "var(--orange)" ? "rgba(242,101,34,0.10)" : "rgba(45,106,79,0.10)",
                padding: "4px 12px", borderRadius: 99, fontFamily: "var(--font-display)", letterSpacing: "0.05em"
              }}>
                {item.status}
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "var(--slate-900)", marginBottom: 10 }}>
              {item.location}
            </h3>
            <p style={{ fontSize: 14, color: "var(--slate-700)", lineHeight: 1.7 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ textAlign: "center", marginTop: 48 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#fff", padding: "16px 28px", borderRadius: 14, border: "1.5px solid rgba(45,106,79,0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="var(--green)" strokeWidth="2" />
            <path d="M10 6V10L13 13" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 14, color: "var(--slate-700)", fontWeight: 600, fontFamily: "var(--font-display)" }}>
            Tujuan: Menguji nilai keekonomian dan mempercepat implementasi agar manfaat langsung dirasakan peternak dan masyarakat.
          </span>
        </div>
      </div>
    </div>
  </section>
);
