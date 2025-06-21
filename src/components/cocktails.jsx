import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";

export function Cocktails() {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        y: 100,
        x: -100,
        duration: 1,
        ease: "power1.inOut",
      })
      .from("#c-right-leaf", {
        y: 100,
        x: 100,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="cocktail-left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="cocktail-right-leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span>- {cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails:</h2>
          <ul>
            {mockTailLists.map((mockTail) => (
              <li key={mockTail.name}>
                <div className="md:me-28">
                  <h3>{mockTail.name}</h3>
                  <p>
                    {mockTail.country} | {mockTail.detail}
                  </p>
                </div>
                <span>- {mockTail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
