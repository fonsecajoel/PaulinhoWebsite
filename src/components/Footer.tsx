export default function Footer() {
  return (
    <footer className="bg-white text-black py-24 border-t border-black/5">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="GraniGonçalves" className="h-10 w-auto object-contain" />
              <span className="text-lg font-heading tracking-[0.2em] uppercase">
                GraniGonçalves
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 mt-2">
              Santa Catarina / Ulmeiro
            </p>
          </div>
          
          <div className="flex space-x-12">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity">Facebook</a>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-black/5 flex justify-between items-center text-[8px] uppercase tracking-[0.4em] text-black/20">
          <p>© 2026 GraniGonçalves</p>
          <p>Artesanato em Pedra Natural</p>
        </div>
      </div>
    </footer>
  );
}
