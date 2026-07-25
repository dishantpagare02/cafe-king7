import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-cafe-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cafe-gold/50 bg-cafe-black/30 backdrop-blur-sm text-cafe-gold text-sm font-medium tracking-wider uppercase"
        >
          Crafted with Love. Served with Passion.
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Georgia' }}
        >
          Taste the Love . <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cafe-gold to-yellow-200">
            enjoy the moment
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light"
        >
          <strong className="text-[#19ff00] font-bold">Unlock Exclusive Deals!</strong> <br className="hidden md:block" />
          Receive daily offers, festive discounts, and special coupons directly on WhatsApp.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-cafe-gold text-white rounded-full font-medium text-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-cafe-gold/20">
            View Menu
          </a>
          <a href="https://chat.whatsapp.com/K46sfC4cmo60fhSjMP2TMU" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#07fa36] text-[#07fa36] rounded-full font-medium text-lg hover:bg-[#07fa36] hover:text-white transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" /> Join Community
          </a>
        </motion.div>
      </div>

      {/* Floating Glassmorphism Cards - Decorative */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-24 left-16 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-xs text-white"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-cafe-gold flex items-center justify-center text-xl">☕</div>
          <div>
            <h4 className="font-heading font-semibold text-lg">Morning Coffee</h4>
            <p className="text-xs text-gray-300">Start your day right</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:block absolute top-1/3 right-16 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-xs text-white"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-xl border border-green-500/50">🥪</div>
          <div>
            <h4 className="font-heading font-semibold text-lg">Fresh Sandwiches</h4>
            <p className="text-xs text-gray-300">Healthy &amp; Delicious</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
