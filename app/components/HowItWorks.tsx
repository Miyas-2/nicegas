import Image from "next/image";
import { motion } from "framer-motion";

export const HowItWorks = () => (
  <section id="proses" style={{ position: "relative", overflow: "hidden", background: "#111827" }}>
    {/* Geometric decoration */}
    <div style={{ position: "absolute", top: "40px", left: "-80px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
    <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "200px", height: "200px", background: "rgba(255,255,255,0.02)", transform: "rotate(45deg)", borderRadius: "12px" }} />

    {/* Title section */}
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 40px", textAlign: "center", position: "relative", zIndex: 1 }} className="reveal">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div style={{ display: "inline-block", background: "rgba(249,115,22,0.15)", padding: "8px 20px", borderRadius: "8px", marginBottom: "20px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", color: "#F97316" }}>
            ALUR PROSES
          </span>
        </div>
        <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 0, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
          8 Tahapan Mengolah Limbah Menjadi NICEGAS
        </h2>
      </motion.div>
    </div>

    {/* Full-width process infographic */}
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", background: "#FFF7ED", borderRadius: 0 }}
    >
      <Image
        src="/images/process.png"
        alt="Infografis alur proses 8 tahapan pengolahan limbah menjadi NICEGAS Bio-CNG"
        width={2000}
        height={1333}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </motion.div>
  </section>
);

