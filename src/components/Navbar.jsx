import React, { useState } from 'react';
import logoMobile from '../assets/logo-mobile.svg';
import logoDesktop from '../assets/logo-chill.png';
import avatarprofile from '../assets/avatar-profile.png';
import arrowDown from '../assets/arrow-down.png';

function Navbar() {
  // Sakelar untuk membuka/menutup menu dropdown profil
  const [bukaProfil, setBukaProfil] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-home px-4 md:px-12 py-4 flex justify-between items-center text-white">
      {/* Logo & Link Navigasi */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* changing logo */}
        <img src={logoMobile} alt="Chill Mobile" className="h-5 object-contain md:hidden" />
        <img src={logoDesktop} alt="Chill Desktop" className="h-5 md:h-6 object-contain hidden md:block" />
        
        {/* Nav Links tersembunyi di mobile, muncul di desktop */}
        <ul className="flex items-center gap-6 text-xs text-text-secondary font-medium">
          <li><a href="#series" className="hover:text-white transition">Series</a></li>
          <li><a href="#films" className="hover:text-white transition">Film</a></li>
          <li><a href="#my-list" className="hover:text-white transition">Daftar Saya</a></li>
        </ul>
      </div>

      {/* Profil Dropdown */}
      <div className="relative">
        <div 
          onClick={() => setBukaProfil(!bukaProfil)}
          className="flex items-center gap-1 cursor-pointer select-none"
        >
          <img src={avatarprofile} className="w-5 h-5 object-contain rounded-full" alt="Profile" />
          <img 
            src={arrowDown} 
            className={`w-3 pt-0.5 transition-transform duration-200 ${bukaProfil ? 'rotate-180' : ''}`} 
            alt="Arrow" 
          />
        </div>

        {/* Dropdown Menu */}
        {bukaProfil && (
          <div className="absolute right-0 mt-2 w-36 bg-dropdown-bg border border-gray-800 rounded-lg shadow-xl py-2 z-50 text-left">
            <button className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-text-secondary hover:bg-white/5 hover:text-white transition text-left cursor-pointer">
              👤 Profil Saya
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-text-secondary hover:bg-white/5 hover:text-white transition text-left cursor-pointer">
              ⭐ Ubah Premium
            </button>
            <div className="border-t border-gray-800 my-1"></div>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-gray-400 hover:bg-white/5 hover:text-red-400 transition text-left cursor-pointer">
              🚪 Keluar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;