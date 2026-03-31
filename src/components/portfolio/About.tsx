import { Code, Palette, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code,
    title: "Sviluppo Frontend",
    description: "Sviluppo di siti web responsivi e performanti con HTML, CSS, JavaScript, WordPress e librerie moderne.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Sviluppo di progetti con interfacce utente intuitive e funzionali, realizzate attraverso strumenti di progettazione come Figma.",
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Approccio orientato all'utente finale, con focus su accessibilità e utilizzo intuitivo.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Impegno nell'ottimizzazione dei servizi offerti, unendo organizzazione, gestione del tempo e rispetto delle scadenze.",
  },
];

const About = () => {
  return (
    <section id="profilo" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Chi Sono
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Profilo <span className="gradient-text"> Professionale</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sviluppatrice Frontend specializzata nella creazione di interfacce moderne, scalabili e centrate sull'utente. Domino sia la scrittura di codice personalizzato che la gestione avanzata di piattaforme come WordPress, offrendo soluzioni web che uniscono un'estetica impeccabile a un codice pulito e ottimizzato.
          </p>
        </div>

        {/* Bio */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-center lg:text-left">
              Dalla Musica allo Sviluppo Web
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-center lg:text-left">
          Con oltre 15 anni di esperienza nel settore musicale, porto nel campo della tecnologia rigore tecnico, disciplina e attenzione ai dettagli, qualità che si riflettono nel mio codice e nel design. Attualmente sto consolidando la mia formazione con i corsi di FullStack Developer di DevQuest e Sviluppatore Web presso Forte Chance, a Torino, e mi concentro nello sviluppo di soluzioni digitali performanti e orientate all'utente, combinando creatività e competenze tecniche per progetti web di alta qualità.
            </p>
          </motion.div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-default
                  glass-beige
                  hover:bg-primary/20 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10
                  ${index % 2 === 1 ? "translate-y-4" : ""}
                `}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
