import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Full Exterior + Ceramic Wax",
      desc: "Deep wash, decontamination, and premium ceramic wax for ultimate protection and shine.",
      price: "From $80",
      img: "https://www.infinitywax.com/cdn/shop/articles/preparing-for-ceramic-coating-application-6190669_1000x.png?v=1771943452"
    },
    {
      title: "Interior Deep Cleaning",
      desc: "Seats, carpets, trim, and vents meticulously cleaned and conditioned.",
      price: "Contact for Quote",
      img: "https://cdn.shopify.com/s/files/1/0797/2968/8869/files/ROuxmtrwMpGAtaOSA5bmGOWdH8fcDipRjm9a6MSu.png?v=1708952008&width=1620&height=1080"
    },
    {
      title: "Full Vehicle Detail",
      desc: "The ultimate package. Complete interior and exterior restoration.",
      price: "Contact for Quote",
      img: "https://www.jimscardetailingmelbourne.com.au/wp-content/uploads/2024/03/Full-Detail-1.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-24">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-xl text-lg">Premium detailing packages tailored to your vehicle's needs. We bring the shop to your driveway.</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
        {services.map((service, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            key={i}
            className="min-w-[85vw] md:min-w-0 snap-center relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] border border-white/10"
          >
            <img 
              src={service.img} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="glass inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                {service.price}
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-6">{service.desc}</p>
              <a href="tel:3054977199" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors w-fit">
                Book Now <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
