import { Shutter } from "./components/Shutter";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ScrollFx } from "./components/ScrollFx";

export default function Home() {
  return (
    <>
      <Shutter />
      <Nav />
      <main>
        <Hero />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
