import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: About Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-3 border-[#2D2926] shadow-[8px_8px_0_#2D2926] rounded-3xl p-8 sm:p-12"
        >
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-3 bg-[#FFFEF2] inline-block px-3 py-1 rounded-full border border-[#2D2926]">
            [ Since 2016 ]
          </div>
          <h2 className="font-['Gaegu'] text-5xl sm:text-6xl font-bold text-[#2D2926] mb-6">
            About Cafe King
          </h2>

          <div className="space-y-4 font-['Inter'] text-base text-[#2D2926]/80 font-normal leading-relaxed mb-8">
            <p>
              Welcome to <strong className="text-[#FF5C35] font-bold">Cafe King</strong> — your premier destination in Ahilyanagar for fresh juices, handcrafted burgers, cheesy pizzas, toasted sandwiches, and vibrant mocktails.
            </p>
            <p>
              Founded in 2016 with a commitment to quality and hospitality, we prepare every order with locally sourced ingredients, crafted fresh daily in our hygienic kitchen.
            </p>
            <p>
              Whether you're stopping by for a quick frappe, catching up with friends, or grabbing dinner with family, Cafe King offers an unmatchable ambience and memorable taste.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#2D2926]/10">
            <div className="bg-[#FFFEF2] border border-[#2D2926] p-3 rounded-xl text-center">
              <div className="font-['Space_Mono'] text-[0.65rem] font-bold text-[#FF5C35] uppercase mb-1">01</div>
              <div className="font-['Gaegu'] text-xl font-bold text-[#2D2926]">Fresh Ingredients</div>
            </div>
            <div className="bg-[#FFFEF2] border border-[#2D2926] p-3 rounded-xl text-center">
              <div className="font-['Space_Mono'] text-[0.65rem] font-bold text-[#FF5C35] uppercase mb-1">02</div>
              <div className="font-['Gaegu'] text-xl font-bold text-[#2D2926]">100% Hygienic</div>
            </div>
            <div className="bg-[#FFFEF2] border border-[#2D2926] p-3 rounded-xl text-center">
              <div className="font-['Space_Mono'] text-[0.65rem] font-bold text-[#FF5C35] uppercase mb-1">03</div>
              <div className="font-['Gaegu'] text-xl font-bold text-[#2D2926]">Cozy Vibes</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] sm:h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
            alt="Cafe King Interior"
            className="w-full h-full object-cover rounded-3xl border-3 border-[#2D2926] shadow-[12px_12px_0_rgba(45,41,38,0.12)] rotate-1"
          />
        </motion.div>
      </div>
    </section>
  );
}


