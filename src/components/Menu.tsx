import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgMangoJuice from '../assets/images/regenerated_image_1784379024222.jpg';
import imgMixFruit from '../assets/images/regenerated_image_1784379025373.jpg';
import imgColdCoffee from '../assets/images/regenerated_image_1784379008633.jpg';
import imgDoubleDeckBurger from '../assets/images/regenerated_image_1784379021795.jpg';

import imgThickChocolate from '../assets/images/regenerated_image_1784379774676.jpg';
import imgKitKatFrappe from '../assets/images/regenerated_image_1784379776420.jpg';
import imgVegCheeseBurger from '../assets/images/regenerated_image_1784379777253.jpg';
import imgPaneerCheeseBurger from '../assets/images/regenerated_image_1784379778843.jpg';
import imgCheeseBlast from '../assets/images/regenerated_image_1784379780285.jpg';
import imgPaneerBBQSandwich from '../assets/images/regenerated_image_1784379781437.jpg';
import imgPizzaSandwich from '../assets/images/regenerated_image_1784379783853.jpg';
import imgPaneerBBQPizza from '../assets/images/regenerated_image_1784379785604.jpg';
import imgBlueCuracao from '../assets/images/regenerated_image_1784380440212.jpg';
import imgGreenApple from '../assets/images/regenerated_image_1784380441827.jpg';
import imgChilliGuava from '../assets/images/regenerated_image_1784380443324.jpg';
import imgExoticVeggiePizza from '../assets/images/regenerated_image_1784380689089.jpg';

const categories = ['All', '🥤 Fresh Juices', '🍔 Burgers', '🥪 Sandwiches', '🍕 Pizza', '🍹 Signature Mocktails'];

const menuItems = [
  { name: 'Mango Juice', category: '🥤 Fresh Juices', price: '₹90', image: imgMangoJuice },
  { name: 'Orange Juice', category: '🥤 Fresh Juices', price: '₹80', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mix Fruit', category: '🥤 Fresh Juices', price: '₹100', image: imgMixFruit },
  { name: 'Cold Coffee', category: '🥤 Fresh Juices', price: '₹120', image: imgColdCoffee },
  { name: 'Thick Chocolate', category: '🥤 Fresh Juices', price: '₹140', image: imgThickChocolate },
  { name: 'KitKat Frappe', category: '🥤 Fresh Juices', price: '₹150', image: imgKitKatFrappe },
  
  { name: 'Veg Cheese Burger', category: '🍔 Burgers', price: '₹110', image: imgVegCheeseBurger },
  { name: 'Paneer Cheese Burger', category: '🍔 Burgers', price: '₹130', image: imgPaneerCheeseBurger },
  { name: 'Double Deck Burger', category: '🍔 Burgers', price: '₹160', image: imgDoubleDeckBurger },
  { name: 'Tandoori Paneer Burger', category: '🍔 Burgers', price: '₹140', image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&q=80&w=600' },

  { name: 'Cheese Blast', category: '🥪 Sandwiches', price: '₹120', image: imgCheeseBlast },
  { name: 'Paneer BBQ', category: '🥪 Sandwiches', price: '₹140', image: imgPaneerBBQSandwich },
  { name: 'Healthy Rainbow', category: '🥪 Sandwiches', price: '₹110', image: 'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pizza Sandwich', category: '🥪 Sandwiches', price: '₹130', image: imgPizzaSandwich },

  { name: 'Margherita', category: '🍕 Pizza', price: '₹180', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
  { name: 'Paneer BBQ', category: '🍕 Pizza', price: '₹220', image: imgPaneerBBQPizza },
  { name: 'Cheese Burst', category: '🍕 Pizza', price: '₹250', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
  { name: 'Exotic Veggie', category: '🍕 Pizza', price: '₹210', image: imgExoticVeggiePizza },

  { name: 'Blue Curacao', category: '🍹 Signature Mocktails', price: '₹110', image: imgBlueCuracao },
  { name: 'Mojito', category: '🍹 Signature Mocktails', price: '₹100', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Green Apple', category: '🍹 Signature Mocktails', price: '₹120', image: imgGreenApple },
  { name: 'Chilli Guava', category: '🍹 Signature Mocktails', price: '₹130', image: imgChilliGuava },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cafe-cream dark:bg-cafe-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-cafe-brown dark:text-cafe-cream">Featured Menu</h2>
          <div className="h-1 w-24 bg-cafe-gold mx-auto rounded-full"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-cafe-brown text-white dark:bg-cafe-gold shadow-md'
                  : 'bg-white dark:bg-gray-800 text-cafe-black dark:text-gray-300 hover:bg-cafe-beige dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.name + item.category}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-5 flex flex-col justify-between h-[120px]">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-cafe-black dark:text-cafe-cream group-hover:text-cafe-gold transition-colors">{item.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-cafe-gold">{item.price}</span>
                    <button className="text-sm border border-cafe-brown dark:border-cafe-gold text-cafe-brown dark:text-cafe-gold px-3 py-1 rounded-full hover:bg-cafe-brown hover:text-white dark:hover:bg-cafe-gold transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
