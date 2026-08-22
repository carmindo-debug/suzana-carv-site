import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Results from "@/components/Results/Results";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Results />
      <CTA />
      <Contact />
    </main>
  );
}

export default Home;
