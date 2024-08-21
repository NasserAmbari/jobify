import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin([useGSAP, ScrollTrigger]);

const SplitSentence = ({ sentence, delay }) => {
  const elementSentence = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      elementSentence.current,
      { y: "200" },
      {
        y: "0",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: delay,
      }
    );
  });

  return (
    <div className="overflow-y-hidden">
      {sentence.split(" ").map((word, idx) => {
        return (
          <span
            ref={(elm) => {
              elementSentence.current[idx] = elm;
            }}
            key={idx}
            className="mr-2 md:mr-4  inline-block"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default SplitSentence;
