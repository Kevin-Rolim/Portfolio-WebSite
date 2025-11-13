import { Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="w-5 h-5" />
            <span>© 2025 Portfolio. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>usando React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
