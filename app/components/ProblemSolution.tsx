export const ProblemSolution = () => (
  <section id="masalah" style={{ padding: "100px 0", background: "#fff" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
        <span className="section-label">Tantangan &amp; Solusi</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16 }}>
          Dari Limbah Menjadi Energi Bersih
        </h2>
        <p style={{ color: "var(--slate-700)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          Rendahnya pengelolaan limbah kotoran hewan di Jawa Barat menjadi masalah serius yang membutuhkan solusi inovatif dan berkelanjutan.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="ps-grid">
        {/* Problem */}
        <div className="ps-card ps-card-problem reveal-left">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(239,68,68,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#EF4444" strokeWidth="2" />
                <path d="M7 7L13 13M13 7L7 13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "var(--slate-900)" }}>
              Masalah Utama
            </h3>
          </div>

          {/* Data highlight */}
          <div style={{ background: "var(--orange-pale)", borderRadius: 14, padding: "20px 24px", marginBottom: 24, border: "1px solid rgba(242,101,34,0.15)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--orange)", lineHeight: 1.2 }}>
              75%
            </div>
            <p style={{ fontSize: 13, color: "var(--slate-700)", lineHeight: 1.6, marginTop: 6 }}>
              limbah kotoran hewan di Pangalengan <strong>belum terkelola</strong> dengan baik.
            </p>
          </div>

          <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Di Pangalengan, terdapat 19.000 ekor sapi yang dikelola oleh 3.500 peternak.",
              "Baru 25% limbah kotoran ternak yang terkelola dengan baik.",
              "Penumpukan limbah organik mencemari lingkungan dan sumber air.",
              "Ketergantungan energi fosil dengan harga yang terus meningkat.",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "var(--slate-700)", lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: 4, width: 6, height: 6, borderRadius: "50%", background: "#EF4444", opacity: 0.7 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="ps-card ps-card-solution reveal-right" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>
              Solusi NICEGAS
            </h3>
          </div>

          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 24px", marginBottom: 24, border: "1px solid rgba(255,255,255,0.2)" }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.95)", lineHeight: 1.7 }}>
              ITENAS menghadirkan fasilitas <strong>Waste to Energy Miniplant</strong> untuk mengolah kotoran hewan dan limbah organik menjadi biogas (NICEGAS) — menyelesaikan masalah penumpukan limbah sekaligus memberikan ketahanan energi.
            </p>
          </div>

          <ul style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
            {[
              "Mengubah limbah organik menjadi Bio-CNG siap pakai, bebas bau dan aman.",
              "Mengurangi emisi karbon secara signifikan.",
              "Mengubah limbah bernilai negatif menjadi produk bernilai ekonomi tinggi.",
              "Meningkatkan kesejahteraan peternak melalui gas murah.",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: 5, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.8)" }} />
                {item}
              </li>
            ))}
          </ul>
          <a href="#pesan" className="btn-primary" style={{ marginTop: 28, textAlign: "center", background: "#fff", color: "var(--green)", borderColor: "#fff", display: "block" }}>
            Pesan NICEGAS Sekarang →
          </a>
        </div>
      </div>
    </div>
  </section>
);
