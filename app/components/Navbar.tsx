"use client";
import { useEffect, useMemo, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () =>
      [
        ["#masalah", "Masalah & Solusi"],
        ["#proses", "Proses"],
        ["#keunggulan", "Keunggulan"],
        ["#mitra", "Mitra"],
        ["#pesan", "Pesan"],
      ] as const,
    [],
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div className="logo-mark">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C9 2 4 5 4 10C4 13.3 6.5 15.5 9 15C11.5 15.5 14 13.3 14 10C14 5 9 2 9 2Z" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--slate-900)" }}>
              NICE<span style={{ color: "var(--orange)" }}>GAS</span>
            </span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: "none", color: "var(--slate-700)", fontWeight: 500, fontSize: 14, fontFamily: "var(--font-body)", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--slate-700)"; }}
              >{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>Pesan Sekarang</a>
          </div>
          <button onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }} className="show-mobile" aria-label="Buka menu" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--slate-900)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--slate-900)" }}>
              NICE<span style={{ color: "var(--orange)" }}>GAS</span>
            </span>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }} aria-label="Tutup menu" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--slate-900)" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", color: "var(--slate-900)", fontWeight: 700, fontSize: 22, fontFamily: "var(--font-display)" }}>{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ textAlign: "center", marginTop: 16 }} onClick={() => setMobileOpen(false)}>Pesan Sekarang</a>
          </div>
        </div>
      )}
    </>
  );
};
