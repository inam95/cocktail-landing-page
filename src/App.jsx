import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}
