"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const NEWS_DATA = [
  {
    id: 1,
    title: "Peluncuran Bio-CNG Gas Nicegas",
    date: "Minggu, 14 DESEMBER 2025",
    tag: "DIES NATALIS KE-53 ITENAS",
    desc: "Itenas Bandung resmi meluncurkan Bio-CNG Gas sebagai solusi inovatif pengolahan limbah kotoran hewan menjadi energi terjangkau seharga Rp4.000/kg.",
    image: "/images/peresmian.png",
    color: "#15803D",
    figures: [
      { name: "Prof. Melinda Nurbanasari", role: "Rektor Itenas" },
      { name: "Fauzan Adziman, Ph.D.", role: "Dir. Kemdiktisaintek" },
      { name: "Herman Suryatman", role: "Sekda Jawa Barat" }
    ]
  },
  {
    id: 2,
    title: "Implementasi Pilot Project Pangalengan",
    date: "Senin, 15 DESEMBER 2025",
    tag: "PILOT PROJECT",
    desc: "Pangalengan menjadi lokasi pertama implementasi sistem NICEGAS dengan potensi pengolahan limbah dari 19.000 ekor sapi perah.",
    image: "/images/assets/pangalengan.jpg",
    color: "#F97316",
    figures: [
      { name: "Tim Riset Itenas", role: "Pelaksana Teknis" },
      { name: "KPSBU Pangalengan", role: "Mitra Strategis" }
    ]
  }
];

export const PressRelease = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % NEWS_DATA.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + NEWS_DATA.length) % NEWS_DATA.length);
  };

  const current = NEWS_DATA[index];

  return (
    <section id="berita" style={{ padding: "100px 0", background: "#111827", position: "relative", overflow: "hidden" }}>
      {/* Background Decorations */}
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.02)" }} />
      <div style={{ position: "absolute", bottom: "40px", left: "10%", width: "200px", height: "200px", background: "rgba(255,255,255,0.01)", transform: "rotate(30deg)", borderRadius: "24px" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}
        >
          <div>
            <div style={{ display: "inline-block", background: "rgba(249,115,22,0.15)", padding: "8px 20px", borderRadius: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", color: "#F97316" }}>BERITA &amp; ACARA</span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: "2.8rem", color: "#FFFFFF", letterSpacing: "-0.02em", margin: 0 }}>
              Kabar Terbaru NICEGAS
            </h2>
          </div>
          
          <div style={{ display: "flex", gap: "12px" }}>
            <button 
              onClick={prevSlide}
              style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              style={{ width: "48px", height: "48px", borderRadius: "50%", border: "none", background: "#F97316", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>


        <div style={{ position: "relative", minHeight: "500px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "32px" }}
              className="press-grid"
            >
              {/* Left: Image Card */}
              <div style={{ position: "relative", minHeight: "450px", borderRadius: "32px", overflow: "hidden", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}>
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "0px", left: "0px", right: "0px", background: current.color, padding: "32px", backdropFilter: "blur(4px)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "#FFFFFF", opacity: 0.8, marginBottom: "8px" }}>{current.tag}</div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.6rem", color: "#FFFFFF", margin: 0 }}>{current.title}</h3>
                </div>
              </div>

              {/* Right: Content Card */}
              <div style={{ display: "flex", flexDirection: "column", background: "#1F2937", borderRadius: "32px", padding: "40px", position: "relative" }}>
                <div style={{ marginBottom: "32px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#F97316", letterSpacing: "0.2em" }}>{current.date}</span>
                  <h3 style={{ fontWeight: 800, fontSize: "1.8rem", color: "#FFFFFF", marginTop: "12px", lineHeight: 1.2 }}>{current.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "15px", marginTop: "20px" }}>{current.desc}</p>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: "16px" }}>TOKOH KUNCI</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {current.figures.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.03)", padding: "10px 16px", borderRadius: "14px" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <User size={12} color="rgba(255,255,255,0.5)" />
                        </div>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>{f.name}</div>
                          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{f.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

