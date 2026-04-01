import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contatti" className="section-padding bg-dark-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contatti
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lavoriamo <span className="gradient-text">Insieme</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sono disponibile per opportunità di lavoro, progetti freelance e collaborazioni creative.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Parliamo del tuo progetto</h3>
            <p className="text-muted-foreground text-center">
              Hai un progetto in mente o cerchi una sviluppatrice per il tuo team? Parliamone e trasformiamo le tue idee in soluzioni digitali concrete!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass-beige rounded-xl">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:amanda_carpenedo@hotmail.com" className="font-medium hover:text-primary transition-colors">
                  amanda_carpenedo@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass-beige rounded-xl">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefono</p>
                <a href="tel:+393343846836" className="font-medium hover:text-primary transition-colors">
                  +39 3343 846 836
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Seguimi sui social</p>
            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/amanda-carpenedo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-beige hover:gradient-bg hover:text-primary-foreground transition-all hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amandacarpenedo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-beige hover:gradient-bg hover:text-primary-foreground transition-all hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
