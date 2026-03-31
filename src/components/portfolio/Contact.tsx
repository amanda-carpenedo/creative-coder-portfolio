import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://amandacarpenedo.app.n8n.cloud/webhook/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio del messaggio");
      }

      setIsSubmitted(true);
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per avermi contattato. Ti risponderò al più presto.",
      });

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Parliamo del tuo progetto</h3>
              <p className="text-muted-foreground mb-8">
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
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Località</p>
                  <p className="font-medium">Novara, Italia (disponibile remoto)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Seguimi sui social</p>
              <div className="flex gap-3">
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

          {/* Contact Form */}
          <div className="glass-beige rounded-xl p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4 animate-scale-in">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Messaggio Inviato!</h3>
                <p className="text-muted-foreground">Grazie per il messaggio. Le risponderò appena possibile.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Il tuo nome"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tua@email.com"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Oggetto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Di cosa desidera parlare?"
                    className="bg-secondary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Raccontami del tuo progetto..."
                    className="bg-secondary/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-bg hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Invia Messaggio
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
