import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center max-w-7xl mx-auto">
      {/* Content Area */}
      <div className="relative">
        <svg className="absolute -top-10 -left-10 w-24 h-24 opacity-20 text-[#FF5C35] pointer-events-none" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" strokeDasharray="8 8" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-4 bg-white inline-block px-4 py-1.5 rounded-full border-2 border-[#2D2926] shadow-[3px_3px_0_#2D2926]">
            [ Est. 2016 ] Ahilyanagar
          </div>

          <h1 className="font-['Gaegu'] text-7xl sm:text-8xl lg:text-[7.5rem] font-bold leading-[0.85] text-[#2D2926] mb-6 mt-0 pt-[3px] pl-[66px]">
            Cafe <br />
            <span className="text-[#FF5C35]">King.</span>
          </h1>

          <div className="mb-8">
            <span className="bg-[#19ff00] text-black font-extrabold text-xs px-2.5 py-1 rounded border border-[#2D2926] uppercase tracking-wider inline-block mb-3">
              EXCLUSIVE DEALS!
            </span>
            <p className="font-['Inter'] text-lg sm:text-xl text-[#2D2926]/80 max-w-lg font-normal leading-relaxed">
              Crafted with love. Served with passion. Receive daily offers, festive discounts, and special coupons directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#menu" className="btn-playful text-2xl py-3 px-8">
              View Menu
            </a>
            <a 
              href="https://chat.whatsapp.com/K46sfC4cmo60fhSjMP2TMU" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-outline text-2xl py-3 px-8 flex items-center gap-2 text-[#2D2926]"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" /> Join Community
            </a>
          </div>
        </motion.div>
      </div>

      {/* Visual Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative my-8 lg:my-0"
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] max-w-md mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover rounded-3xl border-3 border-[#2D2926] shadow-[12px_12px_0_rgba(45,41,38,0.12)] rotate-2"
          />

          {/* Floater Badge */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border-2 border-[#2D2926] p-5 rounded-2xl shadow-[8px_8px_0_#2D2926] max-w-[220px] -rotate-3">
            <div className="font-['Gaegu'] text-lg text-[#FF5C35] font-bold mb-1">Our Best-Seller!</div>
            <h3 className="font-['Gaegu'] text-2xl font-bold leading-tight text-[#2D2926] mb-1">Paneer Chatpata Sandwich</h3>
            <p className="font-['Inter'] text-xs text-[#2D2926]/70 leading-normal mb-3">Tangy, spicy paneer filling grilled to perfection!</p>
            <div className="font-['Gaegu'] font-bold text-2xl text-[#2D2926]">₹150</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


