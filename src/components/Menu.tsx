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
import imgPaneerBBQSandwich from '../assets/images/regenerated_image_1784996770640.png';
import imgPizzaSandwich from '../assets/images/regenerated_image_1784379783853.jpg';
import imgPaneerBBQPizza from '../assets/images/regenerated_image_1784997368584.png';
import imgBlueCuracao from '../assets/images/regenerated_image_1784380440212.jpg';
import imgGreenApple from '../assets/images/regenerated_image_1784380441827.jpg';
import imgChilliGuava from '../assets/images/regenerated_image_1784380443324.jpg';
import imgExoticVeggiePizza from '../assets/images/regenerated_image_1784380689089.jpg';

const categories = ['All', 'Juices', 'Burgers', 'Sandwiches', 'Pizza', 'Mocktails'];

const menuItems = [
  { name: 'Mango Juice', category: 'Juices', code: 'JUICE [01]', price: '₹60', image: imgMangoJuice },
  { name: 'Orange Juice', category: 'Juices', code: 'JUICE [02]', price: '₹60', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600' },
  { name: 'Mix Fruit', category: 'Juices', code: 'JUICE [03]', price: '₹60', image: imgMixFruit },
  { name: 'Cold Coffee', category: 'Juices', code: 'COFFEE [04]', price: '₹60', image: imgColdCoffee },
  { name: 'Thick Chocolate', category: 'Juices', code: 'SHAKE [05]', price: '₹80', image: imgThickChocolate },
  { name: 'KitKat Frappe', category: 'Juices', code: 'FRAPPE [06]', price: '₹90', image: imgKitKatFrappe },
  
  { name: 'Veg Cheese Burger', category: 'Burgers', code: 'BURGER [07]', price: '₹70', image: imgVegCheeseBurger },
  { name: 'Paneer Cheese Burger', category: 'Burgers', code: 'BURGER [08]', price: '₹120', image: imgPaneerCheeseBurger },
  { name: 'Double Deck Burger', category: 'Burgers', code: 'BURGER [09]', price: '₹140', image: imgDoubleDeckBurger },
  { name: 'Tandoori Paneer Burger', category: 'Burgers', code: 'BURGER [10]', price: '₹150', image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&q=80&w=600' },

  { name: 'Cheese Blast', category: 'Sandwiches', code: 'SANDWICH [11]', price: '₹190', image: imgCheeseBlast },
  { name: 'Paneer BBQ Sandwich', category: 'Sandwiches', code: 'SANDWICH [12]', price: '₹150', image: imgPaneerBBQSandwich },
  { name: 'Chocolate Sandwich', category: 'Sandwiches', code: 'SANDWICH [13]', price: '₹120', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pizza Sandwich', category: 'Sandwiches', code: 'SANDWICH [14]', price: '₹150', image: imgPizzaSandwich },

  { name: 'Margherita Pizza', category: 'Pizza', code: 'PIZZA [15]', price: '₹160 / ₹200', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
  { name: 'Paneer BBQ Pizza', category: 'Pizza', code: 'PIZZA [16]', price: '₹190 / ₹230', image: imgPaneerBBQPizza },
  { name: 'Cheese Burst Pizza', category: 'Pizza', code: 'PIZZA [17]', price: '₹190 / ₹230', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
  { name: 'Exotic Veggie Pizza', category: 'Pizza', code: 'PIZZA [18]', price: '₹140 / ₹180', image: imgExoticVeggiePizza },

  { name: 'Blue Curacao', category: 'Mocktails', code: 'MOCKTAIL [19]', price: '₹110', image: imgBlueCuracao },
  { name: 'Mojito Refresh', category: 'Mocktails', code: 'MOCKTAIL [20]', price: '₹110', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Green Apple', category: 'Mocktails', code: 'MOCKTAIL [21]', price: '₹110', image: imgGreenApple },
  { name: 'Chilli Guava', category: 'Mocktails', code: 'MOCKTAIL [22]', price: '₹110', image: imgChilliGuava },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-2 bg-white inline-block px-3 py-1 rounded-full border border-[#2D2926]">
            [ Freshly Prepared ]
          </div>
          <h2 className="font-['Gaegu'] text-6xl sm:text-7xl font-bold text-[#2D2926]">
            Featured Menu
          </h2>
        </div>
        <div className="font-['Space_Mono'] text-xs uppercase tracking-wider text-[#2D2926]/70 font-bold">
          Taste the difference
        </div>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-['Space_Mono'] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all ${
              activeCategory === cat
                ? 'bg-[#FF5C35] text-white border-2 border-[#2D2926] shadow-[3px_3px_0_#2D2926]'
                : 'bg-white text-[#2D2926] border-2 border-[#2D2926] shadow-[2px_2px_0_#2D2926] hover:bg-[#FFFEF2]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.name + item.category}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-[#2D2926] shadow-[5px_5px_0_#2D2926] rounded-2xl p-5 hover:-translate-y-1 hover:shadow-[8px_8px_0_#2D2926] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden mb-4 rounded-xl border-2 border-[#2D2926]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="font-['Space_Mono'] text-[0.65rem] font-bold uppercase tracking-wider text-[#FF5C35] mb-1">
                  {item.code}
                </div>
                <h3 className="font-['Gaegu'] text-3xl font-bold text-[#2D2926] leading-tight mb-2">
                  {item.name}
                </h3>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#2D2926]/10">
                <span className="font-['Gaegu'] text-3xl font-bold text-[#2D2926]">
                  {item.price}
                </span>
                <a
                  href="#contact"
                  className="btn-playful text-lg py-1.5 px-4"
                >
                  Order
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

