import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-4 md:mb-6">Book Your<br/>Detail</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">Ready for a showroom finish? DM or call to schedule your detail or ask questions. Serving Miami & surrounding areas.</p>
          
          <div className="space-y-8">
            <a href="tel:3054977199" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Call Us</div>
                <div className="text-2xl font-medium">305-497-7199</div>
              </div>
            </a>
            
            <a href="mailto:driven27adan@gmail.com" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Email</div>
                <div className="text-xl font-medium">driven27adan@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Location</div>
                <div className="text-xl font-medium">Miami, Florida</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="noise-bg"></div>
          <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors" placeholder="Name" />
              <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white">Name</label>
            </div>
            
            <div className="relative mt-4">
              <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors" placeholder="Phone" />
              <label htmlFor="phone" className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white">Phone</label>
            </div>

            <div className="relative mt-4">
              <input type="text" id="vehicle" className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors" placeholder="Vehicle Make/Model" />
              <label htmlFor="vehicle" className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white">Vehicle Make/Model</label>
            </div>

            <div className="relative mt-4 mb-8">
              <textarea id="message" rows={3} className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors resize-none" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white">How can we help?</label>
            </div>

            <button className="bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors active:scale-95">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
