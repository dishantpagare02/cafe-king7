import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    code: 'REVIEW [01]',
    text: "Amazing cold coffee and sandwiches! The staff is super friendly and the ambiance is very relaxing. Highly recommended.",
    author: "Rahul D.",
  },
  {
    code: 'REVIEW [02]',
    text: "Best cafe in Ahilyanagar. The Cheese Burst Pizza is out of this world. Great place to hang out with friends.",
    author: "Sneha M.",
  },
  {
    code: 'REVIEW [03]',
    text: "Beautiful ambience and affordable menu. I come here every weekend for my KitKat Frappe. Never disappoints!",
    author: "Vikram S.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-2 bg-white inline-block px-3 py-1 rounded-full border border-[#2D2926]">
            [ Community Love ]
          </div>
          <h2 className="font-['Gaegu'] text-6xl sm:text-7xl font-bold text-[#2D2926]">
            Customer Reviews
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border-2 border-[#2D2926] shadow-[6px_6px_0_#2D2926] rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#FF5C35] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-['Space_Mono'] text-[0.65rem] font-bold uppercase tracking-wider text-[#FF5C35]">
                  {review.code}
                </span>
              </div>
              <p className="font-['Inter'] text-base text-[#2D2926]/85 font-normal leading-relaxed mb-6">
                "{review.text}"
              </p>
            </div>
            <div className="font-['Gaegu'] text-2xl font-bold text-[#2D2926] border-t border-[#2D2926]/10 pt-4">
              — {review.author}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


