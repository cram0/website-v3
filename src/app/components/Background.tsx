import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Background() {
  const blobsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blobs = blobsRef.current?.children;

      if (blobs) {
        gsap.to(blobs, {
          duration: 20,
          stagger: {
            each: 0.1,
            from: "random",
          },
          top: () => gsap.utils.random(0, window.innerHeight, 1),
          left: () => gsap.utils.random(0, window.innerWidth, 1),
          yoyo: true,
          ease: "circ.inOut",
          repeat: -1,
          repeatRefresh: true,
        });
      }
    },
    { scope: blobsRef },
  );

  return (
    <div ref={blobsRef} className="goo-container fixed overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {
        // Background Animation
        Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute h-24 w-24 rounded-full bg-yellow-200/50`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          ></div>
        ))
      }
    </div>
  );
}
