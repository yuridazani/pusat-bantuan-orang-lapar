// src/App.jsx

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Play, Lock, Zap, Sparkles, RefreshCw, Utensils } from 'lucide-react';
import Swal from 'sweetalert2';

// Import Komponen Game
import GameStopTheLoop from './components/GameStopTheLoop';
import GameGachaCompile from './components/GameGachaCompile';
import GameCekKhodam from './components/GameCekKodam'; 
import WinningTicket from './components/WinningTicket';

// Import Meme (Pastikan file ada di src/assets)
// Jika tidak ada gambar, hapus 'imageUrl' di fungsi handlePrankMenu
import memePic from './assets/meme-judge.jfif'; 

const App = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [hasPlayed, setHasPlayed] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const lastPlayed = localStorage.getItem('lastPlayedDate');
    const today = new Date().toDateString();
    
    if (lastPlayed === today) {
      setHasPlayed(true);
      const savedTicket = localStorage.getItem('winningTicket');
      if (savedTicket) setTicketData(JSON.parse(savedTicket));
    }
  }, []);

  const saveWin = (prizeTitle, prizeDesc, gameName) => {
    const today = new Date().toDateString();
    const data = { 
      title: prizeTitle, 
      desc: prizeDesc, 
      game: gameName, 
      claimed: false, 
      timestamp: new Date().toISOString() 
    };
    
    localStorage.setItem('lastPlayedDate', today);
    localStorage.setItem('winningTicket', JSON.stringify(data));
    
    setTicketData(data);
    setHasPlayed(true);
    setActiveTab('ticket');
    
    if (prizeTitle.includes("JACKPOT") || prizeTitle.includes("GACOR")) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#aa5731', '#d7c171', '#478779'] });
      Swal.fire({
        title: 'HOKI PARAH!',
        text: 'Buruan klaim ke kasir sebelum berubah pikiran!',
        icon: 'success',
        confirmButtonText: 'Gasss!',
        confirmButtonColor: '#478779',
        background: '#f3f6f0',
        color: '#2d2d2d'
      });
    } else if (prizeTitle.includes("ZONK") || prizeTitle.includes("GAGAL") || prizeTitle.includes("AMBYAR") || prizeTitle.includes("Permen")) {
       Swal.fire({
            title: 'Yah, Zonk...',
            text: 'Ambil permen aja di kasir ya wkwk',
            icon: 'error',
            confirmButtonText: 'Nasib...',
            confirmButtonColor: '#d33',
            background: '#f3f6f0'
        });
    } else {
        Swal.fire({
            title: 'Lumayan...',
            text: 'Dapet Diskon 2K!',
            icon: 'info',
            confirmButtonText: 'Ambil',
            confirmButtonColor: '#aa5731',
            background: '#f3f6f0'
        });
    }
  };

  const handleReset = () => {
    Swal.fire({
        title: 'Reset Login?',
        text: "Fitur khusus panitia buat reset harian.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reset',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            window.location.reload();
        }
    });
  };

  // --- LOGIKA PRANK MENU ---
  const handlePrankMenu = () => {
    Swal.fire({
        title: 'MATANYA DIPAKE DONG KAK 😭',
        // Ganti URL ini kalau mau pakai link internet, atau pakai variable memePic kalau file ada
        imageUrl: memePic || 'https://media1.tenor.com/m/eU91-5tY5iMAAAAC/cat-judging.gif', 
        imageWidth: 250,
        text: 'Itu banner menu segede gaban dipajang di depan mata, masa masih nyari di HP? Capek deh...',
        confirmButtonText: 'Iya Maap',
        confirmButtonColor: '#aa5731', 
        background: '#fff',
        backdrop: `rgba(0,0,0,0.5)`
    });
  };

  return (
    <div className="min-h-screen bg-porcelain text-dark-charcoal pb-24 selection:bg-golden-sand selection:text-rusty-spice font-body">
      
      {/* HEADER */}
      <header className="bg-jungle-teal text-white pt-8 pb-12 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-golden-sand rounded-full opacity-20 blur-2xl animate-float"></div>
        <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-rusty-spice rounded-full opacity-20 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-mint-cream mb-2 border border-white/30 tracking-wider">
            BAZAAR KWU
          </div>
          <h1 className="text-3xl font-display font-black tracking-tight drop-shadow-md mt-1 leading-tight">
            Pusat Bantuan <br/> <span className="text-golden-sand italic text-4xl">Orang Lapar</span>
          </h1>
          <p className="text-mint-cream/90 text-sm mt-2 font-medium">
            Perut kenyang, dompet aman (semoga).
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-5 max-w-md mx-auto -mt-8 relative z-20">
        
        {/* TICKET VIEW */}
        {activeTab === 'ticket' && ticketData && (
          <WinningTicket ticket={ticketData} onBack={() => setActiveTab('menu')} />
        )}

        {/* MENU UTAMA (PILIH GAME) */}
        {activeTab === 'menu' && (
          <div className="animate-fade-in-up">
            
            {/* CARD GAME STATUS */}
            {!hasPlayed ? (
              <div className="bg-white rounded-[2rem] p-6 shadow-lg border-2 border-dashed border-rusty-spice/30 mb-6 transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-rusty-spice text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                  1X KESEMPATAN
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-rusty-spice text-white p-3 rounded-full shadow-md animate-bounce-slow">
                    <Gift size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-rusty-spice">Iseng Berhadiah</h3>
                    <p className="text-xs text-gray-400 font-bold">Menangkan Diskon / Jackpot Menu!</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mt-4">
                  <GameButton 
                    color="bg-jungle-teal" 
                    icon={<Zap size={20} />} 
                    title="Stop The Loop" 
                    desc="Adu reflek (SUSAH BANGET)" 
                    onClick={() => setActiveTab('game1')} 
                  />
                  <GameButton 
                    color="bg-rusty-spice" 
                    icon={<Play size={20} />} 
                    title="Gacha Nasib" 
                    desc="Hoki-hokian (Banyak Zonk)" 
                    onClick={() => setActiveTab('game2')} 
                  />
                  <GameButton 
                    color="bg-golden-sand text-dark-charcoal" 
                    icon={<Sparkles size={20} />} 
                    title="Cek Khodam" 
                    desc="Siapa yang nemenin kamu?" 
                    onClick={() => setActiveTab('game3')} 
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-[2rem] mb-6 text-center border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                  <Lock size={30} />
                </div>
                <p className="text-sm font-bold text-gray-500">Jatah mainmu udah abis.</p>
                <button onClick={() => setActiveTab('ticket')} className="bg-jungle-teal text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-fern transition-all w-full mt-3">
                  Liat Tiket Hadiahku
                </button>
              </div>
            )}

            {/* BUTTON LIHAT MENU (PRANK) */}
            <button 
              onClick={handlePrankMenu}
              className="w-full bg-white border border-gray-200 p-4 rounded-2xl flex justify-between items-center shadow-sm hover:shadow-md transition-all group mt-2"
            >
              <div className="flex items-center gap-3">
                <div className="bg-mint-cream p-2 rounded-lg text-jungle-teal group-hover:bg-jungle-teal group-hover:text-white transition-colors">
                  <Utensils size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-lg text-dark-charcoal">Rekomendasi Menu Chef</h4>
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-full text-gray-400 group-hover:text-rusty-spice">
                <Utensils size={20} />
              </div>
            </button>

          </div>
        )}

        {/* GAME SCREENS CONTAINER */}
        <div className="min-h-[400px]">
          {activeTab === 'game1' && <GameStopTheLoop onWin={saveWin} onBack={() => setActiveTab('menu')} />}
          {activeTab === 'game2' && <GameGachaCompile onWin={saveWin} onBack={() => setActiveTab('menu')} />}
          {activeTab === 'game3' && <GameCekKhodam onWin={saveWin} onBack={() => setActiveTab('menu')} />}
        </div>

        {/* TOMBOL RESET (DEV ONLY) */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleReset}
            className="bg-gray-800/10 text-gray-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all backdrop-blur-md border border-gray-300"
          >
            <RefreshCw size={16} />
          </button>
        </div>

      </main>
    </div>
  );
};

const GameButton = ({ color, icon, title, desc, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} w-full p-4 rounded-2xl text-left flex items-center gap-4 transition-transform active:scale-95 shadow-md border-b-4 border-black/10`}
  >
    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm shadow-inner">
      {icon}
    </div>
    <div>
      <h4 className="font-display font-bold text-lg leading-none">{title}</h4>
      <p className="text-xs font-body opacity-90 mt-1 font-medium">{desc}</p>
    </div>
  </button>
);

export default App;