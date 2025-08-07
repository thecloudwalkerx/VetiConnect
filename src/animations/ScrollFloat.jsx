import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.1,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // If children is a string, animate each char (wrapped in spans)
    // Else animate each direct child element inside the container
    const targets = el.querySelectorAll(
      ".scroll-float-char, .scroll-float-child",
    );

    gsap.fromTo(
      targets,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 50,
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      },
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  // If children is a string, split into chars wrapped in spans
  if (typeof children === "string") {
    return (
      <div
        ref={containerRef}
        className={`inline-block overflow-hidden ${containerClassName}`}
      >
        {children.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block scroll-float-char"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    );
  }

  // Otherwise, wrap each direct child in a div for animation
  // (if children is a single child, wrap in array)
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap gap-1 overflow-hidden ${containerClassName}`}
    >
      {childrenArray.map((child, i) => (
        <div key={i} className="scroll-float-child inline-block">
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollFloat;
