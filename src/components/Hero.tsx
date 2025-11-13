import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero relative"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium">
              Disponível para novos projetos
            </div>
          </div>

          {/* --- TEXTO MODIFICADO --- */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Kevin Rolim
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estudante de Análise e Desenvolvimento de Sistemas. 
            Transformando ideias em soluções digitais funcionais e elegantes.
          </p>
          {/* --- FIM DA MODIFICAÇÃO --- */}

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-glow transition-smooth font-semibold text-lg"
            >
              Ver Projetos
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-smooth font-semibold text-lg"
            >
              Entre em Contato
            </button>
          </div>

          {/* --- LINKS CORRIGIDOS --- */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Kevin-Rolim/" // Corrigido
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-rolim" // Corrigido
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lucaskevin287@gmail.com" // Corrigido
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          {/* --- FIM DA CORREÇÃO --- */}
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;