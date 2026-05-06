import Image from "next/image";
import { motion } from "framer-motion";
import { Banknote, Leaf, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

export const ProblemSolution = () => (
  <section id="masalah" style={{ padding: "100px 0", background: "#FFFFFF" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "64px" }} 
        className="reveal"
      >
        <span className="section-label">TANTANGAN &amp; SOLUSI</span>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: "16px", letterSpacing: "-0.02em", color: "#111827" }}>
          Dari Limbah Menjadi<br />Energi Bersih
        </h2>
      </motion.div>

      <div className="reveal ps-grid" style={{ 
        background: "#F3F4F6", 
        borderRadius: "32px", 
        overflow: "hidden", 
        display: "grid", 
        gridTemplateColumns: "1fr 1.2fr",
        minHeight: "600px",
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
      }}>
        
        {/* Left Side: The Problem Context */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          viewport={{ once: true }}
          style={{ padding: "60px 48px", borderRight: "2px solid #E5E7EB", position: "relative", overflow: "hidden" }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <Image 
              src="/images/assets/problem_waste.jpg" 
              alt="Limbah kotoran sapi" 
              fill 
              style={{ objectFit: "cover", opacity: 0.15, filter: "grayscale(1)" }} 
            />
          </motion.div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#F97316", letterSpacing: "0.15em" }}>TANTANGAN SAAT INI</span>
            </div>
            
            <div style={{ marginBottom: "40px" }}>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: "5rem", fontWeight: 900, color: "#F97316", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                75%
              </motion.div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginTop: "16px", lineHeight: 1.2 }}>
                Limbah kotoran hewan belum terkelola dengan baik.
              </h3>
              <p style={{ fontSize: "15px", color: "#6B7280", marginTop: "12px", lineHeight: 1.6 }}>
                Di Pangalengan saja, terdapat 19.000 ekor sapi dari 3.500 peternak yang menghasilkan limbah organik masif setiap harinya.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Pencemaran sumber air warga",
                "Ketergantungan energi fosil",
                "Masalah sanitasi lingkungan",
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div style={{ width: "24px", height: "24px", background: "rgba(249,115,22,0.1)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "6px", height: "6px", background: "#F97316", borderRadius: "50%" }} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#4B5563" }}>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Solution Innovation */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          viewport={{ once: true }}
          style={{ padding: "60px 48px", background: "#111827", color: "#FFFFFF", position: "relative", overflow: "hidden" }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <Image 
              src="/images/assets/solution_action.png" 
              alt="Teknisi NICEGAS" 
              fill 
              style={{ objectFit: "cover", opacity: 0.2 }} 
            />
          </motion.div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "32px", background: "#15803D", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckCircle2 size={18} color="white" strokeWidth={3} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#15803D", letterSpacing: "0.15em" }}>INOVASI ITENAS</span>
            </div>

            <h3 style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}>
              Waste-to-Energy<br />
              <span style={{ color: "#15803D" }}>NICEGAS System</span>
            </h3>

            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "40px" }}>
              Kami mengolah limbah kotoran hewan menjadi Bio-CNG siap pakai. Teknologi pemurnian biogas yang menghasilkan energi bersih, aman, dan tanpa bau.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }}>
              {[
                { t: "Ekonomis", d: "Harga Rp4.000/kg", icon: <Banknote size={20} color="#F59E0B" /> },
                { t: "Ramah Lingkungan", d: "Zero Carbon Emission", icon: <Leaf size={20} color="#22C55E" /> },
                { t: "Efisien", d: "Kapasitas 2-5kg", icon: <Zap size={20} color="#EAB308" /> },
                { t: "Aman", d: "Pemurnian Lanjutan", icon: <ShieldCheck size={20} color="#10B981" /> },
              ].map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                >
                  <div style={{ marginBottom: "8px" }}>{f.icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#FFFFFF" }}>{f.t}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{f.d}</div>
                </motion.div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pesan" className="btn-primary" style={{ 
                background: "#F97316", 
                color: "#FFFFFF", 
                padding: "16px 32px", 
                borderRadius: "12px", 
                textDecoration: "none", 
                fontWeight: 700,
                display: "inline-block",
                transition: "all 0.2s"
              }}
            >
              DAPATKAN GAS MURAH SEKARANG
            </motion.a>
          </div>
        </motion.div>
      </div>


    </div>
  </section>
);
