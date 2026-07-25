import { motion } from 'motion/react';

const specials = [
  {
    num: 'Signature 01',
    name: 'KitKat Frappe',
    desc: 'Chocolaty crunch with smooth coffee perfection.',
    price: '₹90',
    highlight: false,
    badge: 'Popular',
  },
  {
    num: 'Signature 02',
    name: 'Cheese Burst Pizza',
    desc: 'Oozing premium cheese in every single bite.',
    price: '₹150',
    highlight: true,
    badge: 'Chef Choice',
  },
  {
    num: 'Signature 03',
    name: 'Mango Mastani',
    desc: 'Rich mango shake topped with velvet ice cream.',
    price: '₹90 / ₹160',
    highlight: false,
    badge: 'Seasonal',
  },
];

export default function Specials() {
  return (
    <section id="specials" className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-2 bg-white inline-block px-3 py-1 rounded-full border border-[#2D2926]">
            [ Signature Menu ]
          </div>
          <h2 className="font-['Gaegu'] text-6xl sm:text-7xl font-bold text-[#2D2926]">
            Specials & Highlights
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specials.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-8 rounded-3xl border-3 border-[#2D2926] flex flex-col justify-between transition-transform duration-300 ${
              item.highlight
                ? 'bg-[#FF5C35] text-white shadow-[8px_8px_0_#2D2926] -rotate-1 hover:rotate-0'
                : 'bg-white text-[#2D2926] shadow-[6px_6px_0_#2D2926] hover:-translate-y-1'
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span
                  className={`font-['Space_Mono'] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    item.highlight
                      ? 'bg-white text-[#2D2926] border-[#2D2926]'
                      : 'bg-[#FFFEF2] text-[#FF5C35] border-[#FF5C35]'
                  }`}
                >
                  {item.badge}
                </span>
                <span className="font-['Space_Mono'] text-xs font-bold opacity-70">
                  {item.num}
                </span>
              </div>

              <h3 className="font-['Gaegu'] text-4xl sm:text-5xl font-bold leading-none mb-4">
                {item.name}
              </h3>

              <p
                className={`font-['Inter'] text-base mb-8 font-normal leading-relaxed ${
                  item.highlight ? 'text-white/90' : 'text-[#2D2926]/75'
                }`}
              >
                {item.desc}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#2D2926]/10 pt-6">
              <div className="font-['Gaegu'] text-4xl font-bold">
                {item.price}
              </div>
              <a
                href="#contact"
                className={`btn-playful text-xl py-2 px-6 ${
                  item.highlight ? 'bg-white text-[#2D2926] hover:bg-[#FFFEF2] hover:text-[#FF5C35]' : ''
                }`}
              >
                Order
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


