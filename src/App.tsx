/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import Workshop from "@/components/Workshop";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Gallery />
        <Workshop />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
