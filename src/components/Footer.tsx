export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-[#2D2926] bg-[#2D2926] text-[#FFFEF2]">
      {/* Marquee Ticker */}
      <div className="py-4 overflow-hidden border-b border-[#FFFEF2]/10 bg-[#2D2926]">
        <div className="flex whitespace-nowrap gap-8 animate-[marquee_25s_linear_infinite] font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FFFEF2]/90">
          <span>Location: <span className="text-[#FF5C35]">Ahilyanagar</span></span>
          <span>•</span>
          <span>Experience: <span className="text-[#FF5C35]">10+ Years</span></span>
          <span>•</span>
          <span>Handcrafted: <span className="text-[#FF5C35]">Always Fresh</span></span>
          <span>•</span>
          <span>Menu: <span className="text-[#FF5C35]">Burgers / Pizza / Mocktails</span></span>
          <span>•</span>
          <span>Contact: <span className="text-[#FF5C35]">+91 95032 51690</span></span>
          <span>•</span>
          <span>Location: <span className="text-[#FF5C35]">Ahilyanagar</span></span>
          <span>•</span>
          <span>Experience: <span className="text-[#FF5C35]">10+ Years</span></span>
          <span>•</span>
          <span>Handcrafted: <span className="text-[#FF5C35]">Always Fresh</span></span>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="px-6 sm:px-12 lg:px-20 py-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="font-['Gaegu'] text-4xl text-[#FF5C35] font-bold -rotate-2">
          Cafe King*
        </div>
        <div className="font-['Space_Mono'] text-xs text-[#FFFEF2]/70 text-center sm:text-right">
          © {new Date().getFullYear()} Cafe King Ahilyanagar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}


