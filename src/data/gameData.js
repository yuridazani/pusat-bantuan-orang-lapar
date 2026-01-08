export const MENU_LIST = [
  "Choco-Byte Cheese", 
  "Banana Chip-Set",  
  "Seblak Campur",     
  "Es Jelly Shake",    
  "Coffee Milk Ice",   
  "Chips Campur"       
];

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
  SMALL: [ 
    "Lumayan Buat Bayar Parkir",
    "Rejeki Anak Sholeh",
    "Not Bad Lah Ya",
    "Daripada Gigit Jari",
    "Mayan Buat Ganjel Dompet"
  ],
  ZONK: [ 
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

export const KHODAM_LIST = [
  { k: "Istri Sah Mingyu", prize: "Diskon Jalur Halu (0%)" },
  { k: "Selingkuhan Jaehyun", prize: "Dapet Restu Mama (Doang)" },
  { k: "Sandal Jepit Sehun", prize: "Dapet Hikmahnya Aja" },
  { k: "Kucingnya Lisa BLACKPINK", prize: "Meong Meong (Zonk)" },
  { k: "Stylist aespa", prize: "Dapet Pahala Sabar" },
  { k: "Mantan Trainee SM", prize: "Debut dalam Mimpi" },
  { k: "Tiket Konser Ghaib", prize: "Nonton di YouTube Aja" },
  { k: "Photocard Lecek", prize: "Disetrika Dulu Gih" },
  { k: "Lightstick Lowbat", prize: "Beli Baterai Sendiri" },
  { k: "Member ke-14 SEVENTEEN", prize: "Halu Tingkat Dewa" },
  { k: "Visual Grup Hadroh", prize: "Adem Banget Liatnya" },
  { k: "Hybe Boy KW Super", prize: "NewJeans Nangis Liat Ini" },
  { k: "Jodohnya Wonbin RIIZE", prize: "Bangun Woy Udah Siang" },

  { k: "Beban Keluarga Pro Max", prize: "Tobat Bestie" },
  { k: "Pejuang Revisi Abadi", prize: "Semangat Revisinya!" },
  { k: "File Skripsi Corrupt", prize: "Turut Berduka Cita" },
  { k: "Dosen Wali Killer", prize: "Senyumin Aja (Pahit)" },
  { k: "Kura-kura Ninja (Kuliah Rapat)", prize: "Sibuk Banget Paduka" },
  { k: "Mahasiswa Kupu-kupu", prize: "Langsung Pulang Aja" },
  { k: "Sobat Paylater", prize: "Lunasin Dulu Utangnya" },
  { k: "IPK Nasakom (Nasib Satu Koma)", prize: "Belajar Yang Bener" },
  { k: "Titip Absen Doang", prize: "Awas Ketauan Dosen" },
  { k: "Cegil Tantrum", prize: "Minum Obat Dulu" },
  { k: "Introvert Kepepet", prize: "Diem Aja Udah Lucu" },
  { k: "Anak Skena Gagal", prize: "Outfit Doang Keren" },
  { k: "Ketua BEM Pargoy", prize: "Joget Dulu Dong" },

  { k: "Kulkas 2 Pintu", prize: "Dingin Banget Sikapnya" },
  { k: "Tutup Botol Marjan", prize: "Manis Tapi Cuma Setahun" },
  { k: "Karet Nasi Padang", prize: "Kuat Menahan Beban" },
  { k: "Knalpot Mio Mberr", prize: "Berisik Banget Lu" },
  { k: "Pecel Lele", prize: "Enak Tapi Berminyak" },
  { k: "Galon Kosong", prize: "Isi Ulang Dulu Sana" },
  { k: "Charger Kodok", prize: "Jepit Terus Sampe Penuh" },
  { k: "Kanebo Kering", prize: "Kaku Banget Hidup Lu" },
  { k: "Sapu Lidi", prize: "Kurulus Kering (Zonk)" },
  { k: "Tutup Tupperware Ilang", prize: "Dicoret Dari KK" },
  { k: "Sempak Firaun", prize: "Peninggalan Sejarah" },
  { k: "Kerupuk Alot", prize: "Susah Digigit (Zonk)" },
  { k: "Remote AC Rusak", prize: "Panas Hati Panas Body" },
  { k: "Helm Ciduk", prize: "Safety Riding Bos" },
  { k: "Ban Dalem Bocor", prize: "Tambal Dulu Sana" },
  { k: "Setrika Arang", prize: "Panasnya Awet (Zonk)" },

  { k: "Siluman Capybara", prize: "Santuy Terus (Zonk)" },
  { k: "Buaya Darat Sertifikat", prize: "Awas Fakboy/Fakgirl" },
  { k: "Ambatron 3000", prize: "Ngawi Menguasai" },
  { k: "Raja Jawa", prize: "Sungkem Dulu Sepuluh Kali" },
  { k: "Khodam Kosong", prize: "Isi Pake Nasi Gih" },
  { k: "Nyi Roro Kidul KW", prize: "Jangan Pakai Baju Ijo" },
  { k: "Tuyul Pensiun", prize: "Udah Kaya Raya (Amin)" },
  { k: "Babi Ngepet Gabut", prize: "Jaga Lilin Aja Sana" },
  { k: "Kuntilanak Merah Delima", prize: "Ketawanya Merdu (Zonk)" },
  { k: "Pocong Lari Pagi", prize: "Loncat Terus Biar Sehat" },
  { k: "Genderuwo Insecure", prize: "Ganteng Koq (Kata Ibunya)" },

  { k: "Admin Slot Zeus", prize: "Maxwin (Tapi Bohong)" },
  { k: "Korban Ghosting", prize: "Cari Yang Baru Aja" },
  { k: "Kang Parkir Ghaib", prize: "Tiba-tiba Nongol 2000" },
  { k: "Duta Sampo Pantene", prize: "Keanu Marah Liat Ini" },
  { k: "Mba-mba SCBD", prize: "OOTD Mahal (Tapi Nyicil)" },
  { k: "Jamet Kuproy", prize: "Ganteng Ganteng Serigala" },
  { k: "Starboy KW", prize: "Pake Motor Beat Mberr" },
  { k: "Pick Me Girl", prize: "Aku Gak Kayak Cewe Lain" }
];

export const getRandomText = (category) => {
  const list = PRIZE_TEXTS[category];
  return list[Math.floor(Math.random() * list.length)];
};