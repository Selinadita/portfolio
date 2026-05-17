import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import TechStack from "../sections/TechStack";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

export default function Home() {
  return (
<section id="home">
    <div className="bg-[#FDF9F7] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
    </div>
</section>
  );
}