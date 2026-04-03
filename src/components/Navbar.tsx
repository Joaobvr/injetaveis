import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5 bg-background/88 backdrop-blur-xl border-b border-primary/15">
      <div className="font-serif text-[1.15rem] font-medium tracking-[0.12em] uppercase text-foreground">
        Dra. <span className="text-primary">Isabella Tovar</span>
      </div>
      <Button variant="goldOutline" size="lg" asChild>
        <a href="https://wa.me/5562996093076" target="_blank" rel="noopener noreferrer">Agendar consulta</a>
      </Button>
    </nav>
  );
};

export default Navbar;
