import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto">
      <div className="bg-[var(--stone-dark)] py-24 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="font-sans text-lg text-white/60">
              Resposta em menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-[var(--cream)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="mb-12">
                <img src="/logo.png" alt="GraniGonçalves Logo" className="h-10 w-auto mb-6" />
                <h3 className="font-heading text-3xl text-[var(--stone-dark)] mb-4">
                  GraniGonçalves, Lda
                </h3>
                <p className="font-sans text-[var(--stone-dark)]/70 max-w-md leading-relaxed">
                  Especialistas na transformação e aplicação de pedra natural, com foco no detalhe e acabamento de excelência.
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="font-sans text-[var(--stone-dark)]/80">
                    Tv. Outeiro Gordo, Nº 8 — Ulmeiro,<br/>2495-190 Sta. Catarina da Serra
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[var(--gold)] shrink-0" />
                  <a href="tel:917305620" className="font-sans text-[var(--stone-dark)]/80 hover:text-[var(--gold)] transition-colors">
                    917 305 620
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0" />
                  <a href="mailto:geral@granigoncalves.pt" className="font-sans text-[var(--stone-dark)]/80 hover:text-[var(--gold)] transition-colors">
                    geral@granigoncalves.pt
                  </a>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="font-sans text-[var(--stone-dark)]/80">
                    Seg – Sex: 8h–18h | Sáb: 8h–13h
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href="https://wa.me/351917305620" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 font-sans uppercase tracking-[0.1em] text-sm hover:bg-[#20b858] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 border border-[var(--border)] shadow-sm"
            >
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full bg-transparent border-b border-[var(--border)] py-4 text-sm font-sans text-[var(--stone-dark)] focus:border-[var(--gold)] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[var(--border)] py-4 text-sm font-sans text-[var(--stone-dark)] focus:border-[var(--gold)] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full bg-transparent border-b border-[var(--border)] py-4 text-sm font-sans text-[var(--stone-dark)] focus:border-[var(--gold)] outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <select 
                    className="w-full bg-transparent border-b border-[var(--border)] py-4 text-sm font-sans text-[var(--stone-dark)] focus:border-[var(--gold)] outline-none transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Tipo de serviço</option>
                    <option value="cozinha">Cozinha / Casa de banho</option>
                    <option value="funeraria">Arte Funerária</option>
                    <option value="arquitetura">Arquitetura / Decoração</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full bg-transparent border-b border-[var(--border)] py-4 text-sm font-sans text-[var(--stone-dark)] focus:border-[var(--gold)] outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div className="mt-4">
                  <button type="submit" className="btn-gold w-full flex justify-center items-center">
                    Enviar Pedido de Orçamento
                  </button>
                  <p className="text-center font-sans text-xs text-[var(--muted-foreground)] mt-4">
                    Os seus dados estão seguros connosco e nunca serão partilhados.
                  </p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}