import Image from "next/image";

export const HowItWorks = () => (
  <section id="proses" style={{ position: "relative", minHeight: 700, overflow: "hidden", background: "var(--charcoal)" }}>
    {/* Title section before the image */}
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 40px", textAlign: "center" }} className="reveal">
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#fff", borderLeft: "3px solid var(--orange)", paddingLeft: 12, display: "inline-block" }}>
        ALUR PROSES
      </span>
      <h2 className="section-heading" style={{ fontWeight: 800, fontSize: "2.4rem", marginTop: 16, letterSpacing: "-0.02em", color: "#fff" }}>
        8 Tahapan Mengolah Limbah Menjadi NICEGAS
      </h2>
    </div>

    {/* Full-width process infographic as background */}
    <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", background: "#fef3e2" }}>
      <Image
        src="/images/process.png"
        alt="Infografis alur proses 8 tahapan pengolahan limbah menjadi NICEGAS Bio-CNG"
        width={2000}
        height={1333}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </div>
  </section>
);
