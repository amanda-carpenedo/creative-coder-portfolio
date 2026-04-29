import { Download, Github, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-sky to-sky-light bg-clip-text text-transparent"
            >
              Amanda Carpenedo
            </a>
            <p className="mt-4 text-background/70 text-sm">
              Full-Stack Developer & UX/UI Designer con una passione per creare
              esperienze digitali intuitive e performanti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <nav className="space-y-2">
              {[
                { href: "#profilo", label: "Profilo" },
                // { href: "#esperienza", label: "Esperienza" },
                { href: "#competenze", label: "Competenze" },
                { href: "#progetti", label: "Progetti" },
                { href: "#contatti", label: "Contatti" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Download CV & Social */}
          <div>
            <h4 className="font-semibold mb-4">Documenti</h4>
            <div className="space-y-3 mb-6 flex flex-col items-center md:items-start gap-3">
              <a
                href="/docs/Amanda-Carpenedo-CV.pdf"
                download="Curriculo_Amanda_Carpenedo.pdf"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="gradient-bg hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4 mr-2" />
                  Scarica CV
                </Button>
              </a>
              <a
                href="/docs/Lettera_Raccomandazione_Amanda_Carpenedo.pdf"
                download="Lettera_Raccomandazione_Amanda_Carpenedo.pdf"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                  <Download className="w-4 h-4 mr-2" />
                  Lettera di Raccomandazione
                </Button>
              </a>
            </div>

          

            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/amanda-carpenedo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amandacarpenedo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <p className="text-sm text-background/60 text-center">
            © {currentYear} Amanda Carpenedo. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
