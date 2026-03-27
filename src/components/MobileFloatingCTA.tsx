import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export const MobileFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden flex gap-2"
        >
          <a href="tel:3054977199" className="flex-1 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-center text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-transform flex items-center justify-center gap-2">
            <Phone size={16} /> Call Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
