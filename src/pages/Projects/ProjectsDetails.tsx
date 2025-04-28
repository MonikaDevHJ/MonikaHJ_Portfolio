import React from 'react'
import Image from "next/image";
import JoboxHire from "../../assets/JoboxHire.png"
import Github from "../../assets/Github.png";
import Link from "../../assets/Link.png";

const ProjectsDetails = () => {
  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16 py-6 animate-fade-in bg-gray-800" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-center text-fuchsia-700 font-semibold text-3xl sm:text-4xl"> Details </p>

        {/* Project Image with Overlay */}
        <div className="flex justify-center mt-10 sm:mt-14" data-aos="fade-up">
          <div className="relative group w-full max-w-4xl">
            <Image
              src={JoboxHire}
              alt="Jobox"
              className="w-full h-auto rounded-lg shadow-lg border border-slate-950 transition-transform duration-300 group-hover:scale-105 object-cover"
              width={1000}
              height={500}
            />

            {/* Overlay Icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/JoboxOrg/JoboxHire" target="_blank" rel="noopener noreferrer">
                <Image src={Github} alt="Github" width={40} height={40} className="hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.joboxhire.com/" target="_blank" rel="noopener noreferrer">
                <Image src={Link} alt="Website" width={40} height={40} className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Duration */}
        <div className="mt-12 sm:mt-16 px-4 lg:ml-28">
          <p className="text-fuchsia-700 font-semibold text-2xl sm:text-3xl mb-2">Project Duration</p>
          <p className="text-white text-base sm:text-lg">1 Year</p>
        </div>

        {/* About the Project */}
        <div className="mt-10 sm:mt-16 px-4 lg:ml-28">
          <p className="text-fuchsia-700 font-semibold text-2xl sm:text-3xl mb-4">About The Project</p>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            A job portal platform, using the T3 Stack (TypeScript, Tailwind CSS, and tRPC).
            My responsibilities include building responsive, user-friendly front-end interfaces with React.js, Next.js,
            and Tailwind CSS. On the server side, I work with Node.js and PostgreSQL, leveraging Prisma as the ORM to manage database
            interactions efficiently. I am also responsible for version control, regularly handling GitHub workflows, including resolving merge conflicts and maintaining a clean codebase.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsDetails;
