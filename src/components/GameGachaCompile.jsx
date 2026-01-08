import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { getRandomText, getRandomMenuPrize } from '../data/gameData';

const GameGachaCompile = ({ onWin, onBack }) => {
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);

  const runGacha = () => {
    setStatus('compiling');
    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.floor(Math.random() * 20);
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        determinePrize();
      }
      setProgress(prog);
    }, 200);
  };

  const determinePrize = () => {
    setStatus('done');
    const rand = Math.random();
    
    if (rand < 0.01) { 
      onWin(getRandomText('JACKPOT'), getRandomMenuPrize(), "Gacha Nasib");
    } else if (rand < 0.20) { 
      onWin(getRandomText('SMALL'), "Diskon Rp 2.000", "Gacha Nasib");
    } else {
      onWin(getRandomText('ZONK'), "Dapet Permen (Sabar)", "Gacha Nasib");
    }
  };

  return (
    <div className="text-center py-12 px-6 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-2xl mb-6 text-dark-charcoal">Gacha Nasib</h3>
      <p className="text-xs text-gray-400 mb-6">Peluang Zonk: 80% (Jujur aja nih)</p>
      
      <div className="w-32 h-32 bg-mint-cream border-4 border-jungle-teal rounded-3xl flex items-center justify-center mb-8 shadow-inner relative overflow-hidden">
        {status === 'compiling' ? (
           <Sparkles size={48} className="text-jungle-teal animate-spin" />
        ) : (
           <Play size={48} className="text-jungle-teal ml-1" />
        )}
      </div>

      {status === 'compiling' && (
        <div className="w-full bg-gray-100 rounded-full h-6 mb-8 p-1">
          <div className="bg-fern h-4 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {status === 'idle' && (
        <button onClick={runGacha} className="bg-jungle-teal text-white px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-xl border-b-4 border-[#2d584e] active:border-b-0 active:translate-y-1 transition-all w-full">
          PUTAR GACHA
        </button>
      )}
      
      <button onClick={onBack} className="mt-6 text-sm text-gray-400 font-bold hover:text-rusty-spice transition-colors">
        Takut Zonk, Balik Aja
      </button>
    </div>
  );
};

export default GameGachaCompile;