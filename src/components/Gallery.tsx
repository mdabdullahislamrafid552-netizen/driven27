import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export const Gallery = () => {
  const images = [
    "https://qailotbnrtwyzhbwufvk.supabase.co/storage/v1/object/public/business_images/businesses/30541785-32b8-4653-9acf-9a91f7a83add/banner/1692ef99-5329-462a-9932-3313a01dd643.jpg?v=1774621695283",
    "https://qailotbnrtwyzhbwufvk.supabase.co/storage/v1/object/public/business_images/businesses/30541785-32b8-4653-9acf-9a91f7a83add/portfolio/7c15e732-7a38-4db1-99d2-dddaa1b8f526.jpg?v=1774621695283",
    "https://qailotbnrtwyzhbwufvk.supabase.co/storage/v1/object/public/business_images/businesses/30541785-32b8-4653-9acf-9a91f7a83add/portfolio/296172f3-69c9-4bf1-8f97-0e88eba5c1bc.jpg?v=1774621695283",
    "https://qailotbnrtwyzhbwufvk.supabase.co/storage/v1/object/public/business_images/businesses/30541785-32b8-4653-9acf-9a91f7a83add/portfolio/0bd5545f-186f-4a46-ab98-7d4db4e68ca3.jpg?v=1774621695283",
    "https://qailotbnrtwyzhbwufvk.supabase.co/storage/v1/object/public/business_images/businesses/30541785-32b8-4653-9acf-9a91f7a83add/portfolio/9a50673c-fc77-47d1-bba3-07be05501913.jpg?v=1774621695283"
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4">The Gallery</h2>
          <p className="text-gray-400 max-w-xl text-lg">Real results. Clean cars. See the transformation.</p>
        </div>
        <a href="https://instagram.com/driven27_" target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2 w-fit">
          <Instagram size={18} /> Follow Us
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {images.map((img, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i} 
            className={`relative group rounded-2xl overflow-hidden bg-white/5 ${i === 0 || i === 3 ? 'md:aspect-[4/3]' : 'md:aspect-[3/4]'} aspect-square`}
          >
            <img 
              src={img} 
              alt="Gallery" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
