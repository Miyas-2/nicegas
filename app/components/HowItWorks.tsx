export const HowItWorks = () => (
  <section id="proses" style={{ padding: "100px 0", background: "var(--orange-pale)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }} className="reveal">
        <span className="section-label">Alur Proses</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.2rem", marginTop: 12, marginBottom: 16 }}>
          7 Tahapan Mengolah Limbah Menjadi NICEGAS
        </h2>
        <p style={{ color: "var(--slate-700)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          Proses pengolahan limbah hingga menjadi Bio-CNG berkualitas tinggi melalui tahapan yang terintegrasi dan terkontrol.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative" }} className="process-grid">
        {/* Connector line */}
        <div style={{ position: "absolute", top: 26, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, var(--orange) 0%, rgba(242,101,34,0.2) 100%)", zIndex: 0 }} className="hidden-mobile" />

        {[
          { step: "01", icon: "🐄", title: "Limbah Organik", desc: "Pengumpulan bahan biomassa kaya karbon & nitrogen: kotoran ternak, sisa makanan, dan limbah pertanian." },
          { step: "02", icon: "⚗️", title: "Biodigester", desc: "Reaktor tertutup mengurai limbah secara anaerobik menjadi biogas (CH₄: 55-70%, CO₂: 30-45%)." },
          { step: "03", icon: "🛢️", title: "Biogas Holder", desc: "Unit penyimpanan untuk menampung biogas mentah dari biodigester sebelum pemrosesan." },
          { step: "04", icon: "⚙️", title: "LP Compressor", desc: "Meningkatkan tekanan biogas dari 0,02 - 0,1 bar agar dapat mengalir ke unit pemurnian." },
          { step: "05", icon: "🧪", title: "Scrubber", desc: "Proses pemurnian menghilangkan hidrogen sulfida (H₂S) hingga di bawah 200 ppm." },
          { step: "06", icon: "🔬", title: "Filter (Clean Biogas)", desc: "Penyaringan akhir menghasilkan biogas bersih (CH₄: 92%, CO₂: 5-7%) pada tekanan 0,5 barg." },
          { step: "07", icon: "🔋", title: "HP Compressor", desc: "Biogas dikompresi hingga 100+ bar, dikemas ke dalam tabung/silinder menjadi NICEGAS siap pakai." },
        ].map((item, i) => (
          <div key={i} className="reveal" style={{ textAlign: "center", padding: "0 8px", transitionDelay: `${i * 0.08}s`, position: "relative", zIndex: 1 }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: i === 0 || i === 6 ? "var(--orange)" : "#fff",
              border: "2.5px solid var(--orange)",
              margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              boxShadow: i === 6 ? "0 4px 16px rgba(242,101,34,0.35)" : "none"
            }}>
              {item.icon}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, color: "var(--orange)", letterSpacing: "0.1em", marginBottom: 6 }}>
              TAHAP {item.step}
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", marginBottom: 8, color: "var(--slate-900)" }}>{item.title}</h4>
            <p style={{ fontSize: 12.5, color: "var(--slate-700)", lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
