export const MENU_LIST = [
  "Choco-Byte Cheese", // Cluster 1
  "Banana Chip-Set",   // Cluster 1
  "Pentol Daging",     // Cluster 2
  "Seblak Campur",     // Cluster 2
  "Es Jelly Shake",    // Cluster 2
  "Coffee Milk Ice",   // Cluster 3
  "Chips Campur"       // Cluster 3
];

// Helper ambil menu random buat Jackpot
export const getRandomMenuPrize = () => {
  const randomItem = MENU_LIST[Math.floor(Math.random() * MENU_LIST.length)];
  return `GRATIS 1 ${randomItem}`;
};

export const PRIZE_TEXTS = {
  JACKPOT: [
    "HOKI SEUMUR HIDUP KEPAKE!",
    "GACOR KANG! GAS KLAIM!",
    "MANTU IDAMAN MENANG!",
    "SIAPA YANG NARO KUDA BESI DISINI?!",
    "GANTENG/CANTIK AJA GAK CUKUP, HARUS HOKI!"
  ],
  SMALL: [ // Hadiah Medium (Diskon 2k)
    "Lumayan Buat Bayar Parkir",
    "Rejeki Anak Sholeh",
    "Not Bad Lah Ya",
    "Daripada Gigit Jari",
    "Mayan Buat Ganjel Dompet"
  ],
  ZONK: [ // Hadiah Zonk (Permen)
    "Coba Lagi Taun Depan",
    "Minimal Mandi Dulu Biar Hoki",
    "Dahlah, Ambil Permen Aja",
    "Skill Issue Banget Ini Mah",
    "Aura Maghrib Lu Terlalu Kuat",
    "Yah, Kasian Banget...",
    "Ups, Kurang Beruntung",
    "Kata Mama Gak Boleh Menang",
    "Sabar, Ini Ujian",
    "Admin Ketawa Liat Ini"
  ]
};

// DAFTAR KHODAM (Rata-rata hadiahnya Permen / Diskon 2k)
export const KHODAM_LIST = [
  // K-Pop & Halu
  { k: "Istri Sah Mingyu", prize: "Diskon 2K (Halu)" },
  { k: "Selingkuhan Jaehyun", prize: "Diskon 2K" },
  { k: "Photocard Lecek", prize: "Permen" },
  { k: "Lightstick Lowbat", prize: "Permen" },
  { k: "Member ke-14 SEVENTEEN", prize: "Permen" },
  { k: "Visual Grup Hadroh", prize: "Diskon 2K" },

  // Mahasiswa & Gen Z
  { k: "Beban Keluarga Pro Max", prize: "Diskon 2K (Kasihan)" },
  { k: "Pejuang Revisi Abadi", prize: "Diskon 2K (Semangat)" },
  { k: "Sobat Paylater", prize: "Permen (Sabar)" },
  { k: "Badut Bucin", prize: "Permen" },
  { k: "Cegil Tantrum", prize: "Diskon 2K" },
  { k: "Admin Slot Zeus", prize: "Permen" },
  { k: "Introvert Kepepet", prize: "Diskon 2K" },
  { k: "Anak Skena Gagal", prize: "Permen" },

  // Benda Mati & Random
  { k: "Kulkas 2 Pintu", prize: "Permen" },
  { k: "Tutup Botol Marjan", prize: "Permen" },
  { k: "Karet Nasi Padang", prize: "Permen" },
  { k: "Knalpot Mio Mberr", prize: "Diskon 2K" },
  { k: "Pecel Lele", prize: "Permen" },
  { k: "Galon Kosong", prize: "Permen" },
  { k: "Charger Kodok", prize: "Diskon 2K" },
  { k: "Kanebo Kering", prize: "Permen" },
  { k: "Sapu Lidi", prize: "Permen" },

  // Makhluk Gak Jelas
  { k: "Siluman Capybara", prize: "Diskon 2K" },
  { k: "Buaya Darat Sertifikat", prize: "Permen" },
  { k: "Ambatron 3000", prize: "Permen" },
  { k: "Raja Jawa", prize: "Permen (Sungkem)" },
  { k: "Khodam Kosong", prize: "Permen" }
];

export const getRandomText = (category) => {
  const list = PRIZE_TEXTS[category];
  return list[Math.floor(Math.random() * list.length)];
};