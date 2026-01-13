export const MENU_LIST = [
  "Choco-Byte Cheese", 
  "Banana Chip-Set",  
  "Seblak Campur",     
  "Es Jelly Shake",    
  "Coffee Milk Ice",   
  "Chips Campur"       
];

export const getRandomMenuPrize = () => {
  return "TEBUS MURAH Rp 2.000 (1 Menu Bebas Pilih)";
};

export const PRIZE_TEXTS = {
  JACKPOT: [
    "CUMA BAYAR 2 RIBU PERAK?!",
    "GACOR KANG! TEBUS MURAH 2K!",
    "DOMPET AMAN, PERUT KENYANG (BAYAR 2K AJA)!",
    "SIAPA YANG NARO HARGA 2 RIBU DISINI?!",
    "HOKI SEUMUR HIDUP KEPAKE (TEBUS 2K)!"
  ],
  SMALL: [ 
    // Ini kategori LUCKY (Diskon 2k)
    "Lumayan, Diskon 2 Ribu Buat Parkir",
    "Rejeki Anak Sholeh (Potongan 2K)",
    "Not Bad Lah Ya, Hemat 2 Ribu",
    "Daripada Gigit Jari, Mending Diskon 2K",
    "Mayan Buat Ganjel Dompet (Save 2K)"
  ],
  ZONK: [ 
    // Ini kategori ZONK (Permen)
    "Coba Lagi Taun Depan (Dapet Permen)",
    "Minimal Mandi Dulu Biar Hoki",
    "Dahlah, Ambil Permen Aja Sana",
    "Skill Issue Banget Ini Mah",
    "Aura Maghrib Lu Terlalu Kuat",
    "Yah, Kasian Banget...",
    "Ups, Kurang Beruntung (Permen Penghibur)",
    "Kata Mama Gak Boleh Menang",
    "Sabar, Ini Ujian (Ambil Permen)",
    "Admin Ketawa Liat Ini"
  ]
};

export const KHODAM_LIST = [
  { k: "Istri Sah Mingyu", prize: "Jodohmu suka Choco-Byte Cheese" },
  { k: "Selingkuhan Jaehyun", prize: "Obati halumu dengan Coffee Milk Ice" },
  { k: "Sandal Jepit Sehun", prize: "Dapet Hikmahnya Aja" },
  { k: "Kucingnya Lisa BLACKPINK", prize: "Meong Meong (Zonk)" },
  { k: "Stylist aespa", prize: "Dapet Pahala Sabar" },
  { k: "Mantan Trainee SM", prize: "Debut dalam Mimpi" },
  { k: "Tiket Konser Ghaib", prize: "Nonton di YouTube Aja" },
  { k: "Photocard Lecek", prize: "Aura butuh asupan Es Jelly Shake" },
  { k: "Lightstick Lowbat", prize: "Charge energi pake Seblak Campur" },
  { k: "Member ke-14 SEVENTEEN", prize: "Rayakan debutmu beli Banana Chip-Set" },
  { k: "Visual Grup Hadroh", prize: "Ganteng doang kalo ga beli Chips Campur" },
  { k: "Hybe Boy KW Super", prize: "NewJeans Nangis Liat Ini" },
  { k: "Jodohnya Wonbin RIIZE", prize: "Bangun Woy Udah Siang" },

  { k: "Beban Keluarga Pro Max", prize: "Tobat, beliin ortu Pentol Daging" },
  { k: "Pejuang Revisi Abadi", prize: "Dinginkan otak pake Es Jelly Shake" },
  { k: "File Skripsi Corrupt", prize: "Turut Berduka Cita" },
  { k: "Dosen Wali Killer", prize: "Senyumin Aja (Pahit)" },
  { k: "Kura-kura Ninja (Kuliah Rapat)", prize: "Sibuk Banget Paduka" },
  { k: "Mahasiswa Kupu-kupu", prize: "Langsung Pulang Aja" },
  { k: "Sobat Paylater", prize: "Bayar hutang, tapi beli Seblak dulu" },
  { k: "IPK Nasakom", prize: "Belajar Yang Bener" },
  { k: "Titip Absen Doang", prize: "Awas Ketauan Dosen" },
  { k: "Badut Bucin", prize: "Obat galau: Choco-Byte Cheese" },
  { k: "Cegil Tantrum", prize: "Pedesin omongan tetangga pake Seblak" },
  { k: "Introvert Kepepet", prize: "Ngemil Chips Campur sambil mojok" },
  { k: "Anak Skena Gagal", prize: "Ngopi Coffee Milk Ice biar valid" },
  { k: "Ketua BEM Pargoy", prize: "Joget Dulu Dong" },

  { k: "Kulkas 2 Pintu", prize: "Dingin amat, hangatkan pake Seblak" },
  { k: "Tutup Botol Marjan", prize: "Manis kayak Choco-Byte Cheese" },
  { k: "Karet Nasi Padang", prize: "Lentur banget, kayak mie Seblak" },
  { k: "Knalpot Mio Mberr", prize: "Berisik! Sumpel pake Pentol Daging" },
  { k: "Pecel Lele", prize: "Salah server woy! Disini adanya Seblak" },
  { k: "Galon Kosong", prize: "Kosong kayak hati, isi pake Es Jelly" },
  { k: "Charger Kodok", prize: "Cas energimu pake Coffee Milk Ice" },
  { k: "Kanebo Kering", prize: "Seret idup lu, minum Es Jelly Shake" },
  { k: "Sapu Lidi", prize: "Kurus amat, makan Banana Chip-Set gih" },
  { k: "Tutup Tupperware Ilang", prize: "Dicoret Dari KK" },
  { k: "Sempak Firaun", prize: "Peninggalan Sejarah" },
  { k: "Kerupuk Alot", prize: "Susah Digigit (Zonk)" },
  { k: "Remote AC Rusak", prize: "Panas Hati Panas Body" },
  { k: "Helm Ciduk", prize: "Safety Riding Bos" },
  { k: "Ban Dalem Bocor", prize: "Tambal Dulu Sana" },
  { k: "Setrika Arang", prize: "Panasnya Awet (Zonk)" },

  { k: "Siluman Capybara", prize: "Santuy banget, sambil ngopi enak nih" },
  { k: "Buaya Darat Sertifikat", prize: "Awas, jangan kasih makan sembarangan" },
  { k: "Ambatron 3000", prize: "Robot butuh oli (Coffee Milk Ice)" },
  { k: "Raja Jawa", prize: "Sungkem dulu, terus beli Choco-Byte" },
  { k: "Khodam Kosong", prize: "Isi khodam = Isi perut dulu bos" },
  { k: "Nyi Roro Kidul KW", prize: "Jangan Pakai Baju Ijo" },
  { k: "Tuyul Pensiun", prize: "Udah Kaya Raya (Amin)" },
  { k: "Babi Ngepet Gabut", prize: "Jaga Lilin Aja Sana" },
  { k: "Kuntilanak Merah Delima", prize: "Ketawanya Merdu (Zonk)" },
  { k: "Pocong Lari Pagi", prize: "Loncat Terus Biar Sehat" },
  { k: "Genderuwo Insecure", prize: "Ganteng Koq (Kata Ibunya)" },

  { k: "Admin Slot Zeus", prize: "Maxwin perutmu dengan Pentol Daging" },
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