import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Materiais", href: "#materiais" },
    { name: "Galeria", href: "#galeria" },
    { name: "A Empresa", href: "#oficina" },
    { name: "Testemunhos", href: "#testemunhos" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f9f7f4]/97 backdrop-blur-md shadow-[0_1px_0_rgba(26,22,20,0.10)] py-3"
            : "bg-[rgba(26,22,20,0.55)] backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="GraniGonçalves"
              className={`h-9 w-auto object-contain transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-heading text-base tracking-[0.12em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-[var(--stone-dark)]" : "text-white"
                }`}
              >
                GraniGonçalves
              </span>
              <span
                className={`font-sans text-[8px] tracking-[0.22em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-[var(--gold)]" : "text-[var(--gold-light)]"
                }`}
              >
                Mármores &amp; Granitos
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[var(--gold)] ${
                  scrolled ? "text-[var(--stone-mid)]" : "text-white/80"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:917305620"
              className={`flex items-center gap-2 font-sans text-[11px] tracking-[0.1em] transition-colors hover:text-[var(--gold)] ${
                scrolled ? "text-[var(--stone-mid)]" : "text-white/70"
              }`}
            >
              <Phone size={13} />
              917 305 620
            </a>
            <a href="#contacto" className="btn-gold" style={{ padding: "10px 24px" }}>
              Pedir Orçamento
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[var(--stone-dark)]" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: "var(--stone-dark)" }}
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <span className="font-heading text-base tracking-widest text-white uppercase">
                GraniGonçalves
              </span>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-0 mt-4 px-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-3xl text-white/80 hover:text-[var(--gold)] py-4 border-b border-white/10 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="px-6 pb-10 flex flex-col gap-3">
              <a
                href="tel:917305620"
                className="btn-ghost-light w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={14} />
                917 305 620
              </a>
              <a
                href="#contacto"
                className="btn-gold w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Pedir Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
