import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import imgKitKatFrappe from '../assets/images/regenerated_image_1784379776420.jpg';
import imgMangoMastani from '../assets/images/regenerated_image_1784380445171.jpg';
import imgDryFruitMastani from '../assets/images/regenerated_image_1784380447821.jpg';
import imgCheeseBurstPizza from '../assets/images/regenerated_image_1784380449177.jpg';

const specials = [
  { name: 'KitKat Frappe', desc: 'Chocolaty crunch with smooth coffee', icon: '🍫', image: imgKitKatFrappe },
  { name: 'Oreo Frappe', desc: 'Classic cookie blended perfection', icon: '🍪', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mango Mastani', desc: 'Rich mango shake with ice cream', icon: '🥭', image: imgMangoMastani },
  { name: 'Dry Fruit Mastani', desc: 'Loaded with premium nuts', icon: '🥜', image: imgDryFruitMastani },
  { name: 'Cheese Burst Pizza', desc: 'Oozing cheese in every bite', icon: '🧀', image: imgCheeseBurstPizza },
];

export default function Specials() {
  return (
    <section id="specials" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-cafe-brown dark:text-cafe-cream">Cafe King's Specials</h2>
            <div className="h-1 w-24 bg-cafe-gold rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">Our most loved signature items that keep our customers coming back for more.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#menu" className="text-cafe-gold hover:text-cafe-brown dark:hover:text-white font-medium flex items-center gap-1 transition-colors">
              See full menu <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 flex flex-col justify-between ${
                index === 0 
                  ? 'bg-cafe-brown text-white lg:col-span-2 lg:flex-row items-center gap-6' 
                  : 'bg-cafe-cream dark:bg-gray-800'
              }`}
            >
              <div className={index === 0 ? 'lg:w-1/2' : ''}>
                <div className="flex items-center gap-2 mb-3">
                  <Star className={`h-5 w-5 ${index === 0 ? 'text-cafe-gold' : 'text-cafe-gold'}`} fill="currentColor" />
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Signature</span>
                </div>
                <h3 className={`font-heading text-2xl font-bold mb-2 ${index === 0 ? 'text-white' : 'text-cafe-black dark:text-white'}`}>
                  {item.name}
                </h3>
                <p className={`mb-6 ${index === 0 ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.desc}
                </p>
                <button className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-cafe-gold text-white hover:bg-white hover:text-cafe-brown' 
                    : 'bg-cafe-brown text-white dark:bg-cafe-gold hover:bg-opacity-90'
                }`}>
                  Order Now
                </button>
              </div>
              
              <div className={`mt-6 ${index === 0 ? 'mt-0 lg:w-1/2 flex justify-end' : ''}`}>
                <div className={`relative overflow-hidden rounded-xl shadow-lg ${
                  index === 0 ? 'w-full h-48 lg:h-56' : 'w-full h-40'
                }`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
