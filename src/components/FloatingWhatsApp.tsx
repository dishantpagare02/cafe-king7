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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-105 transition-all duration-300"
      aria-label="Join our WhatsApp Community"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium hidden sm:inline">Join Community</span>
    </motion.a>
  );
}
