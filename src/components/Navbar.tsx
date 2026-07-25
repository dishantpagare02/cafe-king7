import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (dark: boolean) => void }) {
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
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cafe-white/80 dark:bg-cafe-black/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className={`h-8 w-8 ${isScrolled ? 'text-cafe-brown dark:text-cafe-gold' : 'text-cafe-gold'}`} />
            <span className={`font-heading text-2xl font-bold tracking-tight ${isScrolled ? 'text-cafe-brown dark:text-cafe-cream' : 'text-white'}`}>
              Cafe King
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cafe-gold ${
                  isScrolled ? 'text-cafe-black dark:text-cafe-cream' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'hover:bg-cafe-beige dark:hover:bg-gray-800 text-cafe-black dark:text-cafe-cream'
                  : 'hover:bg-white/20 text-white'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#contact"
              className="bg-cafe-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${isScrolled ? 'text-cafe-black dark:text-cafe-cream' : 'text-white'}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-cafe-black dark:text-cafe-cream' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-cafe-white dark:bg-cafe-black shadow-lg py-4 px-4 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-cafe-black dark:text-cafe-cream font-medium text-lg border-b border-cafe-beige dark:border-gray-800 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-cafe-gold text-white text-center px-5 py-3 rounded-md text-base font-medium mt-4 inline-block"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
