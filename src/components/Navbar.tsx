import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 sm:px-12 ${
        isScrolled ? 'bg-[#FFFEF2]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-['Gaegu'] text-3xl sm:text-4xl text-[#FF5C35] font-bold -rotate-2 hover:rotate-0 transition-transform">
          Cafe King*
        </a>

        {/* Desktop Nav Cluster */}
        <nav className="hidden md:flex items-center gap-6 bg-white px-8 py-3 rounded-full border-2 border-[#2D2926] shadow-[4px_4px_0_#2D2926]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-[#2D2926] hover:text-[#FF5C35] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Info Label / CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="font-['Space_Mono'] text-[0.7rem] uppercase tracking-wider text-[#2D2926] font-bold">
            Est. 2016 / 10AM-10PM
          </div>
          <a href="#contact" className="btn-playful text-lg py-2 px-6">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white text-[#2D2926] border-2 border-[#2D2926] rounded-xl shadow-[3px_3px_0_#2D2926]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-6 right-6 bg-white border-2 border-[#2D2926] shadow-[6px_6px_0_#2D2926] rounded-2xl py-6 px-6 flex flex-col space-y-4 mt-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-['Gaegu'] text-2xl font-bold text-[#2D2926] hover:text-[#FF5C35] py-1 border-b border-[#2D2926]/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-playful mt-2 text-center py-2"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


