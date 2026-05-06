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
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="pesan" className="cta-section" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="cta-grid">
          <div className="reveal-left">
            <span style={{ display: "inline-block", background: "rgba(255,255,255,0.20)", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 99, marginBottom: 20, fontFamily: "var(--font-display)", border: "1px solid rgba(255,255,255,0.3)" }}>
              Pesan Sekarang
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2.5rem", color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Tertarik dengan NICEGAS?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 36, fontSize: "1.02rem" }}>
              Isi formulir pemesanan di samping dan tim kami akan segera menghubungi Anda untuk konfirmasi pesanan dan pengiriman.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Tersedia ukuran 2 liter, 2 kg, 5 kg, dan industri",
                "Harga terjangkau mulai Rp4.000/kg",
                "Bebas bau, aman, dan ramah lingkungan",
                "Pengiriman ke seluruh area Jawa Barat",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="form-card">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--slate-900)", marginBottom: 12 }}>
                    Pesanan Diterima!
                  </h3>
                  <p style={{ color: "var(--slate-700)", lineHeight: 1.7, fontSize: 14 }}>
                    Terima kasih! Tim NICEGAS akan menghubungi Anda melalui telepon/WhatsApp dalam 1×24 jam untuk konfirmasi pesanan.
                  </p>
                  <a href="#" className="btn-primary" style={{ display: "inline-block", marginTop: 24 }}
                    onClick={(e) => { e.preventDefault(); setSubmitted(false); setForm({ nama: "", afiliasi: "", telepon: "", ukuran: "", alamat: "" }); }}>
                    Kirim Pesanan Lain
                  </a>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "var(--slate-900)", marginBottom: 6 }}>
                    Formulir Pemesanan NICEGAS
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--slate-400)", marginBottom: 28 }}>
                    Semua kolom wajib diisi. Respons dalam 1×24 jam.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div className="form-field">
                      <label>Nama Lengkap *</label>
                      <input name="nama" value={form.nama} onChange={handleChange} placeholder="Contoh: Budi Santoso" required />
                    </div>
                    <div className="form-field">
                      <label>Unit / Afiliasi *</label>
                      <select name="afiliasi" value={form.afiliasi} onChange={handleChange} required>
                        <option value="" disabled>Pilih afiliasi Anda</option>
                        <option value="staff-itenas">Staff ITENAS</option>
                        <option value="umum">Umum / Masyarakat</option>
                        <option value="industri">Industri / Perusahaan</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Nomor Telepon / WhatsApp *</label>
                      <input name="telepon" type="tel" value={form.telepon} onChange={handleChange} placeholder="Contoh: 08123456789" required />
                    </div>
                    <div className="form-field">
                      <label>Ukuran Tabung yang Diinginkan *</label>
                      <select name="ukuran" value={form.ukuran} onChange={handleChange} required>
                        <option value="" disabled>Pilih ukuran tabung</option>
                        <option value="2-liter">2 Liter</option>
                        <option value="2-kg">2 Kilogram</option>
                        <option value="5-kg">5 Kilogram</option>
                        <option value="industri">Tabung Besar (Industri)</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Alamat Pengiriman *</label>
                      <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Masukkan alamat lengkap Anda" required />
                    </div>
                    <button type="submit" className="btn-submit" style={{ marginTop: 8 }} disabled={loading}>
                      {loading ? (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "spin-slow 1s linear infinite" }}>
                            <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeDasharray="20 8" strokeLinecap="round" />
                          </svg>
                          Mengirim...
                        </span>
                      ) : (
                        "Kirim Pesanan →"
                      )}
                    </button>
                    <p style={{ fontSize: 11, color: "var(--slate-400)", textAlign: "center", lineHeight: 1.5 }}>
                      Dengan mengirim formulir ini, Anda menyetujui kami menghubungi Anda. Data Anda aman bersama kami.
                    </p>
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
