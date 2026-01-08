# 🎮 Pusat Bantuan Orang Lapar (Game Web App)

> **Official Marketing App for Food Station 7A1**  
> *Entrepreneurship Project - Informatika UMSIDA*

Web App berbasis React ini dibuat sebagai strategi *Gamification Marketing* untuk menarik pengunjung bazaar. Pengunjung bisa memainkan mini-game untuk memenangkan diskon atau makanan gratis.

![Status](https://img.shields.io/badge/Status-Ready_to_Deploy-success?style=for-the-badge)
![Tech](https://img.shields.io/badge/Built_With-React_Vite_Tailwind-blue?style=for-the-badge)

---

## 🕹️ Fitur & Mini Games

Aplikasi ini memiliki 3 mode permainan utama + fitur keamanan:

### 1. ⏱️ Stop The Loop (Skill Based)
Game uji ketangkasan dimana pemain harus memberhentikan *timer* tepat di **05.00 detik**.
- **Jackpot:** Tepat 5.00s (Gratis 1 Menu)
- **Lucky:** 4.95s - 5.05s (Diskon Rp 2.000)
- **Zonk:** Selain itu (Dapet Permen)

### 2. 🎲 Gacha Nasib (Luck Based)
Game keberuntungan murni dengan algoritma probabilitas.
- **Jackpot (1%):** Traktiran Sultan
- **Lucky (19%):** Diskon Tipis-Tipis
- **Zonk (80%):** Dapet Hikmahnya Aja (Permen)

### 3. 👻 Cek Khodam (Just For Fun)
Fitur hiburan *unlimited* untuk mengecek "siapa yang mendampingi" pengunjung.
- Database berisi ratusan khodam lucu (e.g., "Kulkas 2 Pintu", "Istri Sah Mingyu", "Beban Keluarga Pro Max").
- Menggunakan algoritma *Random generated* + *Robohash API* untuk avatar unik.

---

## 🔒 Sistem Keamanan (Anti-Curang)

Aplikasi ini dirancang untuk mencegah kecurangan pengunjung bazaar:

1. **One Device, One Chance:** Menggunakan `localStorage` untuk mengunci perangkat setelah bermain game hadiah (Stop The Loop / Gacha). Game "Cek Khodam" tetap terbuka bebas.
2. **Anti-Screenshot Ticket:** Tiket kemenangan menampilkan **Jam Digital Realtime (Detik berjalan)**. Kasir bisa membedakan mana aplikasi asli dan mana *screenshot*.
3. **Claim Validation:** Tombol "KLAIM SEKARANG" hanya boleh ditekan di depan kasir. Setelah diklik, tiket berubah status menjadi "SUDAH DIKLAIM" secara permanen.

---

## 🛠️ Tech Stack

Dibuat dengan cinta dan sedikit begadang menggunakan:

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Theme: *Rusty Spice & Jungle Teal*)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Alerts:** [SweetAlert2](https://sweetalert2.github.io/) (Custom Styling)
- **Effects:** `canvas-confetti` untuk efek menang Jackpot
- **Font:** Bricolage Grotesque & Manrope

---

## 🚀 Cara Menjalankan (Development)

Pastikan sudah install [Node.js](https://nodejs.org/).

1. **Clone / Download Repo ini**
2. **Install Dependencies:**
```bash
   npm install
```
3. **Jalankan Server Lokal:**
```bash
   npm run dev
```
4. Buka `http://localhost:5173` di browser.

---

## 📦 Cara Build (Deployment)

Untuk di-upload ke Vercel/Netlify:
```bash
npm run build
```

Folder `dist` akan siap untuk di-deploy.

---

## ⚙️ Konfigurasi Penting (Untuk Developer)

- **Mengatur Hadiah & Teks:**  
  Edit file `src/data/gameData.js`. Di sini tempat mengatur daftar menu, kata-kata Zonk, dan list Khodam.

- **Mengatur Probabilitas Gacha:**  
  Edit file `src/components/GameGachaCompile.jsx`. Ubah angka pada `if (rand < 0.01)` untuk mengatur tingkat kesulitan.

- **Reset Harian (Panic Button):**  
  Untuk testing, jika ingin main lagi di device yang sama:
  1. Klik Ikon "Hadiah" (kiri atas) atau area kosong tertentu (tergantung implementasi rahasia).
  2. Atau buka *Inspect Element* → *Application* → *Local Storage* → *Clear*.

---

## 🎨 Credits

**Food Station 7A1 Team**

- **Lead / Code:** Yurida Zani (Yuri)
- **Design:** Canva & Tailwind
- **Support:** Kopi, Indomie, & Para Kucing

> *"Jangan lupa makan, coding butuh tenaga."* 🍚

---

## 📄 License

MIT License - Bebas dipakai untuk keperluan edukasi dan non-komersial.
