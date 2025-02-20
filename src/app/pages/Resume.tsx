import { useRef } from "react";

// GSAP
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Icons
import Button from "../components/ButtonFlag";

const jobs = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    startDate: "December 2024",
    endDate: "Present",
    description:
      "Developed websites for various clients, focusing on user experience and performance.",
    missions: [],
  },
  {
    title: "Teaching Assistant",
    company: "Epitech, Nice",
    startDate: "September 2023",
    endDate: "August 2024",
    missions: [
      "Planned student activities and initiatives based on meetings with school administrators.",
      "Trained and supervised lower-level Teaching Assistants.",
      "Developed a dashboard for the Nice campus to display key information on multiple screens: Features local train and tramway departures, class schedules, campus events, and a custom Spotify player, using Vue.js and Tailwind CSS.",
      "Built an admin interface for staff to manage dashboard settings, using Vue.js, Vuetify, and Microsoft Authentication Library for Office 365 login.",
      "Created a backend to handle interactions between the dashboard and admin interface, using Node.js, Express, Redis, and MariaDB.",
      "Deployed across campus with Raspberry Pi devices, utilizing Wayfire and a modified Raspberry Pi OS.",
      "Containerized with Docker and deployed using Nginx and Serveo.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Powerlab, Luxembourg",
    startDate: "May 2022",
    endDate: "August 2022",
    missions: [
      "Created an application that lets users create e-commerce websites and back offices (such as Magento/Shopify).",
      "Application comes with Server-Side Rendering and a forward proxy with Nginx.",
      "Built using Nuxt (Vue.js), MariaDB, Prisma, Redis, Docker.",
    ],
  },
  {
    title: "Teaching Assistant (AER)",
    company: "Epitech, Nice",
    startDate: "February 2021",
    endDate: "March 2022",
    missions: [
      "Helped lower-level students with their studies by creating personalized workshops.",
    ],
  },
  {
    title: "IT Support",
    company: "Régie Ligne d'Azur, Nice",
    startDate: "July 2020",
    endDate: "November 2020",
    missions: [
      "Built an internal Linux server using Debian and deployed a custom wiki using Wiki.js, allowing the IT division of the company to centralize documentations and information for easy access.",
      "Updated the network and infrastructure's schema.",
    ],
  },
];

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const resume = resumeRef.current?.children;

      if (resume) {
        gsap.fromTo(
          resume,
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
    { scope: resumeRef },
  );

  return (
    <>
      <div className="flex flex-col gap-6" ref={resumeRef}>
        <div className="flex flex-col gap-6 rounded-lg bg-yellow-200/10 p-6">
          <h2 className="font-oxanium text-3xl text-yellow-200">
            PDF Versions
          </h2>
          <div className="font-oxanium grid grid-cols-1 gap-4 text-xl md:grid-cols-2">
            <Button
              flag="fr"
              label="Français"
              url="./CV_Julien_Augugliaro_FR.pdf"
            />
            <Button
              flag="us"
              label="English"
              url="./CV_Julien_Augugliaro_EN.pdf"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-lg bg-yellow-200/10 p-6">
          <h2 className="font-oxanium text-3xl text-yellow-200">Resume</h2>
          <div className="flex flex-col gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/5 p-4 hover:bg-white/10"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-white">
                    {job.title}
                    {job.company && (
                      <span className="text-yellow-200"> · {job.company}</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {job.startDate} — {job.endDate}
                  </p>
                </div>

                {job.description && (
                  <p className="mb-4 text-gray-200">{job.description}</p>
                )}

                {job.missions.length > 0 && (
                  <ul className="space-y-3 pl-4">
                    {job.missions.map((mission, i) => (
                      <li
                        key={i}
                        className="relative text-gray-200 before:absolute before:top-2 before:-left-4 before:h-1.5 before:w-1.5 before:rounded-full before:bg-yellow-200"
                      >
                        <span className="pl-2 text-sm">{mission}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
