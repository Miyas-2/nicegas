import Image from "next/image";
import { motion } from "framer-motion";

export const Roadmap = () => (
  <section id="roadmap" style={{ padding: "100px 0", background: "#F3F4F6", position: "relative", overflow: "hidden" }}>
    {/* Geometric decoration */}
    <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "#15803D", opacity: 0.04 }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "64px" }} 
        className="reveal"
      >
        <span className="section-label">RENCANA IMPLEMENTASI</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: "16px", letterSpacing: "-0.02em", color: "#111827" }}>
          Pilot Project &amp; Roadmap
        </h2>
        <p style={{ color: "#6B7280", maxWidth: "560px", lineHeight: 1.7, marginTop: "16px", fontSize: "15px" }}>
          Pemerintah Provinsi Jawa Barat dan ITENAS melakukan uji coba lapangan di tiga lokasi strategis.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="roadmap-grid">
        {[
          { location: "PANGALENGAN", status: "TAHAP PERENCANAAN", isPriority: true, desc: "Kawasan peternakan sapi perah terbesar di Jawa Barat dengan 19.000 ekor sapi. Lokasi utama pilot project dengan potensi limbah terbesar.", img: "/images/assets/pangalengan.jpg" },
          { location: "LEMBANG", status: "TAHAP PERENCANAAN", isPriority: false, desc: "Kawasan agrowisata dan peternakan di dataran tinggi Bandung Barat. Potensi integrasi biogas dengan sektor pariwisata dan pertanian.", img: "/images/assets/lembang.webp" },
          { location: "PARONGPONG", status: "TAHAP PERENCANAAN", isPriority: false, desc: "Daerah pertanian dan peternakan berkembang pesat. Pengujian distribusi NICEGAS ke rumah tangga dan UMKM lokal.", img: "/images/assets/parongpong.webp" },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="reveal" 
            style={{
              background: item.isPriority ? "#FFF7ED" : "#FFFFFF",
              padding: "0px",
              borderRadius: "24px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.2s",
              minHeight: "380px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            <div style={{ position: "relative", height: "160px", width: "100%" }}>
              <Image src={item.img} alt={item.location} fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", top: "16px", left: "16px", zIndex: 2 }}>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "0.12em",
                  background: item.isPriority ? "#F97316" : "rgba(17,24,39,0.8)",
                  padding: "5px 12px",
                  borderRadius: "12px",
                  display: "inline-block",
                  backdropFilter: "blur(4px)"
                }}>
                  {item.status}
                </span>
              </div>
            </div>

            <div style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#111827", marginBottom: "12px", letterSpacing: "0.02em" }}>
                {item.location}
              </h3>
              <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="reveal" 
        style={{ marginTop: "32px", background: "#FFFFFF", borderRadius: "24px", overflow: "hidden", padding: "24px 32px",  boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
      >
        <p style={{ fontSize: "14px", color: "#6B7280", fontWeight: 500, lineHeight: 1.6 }}>
          <strong style={{ color: "#111827" }}>Tujuan:</strong> Menguji nilai keekonomian dan mempercepat implementasi agar manfaat langsung dirasakan peternak dan masyarakat.
        </p>
      </motion.div>
    </div>
  </section>
);

