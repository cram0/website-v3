// Icons
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaUpwork } from "react-icons/fa6";
import { SiMalt } from "react-icons/si";
import { PiHandWaving, PiInfo, PiClock } from "react-icons/pi";

// GSAP
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ImageLoader from "../components/ImageLoader";

// Timezone in Nice, France
const timezoneFR = "Europe/Paris";
const timeFR = new Date().toLocaleString("fr-FR", {
  timeZone: timezoneFR,
  hour: "numeric",
  minute: "numeric",
});

// Timezone in New York, USA
const timezoneUS = "America/New_York";
const timeUS = new Date().toLocaleString("en-US", {
  timeZone: timezoneUS,
  hour: "numeric",
  minute: "numeric",
});

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current?.children;

      if (cards) {
        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
        );
      }
    },
    { scope: cardsRef },
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" ref={cardsRef}>
      {/* Hero Card */}
      <div className="relative col-span-1 overflow-hidden rounded-xl bg-yellow-200/10 backdrop-blur-lg sm:col-span-2">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-1 flex-col justify-center p-6">
            <div className="mb-4 flex items-center gap-3">
              <PiHandWaving className="hidden text-yellow-200 sm:block" />
              <img
                src="https://i.imgur.com/742P20m.jpeg"
                className="size-8 rounded-full sm:hidden"
                alt="Me"
              />
              <h1 className="font-oxanium text-2xl font-extralight">
                Hello there!
              </h1>
            </div>
            <p className="text-gray-200">
              I'm Julien, a junior full-stack developer with two years of
              experience. I've also worked as a teaching assistant at a leading
              computer science school for two years, where I honed my skills in
              guiding and supporting students. Additionally, I've been brought
              into projects during high-pressure final stages, demonstrating my
              ability to quickly adapt and deliver results that align with
              company goals.
            </p>
          </div>
        </div>
      </div>

      {/* About Card */}
      <div className="row-span-2 flex flex-col rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg">
        <div className="mb-4 flex items-center gap-3">
          <PiInfo className="h-5 w-5 text-yellow-200" />
          <h2 className="font-oxanium text-xl">About Me</h2>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 text-gray-200">
          <p>
            Seasoned in diverse projects from small websites to large-scale
            applications.
          </p>
          <p>
            Active open-source{" "}
            <a
              href="https://github.com/cram0/sotn-decomp"
              className="text-yellow-200 underline"
            >
              contributor
            </a>{" "}
            and tech enthusiast.
          </p>
          <p>
            I can handle the creation of a web application—from its foundations
            to long-term maintenance. I am capable of implementing both its
            design and its internal functionality while meeting the required
            features and constraints.
          </p>
        </div>
      </div>

      {/* Availability Card */}
      <div className="flex flex-col rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex h-4 w-4 items-center">
            <span className="absolute h-full w-full rounded-full bg-green-500"></span>
            <span className="absolute h-full w-full animate-ping rounded-full bg-green-500"></span>
          </div>
          <h2 className="font-oxanium text-xl">Current Status</h2>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-gray-200">
            Available for freelance projects, please contact me through{" "}
            <a
              href="https://linkedin.com/in/julien-augugliaro"
              className="text-yellow-200 underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://www.upwork.com/freelancers/~01ab2f5dbe2efe407b"
              className="text-yellow-200 underline"
            >
              Upwork
            </a>
            .
          </p>
        </div>
      </div>

      {/* Timezone Card */}
      <div className="flex flex-col gap-3 rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg">
        <div className="flex flex-row items-center gap-3">
          <PiClock className="h-5 w-5 text-yellow-200" />
          <h2 className="font-oxanium text-xl">My Timezones</h2>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 font-mono">
          <p className="text-gray-200">
            🇫🇷 Nice: <span className="text-yellow-200">{timeFR}</span>
          </p>
          <p className="text-gray-200">
            🇺🇸 NYC: <span className="text-yellow-200">{timeUS}</span>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="col-span-1">
        <a
          href="https://github.com/cram0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg transition-all hover:bg-yellow-200/20"
        >
          <div className="flex items-center gap-4">
            <FaGithub className="text-yellow-200" />
            <span className="font-oxanium text-xl">GitHub</span>
          </div>
          <RiExternalLinkLine className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
        </a>
      </div>

      <div className="col-span-1">
        <a
          href="https://linkedin.com/in/julien-augugliaro"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg transition-all hover:bg-yellow-200/20"
        >
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-yellow-200" />
            <span className="font-oxanium text-xl">LinkedIn</span>
          </div>
          <RiExternalLinkLine className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
        </a>
      </div>

      <div className="col-span-1">
        <a
          href="https://www.upwork.com/freelancers/~01ab2f5dbe2efe407b"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg transition-all hover:bg-yellow-200/20"
        >
          <div className="flex items-center gap-4">
            <FaUpwork className="text-yellow-200" />
            <span className="font-oxanium text-xl">Upwork</span>
          </div>
          <RiExternalLinkLine className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
        </a>
      </div>

      <div className="col-span-1">
        <a
          href="https://www.malt.fr/profile/julienaugugliaro"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl bg-yellow-200/10 p-6 backdrop-blur-lg transition-all hover:bg-yellow-200/20"
        >
          <div className="flex items-center gap-4">
            <SiMalt className="text-yellow-200" />
            <span className="font-oxanium text-xl">Malt</span>
          </div>
          <RiExternalLinkLine className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
}
