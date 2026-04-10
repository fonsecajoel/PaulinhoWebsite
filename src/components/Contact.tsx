import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-heading mb-12">Contacto</h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Localização</h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  Rua Principal, Santa Catarina <br />
                  2050-421 Ulmeiro, Portugal
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Digital</h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  geral@marmoresprestigio.pt <br />
                  +351 960 000 000
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-8">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:border-black outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:border-black outline-none transition-colors"
              />
              <textarea
                placeholder="Mensagem"
                className="w-full bg-transparent border-b border-black/10 py-4 text-sm focus:border-black outline-none transition-colors h-32 resize-none"
              />
              <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
