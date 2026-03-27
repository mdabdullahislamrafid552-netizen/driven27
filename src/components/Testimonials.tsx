import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: "Michael R.", text: "Incredible attention to detail. My VW Passat looks better than the day I bought it. Highly recommend Driven27!" },
    { name: "Sarah T.", text: "Adan came right to my office in Miami. The interior deep clean on my Yukon was flawless. 5 stars." },
    { name: "David L.", text: "Professional, punctual, and the ceramic wax left a mirror finish. Best mobile detailer in South Florida." }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-12 md:mb-16 text-center">Client Reviews</h2>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {reviews.map((review, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              key={i}
              className="min-w-[85vw] md:min-w-0 snap-center glass p-8 md:p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} className="fill-white text-white" />)}
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black uppercase">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
