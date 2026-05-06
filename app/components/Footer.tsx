import Image from "next/image";

export const Footer = () => (
  <footer style={{ padding: "56px 0 32px", background: "#111827", color: "rgba(255,255,255,0.6)" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "0px", marginBottom: "40px" }} className="footer-grid">
        <div style={{ paddingRight: "48px", borderRight: "2px solid rgba(255,255,255,0.06)" }}>
          <div style={{ marginBottom: "20px" }}>
            <Image
              src="/images/logo.png"
              alt="NICEGAS"
              width={140}
              height={65}
              style={{ objectFit: "contain", height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "320px", marginBottom: "20px", color: "rgba(255,255,255,0.8)" }}>
            Inovasi Bio-CNG hasil pemurnian biogas oleh ITENAS Bandung. Energi bersih, bebas bau, aman, dan terjangkau.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {["#F97316", "#15803D", "#F59E0B"].map((color, i) => (
              <div key={i} style={{ width: "32px", height: "4px", borderRadius: "2px", background: color }} />
            ))}
          </div>
        </div>

        <div style={{ paddingLeft: "48px", paddingRight: "48px", borderRight: "2px solid rgba(255,255,255,0.06)" }}>
          <h5 style={{ fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "20px", letterSpacing: "0.15em" }}>NAVIGASI</h5>
          {[
            ["Beranda", "#"], ["Masalah & Solusi", "#masalah"], ["Proses", "#proses"],
            ["Keunggulan", "#keunggulan"], ["Roadmap", "#roadmap"], ["Mitra", "#mitra"],
            ["Berita", "#berita"], ["Pesan", "#pesan"],
          ].map(([l, href]) => (
            <a key={l} href={href} style={{ display: "block", textDecoration: "none", fontSize: "13px", marginBottom: "10px", color: "rgba(255,255,255,0.5)", transition: "all 0.2s", fontWeight: 500 }}
            >
              {l}
            </a>
          ))}
        </div>

        <div style={{ paddingLeft: "48px" }}>
          <h5 style={{ fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.35)", marginBottom: "20px", letterSpacing: "0.15em" }}>KONTAK</h5>
          {[
            ["ALAMAT", "Jl. PHH. Mustofa No.23, Bandung, Jawa Barat"],
            ["TELEPON", "+62 22 7272 700"],
            ["EMAIL", "info@nicegas.id"],
            ["WEB", "www.nicegas.id"],
          ].map(([label, val]) => (
            <div key={val} style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#F97316", letterSpacing: "0.12em", marginBottom: "3px" }}>{label}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.02em", color: "rgba(255,255,255,0.4)" }}>&copy; 2026 NICEGAS — Institut Teknologi Nasional (ITENAS) Bandung</p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Kebijakan Privasi", "Syarat & Ketentuan"].map(l => (
            <a key={l} href="#" style={{ fontSize: "11px", textDecoration: "none", color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>

);

export const WhatsAppButton = () => (
  <a href="https://wa.me/6222727270" target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label="WhatsApp" style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 999, width: "56px", height: "56px", borderRadius: "12px", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", textDecoration: "none" }}>

    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C8 3 3 8 3 14C3 16.2 3.7 18.2 4.8 19.9L3 25L8.3 23.2C10 24.2 11.9 24.8 14 24.8C20 24.8 25 19.8 25 13.8C25 7.8 20 3 14 3Z" fill="white" />
      <path d="M10 11C10 11 9.5 12 10 13.5C10.5 15 13 17.5 15 18.5C17 19.5 18 19 18 19L18.5 17.5C18.5 17.5 16.5 16.5 16 16C15.5 15.5 15.5 15 15.5 15L14 16C14 16 12.5 15 11.5 13.5L13 12C13 12 12.5 10.5 11.5 10C10.5 9.5 10 11 10 11Z" fill="#25D366" />
    </svg>
  </a>
);
