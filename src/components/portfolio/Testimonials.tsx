import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Nome Cognome",
    role: "Ruolo / Azienda",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor.",
    name: "Nome Cognome",
    role: "Ruolo / Azienda",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat.",
    name: "Nome Cognome",
    role: "Ruolo / Azienda",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonianze" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonianze
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cosa Dicono di <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Le opinioni di chi ha lavorato con me e ha apprezzato il mio approccio professionale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative p-8 rounded-2xl glass-beige hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/20">
                <Quote className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 mt-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="hsl(var(--primary))"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/85 leading-relaxed italic mb-8 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-primary/20">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
