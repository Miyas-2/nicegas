"use client";
import { useState } from "react";

export const PurchaseForm = () => {
  const [form, setForm] = useState({ nama: "", afiliasi: "", telepon: "", ukuran: "", alamat: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <section id="pesan" className="cta-section" style={{ padding: "100px 0", position: "relative", overflow: "hidden", background: "#F97316" }}>
      {/* Geometric decorations */}
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-40px", width: "250px", height: "250px", background: "rgba(255,255,255,0.05)", transform: "rotate(20deg)", borderRadius: "24px" }} />


      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="cta-grid">
          <div className="reveal-left" style={{ padding: "48px 0" }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", padding: "8px 20px", borderRadius: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#FFFFFF" }}>PESAN SEKARANG</span>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#FFFFFF", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em" }}>
              Tertarik dengan NICEGAS?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36, fontSize: 15 }}>
              Isi formulir pemesanan dan tim kami akan segera menghubungi Anda untuk konfirmasi pesanan dan pengiriman.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Tersedia ukuran 2 liter, 2 kg, 5 kg, dan industri",
                "Harga terjangkau mulai Rp4.000/kg",
                "Bebas bau, aman, dan ramah lingkungan",
                "Pengiriman ke seluruh area Jawa Barat",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: "#FFFFFF", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="form-card" style={{ background: "#FFFFFF", padding: "40px", borderRadius: "24px", overflow: "hidden" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: "56px", height: "56px", background: "#15803D", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>

                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12L10 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#111827", marginBottom: 12 }}>PESANAN DITERIMA</h3>
                  <p style={{ color: "#6B7280", lineHeight: 1.7, fontSize: 14 }}>
                    Tim NICEGAS akan menghubungi Anda melalui telepon/WhatsApp dalam 1×24 jam.
                  </p>
                  <button className="btn-primary" style={{ marginTop: 24, background: "#F97316", color: "#FFFFFF", padding: "14px 32px", borderRadius: 12, border: "none", fontWeight: 600, cursor: "pointer" }}
                    onClick={() => { setSubmitted(false); setForm({ nama: "", afiliasi: "", telepon: "", ukuran: "", alamat: "" }); }}>
                    KIRIM PESANAN LAIN
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#111827", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    Formulir Pemesanan
                  </h3>
                  <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 28, letterSpacing: "0.02em" }}>
                    Semua kolom wajib diisi. Respons dalam 1×24 jam.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div className="form-field">
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>NAMA LENGKAP</label>
                      <input name="nama" value={form.nama} onChange={handleChange} placeholder="Budi Santoso" required style={{ padding: "14px 16px", background: "#F3F4F6", border: "2px solid transparent", borderRadius: 12, outline: "none" }} />
                    </div>
                    <div className="form-field">
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>UNIT / AFILIASI</label>
                      <select name="afiliasi" value={form.afiliasi} onChange={handleChange} required style={{ padding: "14px 16px", background: "#F3F4F6", border: "2px solid transparent", borderRadius: 12, outline: "none" }}>
                        <option value="" disabled>Pilih afiliasi</option>
                        <option value="staff-itenas">Staff ITENAS</option>
                        <option value="umum">Umum / Masyarakat</option>
                        <option value="industri">Industri / Perusahaan</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>NOMOR TELEPON / WHATSAPP</label>
                      <input name="telepon" type="tel" value={form.telepon} onChange={handleChange} placeholder="08123456789" required style={{ padding: "14px 16px", background: "#F3F4F6", border: "2px solid transparent", borderRadius: 12, outline: "none" }} />
                    </div>
                    <div className="form-field">
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>UKURAN TABUNG</label>
                      <select name="ukuran" value={form.ukuran} onChange={handleChange} required style={{ padding: "14px 16px", background: "#F3F4F6", border: "2px solid transparent", borderRadius: 12, outline: "none" }}>
                        <option value="" disabled>Pilih ukuran</option>
                        <option value="2-liter">2 Liter</option>
                        <option value="2-kg">2 Kilogram</option>
                        <option value="5-kg">5 Kilogram</option>
                        <option value="industri">Tabung Besar (Industri)</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>ALAMAT PENGIRIMAN</label>
                      <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat lengkap" required style={{ padding: "14px 16px", background: "#F3F4F6", border: "2px solid transparent", borderRadius: 12, outline: "none", minHeight: 80 }} />
                    </div>
                    <button type="submit" className="btn-submit" style={{ marginTop: 8, background: "#111827", color: "#FFFFFF", padding: "16px 28px", borderRadius: 12, border: "none", fontWeight: 700, cursor: "pointer" }} disabled={loading}>
                      {loading ? "MENGIRIM..." : "KIRIM PESANAN"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
