/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Branches from "./components/Branches";
import Local from "./components/Local";
import Photos from "./components/Photos";
import Extras from "./components/Extras";
import Inscriptions from "./components/Inscriptions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-scout-green text-cream selection:bg-scout-yellow selection:text-scout-blue">
      {/* Scroll Progress Bar in Scout Yellow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-scout-yellow z-[100] origin-left shadow-md"
        style={{ scaleX }}
      />
      
      {/* Sticky Navigation with 3-language switcher */}
      <Navbar />
      
      {/* Single Page Application Content */}
      <main>
        <Hero />
        <About />
        <Branches />
        <Local />
        <Photos />
        <Extras />
        <Contact />
        <Inscriptions />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
