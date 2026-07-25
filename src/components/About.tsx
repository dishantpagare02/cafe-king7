import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
                alt="Cafe King Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-cafe-gold text-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <h4 className="font-heading text-3xl font-bold mb-2">10+</h4>
              <p className="font-medium text-cafe-cream">Years of serving joy in every cup and plate.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-cafe-brown dark:text-cafe-cream">About Cafe King</h2>
            <div className="h-1 w-24 bg-cafe-gold rounded-full mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-cafe-black dark:text-white font-medium">Cafe King</strong> — your go-to destination in Ahilyanagar for fresh juices, handcrafted burgers, cheesy pizzas, delicious sandwiches, and refreshing mocktails.
              </p>
              <p>
                Founded with a passion for great food and warm hospitality, we believe that every meal should be an experience. Every dish is prepared with quality ingredients, sourced locally, and served with care in our cozy, family-friendly atmosphere.
              </p>
              <p>
                Whether you're looking for a quick morning coffee, a hearty lunch, or a relaxing evening hangout spot with friends, Cafe King provides the perfect setting with exceptional service.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center text-cafe-brown dark:text-cafe-gold text-xl">☕</div>
                <span className="font-medium text-cafe-black dark:text-white">Premium Beans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center text-cafe-brown dark:text-cafe-gold text-xl">🥗</div>
                <span className="font-medium text-cafe-black dark:text-white">Fresh Produce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cafe-beige dark:bg-gray-800 flex items-center justify-center text-cafe-brown dark:text-cafe-gold text-xl">👩‍🍳</div>
                <span className="font-medium text-cafe-black dark:text-white">Expert Chefs</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
