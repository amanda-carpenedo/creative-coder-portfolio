import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProfile = () => {
    document.querySelector("#profilo")?.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Amanda", "Carpenedo"];

  return (
    <section className="relative">
      <BackgroundPaths>
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
  
          {/* Animated Name */}
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className={`inline-block mr-4 last:mr-0 ${wordIndex === 1 ? "font-normal" : ""}`}>
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Frontend Web Developer & UX/UI Designer
          </motion.p>

     
          {/* Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {["Figma", "HTML5", "CSS3", "JavaScript", "PHP", "WordPress"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group gradient-bg hover:opacity-90 transition-all w-full sm:w-auto px-8 rounded-full"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contattami
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 border-2 rounded-full border-[#D6CBB3] text-[#D6CBB3] dark:border-[#D6CBB3] dark:text-[#D6CBB3] dark:hover:bg-cream/10 dark:hover:text-cream border-[#8B6D3F] text-[#8B6D3F] hover:bg-[#8B6D3F]/10 hover:border-[#6B5430] hover:text-[#6B5430] transition-colors"
              onClick={() => document.querySelector("#progetti")?.scrollIntoView({ behavior: "smooth" })}
            >
              Vedi i Progetti
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/amanda-carpenedo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amandacarpenedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </BackgroundPaths>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProfile}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit p-2 animate-bounce text-muted-foreground hover:text-primary transition-colors z-10"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
