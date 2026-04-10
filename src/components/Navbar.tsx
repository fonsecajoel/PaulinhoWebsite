import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Materiais", href: "#materiais" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/5" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="GraniGonçalves" className="h-10 w-auto object-contain" />
          <span className="text-lg font-heading tracking-[0.2em] uppercase">
            GraniGonçalves
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-medium hover:opacity-50 transition-opacity uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
