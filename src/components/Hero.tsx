import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <h1 className="text-7xl md:text-[120px] leading-[0.9] font-heading mb-8">
            Pedra <br />
            <span className="italic">Pura.</span>
          </h1>
          <p className="text-sm uppercase tracking-[0.4em] text-black/40 mb-12 max-w-md leading-relaxed">
            Artesanato em mármore e granito para espaços que exigem silêncio e sofisticação.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#contacto" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[80vh] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
            alt="Classic Stone Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-8 hidden md:block">
        <div className="flex items-center space-x-4 text-black/20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-vertical transform rotate-180">S. Catarina / Ulmeiro</span>
          <div className="h-16 w-px bg-black/10" />
        </div>
      </div>

      <div className="absolute bottom-12 right-8 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
