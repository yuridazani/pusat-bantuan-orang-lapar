import React, { useState, useEffect, useRef } from 'react';
import { Hammer } from 'lucide-react'; 
import { getRandomText, getRandomMenuPrize } from '../data/gameData';

const GameWhackAByte = ({ onWin, onBack }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [activeHole, setActiveHole] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHit, setIsHit] = useState(false);

  const timerRef = useRef(null);
  const moleTimerRef = useRef(null);

  // URL Gambar Si Botak Ngeselin
  const targetImage = "https://robohash.org/si-botak-tengil.png?set=set2&size=150x150";

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(15);
    setIsHit(false);
    moveMole();

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const moveMole = () => {
    // Kecepatan muncul: 550ms
    moleTimerRef.current = setInterval(() => {
      setIsHit(false);
      const newHole = Math.floor(Math.random() * 9);
      setActiveHole(newHole);
    }, 550); 
  };

  const endGame = () => {
    clearInterval(timerRef.current);
    clearInterval(moleTimerRef.current);
    setIsPlaying(false);
    setActiveHole(null);

    // Delay dikit biar state score update
    setTimeout(() => {
        determinePrize(score);
    }, 100);
  };

  // --- LOGIKA HADIAH (UPDATED: TEXT RANDOM) ---
  const determinePrize = (finalScore) => {
    // JACKPOT (Score > 15) -> Susah banget
    if (finalScore > 15) {
      onWin(getRandomText('JACKPOT'), getRandomMenuPrize(), "Whack-A-Byte");
    } 
    // LUCKY / DISKON (Score 10 - 15) -> Lumayan mudah
    else if (finalScore >= 10) {
      onWin(getRandomText('SMALL'), "Diskon Rp 2.000", "Whack-A-Byte");
    } 
    // ZONK (Score < 10)
    else {
      onWin(getRandomText('ZONK'), "Dapet Permen (Si Botak Menang)", "Whack-A-Byte");
    }
  };

  const handleHit = (index) => {
    if (index === activeHole && !isHit) {
      setScore((prev) => prev + 1);
      setIsHit(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearInterval(moleTimerRef.current);
    };
  }, []);

  return (
    <div className="text-center py-8 px-4 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
      
      <div className="flex justify-between items-center w-full px-4 mb-4">
        <div className="text-left">
            <h3 className="font-display font-bold text-xl text-dark-charcoal">Pukul Si Botak</h3>
            <p className="text-xs text-gray-400">Skor: <span className="text-rusty-spice font-bold text-lg">{score}</span></p>
        </div>
        <div className="bg-jungle-teal text-white px-4 py-2 rounded-xl font-mono font-bold text-xl">
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
        </div>
      </div>

      {/* GAME GRID 3x3 */}
      <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-porcelain rounded-3xl border-4 border-dashed border-gray-200">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i}
            onMouseDown={() => isPlaying && handleHit(i)} 
            className={`w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-100 ${
                !isPlaying ? 'bg-gray-200 cursor-not-allowed' : 'bg-white cursor-pointer active:scale-95 shadow-sm border-b-4 border-gray-200'
            }`}
          >
            {/* LUBANGNYA */}
            <div className="w-12 h-4 bg-gray-300 rounded-full absolute bottom-3 opacity-50"></div>

            {/* SI BOTAK MUNCUL */}
            {isPlaying && activeHole === i && (
                <div className={`transition-transform duration-75 ${isHit ? 'scale-90 translate-y-4 opacity-50' : 'scale-110'}`}>
                    {isHit ? (
                        // Pas Kena Pukul
                        <div className="relative">
                             <Hammer className="text-red-500 w-12 h-12 animate-ping absolute top-0 left-0 z-10" />
                             <img src={targetImage} alt="Kena!" className="w-12 h-12 grayscale blur-[1px]" />
                        </div>
                    ) : (
                        // Pas Muncul (Goyang-goyang Ngeselin)
                        <img 
                            src={targetImage} 
                            alt="Si Botak" 
                            className="w-14 h-14 drop-shadow-md animate-bounce" 
                        /> 
                    )}
                </div>
            )}
          </div>
        ))}
      </div>
      
      {!isPlaying ? (
        <button onClick={startGame} className="bg-fern text-white px-10 py-4 rounded-full font-display font-black text-xl shadow-lg hover:bg-[#36682e] transition-transform active:scale-95 w-full animate-bounce-slow">
            MULAI (15 Detik)
        </button>
      ) : (
        <p className="text-sm font-bold text-rusty-spice animate-pulse">PUKUL MUKANYA!! 🔨</p>
      )}

      {!isPlaying && (
        <button onClick={onBack} className="mt-6 text-sm text-gray-400 font-bold underline hover:text-rusty-spice">
            Capek, Ganti Game Aja
        </button>
      )}
    </div>
  );
};

export default GameWhackAByte;