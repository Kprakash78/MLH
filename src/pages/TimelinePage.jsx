import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineStep from "../components/TimelineStep";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    day: "10",
    title: "OPEN",
    description: ["Registrations", "open"],
    icon: "megaphone",
  },
  {
    day: "18",
    title: "CLOSE",
    description: ["Registrations", "close"],
    icon: "lock",
  },
  {
    day: "19",
    title: "REPO REVEAL",
    description: ["Project repository", "is revealed"],
    icon: "code",
  },
  {
    day: "21",
    title: "OPEN",
    subtitle: "CONTRIBUTION",
    description: ["Start contributing"],
    icon: "users",
  },
];

export default function TimelinePage() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        stepsRef.current.children,
        { xPercent: -18, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 0.9}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="figma-scale-section relative aspect-video w-full overflow-hidden @container bg-[#3c6059] text-[#f5f4ec]"
    >
      <h1 className="absolute left-[6.8%] top-[9.2%] max-w-[85%] text-[3.8cqw] font-black uppercase leading-none tracking-[-0.035em] max-[700px]:text-[8cqw]">
        Your path to the finale.
      </h1>

      <div className="absolute inset-x-[7.2%] top-[28.2%] max-[700px]:top-[36%]">
        <div className="absolute left-[4%] right-[4%] top-[12.75cqw] h-[0.14cqw] bg-[#f5f4ec] max-[700px]:top-[10cqw]" />

        <div ref={stepsRef} className="relative grid grid-cols-4 gap-1 max-[700px]:grid-cols-2 max-[700px]:gap-y-[12cqw]">
          {milestones.map((milestone) => (
            <TimelineStep key={milestone.day} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
}
