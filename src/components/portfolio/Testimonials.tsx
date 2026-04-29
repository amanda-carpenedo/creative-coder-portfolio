import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `Amanda è stata mia allieva nel corso 'Tecnico di sviluppo e gestione siti web', nello specifico per la materia 'Comunicazione e WordPress'.
È stata senza dubbio una dei migliori studenti che abbia avuto il piacere di formare in questi anni.

Curiosa nell'apprendimento, precisa e puntuale nelle consegne. 
Ha sempre cercato di spingersi oltre i suoi limiti per imparare nuove nozioni, producendo grafiche su Figma e siti WordPress professionali e precisi.
Ha un ottimo gusto grafico, appassionata di UI, e ha affinato le competenze in sviluppo WordPress. Non marginale la conoscenza di html, css e programmazione, che sicuramente rendono completa la sua figura di Web Designer.

Sono sicura che sarà un'ottima professionista, qualsiasi strada scelga di intraprendere: intelligenza, caparbietà e skill tecniche non le mancano.`,
    name: "Adriana Chiabrera",
    role: "Insegnante / Forte Chance ETS",
    rating: 5,
  },
  {
    text: "Lavorare con Amanda è stata un'esperienza eccellente. Ha dimostrato una grande competenza tecnica, sensibilità estetica e una visione strategica che hanno fatto la differenza nel risultato finale del mio sito web. La consiglio vivamente a chiunque cerchi un lavoro professionale, ben eseguito e in linea con gli obiettivi del progetto.",
    name: "Bruno Guaragna",
    role: "Cliente / Progetto Personale",
    rating: 5,
  },
  {
    text: "Ho avuto il piacere di seguire Amanda Carpenedo come tutor durante il suo percorso presso SHM Studio, a partire da febbraio 2026. Fin dai primi giorni, Amanda ha dimostrato una solida padronanza delle tecnologie web con una capacità notevole di applicare queste competenze in contesti reali e complessi. Ciò che colpisce maggiormente di Amanda è la sua straordinaria capacità di apprendimento. In poco tempo ha acquisito competenze avanzate in ambiti che richiedono normalmente molto più tempo, integrando con naturalezza nuovi strumenti e metodologie nel proprio flusso di lavoro. Raccomando Amanda con piena fiducia per qualsiasi posizione nel campo dello sviluppo web. È una professionista seria, motivata e con un potenziale di crescita davvero elevato.",
    name: "Davide Bergamini",
    role: "SHM Studio / Founder",
    rating: 5,
  },
  {
    text: "Ho seguito un corso di formazione per Full Stack Web Developer con Amanda presso ForteChance ETS, della durata di circa sei mesi.Amanda si è dimostrata una persona affidabile, seria e con una forte etica del lavoro. Durante tutto il percorso ha mostrato grande capacità di adattamento, attenzione ai dettagli e un approccio sempre creativo alle attività assegnate. Il suo lavoro si è spesso distinto per qualità e originalità, risultando tra i migliori del gruppo. È sicuramente una risorsa preziosa in un team e sarei felice di poter collaborare nuovamente con lei in futuro.",
    name: "Laura Spampinato",
    role: "Collega / Forte Chance ETS",
    rating: 5,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="group relative h-full p-8 rounded-2xl glass-beige hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col">
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
  </div>
);

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

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
            Le opinioni di chi ha lavorato con me e ha apprezzato il mio
            approccio professionale.
          </p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative px-14 sm:px-16 md:px-20"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-6">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full">
                  <TestimonialCard t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Elegant side arrows — outside the cards */}
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Precedente"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft
                className="w-5 h-5 md:w-6 md:h-6"
                strokeWidth={2.25}
              />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Successivo"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight
                className="w-5 h-5 md:w-6 md:h-6"
                strokeWidth={2.25}
              />
            </button>
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Vai alla testimonianza ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selected === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
