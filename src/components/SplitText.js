import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SplitText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const words = text.split(" ");
    container.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    gsap.from(container.querySelectorAll(".word"), {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, [text]);

  return <div ref={containerRef} className="text-lg font-bold"></div>;
};

const AnimatedText = () => {
  return (
    <div style={{ padding: "50px" }}>
      <SplitText text="Hello, GSAP with Custom SplitText!" />
    </div>
  );
};

export default SplitText;
