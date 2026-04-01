import { useState } from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiWordpress, 
  SiMysql,
  SiPhp,
  SiFigma,
  SiGit,
  SiGooglechrome
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import {
  LayoutGrid,
  Layers,
  Palette,
  Smartphone,
  Users,
  Search,
  Zap,
  Eye,
  MessageSquare,
  Lightbulb,
  Sparkles,
  Clock,
  BookOpen,
  Bot,
  Terminal
} from "lucide-react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

type IconComponent = IconType | LucideIcon;

const skillCategories = [
  {
    id: "frontend",
    title: "Full-Stack Development",
    skills: [
      { name: "HTML5", icon: SiHtml5 as IconComponent },
      { name: "CSS3", icon: SiCss3 as IconComponent },
      { name: "JavaScript", icon: SiJavascript as IconComponent },
      { name: "WordPress", icon: SiWordpress as IconComponent },
      { name: "MySQL", icon: SiMysql as IconComponent },
      { name: "PHP", icon: SiPhp as IconComponent },
    ],
  },
  {
    id: "design",
    title: "UX/UI Design",
    skills: [
      { name: "Figma", icon: SiFigma as IconComponent },
      { name: "Wireframing", icon: LayoutGrid as IconComponent },
      { name: "Prototyping", icon: Layers as IconComponent },
      { name: "Design System", icon: Palette as IconComponent },
      { name: "Responsive Design", icon: Smartphone as IconComponent },
      { name: "User Research", icon: Users as IconComponent },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", icon: SiGit as IconComponent },
      { name: "VS Code", icon: VscCode as IconComponent },
      { name: "Chrome DevTools", icon: SiGooglechrome as IconComponent },
      { name: "SEO Basics", icon: Search as IconComponent },
      { name: "Performance Optimization", icon: Zap as IconComponent },
      { name: "Accessibility (WCAG)", icon: Eye as IconComponent },
      { name: "Claude Code", icon: Terminal as IconComponent },
      { name: "Utilizzo di LLM", icon: Bot as IconComponent },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    skills: [
      { name: "Comunicazione", icon: MessageSquare as IconComponent },
      { name: "Problem Solving", icon: Lightbulb as IconComponent },
      { name: "Lavoro di Squadra", icon: Users as IconComponent },
      { name: "Creatività", icon: Sparkles as IconComponent },
      { name: "Gestione del Tempo", icon: Clock as IconComponent },
      { name: "Apprendimento Continuo", icon: BookOpen as IconComponent },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="competenze" className="section-padding bg-dark-gray">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Competenze
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Le Mie <span className="gradient-text">Competenze Tecniche</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                ? "gradient-bg text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {activeSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name} 
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl glass-beige flex items-center justify-center transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <IconComponent 
                    size={32} 
                    className="text-primary transition-all duration-300 group-hover:text-primary group-hover:scale-110" 
                  />
                </div>
                <span className="text-sm text-muted-foreground text-center font-medium transition-colors duration-300 group-hover:text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
