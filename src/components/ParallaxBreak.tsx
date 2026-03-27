import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ParallaxBreak = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="h-[60vh] md:h-[80vh] relative overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <img 
          src="https://cdn.prod.website-files.com/5ce681ae5375caf5729444b1/63eaaeb975600d0144baefb1_car-detailing-houston-4.jpg" 
          alt="Detailing Close up" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-glow">Perfection<br/>In Details</h2>
      </div>
    </section>
  );
};
