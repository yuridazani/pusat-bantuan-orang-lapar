import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import Swal from 'sweetalert2';

const WinningTicket = ({ ticket, onBack }) => {
  const [time, setTime] = useState(new Date());
  const [claimed, setClaimed] = useState(ticket.claimed);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaim = () => {
    Swal.fire({
        title: 'Udah di depan kasir?',
        text: "Tiket bakal hangus kalo udah diklik!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#aa5731',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya, Klaim!',
        cancelButtonText: 'Bentar'
    }).then((result) => {
        if (result.isConfirmed) {
            setClaimed(true);
            const data = JSON.parse(localStorage.getItem('winningTicket'));
            data.claimed = true;
            localStorage.setItem('winningTicket', JSON.stringify(data));
            Swal.fire('Sip!', 'Tunjukin HP ke kasir sekarang.', 'success');
        }
    });
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-8 border-golden-sand text-center animate-bounce-slow relative overflow-hidden">
      <button onClick={onBack} className="absolute top-4 left-4 text-gray-300 hover:text-gray-500 p-2">
        <ArrowLeft size={24} />
      </button>
      
      {/* Hiasan Tiket */}
      <div className="absolute -left-4 top-1/2 w-8 h-8 bg-porcelain rounded-full"></div>
      <div className="absolute -right-4 top-1/2 w-8 h-8 bg-porcelain rounded-full"></div>

      <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full mb-6"></div>
      
      <h3 className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 font-body">Kupon Pemenang</h3>
      
      {/* JUDUL HADIAH (Gedein dikit) */}
      <h2 className="text-3xl font-display font-black text-jungle-teal mb-2 leading-tight uppercase">
        {ticket.title}
      </h2>
      
      <div className="bg-mint-cream/50 py-3 px-4 rounded-xl mb-6 border border-mint-cream">
        <p className="text-lg text-rusty-spice font-bold font-body">
          {ticket.desc}
        </p>
      </div>

      <p className="text-xs text-gray-400 mb-8 font-body">Menang dari: {ticket.game}</p>

      {/* Realtime Clock */}
      <div className="bg-porcelain p-4 rounded-2xl mb-6 inline-block shadow-inner border border-gray-100 w-full">
        <p className="text-[10px] text-gray-400 mb-1 font-bold uppercase">Jam Validasi (Anti SS)</p>
        <div className="text-2xl font-mono font-bold text-dark-charcoal flex items-center justify-center gap-2">
          <Clock size={20} className="text-rusty-spice animate-pulse"/>
          {time.toLocaleTimeString()}
        </div>
      </div>

      {!claimed ? (
        <button 
          onClick={handleClaim}
          className="w-full bg-rusty-spice text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#8f4726] transition-all active:scale-95 font-display text-lg flex flex-col items-center justify-center"
        >
          <span>KLAIM SEKARANG</span>
          <span className="text-[10px] font-body font-normal opacity-80 mt-0.5">(Klik di depan Kasir)</span>
        </button>
      ) : (
        <button disabled className="w-full bg-gray-200 text-gray-400 font-bold py-4 rounded-2xl cursor-not-allowed flex justify-center items-center gap-2 font-display">
          <CheckCircle size={20} /> SUDAH DIKLAIM
        </button>
      )}
    </div>
  );
};

export default WinningTicket;