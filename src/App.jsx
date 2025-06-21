import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div>
      <h1 className="text-amber-300">Hello</h1>
    </div>
  );
}
