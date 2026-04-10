import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    label: "O Coração da sua Casa",
    title: "Cozinhas & Casas de Banho",
    description: "Criamos bancadas e revestimentos onde a funcionalidade diária encontra a nobreza e resistência da pedra natural.",
    highlights: ["Bancadas sob medida", "Acabamento polido/escovado", "Instalação incluída", "Garantia 5 anos"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=900",
    cta: "Ver Exemplos"
  },
  {
    number: "02",
    label: "Memória que Perdura",
    title: "Arte Funerária",
    description: "Desenhamos campas e mausoléus com a dignidade e o respeito que a memória exige, unindo tradição e precisão.",
    highlights: ["Granito nacional e importado", "Gravação a laser", "Personalização total", "Entrega e colocação"],
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=900",
    cta: "Saber Mais"
  },
  {
    number: "03",
    label: "Espaços de Prestígio",
    title: "Arquitetura & Decoração",
    description: "Revestimentos, pavimentos e escadas que definem ambientes de luxo, transformando espaços através da tradição do mármore.",
    highlights: ["Revestimentos interiores", "Pavimentos & escadas", "Projetos à medida", "Apoio técnico"],
    image: "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=900",
    cta: "Falar com Especialista"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[var(--cream)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="label text-[var(--gold)] text-xs uppercase tracking-[0.2em] font-bold block mb-4">
              A Nossa Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[var(--stone-dark)]">
              Serviços de Excelência<br />
              <span className="text-[var(--gold)] italic font-light">em Pedra Natural</span>
            </h2>
          </div>
          <a href="#contacto" className="btn-gold px-8 py-4 bg-[var(--gold)] text-white hover:bg-[var(--gold-light)] transition-colors inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
            Pedir Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center group"
            >
              <div className="md:col-span-1 flex items-start h-full">
                <span className="text-5xl lg:text-7xl font-heading font-light text-[var(--border)] group-hover:text-[var(--gold)] transition-colors duration-700">
                  {service.number}
                </span>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-center">
                <span className="text-[var(--gold)] text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold mb-3 block">
                  {service.label}
                </span>
                <h3 className="text-3xl lg:text-4xl font-heading text-[var(--stone-dark)] mb-6">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-base font-sans font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <ul className="flex flex-col gap-3 mb-10">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--stone-dark)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-70" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <a href="#contacto" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] font-semibold text-[var(--gold)] hover:text-[var(--stone-dark)] transition-colors w-fit">
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="md:col-span-7 h-full w-full">
                <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden w-full relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
