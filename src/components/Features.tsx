import { motion } from 'motion/react';

const stats = [
  { value: '10+', label: 'Years of Joy' },
  { value: '50k+', label: 'Happy Guests' },
  { value: '100%', label: 'Hygienic Kitchen' },
  { value: 'Fresh', label: 'Local Ingredients' },
];

export default function Features() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border-2 border-[#2D2926] shadow-[5px_5px_0_#2D2926] rounded-2xl p-8 text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
          >
            <div className="font-['Gaegu'] text-5xl sm:text-6xl font-bold text-[#FF5C35] leading-none mb-2">
              {stat.value}
            </div>
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-[#2D2926]/80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


