export const PressRelease = () => (
  <section id="berita" className="press-section" style={{ padding: "100px 0" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange)", fontFamily: "var(--font-display)" }}>
          Berita &amp; Acara
        </span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16, color: "#fff" }}>
          Peluncuran Resmi NICEGAS
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          NICEGAS diluncurkan secara resmi dalam rangkaian acara Dies Natalis ke-53 Institut Teknologi Nasional Bandung.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="press-grid">
        {/* Event details */}
        <div className="reveal-left">
          <div className="press-card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(242,101,34,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                🎓
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
                  Dies Natalis ke-53 ITENAS
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Acara Peluncuran Resmi</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["📅", "Minggu, 14 Desember 2025"],
                ["📍", "Kampus ITENAS, Jl. PH.H. Mustofa No. 23, Bandung"],
                ["🎯", "Peluncuran produk NICEGAS Bio-CNG sebagai inovasi energi bersih terbarukan"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key figures */}
        <div className="reveal-right">
          <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Tokoh yang Terlibat
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="figures-grid">
            {[
              { name: "Prof. Ir. Meilinda Nurbanasari, S.T., M.T., Ph.D.", role: "Rektor ITENAS", initials: "MN" },
              { name: "M. Fauzan Adziman, Ph.D.", role: "Dirjen Riset & Pengembangan Kemdiktisaintek", initials: "FA" },
              { name: "Herman Suryatman", role: "Sekretaris Daerah Jawa Barat", initials: "HS" },
              { name: "Ir. Iwan Juwana, M.EM., Ph.D., IPU", role: "Direktur PT REKINAS", initials: "IJ" },
            ].map((f, i) => (
              <div key={i} className="figure-card">
                <div className="figure-avatar">
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "var(--orange)" }}>{f.initials}</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "#fff", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis" }}>
                    {f.name}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2, lineHeight: 1.3 }}>
                    {f.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
