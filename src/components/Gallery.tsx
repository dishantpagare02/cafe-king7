import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800', alt: 'Coffee Art', code: 'IMG [01]', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800', alt: 'Artisanal Sandwiches', code: 'IMG [02]' },
  { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800', alt: 'Birthday Party Setup', code: 'IMG [03]' },
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', alt: 'Gourmet Burgers', code: 'IMG [04]' },
  { src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800', alt: 'Cold Mocktails', code: 'IMG [05]' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800', alt: 'Birthday Party Setup', code: 'IMG [06]', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800', alt: 'Party Celebration Area', code: 'IMG [07]' },
  { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800', alt: 'Good Times', code: 'IMG [08]' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-widest text-[#FF5C35] mb-2 bg-white inline-block px-3 py-1 rounded-full border border-[#2D2926]">
            [ Visual Moments ]
          </div>
          <h2 className="font-['Gaegu'] text-6xl sm:text-7xl font-bold text-[#2D2926]">
            Our Gallery
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative overflow-hidden border-2 border-[#2D2926] shadow-[4px_4px_0_#2D2926] rounded-2xl group bg-white ${image.className || ''}`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="font-['Space_Mono'] text-[0.65rem] font-bold uppercase tracking-wider text-[#FF5C35] bg-white px-2 py-0.5 rounded inline-block w-max mb-1 border border-[#2D2926]">
                {image.code}
              </span>
              <span className="font-['Gaegu'] font-bold text-2xl text-white">
                {image.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


