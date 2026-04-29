import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
// import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
// import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import Testimonials from "@/components/portfolio/Testimonials";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Education />
        <Projects />
        <Testimonials />
        {/* <Process /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
