# Progress Tracker Revisi UI

Dokumen ini melacak revisi UI yang diminta. Status: ⬜ belum, 🟨 proses, ✅ selesai.

| No | Revisi | File Terkait | Status |
|----|--------|-------------|--------|
| 1 | Navbar tampil full "BERDIKARI RAYA SERVICE", warna hitam bold | `src/components/Navbar.tsx` | ✅ |
| 2 | Teks hero homepage jadi: "Berdikari Raya Service / Build. Reliability. Solutions. / Karoseri & Hydraulic System Truck" | `src/app/page.tsx` | ✅ |
| 3 | Hilangkan section "Tentang Kami" versi lama di Home (biar hanya di About) — diganti section Build/Reliability/Solutions (lihat no. 8) | `src/app/page.tsx` | ✅ |
| 4 | Ganti warna hijau WA pada CTA "Konsultasi Sekarang" (pakai warna brand/primary) | `src/components/KonsultasiButton.tsx` | ✅ |
| 5 | "Telah Dipercaya" dibuat nge-link ke halaman portofolio, hapus logo perusahaan | `src/app/page.tsx`, `src/app/portfolio/page.tsx` (baru) | ✅ |
| 6 | Tagline diganti: "Berdikari Raya Service / Build. Reliability. Solutions. / Karoseri & Hydraulic System Truck" | `src/components/Footer.tsx` | ✅ |
| 7 | Sticky WhatsApp button pakai nama lengkap saja (tanpa kata "Konsultasi dengan") | `src/components/WhatsAppFAB.tsx` | ✅ |
| 8 | Section "Tentang Kami" di Home diganti konten Build / Reliability / Solutions | `src/app/page.tsx` | ✅ |

## Catatan
- Konten baru section Home (no. 8):
  - **Build** — Kami membangun karoseri yang dirancang sesuai kebutuhan operasional pelanggan.
  - **Reliability** — Kami menghadirkan kualitas, ketahanan, dan layanan yang dapat diandalkan untuk mendukung bisnis pelanggan yang berkelanjutan.
  - **Solutions** — Kami memberikan solusi menyeluruh, mulai dari perencanaan, produksi, instalasi, hingga layanan purna jual untuk mendukung kesuksesan bisnis pelanggan.
- Item no. 5: dibuat halaman baru `/portfolio` sebagai target link. Section "Telah Dipercaya" di Home kini menampilkan CTA "Lihat Portofolio" (LogoLoop & data `partnerLogos` dihapus).
- Belum di-push sesuai permintaan.
