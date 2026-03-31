import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    type: "Formazione Tecnica",
    icon: GraduationCap,
    items: [
      {
        title: "Full Stack Web Developer",
        institution: "DevQuest",
        year: "2024",
        description: "Corso intensivo di sviluppo web full stack con focus su tecnologie moderne.",
        highlights: ["HTML/CSS/JavaScript", "React", "SQL", "Database"],
      },
      {
        title: "Tecnico di sviluppo e gestione siti web",
        institution: "Forte Chance",
        year: "2025",
        description: "Formazione professionale in sviluppo web.",
        highlights: ["HTML/CSS/JavaScript", "WordPress", "Web Design/Figma", "PHP"],
      },
    ],
  },
  {
    type: "Corsi di formazione",
    icon: BookOpen,
    items: [
      {
        title: "Pre-MBA in Intelligenza Artificiale applicata al Business",
        institution: "Faculdade Exame & Saint Paul",
        year: "2025",
        description: "Corso sull’intelligenza artificiale applicata al settore business.",
        highlights: ["IA", "Business"],
      },
      {
        title: "Immersione Dev con Google Gemini",
        institution: "Alura & Google Gemini",
        year: "2024",
        description: "Corso sull’utilizzo di Google Gemini per lo sviluppo web.",
        highlights: ["IA", "Business"],
      },
    ],
  },
];

const certifications = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2024" },
  { name: "WordPress Development", issuer: "LinkedIn Learning", year: "2024" },
];

const Education = () => {
  return (
    <section id="formazione" className="section-padding bg-dark-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Formazione
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Percorso <span className="gradient-text">Formativo</span>
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((category) => (
            <div key={category.type}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{category.type}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.title} className="glass-beige rounded-xl p-6 hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold">{item.title}</h4>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-primary text-sm mb-2">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
