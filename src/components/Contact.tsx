import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-3 border-[#2D2926] shadow-[8px_8px_0_#2D2926] rounded-3xl p-8 sm:p-12 flex flex-col justify-between"
        >
          <div>
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-4 bg-[#FFFEF2] inline-block px-3 py-1 rounded-full border border-[#2D2926]">
              [ Location & Hours ]
            </div>
            <h2 className="font-['Gaegu'] text-5xl sm:text-6xl font-bold text-[#2D2926] mb-8">
              Visit Us Today
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#FF5C35] text-white border-2 border-[#2D2926] rounded-xl shadow-[3px_3px_0_#2D2926]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-['Space_Mono'] text-xs font-bold uppercase text-[#FF5C35] mb-1">
                    Address
                  </div>
                  <p className="font-['Inter'] text-lg font-bold text-[#2D2926] leading-snug">
                    Delhi Gate Road, Nanamaharaj Mandir, Mohan Bag, Ahilyanagar
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#FFFEF2] text-[#2D2926] border-2 border-[#2D2926] rounded-xl shadow-[3px_3px_0_#2D2926]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-['Space_Mono'] text-xs font-bold uppercase text-[#FF5C35] mb-1">
                    Open Hours
                  </div>
                  <p className="font-['Gaegu'] text-3xl font-bold text-[#2D2926]">
                    Every Day: 10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Direct Connect Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FF5C35] text-white border-3 border-[#2D2926] shadow-[8px_8px_0_#2D2926] rounded-3xl p-8 sm:p-12 flex flex-col justify-between -rotate-1 hover:rotate-0 transition-transform"
        >
          <div>
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#2D2926] mb-4 bg-white inline-block px-3 py-1 rounded-full border border-[#2D2926]">
              [ Quick Order ]
            </div>
            <h3 className="font-['Gaegu'] text-5xl font-bold mb-4">
              Connect With Us
            </h3>
            <p className="font-['Inter'] text-lg text-white/90 font-normal leading-relaxed mb-8">
              Ready to experience the best taste in town? Call us directly or place your order straight on WhatsApp.
            </p>

            <a 
              href="tel:+919503251690" 
              className="flex items-center gap-3 bg-white text-[#2D2926] font-['Gaegu'] text-3xl sm:text-4xl font-bold p-4 rounded-2xl border-2 border-[#2D2926] shadow-[4px_4px_0_#2D2926] mb-6 hover:bg-[#FFFEF2] transition-colors"
            >
              <Phone className="w-7 h-7 text-[#FF5C35]" />
              +91 95032 51690
            </a>
          </div>

          <a 
            href="https://wa.me/919503251690" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-['Gaegu'] text-2xl font-bold py-4 px-8 rounded-2xl border-2 border-[#2D2926] shadow-[4px_4px_0_#2D2926] hover:bg-[#20bd5a] transition-colors"
          >
            <MessageSquare className="w-6 h-6" /> Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}


