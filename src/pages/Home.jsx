import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Results from "@/components/Results/Results";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import SEO from "@/components/SEO/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Suzana Carv - Design de Sobrancelhas Personalizado | São João de Meriti"
        description="Sobrancelhas naturais que valorizam sua beleza. Design personalizado, Brow Lamination e técnicas exclusivas. Atendimento em ambiente confortável. +3 anos de experiência. Agende agora!"
        url="/"
        keywords="design de sobrancelhas, brow lamination, sobrancelhas naturais, São João de Meriti, Rio de Janeiro"
      />
      <main>
        <Hero />
        <Services />
        <About />
        <Results />
        <CTA />
        <Contact />
      </main>
    </>
  );
}

export default Home;
