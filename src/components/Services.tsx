import { Globe, Smartphone, Database, Sparkles, Zap } from "lucide-react"; // <-- Removi o 'Code' e mantive 'Database'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description:
        "Criação de sites ágeis. Utilizo IA para gerar a base e foco na customização avançada do código para um produto final único e alinhado ao cliente.",
      features: ["Customização de Código", "React & Next.js", "Sites Responsivos"],
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description:
        "Aplicações mobile e PWAs com experiência nativa e funcionalidade cross-platform.",
      features: ["React Native", "PWA", "App Store & Play Store"],
    },
    // --- CARD MODIFICADO ---
    // O card "APIs & Backend" foi substituído por este:
    {
      icon: Database, // Usando o ícone de 'Database' que você já tinha
      title: "Lógica de Dados & ETL",
      description:
        "Conhecimento em lógica SQL para consulta e manipulação de dados e compreensão de processos de ETL (Extract, Transform, Load).",
      features: ["Lógica SQL", "Conceitos de ETL", "Modelagem de Dados"],
    },
    // --- CARD "BANCO DE DADOS" REMOVIDO ---
    {
      icon: Sparkles,
      title: "Modelagem 3D (Blender)",
      description:
        "Criação de modelos e assets 3D no Blender para projetos acadêmicos, portfólio e visualizações.",
      features: ["Modelagem 3D", "Renderização", "Assets Criativos"],
    },
    {
      icon: Zap,
      title: "Arquitetura de Computadores",
      description:
        "Projetos e simulações de circuitos lógicos básicos utilizando Logisim, demonstrando conceitos fundamentais.",
      features: ["Logisim", "Circuitos Lógicos", "Sistemas Digitais"],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em desenvolvimento de software para transformar
              suas ideias em realidade
            </p>
          </div>

          {/* O grid agora tem 5 itens, o que se ajusta automaticamente */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-card p-8 rounded-xl shadow-card hover:shadow-glow transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;