import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Collection } from "./components/Collection";
import { Pillars } from "./components/Pillars";
import { Process } from "./components/Process";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { ScrollFx } from "./components/ScrollFx";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Collection />
        <Pillars />
        <Process />
        <Cta />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
