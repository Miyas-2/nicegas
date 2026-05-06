import Image from "next/image";
import { motion } from "framer-motion";

export const Features = () => (
  <section id="keunggulan" style={{ padding: "100px 0", background: "#FFFFFF", position: "relative", overflow: "hidden" }}>
    {/* Geometric decoration */}
    <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "350px", height: "350px", borderRadius: "50%", background: "#F97316", opacity: 0.03 }} />

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "64px" }} 
        className="reveal"
      >
        <span className="section-label">MENGAPA NICEGAS</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: "16px", letterSpacing: "-0.02em", color: "#111827" }}>
          Keunggulan &amp; Spesifikasi
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "48px", alignItems: "center" }} className="features-container">
        {/* Left: Product Detail Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="reveal-left" 
          style={{ position: "relative", borderRadius: "32px", overflow: "hidden", background: "#F3F4F6", minHeight: "500px", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" }}
        >
          <Image 
            src="/images/assets/nicegas_detail.png" 
            alt="Detail Tabung NICEGAS" 
            fill 
            style={{ objectFit: "cover" }} 
          />
          <div style={{ position: "absolute", bottom: "32px", left: "32px", background: "rgba(255,255,255,0.9)", padding: "16px 24px", borderRadius: "16px", backdropFilter: "blur(8px)" }}>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#F97316", letterSpacing: "0.15em", marginBottom: "4px" }}>PRODUK ASLI</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#111827" }}>Hilirisasi Riset Itenas</div>
          </div>
        </motion.div>

        {/* Right: Features Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="benefits-grid">
          {[
            {
              num: "01",
              tag: "ECO-FRIENDLY",
              title: "100% Ramah Lingkungan",
              desc: "Mengurangi emisi karbon secara nyata. Energi bersih tanpa emisi berbahaya.",
              tint: "#F0FDF4",
              tintHover: "#DCFCE7",
              accent: "#15803D",
            },
            {
              num: "02",
              tag: "Rp4.000/KG",
              title: "Harga Sangat Ekonomis",
              desc: "Jauh lebih terjangkau dibanding LPG. Hemat untuk rumah tangga.",
              tint: "#FFF7ED",
              tintHover: "#FFEDD5",
              accent: "#F97316",
            },
            {
              num: "03",
              tag: "2L — INDUSTRI",
              title: "Berbagai Ukuran",
              desc: "Tersedia mulai kemasan 2L hingga tabung besar kebutuhan industri.",
              tint: "#FFFBEB",
              tintHover: "#FEF3C7",
              accent: "#F59E0B",
            },
            {
              num: "04",
              tag: "CH₄ 92%",
              title: "Bebas Bau & Aman",
              desc: "Pemurnian berlapis, bebas bau H₂S dengan kemurnian CH₄ tinggi.",
              tint: "#FFF7ED",
              tintHover: "#FFEDD5",
              accent: "#F97316",
            },
          ].map((b, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="reveal" 
              style={{
                background: b.tint,
                padding: "28px",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.2s",
                position: "relative"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = b.tintHover;
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = b.tint;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Large Background Number (Solid Fill) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ 
                  position: "absolute", 
                  bottom: "-20px", 
                  right: "-10px", 
                  fontSize: "120px", 
                  fontWeight: 900, 
                  lineHeight: 1,
                  color: b.accent,
                  opacity: 0.05,
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0
                }}
              >
                {b.num}
              </motion.div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  {/* Small clean number in top left */}
                  <span style={{ fontWeight: 900, fontSize: "16px", color: b.accent, opacity: 0.8 }}>
                    {b.num}
                  </span>
                  <span style={{ fontSize: "9px", fontWeight: 700, color: b.accent, letterSpacing: "0.08em", background: "rgba(255,255,255,0.6)", padding: "4px 10px", borderRadius: "10px" }}>
                    {b.tag}
                  </span>
                </div>

                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#111827", marginBottom: "8px", letterSpacing: "-0.01em" }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

