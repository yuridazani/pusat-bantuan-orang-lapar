import React, { useState, useRef } from 'react';
import { getRandomText, getRandomMenuPrize } from '../data/gameData';

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
    
    if (result >= 500 && result <= 510) {
      onWin(getRandomText('JACKPOT'), getRandomMenuPrize(), "Stop The Loop");
    } 
    else if ((result >= 490 && result < 500) || (result > 510 && result <= 525)) {
      onWin(getRandomText('SMALL'), "Diskon Rp 2.000", "Stop The Loop");
    } 
    else {
      onWin(getRandomText('ZONK'), "Dapet Permen (Sabar Ya)", "Stop The Loop");
    }
  };

  return (
    <div className="text-center py-12 px-6 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-2xl mb-2 text-dark-charcoal">Stop di 05.00</h3>
      <p className="text-xs text-gray-400 mb-8">Toleransi dikit (5.00 - 5.10) boleh lah~</p>
      
      <div className="text-7xl font-mono font-bold text-jungle-teal mb-12 tracking-wider">
        {(timer / 100).toFixed(2)}
      </div>
      
      {!isRunning && timer === 0 && (
        <button onClick={start} className="bg-fern text-white px-10 py-4 rounded-full font-display font-black text-xl shadow-lg hover:bg-[#36682e] transition-transform active:scale-95 w-full">MULAI</button>
      )}
      {isRunning && (
        <button onClick={stop} className="bg-rusty-spice text-white px-10 py-4 rounded-full font-display font-black text-xl shadow-lg hover:bg-[#944a29] transition-transform active:scale-95 w-full">STOP!</button>
      )}
      <button onClick={onBack} className="mt-8 text-sm text-gray-400 font-bold underline hover:text-rusty-spice">
        Gak jadi main
      </button>
    </div>
  );
};

export default GameStopTheLoop;