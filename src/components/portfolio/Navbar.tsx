import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImg from '../../img/logo.png';

const navLinks = [
  { href: "#profilo", label: "Profilo" },
  // { href: "#esperienza", label: "Esperienza" },
  { href: "#competenze", label: "Competenze" },
  { href: "#formazione", label: "Formazione" },
  { href: "#progetti", label: "Progetti" },
  { href: "#contatti", label: "Contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center" // Removi o gradient-text pois agora é uma imagem
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain" // Ajuste a altura (h-8) conforme necessário
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
            <ThemeToggle />
            <a
              href="/docs/Amanda-Carpenedo-CV.pdf" 
              download="Curriculo_Amanda_Carpenedo.pdf" 
              rel="noopener noreferrer"
            >
              <Button size="sm" className="gradient-bg hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </a>
            <a
              href="/docs/Lettera_Raccomandazione_Amanda_Carpenedo.pdf"
              download="Lettera_Raccomandazione_Amanda_Carpenedo.pdf"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4 mr-2" />
                Lettera
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <ThemeToggle />
                <Button className="gradient-bg flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Scarica CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
