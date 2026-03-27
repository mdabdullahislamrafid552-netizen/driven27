/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { ParallaxBreak } from './components/ParallaxBreak';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileFloatingCTA } from './components/MobileFloatingCTA';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <ParallaxBreak />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
