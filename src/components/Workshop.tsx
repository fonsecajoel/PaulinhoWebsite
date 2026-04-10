import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Consulta Gratuita",
    desc: "Deslocamo-nos ao local ou recebemos na oficina"
  },
  {
    title: "Projeto & Orçamento",
    desc: "Em 24h enviamos proposta detalhada sem compromisso"
  },
  {
    title: "Produção Artesanal",
    desc: "Cada peça trabalhada à mão na nossa oficina em Ulmeiro"
  },
  {
    title: "Entrega & Instalação",
    desc: "Colocação profissional com garantia de 5 anos"
  }
];

const credentials = [
  "Equipa técnica especializada com mais de 25 anos de experiência",
  "Maquinaria CNC de última geração para corte de precisão",
  "Instalação própria — sem subcontratação",
  "Atendimento personalizado do projeto à entrega"
];

export default function Workshop() {
  return (
    <section id="oficina" className="bg-[var(--stone-dark)] text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-[var(--border)]/20">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="text-[var(--gold)] font-heading text-4xl mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-2xl mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">
              A Nossa Oficina
            </h2>
            <p className="font-sans text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
              Com mais de 25 anos de dedicação ao artesanato em pedra natural, combinamos técnicas tradicionais com a mais alta tecnologia em Ulmeiro.
            </p>

            <ul className="space-y-6 mb-12">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="font-sans text-lg text-white/80">{cred}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-gold text-center">
                Visitar a Oficina
              </a>
              <a href="tel:917305620" className="btn-ghost-light text-center">
                Falar por WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[700px] w-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="A Nossa Oficina em Ulmeiro"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}