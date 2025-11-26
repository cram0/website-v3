import { useState, useRef } from "react";
import { Link } from "react-router";

// Icons
import { TbFidgetSpinner } from "react-icons/tb";

// GSAP
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

type Project = {
  name: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
  page?: string;
};

const projects: Project[] = [
  {
    name: "Tidyhousing",
    description:
      "This is an ongoing project where the main goal is to let renters log issues they've encountered in their homes.",
    imgUrl:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1884608939435636734/profile/projects/files/10786a00-5737-447c-a684-aa203f01d1af",
    projectUrl:
      "https://www.upwork.com/freelancers/~01ab2f5dbe2efe407b?p=1890521389636526080",
  },
  {
    name: "Exod",
    description:
      "My role for this project was to work on the application's UI/UX and be able to deliver in a very tight deadline.",
    imgUrl:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1884608939435636734/profile/projects/files/1617a837-530e-4c99-8b59-d37b384aa57b",
    projectUrl:
      "https://www.upwork.com/freelancers/~01ab2f5dbe2efe407b?p=1890511374151409664",
  },
  {
    name: "Epidash",
    description:
      "One of the missions was programming a dashboard for a school campus where it would display different informations and events around the campus.",
    imgUrl:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1884608939435636734/profile/projects/files/a4ff1096-f733-45ce-b6cb-2df9da1b5f2d",
    projectUrl:
      "https://www.upwork.com/freelancers/~01ab2f5dbe2efe407b?p=1890506466517671936",
  },
  {
    name: "Sussy Colors",
    description:
      "A fun project where I developed a color guessing game using React Native. The game challenges players to identify colors based on their RGB values.",
    imgUrl: "https://example.com/sussy-colors-image.jpg",
    projectUrl: "",
    page: "sussy-colors",
  },
];

function ImageWithLoader({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-24 w-32">
      <img
        src={src}
        alt={alt}
        className={`h-24 w-32 object-contain ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 flex animate-spin items-center justify-center">
          <TbFidgetSpinner />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        projectRef.current,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
      );

      const projects = projectsRef.current?.children;

      if (projects) {
        tl.fromTo(
          projects,
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
          "+0.2",
        );
      }
    },
    { scope: projectRef },
  );

  return (
    <div ref={projectRef}>
      <div className="flex flex-col gap-6 rounded-lg bg-yellow-200/10 p-6 backdrop-blur-lg">
        <div className="font-oxanium text-3xl">Projects</div>

        <ul ref={projectsRef} className="flex list-inside flex-col gap-2">
          {projects.map((project) => {
            const content = (
              <>
                <div>
                  <ImageWithLoader src={project.imgUrl} alt={project.name} />
                </div>

                <div>
                  <div className="font-oxanium text-lg text-yellow-200">
                    {project.name}
                  </div>
                  <p className="hidden text-gray-200 sm:block">
                    {project.description}
                  </p>
                </div>
              </>
            );

            return (
              <li key={project.name}>
                {project.page ? (
                  <Link
                    to={`/${project.page}`}
                    className="flex items-center gap-4 rounded-lg p-2 hover:bg-yellow-200/20"
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg p-2 hover:bg-yellow-200/20"
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
