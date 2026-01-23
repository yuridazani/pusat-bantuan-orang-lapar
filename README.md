# 🎮 Pusat Bantuan Orang Lapar (Game Web App)

> **Official Marketing App for Food Station 7A1**  
> *Entrepreneurship Project - Informatika UMSIDA*

Web App berbasis React ini dibuat sebagai strategi *Gamification Marketing* untuk menarik pengunjung bazaar. Pengunjung bisa memainkan mini-game untuk memenangkan diskon atau makanan gratis.

![Status](https://img.shields.io/badge/Status-Ready_to_Deploy-success?style=for-the-badge)
![Tech](https://img.shields.io/badge/Built_With-React_Vite_Tailwind-blue?style=for-the-badge)

---

## 🕹️ Fitur & Mini Games

Aplikasi ini memiliki 4 mode permainan utama dengan tingkat kesulitan yang berbeda:

### 1. ⏱️ Stop The Loop (Blind Mode)
**Tipe: Skill + Feeling**  
Pemain harus memberhentikan timer tepat di **05.00 detik**.
- **Twist:** Di detik ke-3.00, angka menghilang/menjadi icon mata tertutup. Pemain harus mengandalkan *feeling*!
- **Jackpot:** 5.00s - 5.10s (Tebus Murah 2K)
- **Lucky:** 4.90s - 4.99s ATAU 5.11s - 5.25s (Diskon Rp 2.000)
- **Zonk:** Selain itu (Dapet Permen)

### 2. 🔨 Whack-A-Byte (Pukul Si Botak)
**Tipe: Refleks Cepat**  
Pukul maskot "Si Botak Tengil" yang muncul secara acak di grid 3x3 dalam waktu 15 detik.
- **Jackpot:** Skor > 15 (Refleks Dewa)
- **Lucky:** Skor 10 - 15 (Tangan Kilat)
- **Zonk:** Skor < 10 (Si Botak Menang)

### 3. 🎲 Gacha Nasib (High Risk)
**Tipe: Keberuntungan Murni**  
Untuk kaum mager yang malas mikir. Klik tombol, tunggu nasib.
- **Jackpot (5%):** Tebus Murah 2K
- **Lucky (45%):** Diskon Rp 2.000
- **Zonk (50%):** Dapet Hikmahnya Aja (Permen)

### 4. 👻 Cek Khodam (Just For Fun)
**Tipe: Unlimited Hiburan**  
Fitur seru-seruan tanpa hadiah fisik untuk mengecek "siapa yang mendampingi" pengunjung.
- **Fitur:** Avatar khodam *auto-generated* (unik tiap nama) menggunakan Robohash API.
- **Hasil:** Teks *roasting* marketing (e.g., "Khodam: Kulkas 2 Pintu - Solusi: Beli Seblak biar anget").

---

## 🔒 Sistem Keamanan & Fair Play

Aplikasi ini dirancang untuk mencegah kecurangan dan menjaga profit (Anti-Boncos):

1. **One Device, One Chance:** Game berhadiah (Stop Loop, Whack, Gacha) terkunci otomatis setelah 1x main per hari menggunakan `localStorage`. Cek Khodam tetap bebas.
2. **Anti-Screenshot Ticket:** Tiket kemenangan menampilkan **Jam Digital Realtime (Detik berjalan)**. Kasir bisa membedakan mana aplikasi asli dan mana *screenshot*.
3. **Claim Validation:** Tombol "KLAIM SEKARANG" di tiket hanya boleh ditekan di depan kasir. Setelah diklik, tiket berubah status menjadi "SUDAH DIKLAIM" secara permanen.
4. **Prank Menu:** Tombol "Lihat Menu" tidak menampilkan daftar menu, melainkan peringatan lucu agar pengunjung melihat banner fisik di stand.

---

## 🛠️ Tech Stack

Dibuat dengan cinta dan sedikit begadang menggunakan:

- **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom Theme: *Rusty Spice & Jungle Teal*)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Alerts:** [SweetAlert2](https://sweetalert2.github.io/) (Custom Styling)
- **Effects:** `canvas-confetti` untuk efek menang Jackpot
- **Assets:** Robohash API untuk avatar random

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
  Edit file `src/data/gameData.js`. Di sini tempat mengatur daftar menu Jackpot, kata-kata Zonk, dan list Khodam.

- **Mengatur Tingkat Kesulitan:**
  - **Gacha:** Edit `src/components/GameGachaCompile.jsx` (ubah persentase `rand`).
  - **Stop Loop:** Edit `src/components/GameStopTheLoop.jsx` (ubah range toleransi ms).
  - **Whack-A-Byte:** Edit `src/components/GameWhackAByte.jsx` (ubah kecepatan `moleTimerRef`).

- **Reset Harian (Panic Button):**  
  Tombol reset rahasia (ikon *Refresh*) ada di pojok kanan bawah layar untuk keperluan testing/reset manual.

---

## 🎨 Credits

**Food Station 7A1 Team**

- **Lead / Code:** Yurida Zani (Yuri)
- **Design:** Canva & Tailwind
- **Support:** Kopi, Indomie, & Para Kucing

> *"Ditenagai oleh Kopi, Seblak, & Doa Ibu."* ☕

---

## 📄 License

MIT License - Bebas dipakai untuk keperluan edukasi dan non-komersial.
