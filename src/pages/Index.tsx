// src/pages/Index.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects"; 
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // 2. Verifique se TODOS os componentes estão sendo usados aqui
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects /> 
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;