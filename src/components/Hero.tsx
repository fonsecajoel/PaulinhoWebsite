import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Shield, Award, Clock } from "lucide-react";

const stats = [
  { value: "25+", label: "Anos de Experiência" },
  { value: "1 200+", label: "Obras Concluídas" },
  { value: "100%", label: "Satisfação Garantida" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--stone-dark)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1800')",
          opacity: 0.18,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,22,20,0.7)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="label" style={{ color: "var(--gold)" }}>
              Mármores &amp; Granitos — Desde 1999
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-white mb-6 leading-[0.95]"
            style={{ fontSize: "clamp(56px, 9vw, 110px)", fontWeight: 300 }}
          >
            A Pedra Certa,
            <br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
              no Lugar Certo.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base leading-relaxed mb-12 max-w-xl"
            style={{ color: "rgba(249,247,244,0.6)", fontWeight: 300 }}
          >
            Transformamos mármore e granito em peças únicas para cozinhas, casas de banho,
            memoriais e arquitetura de prestígio. Trabalho artesanal com rigor industrial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contacto" className="btn-gold">
              Pedir Orçamento Grátis
              <ArrowRight size={14} />
            </a>
            <a href="#servicos" className="btn-ghost-light">
              Ver Serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 mt-10 flex-wrap"
          >
            {[
              { icon: Shield, text: "Garantia de 5 Anos" },
              { icon: Award, text: "Qualidade Certificada" },
              { icon: Clock, text: "Orçamento em 24h" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} style={{ color: "var(--gold)" }} />
                <span
                  className="font-sans text-[11px] tracking-[0.12em] uppercase"
                  style={{ color: "rgba(249,247,244,0.5)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 grid grid-cols-3 gap-0 border border-white/10 divide-x divide-white/10 max-w-xl"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="px-6 py-6">
              <div
                className="font-heading mb-1"
                style={{ fontSize: "42px", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}
              >
                {value}
              </div>
              <div
                className="font-sans text-[10px] tracking-[0.18em] uppercase"
                style={{ color: "rgba(249,247,244,0.4)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="font-sans text-[9px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(249,247,244,0.3)" }}
        >
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: "rgba(249,247,244,0.3)" }} />
      </motion.div>
    </section>
  );
}
