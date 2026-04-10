import { motion } from "motion/react";
import { ArrowRight, Eye } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590059132718-502194898005?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <section id="galeria" className="pt-24 md:pt-32 bg-[var(--cream)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="label text-[var(--gold)] text-xs uppercase tracking-[0.2em] font-bold block mb-4">
              Portfólio Exclusivo
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--stone-dark)]">
              O Nosso <span className="text-[var(--gold)] italic font-light">Trabalho</span>
            </h2>
          </div>
          <a href="#contacto" className="btn-ghost px-6 py-3 border-b-2 border-[var(--stone-dark)] text-[var(--stone-dark)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
            Pedir Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 aspect-[16/9] md:aspect-auto overflow-hidden relative group cursor-pointer"
          >
            <img
              src={images[0]}
              alt="Gallery highlight"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[var(--stone-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white text-sm uppercase tracking-widest font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Eye className="w-4 h-4" /> Ver Detalhe
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1 aspect-[4/5] overflow-hidden relative group cursor-pointer"
          >
            <img
              src={images[1]}
              alt="Gallery portrait"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[var(--stone-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white text-sm uppercase tracking-widest font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Eye className="w-4 h-4" /> Ver Detalhe
              </span>
            </div>
          </motion.div>

          {images.slice(2, 5).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="col-span-1 aspect-square md:aspect-[4/5] overflow-hidden relative group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${i + 3}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[var(--stone-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-widest font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Eye className="w-4 h-4" /> Ver Detalhe
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[var(--stone-dark)] py-20 px-6 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white text-center md:text-left max-w-xl">
            Quer ver o seu projeto <span className="text-[var(--gold)] italic">em pedra natural?</span>
          </h3>
          <a href="#contacto" className="btn-gold px-8 py-5 bg-[var(--gold)] text-white hover:bg-[var(--gold-light)] transition-colors inline-flex items-center gap-3 text-sm uppercase tracking-wider font-semibold group flex-shrink-0">
            Solicitar Orçamento Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
