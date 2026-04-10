import { motion } from "motion/react";

const materials = [
  {
    name: "Granito Negro Absoluto",
    use: "Excelência em Memoriais",
    origin: "Premium Selection",
    description: "A pedra mais densa e profunda da nossa coleção. O seu polimento espelhado é inalterável, resistindo a décadas de exposição com a mesma dignidade do primeiro dia.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Quartzito Taj Mahal",
    use: "Ouro das Cozinhas",
    origin: "Exotic Collection",
    description: "Raro e majestoso. Oferece a alma translúcida do mármore com a dureza superior do diamante. A escolha definitiva para bancadas que são verdadeiras joias arquitetónicas.",
    image: "https://images.unsplash.com/photo-1600607687960-4a213950928d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Mármore de Estremoz",
    use: "Herança Clássica",
    origin: "Portugal Heritage",
    description: "O 'Ouro Branco' português. Uma pedra de grão fino e pureza absoluta, utilizada há séculos em palácios e monumentos que definem a nossa história.",
    image: "https://images.unsplash.com/photo-1590059132718-502194898005?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Materials() {
  return (
    <section id="materiais" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="mb-24">
          <h2 className="text-5xl font-heading mb-4">Matéria-Prima</h2>
          <p className="text-sm text-black/40 uppercase tracking-[0.4em]">A Seleção GraniGonçalves</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden mb-10 relative">
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">
                    {mat.use}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-black/20 italic">
                    {mat.origin}
                  </span>
                </div>
                <h3 className="text-2xl font-heading pt-2">{mat.name}</h3>
                <p className="text-sm text-black/50 leading-relaxed font-light">
                  {mat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
