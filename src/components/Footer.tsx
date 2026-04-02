const Footer = () => (
  <footer className="bg-charcoal px-[6vw] py-10 flex flex-wrap items-center justify-between gap-5 border-t border-primary/15">
    <div className="font-serif text-base text-cream tracking-[0.12em] uppercase">
      Dra. <span className="text-primary">Isabella Tovar</span>
    </div>
    <div className="text-[0.68rem] text-cream/35 tracking-wider text-right">
      © {new Date().getFullYear()} — Todos os direitos reservados
    </div>
  </footer>
);

export default Footer;
