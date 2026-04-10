export default function Footer() {
  return (
    <footer className="bg-[var(--stone-dark)] pt-24 pb-12 border-t border-[var(--border)]/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8 mb-20">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="/logo.png" alt="GraniGonçalves Logo" className="h-8 w-auto object-contain" />
              <span className="font-heading text-xl text-white tracking-widest uppercase">
                GraniGonçalves
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/60 mb-8 max-w-sm">
              Especialistas em pedra natural com mais de 25 anos de experiência. Arte e precisão em cada projeto de habitação e decoração.
            </p>
            <address className="not-italic font-sans text-sm text-white/80 space-y-2">
              <p>Tv. Outeiro Gordo, Nº 8 — Ulmeiro</p>
              <p>2495-190 Sta. Catarina da Serra</p>
              <p className="pt-2">
                <a href="tel:917305620" className="hover:text-[var(--gold)] transition-colors">
                  (+351) 917 305 620
                </a>
              </p>
            </address>
          </div>

          <div className="md:justify-self-center">
            <h4 className="label text-white/80 mb-6 block">Serviços</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <a href="#servicos" className="hover:text-[var(--gold)] transition-colors">
                  Cozinhas & Casas de banho
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[var(--gold)] transition-colors">
                  Arte Funerária
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[var(--gold)] transition-colors">
                  Arquitetura
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[var(--gold)] transition-colors">
                  Pedir Orçamento
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="label text-white/80 mb-6 block">Empresa</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li>
                <a href="#oficina" className="hover:text-[var(--gold)] transition-colors">
                  A Nossa Oficina
                </a>
              </li>
              <li>
                <a href="#testemunhos" className="hover:text-[var(--gold)] transition-colors">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[var(--gold)] transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[var(--gold)] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-sans text-xs text-white/40">
          <p>© 2025 GraniGonçalves, Lda. Todos os direitos reservados.</p>
          <p>Desenvolvido com ♥ em Portugal</p>
        </div>
      </div>
    </footer>
  );
}