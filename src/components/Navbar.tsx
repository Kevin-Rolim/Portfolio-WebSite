import { Code2 } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
          >
            <Code2 className="w-6 h-6" />
            <span className="font-bold text-xl">Portfolio</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-smooth font-medium"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
