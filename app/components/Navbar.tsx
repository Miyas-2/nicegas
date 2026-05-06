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
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden-mobile">
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: "none", color: "var(--gray-500)", fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", transition: "color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--orange)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--gray-500)"; }}
              >{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ fontSize: 11, padding: "10px 20px" }}>PESAN SEKARANG</a>
          </div>
          <button onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }} className="show-mobile" aria-label="Menu" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gray-900)" strokeWidth="2">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <Image src="/images/logo.png" alt="NICEGAS" width={140} height={65} style={{ objectFit: "contain", height: 36, width: "auto" }} />
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }} aria-label="Tutup" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gray-900)" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", color: "var(--gray-900)", fontWeight: 700, fontSize: 18, letterSpacing: "0.08em" }}>{label}</a>
            ))}
            <a href="#pesan" className="btn-primary" style={{ textAlign: "center", marginTop: 12 }} onClick={() => setMobileOpen(false)}>PESAN SEKARANG</a>
          </div>
        </div>
      )}
    </>
  );
};
