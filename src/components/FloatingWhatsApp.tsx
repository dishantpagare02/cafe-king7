import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://chat.whatsapp.com/K46sfC4cmo60fhSjMP2TMU"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full border-2 border-[#2D2926] shadow-[4px_4px_0_#2D2926] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#2D2926] transition-all duration-200"
      aria-label="Join our WhatsApp Community"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-['Space_Mono'] text-xs uppercase tracking-wider font-bold hidden sm:inline">Join Community</span>

    </motion.a>
  );
}
