import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import WhyUs from "../src/components/WhyUs";
import About from "../src/components/About";
import Team from "../src/components/Team";
import Tools from "../src/components/Tools";
import References from "../src/components/References";
import Contact from "../src/components/Contact";
import Activities from "../src/components/Activities";
import HumanResources from "../src/components/HumanResources";
import Suppliers from "../src/components/Suppliers";
import Projects from "../src/components/Projects";

export default function Home() {
  return (
    <main className="bg-white">

      <Hero />

      <div className="space-y-32 md:space-y-40">
        <About />
        <Services />
        <Activities />
        <Projects />
        <HumanResources />
        <WhyUs />
        <Team />
        <Tools />
        <References />
        <Suppliers />
        <Contact />
      </div>

    </main>
  );
}