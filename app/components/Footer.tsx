export const Footer = () => (
  <footer style={{ padding: "48px 0 32px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 40 }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div className="logo-mark">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C9 2 4 5 4 10C4 13.3 6.5 15.5 9 15C11.5 15.5 14 13.3 14 10C14 5 9 2 9 2Z" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#fff" }}>
              NICE<span style={{ color: "var(--orange)" }}>GAS</span>
            </span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 320, marginBottom: 20 }}>
            NICEGAS adalah inovasi Bio-CNG hasil pemurnian biogas oleh ITENAS Bandung. Energi bersih, bebas bau, aman, dan terjangkau untuk rumah tangga dan industri.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
            &quot;Collaboration, Innovation, Impact&quot;
          </p>
        </div>

        <div>
          <h5 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.9)", marginBottom: 16, letterSpacing: "0.05em" }}>
            NAVIGASI
          </h5>
          {[
            ["Beranda", "#"],
            ["Masalah & Solusi", "#masalah"],
            ["Proses", "#proses"],
            ["Keunggulan", "#keunggulan"],
            ["Roadmap", "#roadmap"],
            ["Mitra", "#mitra"],
            ["Berita", "#berita"],
            ["Pesan", "#pesan"],
          ].map(([l, href]) => (
            <a key={l} href={href} style={{ display: "block", textDecoration: "none", fontSize: 13, marginBottom: 10, transition: "color 0.2s", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}>
              {l}
            </a>
          ))}
        </div>

        <div>
          <h5 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.9)", marginBottom: 16, letterSpacing: "0.05em" }}>
            KONTAK
          </h5>
          {[
            ["📍", "Jl. PHH. Mustofa No.23, Bandung, Jawa Barat"],
            ["📞", "+62 22 7272 700"],
            ["✉️", "info@nicegas.id"],
            ["🌐", "www.nicegas.id"],
          ].map(([icon, val]) => (
            <div key={val} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{ flexShrink: 0, fontSize: 13 }}>{icon}</span>
              <span style={{ fontSize: 13, lineHeight: 1.5 }}>{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 12 }}>© 2026 NICEGAS — Institut Teknologi Nasional (ITENAS) Bandung. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
            <a key={l} href="#" style={{ fontSize: 12, textDecoration: "none", transition: "color 0.2s", color: "rgba(255,255,255,0.6)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}>
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
