// src/components/Projects.tsx

import { useState } from "react";
// 1. Importe 'Play' e os componentes do Dialog
import { ExternalLink, Github, Sparkles, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Verifique se este caminho @/ está correto

// Importamos os dados e tipos do nosso arquivo separado
import { projects, type ProjectCategory } from "../lib/projectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");

  // 2. Crie um estado para controlar o modal
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  // O array de categorias ainda vive aqui, pois ele é parte do UI (os botões de filtro)
  const categories: ProjectCategory[] = [
    "Todos",
    "Sites",
    "Código",
    "Modelagem 3D",
    "Apps",
  ];

  // A lógica de filtro
  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi, desde sites para
              clientes até projetos acadêmicos
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-smooth ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* === PROJETOS REAIS === */}
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* === 3. BOTÕES ATUALIZADOS === */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-accent transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Ver Projeto
                        </span>
                      </a>
                    )}

                    {/* Botão "Rodar Simulador" (só aparece se a URL existir no projectsData.ts) */}
                    {project.modalIframeUrl && (
                      <button
                        onClick={() => setModalUrl(project.modalIframeUrl)}
                        className="flex items-center gap-2 text-primary hover:text-accent transition-smooth"
                      >
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Rodar Simulador
                        </span>
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* === CARD "EM BREVE" === */}
            <div
              className="gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group animate-fade-in"
              style={{ animationDelay: `${filteredProjects.length * 0.1}s` }}
            >
              {/* Bloco "falso" de imagem para manter a altura */}
              <div className="relative overflow-hidden w-full h-48 flex items-center justify-center bg-secondary/50">
                <Sparkles className="w-12 h-12 text-muted-foreground/50 group-hover:text-primary transition-smooth" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  Novos projetos a caminho...
                </h3>
                <p className="text-muted-foreground mb-4">
                  Estou sempre estudando e desenvolvendo. Volte em breve para
                  ver as novidades! :)
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">
                    Em Produção
                  </span>
                </div>
              </div>
            </div>
            {/* === Fim do Card "Em Breve" === */}
          </div>
        </div>
      </div>

      {/* === 4. O COMPONENTE DE MODAL (DIALOG) === */}
      <Dialog
        open={!!modalUrl}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setModalUrl(null); // Fecha o modal
          }
        }}
      >
        <DialogContent className="max-w-6xl w-full h-[80vh] p-0 pt-10">
          <DialogHeader className="px-6">
            <DialogTitle>Simulador Logisim-Evolution</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full p-6 pt-0">
            {modalUrl && ( // Só renderiza o iframe se a URL existir
              <iframe
                src={modalUrl}
                width="100%"
                height="100%"
                style={{ border: "1px solid #333", borderRadius: "8px" }}
                title="Simulador Logisim"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;