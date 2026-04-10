import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernandes, Lisboa",
    text: "A bancada da minha cozinha transformou completamente o espaço. O acabamento é perfeito e a equipa foi excecional do início ao fim.",
    role: "Particular"
  },
  {
    name: "Arq. João Rodrigues",
    text: "Trabalhamos com a GraniGonçalves em vários projetos de habitação de luxo. A qualidade e o cumprimento de prazos são inigualáveis.",
    role: "Arquiteto, Lisboa"
  },
  {
    name: "Beatriz Costa",
    text: "O memorial que criaram para o meu pai ficou exactamente como eu sonhei. Com muito carinho e profissionalismo.",
    role: "Particular, Coimbra"
  }
];

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <span className="label mb-4 block">O Que Dizem os Clientes</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--stone-dark)]">
            Satisfação Garantida <span className="text-[var(--gold)] italic">em cada Projeto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-[var(--border)] flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-[var(--gold)] text-2xl tracking-widest mb-8">
                  ★★★★★
                </div>
                <p className="font-heading italic text-[22px] leading-relaxed text-[var(--stone-dark)] mb-10">
                  "{t.text}"
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="w-12 h-[1px] bg-[var(--border)] mb-6"></div>
                <h4 className="font-sans uppercase tracking-[0.2em] text-sm text-[var(--stone-dark)] font-medium mb-2">
                  {t.name}
                </h4>
                <div className="flex items-center gap-2 text-xs font-sans text-[var(--muted-foreground)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>Cliente verificado • {t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 lg:p-12 border border-[var(--border)] w-full flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="font-heading text-2xl md:text-3xl text-[var(--stone-dark)] text-center md:text-left">
            Junte-se a mais de 1 200 clientes satisfeitos
          </p>
          <a href="#contacto" className="btn-gold whitespace-nowrap text-center">
            Pedir Orçamento Grátis
          </a>
        </motion.div>

      </div>
    </section>
  );
}