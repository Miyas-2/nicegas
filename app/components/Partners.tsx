import Image from "next/image";
import { motion } from "framer-motion";

export const Partners = () => (
  <section id="mitra" style={{ padding: "100px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
    {/* Geometric decoration */}
    <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "#F59E0B", opacity: 0.04 }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "64px" }} 
        className="reveal"
      >
        <span className="section-label">KEMITRAAN &amp; DUKUNGAN</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: "16px", letterSpacing: "-0.02em", color: "#111827" }}>
          Didukung Institusi Terpercaya
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="partner-grid">
        {[
          { initials: "IT", role: "PENGEMBANG", name: "ITENAS Bandung", desc: "Kolaborasi lintas prodi: Teknik Mesin, Teknik Kimia, dan Informatika.", color: "#F97316", logo: "/images/logos/itenas.png" },
          { initials: "KL", role: "PENDANAAN", name: "Kemdiktisaintek & LPDP", desc: "Melalui Program PRPB skema Inklusivitas.", color: "#15803D", logos: ["/images/logos/diktisaintek.png", "/images/logos/lpdp.webp"] },
          { initials: "JB", role: "DUKUNGAN PEMERINTAH", name: "Pemprov Jawa Barat", desc: "Dukungan kebijakan dan implementasi pilot project di 3 lokasi.", color: "#F59E0B", logo: "/images/logos/jabar.png" },
          { initials: "BE", role: "MITRA OPERASIONAL", name: "Bandung Equestrian Sport", desc: "Mitra operasional miniplant untuk pengolahan limbah ternak.", color: "#F97316", logo: "/images/logos/bes.png" },
          { initials: "GP", role: "MITRA OPERASIONAL", name: "PT Geo Petro Hinalang", desc: "Mitra operasional miniplant pendukung infrastruktur energi.", color: "#15803D", logo: null },
          { initials: "RK", role: "KOMERSIALISASI", name: "PT REKINAS", desc: "PT Rekayasa Industri Itenas — spin-off untuk komersialisasi produk.", color: "#F59E0B", logo: "/images/logos/rekinas.png", logoBg: "#111827" },
        ].map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="reveal" 
            style={{
              background: "#F3F4F6",
              padding: "28px",
              borderRadius: "24px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.background = "#E5E7EB";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#F3F4F6";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ 
                height: "56px", 
                minWidth: "56px",
                background: p.logoBg || (p.logo || p.logos ? "#FFFFFF" : p.color), 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexShrink: 0, 
                overflow: "hidden", 
                border: (p.logo || p.logos) ? "2px solid #E5E7EB" : "none",
                padding: p.logos ? "4px 8px" : "0px",
                gap: "8px"
              }}>
                {p.logos ? (
                  p.logos.map((lg, idx) => (
                    <div key={idx} style={{ position: "relative", width: "32px", height: "32px" }}>
                      <Image
                        src={lg}
                        alt={`${p.name} logo ${idx}`}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  ))
                ) : p.logo ? (
                  <div style={{ position: "relative", width: "100%", height: "100%", padding: "8px" }}>
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <span style={{ fontWeight: 800, fontSize: "18px", color: "#fff", letterSpacing: "0.05em" }}>{p.initials}</span>
                )}
              </div>
              <div>
                <span style={{ fontSize: "10px", fontWeight: 700, color: p.color, letterSpacing: "0.1em" }}>{p.role}</span>
                <h4 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111827", marginTop: "2px", letterSpacing: "-0.01em" }}>{p.name}</h4>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

