import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        <div className="noise-bg"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <MapPin size={16} className="text-white" />
          <span className="text-xs font-bold tracking-widest uppercase">Miami, Florida</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-6 text-glow"
        >
          Driven<br/>Detailing
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Professional mobile auto detailing. We come to you. Real results, clean cars.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="tel:3054977199" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors active:scale-95 flex items-center justify-center gap-2">
            <Phone size={18} /> Book Now
          </a>
          <a href="#services" className="w-full sm:w-auto glass text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors active:scale-95 flex items-center justify-center gap-2">
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};
