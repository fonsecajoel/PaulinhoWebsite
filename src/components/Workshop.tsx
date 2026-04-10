import { motion } from "motion/react";

export default function Workshop() {
  return (
    <section id="oficina" className="py-32 bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-heading mb-8">A Oficina</h2>
            <p className="text-sm text-white/40 uppercase tracking-[0.3em] leading-loose max-w-md">
              Onde a precisão industrial encontra o toque humano. Cada peça é finalizada à mão em Santa Catarina, Ulmeiro, garantindo a alma da pedra natural.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="aspect-video overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Nossa Oficina"
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
