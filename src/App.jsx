import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Play, Lock, Zap, Sparkles, RefreshCw, Utensils, Hammer, AlertTriangle, Gamepad2, Trophy } from 'lucide-react'; 
import { CustomSwal } from './utils/customAlert';

import GameStopTheLoop from './components/GameStopTheLoop';
import GameGachaCompile from './components/GameGachaCompile';
import GameCekKhodam from './components/GameCekKodam'; 
import GameWhackAByte from './components/GameWhackAByte';
import WinningTicket from './components/WinningTicket';
import Footer from './components/Footer';

import memePic from './assets/meme-judge.jfif';
import dkPic from './assets/DK.jfif'; 

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

  useEffect(() => {
    const hasSeenWarning = sessionStorage.getItem('hasSeenWarning');

    if (!hasSeenWarning) {
      CustomSwal.fire({
html: `
  <div class="flex flex-col items-center -mt-2">
    <img src="${dkPic}" class="w-[160px] mx-auto block mb-1" />
    
    <h2 class="font-display font-black text-2xl text-rusty-spice tracking-tight uppercase leading-none mb-2">
      EITS, BACA DULU BESTIE!
    </h2>

    <div class="text-center mb-2 px-2">
      <div class="bg-gradient-to-r from-mint-cream/80 to-white/80 backdrop-blur-sm py-2 px-3 rounded-lg border-2 border-dashed border-jungle-teal/30 inline-block">
        <p class="text-xs font-medium text-dark-charcoal">
          <span class="text-rusty-spice font-bold">📜 PERHATIAN: </span>
          Sebelum jarimu beraksi, pahami aturan main di sini biar gak drama!
        </p>
      </div>
    </div>
        <div class="text-left font-body text-dark-charcoal space-y-2 mt-1">
            <div class="bg-white p-2 rounded-xl border-2 border-dashed border-gray-200 hover:border-rusty-spice transition-colors group relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-rusty-spice"></div>
              <div class="flex gap-2 items-start pl-2">
                <div class="bg-orange-50 p-1 rounded-lg flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rusty-spice">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-display font-bold text-base text-dark-charcoal leading-tight mb-0.5 group-hover:text-rusty-spice transition-colors">ONE SHOT ONLY</h4>
                  <p class="text-xs text-gray-500 leading-snug font-medium">Kesempatan cuma <b>1 KALI</b> per hari. Gak ada tombol Undo.</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl border-2 border-dashed border-gray-200 hover:border-jungle-teal transition-colors group relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-jungle-teal"></div>
              <div class="flex gap-2 items-start pl-2">
                <div class="bg-teal-50 p-1 rounded-lg flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-jungle-teal">
                    <line x1="6" x2="10" y1="12" y2="12"/>
                    <line x1="8" x2="8" y1="10" y2="14"/>
                    <line x1="15" x2="15.01" y1="13" y2="13"/>
                    <line x1="18" x2="18.01" y1="11" y2="11"/>
                    <rect width="20" height="16" x="2" y="6" rx="2"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-display font-bold text-base text-dark-charcoal leading-tight mb-0.5 group-hover:text-jungle-teal transition-colors">PICK YOUR FIGHTER</h4>
                  <p class="text-xs text-gray-500 leading-snug font-medium">Pilih <b>1 Game</b> yang menurutmu paling gampang.</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-2 rounded-xl border-2 border-dashed border-gray-200 hover:border-golden-sand transition-colors group relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-golden-sand"></div>
              <div class="flex gap-2 items-start pl-2">
                <div class="bg-yellow-50 p-1 rounded-lg flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-golden-sand">
                    <polyline points="20 12 20 22 4 22 4 12"/>
                    <rect x="2" y="7" width="20" height="5"/>
                    <line x1="12" y1="22" x2="12" y2="7"/>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-display font-bold text-base text-dark-charcoal leading-tight mb-0.5 group-hover:text-golden-sand transition-colors">TERIMA NASIB</h4>
                  <p class="text-xs text-gray-500 leading-snug font-medium">Mau <b>Jackpot</b> atau <b>Zonk</b>, dilarang protes!</p>
                </div>
              </div>
            </div>
            
            <div class="text-center pt-1">
              <p class="text-xs text-gray-600 font-medium italic">"Cuma bisa bilang good luck, bestie!"</p>
            </div>
          </div>
        `,
        confirmButtonText: 'SIAP MENTAL, GASKEUN!',
        buttonsStyling: false,
        customClass: {
          popup: 'rounded-[2.5rem] border-4 border-dark-charcoal shadow-[8px_8px_0px_#2d2d2d] p-0 font-body overflow-hidden',
          confirmButton: 'w-[90%] mx-auto mb-4 bg-dark-charcoal text-white py-3 rounded-xl font-display font-black text-lg tracking-wide shadow-lg hover:bg-black hover:scale-[1.01] transition-all duration-200',
          htmlContainer: '!m-0 !p-6 !pt-2' 
        },
        background: '#faf9f6', 
        backdrop: `rgba(45, 45, 45, 0.95)`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        width: '450px' 
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.setItem('hasSeenWarning', 'true');
        }
      });
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
    
    if (
      prizeTitle.includes("HOKI") ||
      prizeTitle.includes("GACOR") ||
      prizeTitle.includes("JACKPOT") ||
      prizeTitle.includes("DEWA")
    ) {
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 },
        zIndex: 9999,
      });
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
      
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-sand rounded-full animate-ping"></div>
        <div className="absolute top-40 right-12 w-1.5 h-1.5 bg-rusty-spice rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-jungle-teal rounded-full animate-ping delay-700"></div>
      </div>

      <div className="fixed top-[-50px] left-[-50px] w-48 h-48 bg-mint-cream rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float pointer-events-none z-0"></div>
      <div className="fixed bottom-[-50px] right-[-50px] w-64 h-64 bg-golden-sand/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float pointer-events-none z-0" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rusty-spice/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>

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

      <main className="p-5 max-w-md mx-auto -mt-8 relative z-20">
        
        {activeTab === 'ticket' && ticketData && (
          <WinningTicket ticket={ticketData} onBack={() => setActiveTab('menu')} />
        )}

        {activeTab === 'menu' && (
          <div className="animate-fade-in-up">
            
            <div className="bg-white rounded-[2rem] p-5 shadow-lg border-2 border-dashed border-rusty-spice/30 mb-4 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-rusty-spice text-white p-2.5 rounded-full shadow-md animate-bounce-slow">
                    <Gift size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-rusty-spice">Pilih Mainan</h3>
                    <p className="text-xs text-gray-400 font-bold">Cari diskon atau seru-seruan?</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2.5 mt-3">
                  <GameButton 
                    color="bg-gradient-to-r from-golden-sand/90 to-yellow-200" 
                    textColor="text-dark-charcoal"
                    icon={<Sparkles size={18} />} 
                    title="Cek Khodam" 
                    desc="Just for fun (Bisa berkali-kali)" 
                    onClick={() => setActiveTab('game3')} 
                  />

                  {!hasPlayed ? (
                    <>
                      <div className="my-2 border-t border-gray-100 relative">
                        <span className="absolute top-[-9px] left-1/2 -translate-x-1/2 bg-white px-2 text-[9px] text-gray-400 font-bold">GAME HADIAH (MAX 1X)</span>
                      </div>
                      
                      {/* GAME 1: BLIND STOP LOOP */}
                      <GameButton 
                        color="bg-gradient-to-r from-jungle-teal to-teal-500" 
                        textColor="text-white"
                        icon={<Zap size={18} />} 
                        title="Stop The Loop" 
                        desc="Blind Mode (Feeling doang!)" 
                        onClick={() => setActiveTab('game1')} 
                      />
                      
                      {/* GAME 2: GACHA */}
                      <GameButton 
                        color="bg-gradient-to-r from-rusty-spice to-orange-500" 
                        textColor="text-white"
                        icon={<Play size={18} />} 
                        title="Gacha Nasib" 
                        desc="Hoki-hokian (High Risk)" 
                        onClick={() => setActiveTab('game2')} 
                      />

                      {/* GAME 4: WHACK A BYTE */}
                      <GameButton 
                        color="bg-gradient-to-r from-purple-600 to-violet-500" 
                        textColor="text-white"
                        icon={<Hammer size={18} />} 
                        title="Pukul Si Botak" 
                        desc="Adu Kecepatan Tangan!" 
                        onClick={() => setActiveTab('game4')} 
                      />
                    </>
                  ) : (
                    <div className="bg-gray-50 p-3.5 rounded-xl text-center border border-gray-200 mt-1">
                        <Lock size={22} className="mx-auto text-gray-400 mb-2"/>
                        <p className="text-xs text-gray-500 font-bold">Game Hadiah Terkunci</p>
                        <p className="text-[10px] text-gray-400">Kamu udah ambil jatah main hari ini.</p>
                        <button 
                          onClick={() => setActiveTab('ticket')} 
                          className="mt-1.5 text-jungle-teal text-xs font-bold underline hover:text-jungle-teal/80 transition-colors"
                        >
                          Lihat Tiketku
                        </button>
                    </div>
                  )}
                </div>
            </div>

            <button 
              onClick={handlePrankMenu}
              className="w-full bg-white border border-gray-200 p-3.5 rounded-xl flex justify-between items-center shadow-sm hover:shadow-md hover:border-jungle-teal/30 transition-all group mb-4 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="bg-mint-cream p-2 rounded-lg text-jungle-teal group-hover:bg-jungle-teal group-hover:text-white transition-colors">
                  <Utensils size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-base text-dark-charcoal">Lihat Daftar Menu</h4>
                  <p className="text-xs text-gray-400">Ada makanan apa aja?</p>
                </div>
              </div>
              <div className="bg-gray-50 p-2 rounded-full text-gray-400 group-hover:text-rusty-spice">
                <Utensils size={16} />
              </div>
            </button>

            <Footer />

          </div>
        )}

        {/* GAME SCREENS CONTAINER */}
        {activeTab !== 'menu' && (
          <div>
            {activeTab === 'game1' && <GameStopTheLoop onWin={saveWin} onBack={() => setActiveTab('menu')} />}
            {activeTab === 'game2' && <GameGachaCompile onWin={saveWin} onBack={() => setActiveTab('menu')} />}
            {activeTab === 'game3' && <GameCekKhodam onBack={() => setActiveTab('menu')} />}
            {activeTab === 'game4' && <GameWhackAByte onWin={saveWin} onBack={() => setActiveTab('menu')} />}
          </div>
        )}

      </main>
    </div>
  );
};

const GameButton = ({ color, textColor, icon, title, desc, onClick }) => (
  <button 
    onClick={onClick}
    className={`${color} ${textColor} w-full p-3 rounded-lg text-left flex items-center gap-3 transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg border-b-2 border-black/10`}
  >
    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-display font-bold text-base leading-none">{title}</h4>
      <p className="text-xs opacity-90 mt-0.5 font-medium font-body">{desc}</p>
    </div>
    <div className="opacity-60">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  </button>
);

export default App;