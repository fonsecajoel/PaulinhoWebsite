import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const materials = [
  {
    name: "Granito Negro Absoluto",
    use: "Arte Funerária & Exteriores",
    origin: "Seleção Premium",
    description: "O granito mais denso da nossa coleção. Polimento espelhado que resiste décadas sem perder brilho.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Quartzito Taj Mahal",
    use: "Cozinhas de Alta Gama",
    origin: "Coleção Exótica",
    description: "Raro e majestoso. A alma do mármore com a resistência superior. A escolha definitiva para quem quer o melhor.",
    image: "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Mármore de Estremoz",
    use: "Interiores de Luxo",
    origin: "Portugal Heritage",
    description: "O 'Ouro Branco' português. Grão fino, pureza absoluta. Usado em palácios e monumentos há séculos.",
    image: "https://images.unsplash.com/photo-1590059132718-502194898005?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Materials() {
  return (
    <section id="materiais" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24">
          
          <div className="lg:col-span-1 flex flex-col justify-start lg:sticky lg:top-32 h-fit">
            <span className="label text-[var(--gold)] text-xs uppercase tracking-[0.2em] font-bold block mb-4">
              A Coleção
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-[var(--stone-dark)] mb-6">
              Matéria-Prima<br />
              <span className="text-[var(--gold)] italic font-light">Exclusiva</span>
            </h2>
            <p className="text-[var(--muted-foreground)] font-light font-sans leading-relaxed mb-10 text-base">
              Selecionamos criteriosamente blocos nas melhores pedreiras nacionais e internacionais. Cada chapa é uma obra de arte natural, única em veios, texturas e personalidade, esperando o seu projeto para ganhar vida.
            </p>
            <a href="#materiais" className="btn-ghost group w-fit inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold text-[var(--stone-dark)] hover:text-[var(--gold)] transition-colors border-b border-[var(--stone-dark)] hover:border-[var(--gold)] pb-2">
              Ver Todos os Materiais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((mat, i) => (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group flex flex-col h-full bg-[var(--cream)] p-4 hover:shadow-2xl hover:shadow-[var(--stone-dark)]/5 transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--stone-dark)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)] border border-[var(--gold)]/30 px-2 py-1">
                      {mat.use}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] italic">
                      {mat.origin}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading text-[var(--stone-dark)] mb-4 leading-tight line-clamp-2">
                    {mat.name}
                  </h3>
                  
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed font-light mb-8 flex-grow line-clamp-4">
                    {mat.description}
                  </p>
                  
                  <a href="#contacto" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[var(--gold)] hover:text-[var(--stone-dark)] transition-colors mt-auto w-fit">
                    Pedir Amostra <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
