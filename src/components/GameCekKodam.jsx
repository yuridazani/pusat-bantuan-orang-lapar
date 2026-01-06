import React, { useState } from 'react';
import { KHODAM_LIST } from '../data/gameData';

const GameCekKhodam = ({ onWin, onBack }) => {
  const [name, setName] = useState("");

  const check = () => {
    if(!name) return;
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const index = Math.abs(hash) % KHODAM_LIST.length;
    const result = KHODAM_LIST[index];
    
    // Format: Judul = Nama Khodam, Desc = Hadiahnya
    onWin(`Khodam: ${result.k}`, result.prize, "Cek Khodam"); 
  };

  return (
    <div className="text-center py-12 px-6 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100">
      <h3 className="font-display font-bold text-2xl mb-2 text-dark-charcoal">Cek Khodam</h3>
      <p className="text-sm text-gray-400 mb-8 font-body">Tulis nama panggilan lu:</p>
      
      <input 
        type="text" 
        placeholder="Nama..." 
        className="w-full p-4 bg-porcelain border-2 border-transparent focus:border-golden-sand rounded-2xl mb-6 text-center font-display font-bold text-lg outline-none transition-colors placeholder:font-body placeholder:font-normal text-dark-charcoal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={check} className="bg-golden-sand text-dark-charcoal px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-xl border-b-4 border-[#b5a359] active:border-b-0 active:translate-y-1 transition-all w-full">
        CEK SEKARANG
      </button>

      <button onClick={onBack} className="mt-6 text-sm text-gray-400 font-bold">Kembali</button>
    </div>
  );
};

export default GameCekKhodam;