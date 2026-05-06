"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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
    () => [
      ["#masalah", "MASALAH"],
      ["#proses", "PROSES"],
      ["#keunggulan", "KEUNGGULAN"],
      ["#mitra", "MITRA"],
      ["#berita", "BERITA"],
    ] as const,
    [],
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#FFFFFF", borderBottom: scrolled ? "2px solid #F97316" : "2px solid #E5E7EB", transition: "all 0.2s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="NICEGAS"
              width={140}
              height={65}
              style={{ objectFit: "contain", height: 40, width: "auto" }}
              priority
            />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{
                textDecoration: "none",
                color: "#6B7280",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.12em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#6B7280"; }}
              >{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ fontSize: "11px", padding: "10px 24px", background: "#F97316", color: "#FFFFFF", borderRadius: "12px", textDecoration: "none", fontWeight: 600 }}>PESAN SEKARANG</a>

          </div>
          <button onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }} className="show-mobile" aria-label="Menu" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu" style={{ position: "fixed", inset: 0, zIndex: 200, background: "#FFFFFF", display: "flex", flexDirection: "column", padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <Image src="/images/logo.png" alt="NICEGAS" width={140} height={65} style={{ objectFit: "contain", height: 36, width: "auto" }} />
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }} aria-label="Tutup" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", color: "#111827", fontWeight: 700, fontSize: 18, letterSpacing: "0.08em" }}>{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ textAlign: "center", marginTop: "12px", background: "#F97316", color: "#FFFFFF", padding: "14px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600 }} onClick={() => setMobileOpen(false)}>PESAN SEKARANG</a>

          </div>
        </div>
      )}
    </>
  );
};
