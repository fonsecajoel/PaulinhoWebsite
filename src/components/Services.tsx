import { motion } from "motion/react";

const services = [
  {
    title: "Cozinhas de Autor",
    description: "Bancadas esculpidas com precisão cirúrgica, onde a funcionalidade encontra a nobreza da pedra natural.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Arte Funerária",
    description: "Memoriais que transcendem o tempo, desenhados com a dignidade e o respeito que a memória exige.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Arquitetura",
    description: "Revestimentos e elementos estruturais que definem espaços de luxo através da tradição do mármore.",
    image: "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=800",
  },
];


export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-24">
          <h2 className="text-5xl font-heading mb-4">Serviços</h2>
          <div className="w-12 h-px bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
