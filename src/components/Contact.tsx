import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cafe-cream dark:bg-cafe-black transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-cafe-brown dark:text-cafe-cream">Visit Us</h2>
          <div className="h-1 w-24 bg-cafe-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
          
          {/* Contact Info */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="font-heading text-3xl font-bold mb-8 text-cafe-black dark:text-white">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-cafe-brown dark:text-cafe-gold h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-black dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Delhi Gate Road, <br/>
                    Nanamaharaj Mandir, Mohan Bag,<br/>
                    Ahilyanagar, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-cafe-brown dark:text-cafe-gold h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-black dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+919503251690" className="hover:text-cafe-gold transition-colors">+91 95032 51690</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="text-cafe-brown dark:text-cafe-gold h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-black dark:text-white mb-1">Hours</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Open Daily<br/>
                    10:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100 dark:border-gray-800">
              <a 
                href="https://wa.me/919503251690" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-green-500/30"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto w-full relative bg-gray-200 dark:bg-gray-800">
            {/* Embedded Google Maps Placeholder - In a real app this would use an actual iframe with API key or specific location embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115993.41375355609!2d74.65452778810221!3d19.095066914561085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 filter grayscale-[20%] contrast-[1.1] opacity-90"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
