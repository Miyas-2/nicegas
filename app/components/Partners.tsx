export const Partners = () => (
  <section id="mitra" style={{ padding: "100px 0", background: "var(--white)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 64 }} className="reveal">
        <span className="section-label">KEMITRAAN &amp; DUKUNGAN</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em" }}>
          Didukung Institusi Terpercaya
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="partner-grid">
        {[
          { initials: "IT", role: "PENGEMBANG", name: "ITENAS Bandung", desc: "Kolaborasi lintas prodi: Teknik Mesin, Teknik Kimia, dan Informatika." },
          { initials: "KL", role: "PENDANAAN", name: "Kemdiktisaintek & LPDP", desc: "Melalui Program PRPB skema Inklusivitas." },
          { initials: "JB", role: "DUKUNGAN PEMERINTAH", name: "Pemprov Jawa Barat", desc: "Dukungan kebijakan dan implementasi pilot project di 3 lokasi." },
          { initials: "BE", role: "MITRA OPERASIONAL", name: "Bandung Equestrian Sport", desc: "Mitra operasional miniplant untuk pengolahan limbah ternak." },
          { initials: "GP", role: "MITRA OPERASIONAL", name: "PT Geo Petro Hinalang", desc: "Mitra operasional miniplant pendukung infrastruktur energi." },
          { initials: "RK", role: "KOMERSIALISASI", name: "PT REKINAS", desc: "PT Rekayasa Industri Itenas — spin-off untuk komersialisasi produk." },
        ].map((p, i) => (
          <div key={i} className="panel reveal" style={{
            transitionDelay: `${i * 0.06}s`,
            borderRight: (i + 1) % 3 !== 0 ? "none" : undefined,
            borderBottom: i < 3 ? "none" : undefined,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: "0.05em" }}>{p.initials}</span>
              </div>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, color: "var(--orange)", letterSpacing: "0.1em" }}>{p.role}</span>
                <h4 style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--gray-900)", marginTop: 2, letterSpacing: "-0.01em" }}>{p.name}</h4>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-500)", lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
