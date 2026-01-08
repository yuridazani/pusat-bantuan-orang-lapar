import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-0 text-center">
      <div className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500">
        
        <p className="font-body text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
          Ditenagai oleh <span className="text-rusty-spice">☕</span> Kopi, Indomie, & Para Kucing.
        </p>

        <a 
          href="https://www.instagram.com/saturdayyuri/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-1.5 bg-white/40 border border-gray-200 rounded-full hover:bg-white hover:shadow-sm hover:border-jungle-teal/30 transition-all duration-300"
        >
          <span className="text-sm group-hover:animate-bounce">👾</span>
          
          <span className="font-bold text-[10px] md:text-xs text-gray-500 group-hover:text-jungle-teal">
            Intip Tukang Kodingnya
          </span>
        </a>

        <span className="text-[9px] text-gray-300 mt-2 font-mono">
          © {new Date().getFullYear()} Food Station 7A1 • Jangan Lupa Makan
        </span>

      </div>
    </footer>
  );
};

export default Footer;