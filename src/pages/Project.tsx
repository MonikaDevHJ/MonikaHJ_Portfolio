import React from "react";
import Image from "next/image";
import { projects, Project as ProjectType } from "../../public/Data/ProjectData";
import Github from "../assets/Github.png";
import Link from "../assets/Link.png";
import NextLink from "next/link";

const Project: React.FC = () => {
  return (
    <div
      data-aos="fade-up"
      id="projects"
      className="px-8 py-6 mt-1 animate-fade-in bg-gray-800"
    >
      <div>
        <p className="font-bold text-fuchsia-400 ml-5 text-4xl">Projects</p>
      </div>

      <div className="flex flex-wrap gap-4 mt-10" data-aos="fade-up">
        {projects.map((project, index) => (
          <div key={index} className="p-5 group relative">
            <div className="overflow-hidden rounded-lg" data-aos="fade-up">
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
                  <Image src={Github} alt="GitHub" width={40} height={40} />
                </a>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                >
                  <Image src={Link} alt="Website" width={40} height={40} />
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center relative z-10 mt-2">
              <p className="text-white text-lg sm:text-xl">{project.name}</p>

              <NextLink href="/Projects/ProjectsDetails">
                <button className="text-white bg-fuchsia-500 font-semibold text-sm px-3 py-1 rounded-full shadow-md hover:bg-white hover:text-fuchsia-800 transition duration-300">
                  View Details
                </button>
              </NextLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
