import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-tighter uppercase">Driven27</div>
        
        <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-500">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-gray-600 font-medium">
          © {new Date().getFullYear()} Driven27 Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
