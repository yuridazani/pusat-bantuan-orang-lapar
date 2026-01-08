// src/App.jsx

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Play, Lock, Zap, Sparkles, RefreshCw, Utensils } from 'lucide-react';
import { CustomSwal } from './utils/customAlert';

// Import Komponen Game
import GameStopTheLoop from './components/GameStopTheLoop';
import GameGachaCompile from './components/GameGachaCompile';
import GameCekKhodam from './components/GameCekKodam'; 
import WinningTicket from './components/WinningTicket';
import Footer from './components/Footer';

// Pastikan file ini ada, kalau ga ada hapus baris ini dan ganti imageUrl di bawah
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
    
    if (prizeTitle.includes("HOKI") || prizeTitle.includes("GACOR") || prizeTitle.includes("JACKPOT")) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#aa5731', '#d7c171', '#478779'] });
    }
  };

  const handleReset = () => {
    CustomSwal.fire({
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

  const handlePrankMenu = () => {
    CustomSwal.fire({
        title: 'MATANYA DIPAKE KAK 😭',
        imageUrl: memePic || 'https://media1.tenor.com/m/eU91-5tY5iMAAAAC/cat-judging.gif', 
        imageWidth: 250,
        text: 'Itu banner menu segede gaban dipajang di depan mata, masa masih nyari di HP? Capek deh...',
        confirmButtonText: 'Iya Maap'
    });
  };

  return (
    <div className="min-h-screen bg-porcelain text-dark-charcoal pb-6 selection:bg-golden-sand selection:text-rusty-spice font-body relative overflow-hidden">
      
      {/* --- DEKORASI BACKGROUND (BARU) --- */}
      {/* Blob Kiri Atas */}
      <div className="fixed top-[-50px] left-[-50px] w-48 h-48 bg-mint-cream rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float pointer-events-none z-0"></div>
      {/* Blob Kanan Bawah */}
      <div className="fixed bottom-[-50px] right-[-50px] w-64 h-64 bg-golden-sand/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float pointer-events-none z-0" style={{animationDelay: '2s'}}></div>
      {/* Blob Tengah */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rusty-spice/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      {/* HEADER */}
      <header className="bg-jungle-teal text-white pt-8 pb-12 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden z-10">
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
            <div className="bg-white rounded-[2rem] p-6 shadow-lg border-2 border-dashed border-rusty-spice/30 mb-6 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-rusty-spice text-white p-3 rounded-full shadow-md animate-bounce-slow">
                    <Gift size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-rusty-spice">Pilih Mainan</h3>
                    <p className="text-xs text-gray-400 font-bold">Cari diskon atau seru-seruan?</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mt-4">
                  <GameButton 
                    color="bg-golden-sand text-dark-charcoal" 
                    icon={<Sparkles size={20} />} 
                    title="Cek Khodam" 
                    desc="Just for fun (Bisa berkali-kali)" 
                    onClick={() => setActiveTab('game3')} 
                  />

                  {!hasPlayed ? (
                    <>
                      <div className="my-2 border-t border-gray-100 relative">
                        <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-gray-400 font-bold">GAME HADIAH (MAX 1X)</span>
                      </div>
                      <GameButton 
                        color="bg-jungle-teal" 
                        icon={<Zap size={20} />} 
                        title="Stop The Loop" 
                        desc="Adu reflek (Hard Mode)" 
                        onClick={() => setActiveTab('game1')} 
                      />
                      <GameButton 
                        color="bg-rusty-spice" 
                        icon={<Play size={20} />} 
                        title="Gacha Nasib" 
                        desc="Hoki-hokian (High Risk)" 
                        onClick={() => setActiveTab('game2')} 
                      />
                    </>
                  ) : (
                    <div className="bg-gray-100 p-4 rounded-xl text-center mt-2 border border-gray-200">
                        <Lock size={24} className="mx-auto text-gray-400 mb-2"/>
                        <p className="text-xs text-gray-500 font-bold">Game Hadiah Terkunci</p>
                        <p className="text-[10px] text-gray-400">Kamu udah ambil jatah main hari ini.</p>
                        <button onClick={() => setActiveTab('ticket')} className="mt-2 text-jungle-teal text-xs font-bold underline">
                            Lihat Tiketku
                        </button>
                    </div>
                  )}
                </div>
            </div>

            {/* BUTTON LIHAT MENU (PRANK) */}
            <button 
              onClick={handlePrankMenu}
              className="w-full bg-white border border-gray-200 p-4 rounded-2xl flex justify-between items-center shadow-sm hover:shadow-md transition-all group mb-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-mint-cream p-2 rounded-lg text-jungle-teal group-hover:bg-jungle-teal group-hover:text-white transition-colors">
                  <Utensils size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-lg text-dark-charcoal">Lihat Daftar Menu</h4>
                  <p className="text-xs text-gray-400">Ada makanan apa aja?</p>
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-full text-gray-400 group-hover:text-rusty-spice">
                <Utensils size={20} />
              </div>
            </button>

            {/* FOOTER LANGSUNG DI BAWAH MENU */}
            <Footer />

          </div>
        )}

        {/* GAME SCREENS CONTAINER */}
        {activeTab !== 'menu' && (
          <div>
            {activeTab === 'game1' && <GameStopTheLoop onWin={saveWin} onBack={() => setActiveTab('menu')} />}
            {activeTab === 'game2' && <GameGachaCompile onWin={saveWin} onBack={() => setActiveTab('menu')} />}
            {activeTab === 'game3' && <GameCekKhodam onBack={() => setActiveTab('menu')} />}
          </div>
        )}

      </main>
    </div>
  );
};

const GameButton = ({ color, icon, title, desc, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} w-full p-4 rounded-2xl text-left flex items-center gap-4 transition-transform active:scale-95 shadow-md border-b-4 border-black/10 text-white`}
  >
    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm shadow-inner">
      {icon}
    </div>
    <div>
      <h4 className="font-display font-bold text-lg leading-none">{title}</h4>
      <p className="text-xs opacity-90 mt-1 font-medium font-body">{desc}</p>
    </div>
  </button>
);

export default App;