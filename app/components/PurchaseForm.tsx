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
    <section id="pesan" className="cta-section" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="cta-grid">
          <div className="reveal-left" style={{ padding: "48px 48px 48px 0" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#fff", borderLeft: "3px solid #fff", paddingLeft: 12, display: "inline-block", marginBottom: 24 }}>
              PESAN SEKARANG
            </span>
            <h2 style={{ fontWeight: 800, fontSize: "2.5rem", color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.03em" }}>
              Tertarik dengan NICEGAS?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36, fontSize: 15 }}>
              Isi formulir pemesanan dan tim kami akan segera menghubungi Anda untuk konfirmasi pesanan dan pengiriman.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Tersedia ukuran 2 liter, 2 kg, 5 kg, dan industri",
                "Harga terjangkau mulai Rp4.000/kg",
                "Bebas bau, aman, dan ramah lingkungan",
                "Pengiriman ke seluruh area Jawa Barat",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 6, height: 6, background: "#fff", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="form-card">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: 48, height: 48, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L10 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="square" /></svg>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--gray-900)", marginBottom: 12 }}>PESANAN DITERIMA</h3>
                  <p style={{ color: "var(--gray-500)", lineHeight: 1.7, fontSize: 14 }}>
                    Tim NICEGAS akan menghubungi Anda melalui telepon/WhatsApp dalam 1×24 jam.
                  </p>
                  <button className="btn-primary" style={{ marginTop: 24 }}
                    onClick={() => { setSubmitted(false); setForm({ nama: "", afiliasi: "", telepon: "", ukuran: "", alamat: "" }); }}>
                    KIRIM PESANAN LAIN
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--gray-900)", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    Formulir Pemesanan
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 28, letterSpacing: "0.02em" }}>
                    Semua kolom wajib diisi. Respons dalam 1×24 jam.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div className="form-field">
                      <label>NAMA LENGKAP</label>
                      <input name="nama" value={form.nama} onChange={handleChange} placeholder="Budi Santoso" required />
                    </div>
                    <div className="form-field">
                      <label>UNIT / AFILIASI</label>
                      <select name="afiliasi" value={form.afiliasi} onChange={handleChange} required>
                        <option value="" disabled>Pilih afiliasi</option>
                        <option value="staff-itenas">Staff ITENAS</option>
                        <option value="umum">Umum / Masyarakat</option>
                        <option value="industri">Industri / Perusahaan</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>NOMOR TELEPON / WHATSAPP</label>
                      <input name="telepon" type="tel" value={form.telepon} onChange={handleChange} placeholder="08123456789" required />
                    </div>
                    <div className="form-field">
                      <label>UKURAN TABUNG</label>
                      <select name="ukuran" value={form.ukuran} onChange={handleChange} required>
                        <option value="" disabled>Pilih ukuran</option>
                        <option value="2-liter">2 Liter</option>
                        <option value="2-kg">2 Kilogram</option>
                        <option value="5-kg">5 Kilogram</option>
                        <option value="industri">Tabung Besar (Industri)</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>ALAMAT PENGIRIMAN</label>
                      <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat lengkap" required />
                    </div>
                    <button type="submit" className="btn-submit" style={{ marginTop: 8 }} disabled={loading}>
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
