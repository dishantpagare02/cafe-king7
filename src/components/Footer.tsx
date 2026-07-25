import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cafe-black text-white pt-20 pb-10 border-t-4 border-cafe-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading text-3xl font-bold mb-4 text-white">Cafe King</h3>
            <p className="text-gray-400 max-w-xs mb-6">
              Fresh Food • Great Coffee • Good Vibes
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-400 hover:text-cafe-gold transition-colors">Menu</a></li>
              <li><a href="#specials" className="text-gray-400 hover:text-cafe-gold transition-colors">Specials</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-cafe-gold transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cafe-gold transition-colors">About Us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xl font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-left">
                <MapPin className="h-5 w-5 text-cafe-gold shrink-0 mt-0.5" />
                <span className="text-gray-400">Delhi Gate Road, Nanamaharaj Mandir, Mohan Bag, Ahilyanagar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cafe-gold shrink-0" />
                <span className="text-gray-400">+91 95032 51690</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cafe King. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with ♥ in Ahilyanagar</p>
        </div>
      </div>
    </footer>
  );
}
