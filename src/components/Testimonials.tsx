import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { text: "Amazing cold coffee and sandwiches! The staff is super friendly and the ambiance is very relaxing. Highly recommended.", author: "Rahul D.", rating: 5 },
  { text: "Best cafe in Ahilyanagar. The Cheese Burst Pizza is out of this world. Great place to hang out with friends.", author: "Sneha M.", rating: 5 },
  { text: "Beautiful ambience and affordable menu. I come here every weekend for my KitKat Frappe. Never disappoints!", author: "Vikram S.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cafe-brown relative overflow-hidden text-cafe-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4 text-white">Customer Reviews</h2>
          <div className="h-1 w-24 bg-cafe-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-cafe-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-white/20 mb-4" />
              <p className="text-lg mb-6 italic text-gray-200">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cafe-gold flex items-center justify-center text-white font-bold font-heading">
                  {review.author[0]}
                </div>
                <span className="font-medium text-white">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
