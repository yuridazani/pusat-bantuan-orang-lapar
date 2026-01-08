import React, { useState } from 'react';
import { KHODAM_LIST } from '../data/gameData';
import { CustomSwal } from '../utils/customAlert'; 

const GameCekKhodam = ({ onBack }) => { 
  const [name, setName] = useState("");

  const check = () => {
    if(!name) {
        CustomSwal.fire({
            icon: 'warning',
            title: 'Namanya Siapa?',
            text: 'Isi dulu nama kamu biar khodamnya muncul!'
        });
        return;
    }

    const index = Math.floor(Math.random() * KHODAM_LIST.length);
    const result = KHODAM_LIST[index];
    
    const dynamicImage = result.img 
        ? result.img 
        : `https://robohash.org/${result.k}.png?set=set2&size=150x150`; 

    CustomSwal.fire({
        title: result.k, 
        text: result.prize, 
        imageUrl: dynamicImage,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: result.k,
        confirmButtonText: 'Coba Lagi',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    });
  };

  return (
    <div className="text-center py-12 px-6 h-full flex flex-col justify-center items-center bg-white rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 bg-jungle-teal text-white text-[10px] font-bold px-4 py-2 rounded-bl-2xl shadow-md z-10">
        UNLIMITED • JUST FOR FUN
      </div>

      <h3 className="font-display font-bold text-3xl mb-2 text-dark-charcoal">Cek Khodam</h3>
      <p className="text-sm text-gray-400 mb-8 font-body">Cek khodam gratis!</p>
      
      <input 
        type="text" 
        placeholder="Ketik Nama..." 
        className="w-full p-4 bg-porcelain border-2 border-transparent focus:border-golden-sand rounded-2xl mb-6 text-center font-display font-bold text-lg outline-none transition-colors placeholder:font-body placeholder:font-normal text-dark-charcoal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={check} className="bg-golden-sand text-dark-charcoal px-8 py-4 rounded-2xl font-display font-bold text-lg shadow-xl border-b-4 border-[#b5a359] active:border-b-0 active:translate-y-1 transition-all w-full mb-4">
        SCAN SEKARANG
      </button>

      <button onClick={onBack} className="mt-2 text-sm text-gray-400 font-bold hover:text-rusty-spice transition-colors">
        Udah Ah, Balik Menu
      </button>
    </div>
  );
};

export default GameCekKhodam;