import React from "react";
import Image, { StaticImageData } from "next/image";
import JoboxHire from "../assets/JoboxHire.png";
import Shoipping from "../assets/Shoipping.png";
import Sigma_Hospital from "../assets/Sigma_Hospital.png";
import Weather from "../assets/Weather.png";
import Github from "../assets/Github.png";  
import Link from "../assets/Link.png"; 
import Recruitearn from "../assets/Recruitearn.png"

type Project = {
  image: StaticImageData;
  alt: string;
  name: string;
  githubLink: string;
  websiteLink: string;
};

const Project: React.FC = () => {
  const projects: Project[] = [
    {
      image: JoboxHire,
      alt: "Jobox Hire",
      name: "Jobox Hire Pvt Ltd",
      githubLink: "https://github.com/JoboxOrg/JoboxHire",
      websiteLink: "https://joboxhire.com/",
    },
    {
      image: Shoipping,
      alt: "Shopping Cart",
      name: "Shopping Cart",
      githubLink: "https://github.com/MonikaDevHJ/E_commerce_Website",
      websiteLink: "https://shoppingcart.com",
    },
    {
      image: Sigma_Hospital,
      alt: "Sigma Hospital",
      name: "Sigma Hospital",
      githubLink: "https://github.com/example-sigmahospital",
      websiteLink: "https://www.infinitrotech.com/",
    },
    {
      image: Weather,
      alt: "Weather App",
      name: "Weather Forecast",
      githubLink: "https://github.com/MonikaDevHJ/Weather_App",
      websiteLink: "https://weatherforecast.com",
    },
    {
      image: Recruitearn,
      alt: "Recruit And Earn",
      name: "Recruit And Earn",
      githubLink: "https://github.com/JoboxOrg/JoboxHire",
      websiteLink: "https://www.joboxhire.co/",
    },
  ];

  return (
    /* eslint-disable react/no-unescaped-entities */

    <div  data-aos="fade-up" id="projects" className="px-8 py-6 mt-1 animate-fade-in bg-gray-800">
      <div>
        <p className="font-bold text-fuchsia-400 ml-5 text-4xl"> Projects</p>
      </div>

      <div className="flex flex-wrap gap-4 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="p-5 group relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.alt}
                className="shadow-lg border border-slate-950 rounded-lg transition-transform duration-300 group-hover:scale-125 object-cover"
                width={400}
                height={400}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                >
                  <Image
                    src={Github}
                    alt="GitHub"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                >
                  <Image
                    src={Link}
                    alt="Website"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>

            <p className="text-white mt-2 text-2xl">{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
