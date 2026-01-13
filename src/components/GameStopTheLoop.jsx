import React, { useState, useRef } from 'react';
import { getRandomText, getRandomMenuPrize } from '../data/gameData';
import { EyeOff } from 'lucide-react'; // Icon Mata Tertutup

const GameStopTheLoop = ({ onWin, onBack }) => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    setIsRunning(true);
    setTimer(0);
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    
    const result = timer; 
    
    // --- LOGIKA BLIND MODE ---
    // Target: 5.00 detik (500)
    
    if (result >= 500 && result <= 510) {
      onWin(getRandomText('JACKPOT'), getRandomMenuPrize(), "Stop The Loop (Blind)");
    } 
    else if ((result >= 490 && result < 500) || (result > 510 && result <= 525)) {
      onWin(getRandomText('SMALL'), "Diskon Rp 2.000", "Stop The Loop (Blind)");
    } 
    else {
      onWin(getRandomText('ZONK'), "Dapet Permen (Feelingmu Kurang Kuat)", "Stop The Loop (Blind)");
    }
  };

  return (
    <div className="text-center py-12 px-6 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-2xl mb-2 text-dark-charcoal">Stop di 05.00</h3>
      
      {/* Penjelasan Blind Mode */}
      <div className="bg-red-50 text-red-500 text-[10px] font-bold px-3 py-1 rounded-full mb-6 border border-red-100 animate-pulse">
        ⚠️ BLIND MODE: Angka hilang di detik ke-3!
      </div>
      
      <div className="text-7xl font-mono font-bold text-jungle-teal mb-12 tracking-wider min-h-[80px] flex items-center justify-center">
        {/* LOGIKA TAMPILAN BLIND */}
        {isRunning && timer > 300 ? (
            <div className="text-rusty-spice animate-pulse flex flex-col items-center">
                <EyeOff size={60} />
                <span className="text-sm mt-2 font-sans font-normal text-gray-400">Feeling...</span>
            </div>
        ) : (
            (timer / 100).toFixed(2)
        )}
      </div>
      
      {!isRunning && timer === 0 && (
        <button onClick={start} className="bg-fern text-white px-10 py-4 rounded-full font-display font-black text-xl shadow-lg hover:bg-[#36682e] transition-transform active:scale-95 w-full">
            MULAI
        </button>
      )}
      
      {isRunning && (
        <button onClick={stop} className="bg-rusty-spice text-white px-10 py-4 rounded-full font-display font-black text-xl shadow-lg hover:bg-[#944a29] transition-transform active:scale-95 w-full">
            STOP!
        </button>
      )}

      {/* Tampilkan hasil asli kecil di bawah kalau sudah stop (biar ga dikira nipu) */}
      {!isRunning && timer > 0 && (
         <p className="mt-4 text-gray-400 font-mono">Waktu kamu: <span className="text-dark-charcoal font-bold">{(timer/100).toFixed(2)}</span> detik</p>
      )}

      <button onClick={onBack} className="mt-8 text-sm text-gray-400 font-bold underline hover:text-rusty-spice">
        Gak jadi main
      </button>
    </div>
  );
};

export default GameStopTheLoop;