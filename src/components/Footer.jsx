import React, { useState } from 'react';
function Footer(){
    const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null); // Jika diklik lagi, menu akan tertutup
    } else {
      setActiveMenu(menuName); // Membuka menu yang dipilih
    }
  };

  // Data Menu Link Footer
  const genres = [
    "Aksi", "Anak-anak", "Anime", "Britania", 
    "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", 
    "Komedi", "Petualangan", "Perang", "Romantis", 
    "Sains & Alam", "Thriller"
  ];

  const bantuan = [
    "FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"
  ];

  return (
    <footer className="w-full bg-[#181818] text-[#E0E0E0] border-t border-gray-800 font-sans mt-auto">
      
      {/* ─── 1. TAMPILAN DESKTOP (Muncul mulai layar md ke atas - image_45631b.png) ─── */}
      <div className="hidden md:grid grid-cols-12 gap-8 max-w-[1440px] mx-auto px-12 py-10 items-start">
        
        {/* Kolom Kiri: Logo & Copyright */}
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {/* Ganti dengan tag <img src="/asset/Logo.png" /> jika ada aset gambar logo */}
            <div className="flex items-center gap-2 text-white font-black text-2xl tracking-wider uppercase select-none">
              <img src="src\assets\logo-footer.png" alt="Logo Chill" className="h-[44px] object-contain" /> 
            </div>
          </div>
          <p className="text-xs text-gray-500 font-medium">
            &copy;2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* Kolom Tengah: Grid Genre Film (Dipecah jadi 4 kolom kecil internal) */}
        <div className="col-span-5 flex flex-col gap-3">
          <h4 className="text-sm font-bold text-white tracking-wide">Genre</h4>
          <div className="grid grid-cols-4 gap-x-4 gap-y-2.5 text-xs text-gray-400">
            {genres.map((genre, idx) => (
              <a key={idx} href={`#${genre}`} className="hover:text-white transition-colors duration-150 truncate">
                {genre}
              </a>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Menu Bantuan */}
        <div className="col-span-3 flex flex-col gap-3 pl-8">
          <h4 className="text-sm font-bold text-white tracking-wide">Bantuan</h4>
          <div className="flex flex-col gap-2.5 text-xs text-gray-400">
            {bantuan.map((item, idx) => (
              <a key={idx} href={`#${item}`} className="hover:text-white transition-colors duration-150">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>


      {/* TAMPILAN MOBILE*/}
      <div className="block md:hidden px-4 py-6 flex flex-col gap-6 border-t border-gray-800">
        
        {/* Bagian Atas: Brand & Hak Cipta */}
        <div className="flex flex-col gap-2">
          <div className="text-white font-black text-xl tracking-wider uppercase">
            <img src="src\assets\logo-footer.png" alt="Logo Chill" className="h-[24px] object-contain" />
          </div>
          <p className="text-xs text-gray-500">
            &copy;2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* Sistem Akordeon Menu List */}
        <div className="flex flex-col">
          
          {/* ACCORDION 1: GENRE */}
          <div>
            <button 
              onClick={() => toggleMenu('genre')}
              className="w-full flex justify-between items-center py-4 text-sm font-semibold text-white focus:outline-none"
            >
              <span>Genre</span>
              {/* Efek rotasi ikon panah saat menu terbuka */}
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeMenu === 'genre' ? 'rotate-90' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Konten Genre Dropdown */}
            <div className={`overflow-hidden transition-all duration-300 ${activeMenu === 'genre' ? 'max-h-[300px] pb-4' : 'max-h-0'}`}>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 pt-1">
                {genres.map((genre, idx) => (
                  <a key={idx} href={`#${genre}`} className="py-1 hover:text-white">{genre}</a>
                ))}
              </div>
            </div>
          </div>

          {/* ACCORDION 2: BANTUAN */}
          <div>
            <button 
              onClick={() => toggleMenu('bantuan')}
              className="w-full flex justify-between items-center py-4 text-sm font-semibold text-white focus:outline-none"
            >
              <span>Bantuan</span>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeMenu === 'bantuan' ? 'rotate-90' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Konten Bantuan Dropdown */}
            <div className={`overflow-hidden transition-all duration-300 ${activeMenu === 'bantuan' ? 'max-h-[200px] pb-4' : 'max-h-0'}`}>
              <div className="flex flex-col gap-2 text-xs text-gray-400 pt-1">
                {bantuan.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="py-1 hover:text-white">{item}</a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;