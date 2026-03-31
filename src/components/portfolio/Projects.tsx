import { ExternalLink, ArrowUpRight, Github, Figma } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gitHubVideo from "../../img/git-hub.mp4";
import nayane from "../../img/nayane.mp4";
import syntaxwear from "../../img/syntaxwear.mp4";
import mondoselvaggio from "../../img/mondo-selvaggio.png";
import mila from "../../img/mila.png";

const projects = [
  {
    title: "Nayane Nogueira - Pianista",
    subtitle: "Sito per pianista e insegnante di musica",
    category: "Frontend / Design",
    description:
      "Sito web robusto e full-responsive sviluppato per la pianista e docente Nayane Nogueira. L'architettura è caratterizzata da un design pulito e organico, con gallerie dinamiche ottimizzate per l'alta risoluzione. Implementazione di transizioni fluide tramite JavaScript e integrazione della libreria Swiper.js per garantire un'esperienza d'uso mobile-first intuitiva e performante.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO"],
    liveUrl: "https://www.nayanenogueira.com/",
    figmaUrl: "#",
    githubUrl: "https://github.com/amanda-carpenedo/site-nayane",
    media: nayane,
  },
  {
    title: "GitHub Profile Viewer",
    subtitle: "Applicazione interattiva",
    category: "JavaScript / GitHub API",
    description:
      "Applicazione interattiva che utilizza l'API di GitHub per il recupero e la visualizzazione dinamica di profili utente e repository pubblici. Sviluppata con JavaScript (ES6+) e manipolazione del DOM, presenta un'interfaccia responsive e curata nei minimi dettagli grazie a fogli di stile modulari e animazioni fluide. Un progetto focalizzato su pulizia del codice, UX intuitiva e integrazione efficiente di servizi esterni.",
    tags: ["GitHub API", "JavaScript", "CSS3", "Devicon"],
    liveUrl: "https://amanda-carpenedo.github.io/visualizador-perfil-github/",
    githubUrl: "https://github.com/amanda-carpenedo/visualizador-perfil-github",
    media: gitHubVideo,
  },
  {
    title: "E-commerce SyntaxWear",
    subtitle: "Sito e-commerce responsive",
    category: "UX/UI Design",
    description:
      "E-commerce responsive sviluppato durante il percorso DevQuest, focalizzato sull'implementazione di layout moderni e complessi. Il progetto ha permesso di approfondire la gestione avanzata del posizionamento tramite CSS Flexbox e CSS Grid, garantendo una struttura flessibile e un'interfaccia utente (UI) fluida su diverse risoluzioni di schermo.",
    tags: ["Figma", "HTML5", "CSS3", "Responsive Design"],
    liveUrl: "https://amanda-carpenedo.github.io/ecommerce-syntaxwear/",
    githubUrl: "https://github.com/amanda-carpenedo/ecommerce-syntaxwear",
    media: syntaxwear,
  },
  {
    title: "Mondo Selvaggio",
    subtitle: "Progetto Figma e WordPress",
    category: "Figma / WordPress",
    description:
      "Progetto di visual design per il sito 'Mondo Selvaggio', realizzato nell'ambito del corso Forte Chance. L'intero processo creativo è stato gestito su Figma, partendo dalla definizione dell'architettura dell'informazione attraverso wireframe a bassa e alta fedeltà. Il progetto integra principi avanzati di UX/UI Design per garantire un'interfaccia intuitiva e un'esperienza d'uso fluida, con un layout completamente responsive ottimizzato per ogni tipologia di dispositivo.",
    tags: [
      "Figma",
      "WordPress",
      "UX/UI Design",
      "Responsive Design",
      "Photoshop",
    ],
    liveUrl:
      "https://www.figma.com/design/crYGqj2VQLO6wuUcOBtv9H/Zoo-project?node-id=0-1&t=7Wkm02AzD4ZVwIai-1",
    githubUrl: "#",
    media: mondoselvaggio,
  },
  {
    title: "Skin & Color",
    subtitle: "Progetto Figma e WordPress",
    category: "Figma / WordPress",
    description:
      "Progetto di visual design per il sito 'Skin & Color', realizzato per SHM Web Agency. L'intero processo creativo è stato gestito su Figma, partendo dalla definizione dell'architettura dell'informazione attraverso wireframe responsivo di alta fedeltà.",
    tags: [
      "Figma",
      "WordPress",
      "UX/UI Design",
      "Responsive Design",
      "Affinity",
    ],
    liveUrl:
      "https://www.figma.com/design/64QcgyLBHwCvyGMenxyzKp/MILA-WEBSITE?node-id=0-1&p=f&t=bgikjHB6TioT4owc-0",
    githubUrl: "https://github.com/amanda-carpenedo/Mila",
    media: mila,
  },
  {
    title: " L'Antico Forno - Sistema di Gestione FullStack",
    subtitle: "Progetto FullStack con PHP e MySQL",
    category: "PHP / MySQL",
    description:
      "Sistema di amministrazione della pizzeria L'Antico Forno, ideato e sviluppato per gestire il menu e gli accessi in modo sicuro ed efficiente. Questo sistema fa parte di un progetto sviluppato durante il Corso Tecnico di Sviluppo e Gestione Siti Web presso Forte Chance Torino.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    githubUrl: "https://github.com/amanda-carpenedo/lantico-forno",
    media: mila,
  },







];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="sticky top-24"
    >
      <article
        className="rounded-2xl overflow-hidden shadow-xl shadow-black/30"
        style={{
          marginTop: index === 0 ? 0 : "-2rem",
          zIndex: index + 1,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Text Content - White Background */}
          <div className="p-8 lg:p-12 flex flex-col justify-between bg-primary">
            <div>
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-1 text-primary-foreground">
                  {project.title} —
                </h3>
                <h4 className="text-xl lg:text-2xl font-bold text-primary-foreground/70 mb-4">
                  {project.subtitle}
                </h4>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-medium border border-primary-foreground/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-primary-foreground/80 leading-relaxed mb-8"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/50 text-primary-foreground font-medium transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground"
              >
                <span>Live website</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary-foreground/50 text-primary-foreground transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Media Placeholder - Black Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-full min-h-[400px] lg:min-h-full bg-black overflow-hidden"
          >
            {project.media ? (
              project.media.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  src={project.media}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              )
            ) : (
              /* Fallback caso não haja mídia definida (seu placeholder antigo) */
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-neutral-900">
                <p className="text-sm text-white/40">Mídia não disponível</p>
              </div>
            )}

            {/* Overlay sutil para melhorar o contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </article>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="progetti" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Progetti <span className="gradient-text">Selezionati</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Una selezione di lavori che dimostrano le mie competenze in sviluppo
            frontend, WordPress e UX/UI design.
          </p>
        </motion.div>

        {/* Stacked Projects */}
        <div className="relative space-y-8 pb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
