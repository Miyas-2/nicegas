export const ProblemSolution = () => (
  <section id="masalah" style={{ padding: "100px 0", background: "var(--white)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 64 }} className="reveal">
        <span className="section-label">TANTANGAN &amp; SOLUSI</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em" }}>
          Dari Limbah Menjadi<br />Energi Bersih
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="ps-grid">
        {/* Problem */}
        <div className="panel reveal-left" style={{ borderRight: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 32, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 4L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--gray-900)" }}>
              Masalah Utama
            </h3>
          </div>

          <div style={{ borderLeft: "3px solid var(--orange)", paddingLeft: 20, marginBottom: 28 }}>
            <div style={{ fontWeight: 800, fontSize: "3rem", color: "var(--orange)", lineHeight: 1 }}>75%</div>
            <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.6, marginTop: 8 }}>
              limbah kotoran hewan di Pangalengan <strong style={{ color: "var(--gray-900)" }}>belum terkelola</strong> dengan baik.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "19.000 ekor sapi dikelola oleh 3.500 peternak di Pangalengan.",
              "Baru 25% limbah kotoran ternak yang terkelola dengan baik.",
              "Penumpukan limbah organik mencemari lingkungan dan sumber air.",
              "Ketergantungan energi fosil dengan biaya terus meningkat.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14, color: "var(--gray-500)", lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: 6, width: 6, height: 6, background: "var(--orange)" }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="panel-dark reveal-right" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 32, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff" }}>
              Solusi NICEGAS
            </h3>
          </div>

          <div style={{ borderLeft: "3px solid var(--orange)", paddingLeft: 20, marginBottom: 28 }}>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              ITENAS menghadirkan fasilitas <strong style={{ color: "#fff" }}>Waste to Energy Miniplant</strong> untuk mengolah kotoran hewan dan limbah organik menjadi NICEGAS — menyelesaikan penumpukan limbah sekaligus memberikan ketahanan energi.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            {[
              "Mengubah limbah organik menjadi Bio-CNG siap pakai, bebas bau dan aman.",
              "Mengurangi emisi karbon secara signifikan.",
              "Mengubah limbah bernilai negatif menjadi produk bernilai ekonomi tinggi.",
              "Meningkatkan kesejahteraan peternak melalui gas murah.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0, marginTop: 6, width: 6, height: 6, background: "var(--orange)" }} />
                {item}
              </div>
            ))}
          </div>

          <a href="#pesan" className="btn-primary" style={{ marginTop: 32, textAlign: "center", display: "block", background: "#fff", color: "var(--orange)" }}>
            PESAN NICEGAS SEKARANG
          </a>
        </div>
      </div>
    </div>
  </section>
);
