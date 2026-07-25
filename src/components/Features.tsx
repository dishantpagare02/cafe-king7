import { motion } from 'motion/react';
import { Leaf, ShieldCheck, DollarSign, Clock, Users, Sun } from 'lucide-react';

const features = [
  { title: 'Fresh Ingredients', icon: Leaf, desc: 'Locally sourced and prepared daily for maximum flavor.' },
  { title: 'Hygienic Kitchen', icon: ShieldCheck, desc: 'We maintain the highest standards of cleanliness and safety.' },
  { title: 'Affordable Prices', icon: DollarSign, desc: 'Premium taste without breaking the bank.' },
  { title: 'Fast Service', icon: Clock, desc: 'Quick preparation so you never wait long for your favorites.' },
  { title: 'Family Friendly', icon: Users, desc: 'A cozy atmosphere welcoming to guests of all ages.' },
  { title: 'Outdoor Seating', icon: Sun, desc: 'Enjoy your coffee with a breeze in our lovely outdoor area.' },
];

export default function Features() {
  return (
    <section className="py-24 bg-cafe-beige/30 dark:bg-black/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4 text-cafe-brown dark:text-cafe-cream">Why Choose Us</h2>
          <div className="h-1 w-24 bg-cafe-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-transparent dark:border-gray-800"
            >
              <div className="w-14 h-14 bg-cafe-beige dark:bg-gray-800 rounded-2xl flex items-center justify-center text-cafe-brown dark:text-cafe-gold mb-6 rotate-3 hover:rotate-6 transition-transform">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-cafe-black dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
