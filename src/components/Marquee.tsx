import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Marquee = () => {
  return (
    <div className="py-6 border-y border-white/10 overflow-hidden bg-black flex relative z-20">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap items-center gap-12 text-sm font-bold tracking-widest uppercase text-gray-400"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-2 text-white"><Star size={16} className="fill-white" /> 5.0★ Rating (16+ Reviews)</span>
            <span>VW, GMC & All Vehicles</span>
            <span>Mobile Service</span>
            <span>Miami & Surrounding Areas</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
