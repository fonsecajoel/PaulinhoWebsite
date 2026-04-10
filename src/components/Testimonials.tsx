import { motion } from "motion/react";

const testimonials = [
  {
    name: "Maria Henriques",
    text: "A bancada da minha cozinha é o centro das atenções. O acabamento é perfeito.",
  },
  {
    name: "António Silva",
    text: "A precisão do corte e a qualidade da pedra são inigualáveis no mercado nacional.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-heading mb-8 leading-relaxed italic">"{t.text}"</p>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
