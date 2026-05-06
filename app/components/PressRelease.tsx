import Image from "next/image";

export const PressRelease = () => (
  <section id="berita" style={{ padding: "100px 0", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: 64 }} className="reveal">
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "var(--orange)", borderLeft: "3px solid var(--orange)", paddingLeft: 12, display: "inline-block" }}>BERITA &amp; ACARA</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em", color: "#fff" }}>
          Peluncuran Resmi NICEGAS
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 0 }} className="press-grid">
        {/* Event photo */}
        <div className="reveal-left" style={{ position: "relative", minHeight: 400 }}>
          <Image
            src="/images/peresmian.png"
            alt="Peresmian NICEGAS Bio-CNG di Dies Natalis ke-53 ITENAS Bandung"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Gradient overlay at bottom */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent 0%, rgba(61,140,83,0.9) 100%)", padding: "80px 32px 28px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "var(--orange)", marginBottom: 6 }}>DIES NATALIS KE-53 ITENAS</div>
            <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "#fff" }}>Peresmian Bio-CNG NICEGAS</h3>
          </div>
        </div>

        {/* Right sidebar: Event info + Key figures */}
        <div className="reveal-right" style={{ background: "var(--charcoal-light)", padding: "32px 28px", display: "flex", flexDirection: "column" }}>
          {/* Event details */}
          <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <h4 style={{ fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 16 }}>DETAIL ACARA</h4>
            {[
              ["TANGGAL", "Minggu, 14 Desember 2025"],
              ["LOKASI", "Kampus ITENAS, Jl. PH.H. Mustofa No. 23, Bandung"],
              ["AGENDA", "Peluncuran produk Bio-CNG NICEGAS sebagai inovasi energi bersih"],
            ].map(([label, text], i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{text}</div>
              </div>
            ))}
          </div>

          {/* Key figures */}
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", marginBottom: 16 }}>TOKOH YANG HADIR</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { name: "Prof. Ir. Meilinda Nurbanasari, S.T., M.T., Ph.D.", role: "Rektor ITENAS", initials: "MN" },
                { name: "M. Fauzan Adziman, Ph.D.", role: "Dirjen Ristek Kemdiktisaintek", initials: "FA" },
                { name: "Herman Suryatman", role: "Sekretaris Daerah Jawa Barat", initials: "HS" },
                { name: "Ir. Iwan Juwana, M.EM., Ph.D., IPU", role: "Direktur PT REKINAS", initials: "IJ" },
              ].map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "12px 0",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{ width: 38, height: 38, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontWeight: 800, fontSize: 13, color: "#fff" }}>{f.initials}</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, color: "#fff", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{f.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
