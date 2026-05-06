import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => (
  <section style={{ minHeight: "100vh", paddingTop: "64px", background: "#F3F4F6", position: "relative", overflow: "hidden" }}>
    {/* Geometric decoration */}
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.05 }}
      transition={{ duration: 1.5 }}
      style={{ position: "absolute", top: "-120px", right: "-120px", width: "400px", height: "400px", borderRadius: "50%", background: "#F97316" }} 
    />
    <motion.div 
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      animate={{ scale: 1, opacity: 0.04, rotate: 15 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      style={{ position: "absolute", bottom: "-80px", left: "-60px", width: "300px", height: "300px", background: "#15803D", borderRadius: "24px" }} 
    />

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 60px", width: "100%", position: "relative", zIndex: 1 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div style={{ display: "inline-block", background: "#FFF7ED", padding: "8px 16px", borderRadius: "24px", marginBottom: "28px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F97316" }}>
              INOVASI BIO-CNG — ITENAS BANDUNG
            </span>
          </div>
          <h1 className="hero-headline" style={{ fontSize: "3.4rem", fontWeight: 800, lineHeight: 1.06, color: "#111827", marginBottom: "24px", letterSpacing: "-0.03em" }}>
            Mengubah<br />Biogas Menjadi<br />
            <span style={{ color: "#F97316" }}>Energi Bersih.</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.7, marginBottom: "40px", maxWidth: "440px" }}>
            NICEGAS adalah inovasi Bio-CNG hasil pemurnian biogas yang bebas bau, aman, dan siap digunakan sebagai energi bersih terbarukan — untuk rumah tangga maupun industri.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pesan" className="btn-primary" style={{ padding: "16px 40px", borderRadius: "24px" }}>PESAN SEKARANG</motion.a>
            <a href="#masalah" className="btn-outline" style={{ padding: "16px 40px", borderRadius: "24px" }}>PELAJARI LANJUT</a>
          </div>
          
          <div style={{ display: "flex", gap: "32px" }}>
            {([["Rp4.000", "PER KILOGRAM"], ["92%", "KEMURNIAN CH₄"], ["100%", "RAMAH LINGKUNGAN"]] as const).map(([val, label], i) => (
              <motion.div 
                key={label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                viewport={{ once: true }}
                style={{ flex: 1 }}
              >
                <div style={{ fontWeight: 800, fontSize: "1.8rem", color: "#F97316", letterSpacing: "-0.02em", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: "10px", color: "#6B7280", fontWeight: 600, letterSpacing: "0.12em", marginTop: "8px" }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "1080px", aspectRatio: "2063/1697" }}>
            <Image src="/images/nicegas_orange.png" alt="Tabung NICEGAS Bio-CNG" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "contain" }} priority />
          </div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ 
              x: { delay: 0.8 }, 
              opacity: { delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
            style={{ position: "absolute", bottom: "16px", left: "16px", background: "#111827", padding: "14px 22px", color: "#fff", zIndex: 2, borderRadius: "24px" }}
          >
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#F97316", marginBottom: "4px" }}>EMISI CO₂</div>
            <div style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.02em" }}>−78%</div>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              x: { delay: 1 }, 
              opacity: { delay: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
            style={{ position: "absolute", top: "16px", right: "16px", background: "#F97316", padding: "14px 22px", color: "#fff", zIndex: 2, borderRadius: "24px" }}
          >
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "4px" }}>KAPASITAS</div>
            <div style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.02em" }}>2 Liter</div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  </section>
);

