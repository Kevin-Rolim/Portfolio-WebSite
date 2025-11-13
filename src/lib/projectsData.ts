// src/lib/projectsData.ts

// 1. Exportamos os tipos para que o Projects.tsx possa usá-los
export type ProjectCategory =
  | "Todos"
  | "Sites"
  | "Código"
  | "Modelagem 3D"
  | "Apps";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  modalIframeUrl?: string;
}

export const projects: Project[] = [
  // == SITES ==
  {
    title: "Site para Estúdio de Lash Designer",
    description:
      "Site responsivo (cliente real) focado em agendamentos. Base gerada por IA e customizada com código.",
    category: "Sites",
    image: "/assets/portfolio/lashDesignerSite.png",
    tags: ["Next.js", "TailwindCSS", "Customização"],
    liveUrl: "https://lash-designer-site.onrender.com",
    githubUrl: "#",
  },
  {
    title: "Website Portfolio de produtos",
    description:
      "Página de captura (cliente real) para a divulgação de produtos de crochê, com design adaptado do cliente.",
    category: "Sites",
    image:
      "/assets/portfolio/delicattaCrocheSite.png",
    tags: ["React", "TypeScript", "Formulário"],
    liveUrl: "#",
    githubUrl: "#",
  },

  // == CÓDIGO ==
  {
    title: "Simulador de Circuito (Logisim) - Processador simples 6bits",
    description:
      "Projeto acadêmico de arquitetura de computadores simulando um processador simples.",
    category: "Código",
    image: "/assets/portfolio/processador6Bits.png",
    tags: ["Logisim", "Arquitetura", "Processador"],
    githubUrl: "https://github.com/Kevin-Rolim/Processadores.git",
    modalIframeUrl:
      "https://logisim-evolution.github.io/logisim-evolution/#!/simulator?circuitURL=https://gist.githubusercontent.com/Kevin-Rolim/281bd38b3fd2aa47138bcfb0b0f6d78e/raw/4b59da7523b518b7277bbf8b49451fc52e7ed465/processador.circ",
  },
  /* {
    title: "API REST para Blog",
    description:
      "Backend de estudo para um sistema de blog, com endpoints para CRUD de posts, usuários e autenticação JWT.",
    category: "Código",
    image:
      "https://images.unsplash.com/photo-1517694712202-1409bc1cb763?w=800&h=600&fit=crop",
    tags: ["Node.js", "Express", "SQLite"],
    githubUrl: "#",
  }, */

  // == MODELAGEM 3D ==
  /* {
    title: "Cena 3D 'Quarto Low Poly'",
    description:
      "Estudo de modelagem e renderização no Blender, criando um cenário isométrico 'low poly' com iluminação.",
    category: "Modelagem 3D",
    image:
      "https://images.unsplash.com/photo-1571757767134-c7f05c1092e0?w=800&h=600&fit=crop",
    tags: ["Blender", "Modelagem 3D", "Low Poly"],
    liveUrl: "#",
  }, */

  // == APPS ==
  /* {
    title: "Gerenciador de Tarefas (App)",
    description:
      "Estudo de React Native para um app de lista de tarefas com persistência local (AsyncStorage).",
    category: "Apps",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["React Native", "Expo", "AsyncStorage"],
    githubUrl: "#",
  }, */
];
