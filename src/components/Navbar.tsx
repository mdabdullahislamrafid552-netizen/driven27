import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-3 md:p-6">
        <div className="max-w-7xl mx-auto glass rounded-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://i.imgur.com/tsoBawN.png" alt="Driven27 Logo" className="w-16 md:w-20 h-auto object-contain" onError={(e) => { e.currentTarget.src = 'https://i.imgur.com/tsoBawN.jpg'; }} />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-gray-400 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-gray-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://instagram.com/driven27_" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="tel:3054977199" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors active:scale-95">
              Call Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 text-3xl font-black uppercase tracking-tighter">
              {['Services', 'Gallery', 'Reviews', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="hover:text-gray-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-8"
              >
                <a href="https://instagram.com/driven27_" target="_blank" rel="noreferrer"><Instagram size={28} /></a>
                <a href="tel:3054977199"><Phone size={28} /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
