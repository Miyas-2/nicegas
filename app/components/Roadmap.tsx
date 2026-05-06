export const Roadmap = () => (
  <section id="roadmap" style={{ padding: "100px 0", background: "var(--gray-50)" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 64 }} className="reveal">
        <span className="section-label">RENCANA IMPLEMENTASI</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em" }}>
          Pilot Project &amp; Roadmap
        </h2>
        <p style={{ color: "var(--gray-500)", maxWidth: 560, lineHeight: 1.7, marginTop: 16, fontSize: 15 }}>
          Pemerintah Provinsi Jawa Barat dan ITENAS melakukan uji coba lapangan di tiga lokasi strategis.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="roadmap-grid">
        {[
          { location: "PANGALENGAN", status: "PRIORITAS UTAMA", statusColor: "var(--orange)", desc: "Kawasan peternakan sapi perah terbesar di Jawa Barat dengan 19.000 ekor sapi. Lokasi utama pilot project dengan potensi limbah terbesar." },
          { location: "LEMBANG", status: "TAHAP PERENCANAAN", statusColor: "var(--gray-500)", desc: "Kawasan agrowisata dan peternakan di dataran tinggi Bandung Barat. Potensi integrasi biogas dengan sektor pariwisata dan pertanian." },
          { location: "PARONGPONG", status: "TAHAP PERENCANAAN", statusColor: "var(--gray-500)", desc: "Daerah pertanian dan peternakan berkembang pesat. Pengujian distribusi NICEGAS ke rumah tangga dan UMKM lokal." },
        ].map((item, i) => (
          <div key={i} className="panel reveal" style={{
            transitionDelay: `${i * 0.1}s`,
            borderRight: i < 2 ? "none" : undefined,
            borderLeft: i === 0 ? "3px solid var(--orange)" : undefined,
          }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: item.statusColor, letterSpacing: "0.12em" }}>
                {item.status}
              </span>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--gray-900)", marginBottom: 12, letterSpacing: "0.02em" }}>
              {item.location}
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: 40, borderLeft: "3px solid var(--orange)", paddingLeft: 20 }}>
        <p style={{ fontSize: 14, color: "var(--gray-500)", fontWeight: 500, lineHeight: 1.6 }}>
          <strong style={{ color: "var(--gray-900)" }}>Tujuan:</strong> Menguji nilai keekonomian dan mempercepat implementasi agar manfaat langsung dirasakan peternak dan masyarakat.
        </p>
      </div>
    </div>
  </section>
);
