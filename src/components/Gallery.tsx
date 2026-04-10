import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590059132718-502194898005?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-24">
          <h2 className="text-5xl font-heading mb-4">Galeria</h2>
          <div className="w-12 h-px bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 cursor-crosshair"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
