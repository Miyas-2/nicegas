import Image from "next/image";

export const Footer = () => (
  <footer style={{ padding: "48px 0 32px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 0, marginBottom: 40 }} className="footer-grid">
        <div style={{ paddingRight: 48, borderRight: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ marginBottom: 20 }}>
            <Image
              src="/images/logo.png"
              alt="NICEGAS"
              width={140}
              height={65}
              style={{ objectFit: "contain", height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 320, marginBottom: 16 }}>
            Inovasi Bio-CNG hasil pemurnian biogas oleh ITENAS Bandung. Energi bersih, bebas bau, aman, dan terjangkau.
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Collaboration. Innovation. Impact.
          </p>
        </div>

        <div style={{ paddingLeft: 48, paddingRight: 48, borderRight: "1px solid rgba(255,255,255,0.08)" }}>
          <h5 style={{ fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 20, letterSpacing: "0.15em" }}>NAVIGASI</h5>
          {[
            ["Beranda", "#"], ["Masalah & Solusi", "#masalah"], ["Proses", "#proses"],
            ["Keunggulan", "#keunggulan"], ["Roadmap", "#roadmap"], ["Mitra", "#mitra"],
            ["Berita", "#berita"], ["Pesan", "#pesan"],
          ].map(([l, href]) => (
            <a key={l} href={href} style={{ display: "block", textDecoration: "none", fontSize: 13, marginBottom: 10, color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--orange)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
              {l}
            </a>
          ))}
        </div>

        <div style={{ paddingLeft: 48 }}>
          <h5 style={{ fontWeight: 700, fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 20, letterSpacing: "0.15em" }}>KONTAK</h5>
          {[
            ["ALAMAT", "Jl. PHH. Mustofa No.23, Bandung, Jawa Barat"],
            ["TELEPON", "+62 22 7272 700"],
            ["EMAIL", "info@nicegas.id"],
            ["WEB", "www.nicegas.id"],
          ].map(([label, val]) => (
            <div key={val} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--orange)", letterSpacing: "0.12em", marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.02em" }}>&copy; 2026 NICEGAS — Institut Teknologi Nasional (ITENAS) Bandung</p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Kebijakan Privasi", "Syarat & Ketentuan"].map(l => (
            <a key={l} href="#" style={{ fontSize: 11, textDecoration: "none", color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--orange)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export const WhatsAppButton = () => (
  <a href="https://wa.me/6222727270" target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C8 3 3 8 3 14C3 16.2 3.7 18.2 4.8 19.9L3 25L8.3 23.2C10 24.2 11.9 24.8 14 24.8C20 24.8 25 19.8 25 13.8C25 7.8 20 3 14 3Z" fill="white" />
      <path d="M10 11C10 11 9.5 12 10 13.5C10.5 15 13 17.5 15 18.5C17 19.5 18 19 18 19L18.5 17.5C18.5 17.5 16.5 16.5 16 16C15.5 15.5 15.5 15 15.5 15L14 16C14 16 12.5 15 11.5 13.5L13 12C13 12 12.5 10.5 11.5 10C10.5 9.5 10 11 10 11Z" fill="#25D366" />
    </svg>
  </a>
);
