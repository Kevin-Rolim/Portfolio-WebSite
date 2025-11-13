import {
  Code2,
  Sparkles,
  Zap,
  Rocket,
  Database,
} from "lucide-react"; 

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description:
        "Foco em React, Next.js e customização de código para atender às necessidades do cliente.",
    },
    {
      icon: Sparkles,
      title: "Modelagem 3D",
      description:
        "Estudando e criando modelos 3D e assets no Blender para projetos acadêmicos e portfólio.",
    },
    {
      icon: Zap,
      title: "Lógica & Sistemas",
      description:
        "Conhecimento em arquitetura de computadores e lógica de circuitos (Logisim).",
    },
    {
      icon: Rocket,
      title: "Solução de Problemas",
      description:
        "Uso de ferramentas de IA para agilidade e foco na resolução de problemas práticos.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-6">
                Sou <strong>estudante de Análise e Desenvolvimento de Sistemas (ADS)</strong>, 
                apaixonado por transformar ideias em soluções digitais. Meu foco é 
                aplicar o que aprendo na faculdade em projetos práticos.
              </p>
              <p className="text-lg text-muted-foreground">
                Já tive a oportunidade de <strong>desenvolver e entregar projetos reais</strong>, 
                utilizando ferramentas modernas como IA para agilizar a criação e meu 
                conhecimento em código para customizar o resultado final. Estou sempre 
                em busca de novos desafios para aprender e evoluir.
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-8 shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Tecnologias que Utilizo</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    React, Next.js & TypeScript
                  </span>
                </div>
                
                {/* === LINHA MODIFICADA === */}
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Node.js, Lógica SQL & Conceitos de ETL
                  </span>
                </div>
                {/* === FIM DA MODIFICAÇÃO === */}
                
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-medium">Blender (Modelagem 3D)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Logisim (Arquitetura de Comp.)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;