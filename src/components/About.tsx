import React, { useState } from "react";

// Define types for the section that can be active
type Section = "Skills" | "Education";

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("Skills");

  return (
    <div className="px-11 py-24 mt-1 animate-fade-in">
      <div className="flex flex-wrap lg:space-x-40">
        {/* First Column */}
        <div className="flex-1 p-5">
          <p className="font-bold text-white ml-1 text-4xl">About Me</p>
          <p className="text-white font-semibold text-xl mt-8">
            I have 1+ year of experience in software development, specializing
            in creating responsive applications. With a background in Computer
            Science and a certification in Java Full Stack Development, I’m
            proficient in front-end and back-end technologies. Currently, as a
            Software Developer, I’m building a job portal using the T3 Stack
            (TypeScript, Tailwind CSS, tRPC) with React.js, Next.js, Node.js,
            PostgreSQL, and Prisma. I also work on personal projects and DSA
            challenges, with my work available on GitHub. I’m always eager to
            learn new technologies and solve challenging problems.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex-1 p-5 animate-slide-left">
          <div className="flex space-x-12 text-xl mb-4">
            {/* Clickable Skills Section */}
            <span
              className={`font-bold text-3xl cursor-pointer ${
                activeSection === "Skills" ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setActiveSection("Skills")}
            >
              Skills
            </span>

            {/* Clickable Education Section */}
            <span
              className={`font-bold text-3xl cursor-pointer ${
                activeSection === "Education" ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setActiveSection("Education")}
            >
              Education
            </span>
          </div>

          {/* Skills Section */}
          {activeSection === "Skills" && (
            <div>
              <p className="font-bold text-white text-3xl mt-8 mb-2">Skills</p>
              <ul className="text-white list-disc list-inside">
                <li>Languages: JavaScript, TypeScript, Java, Python</li>
                <li>Frontend: React, Next.js, Tailwind CSS</li>
                <li>Backend: Node.js, tRPC, PostgreSQL</li>
                <li>Tools: Prisma, GitHub</li>
              </ul>
            </div>
          )}

          {/* Education Section */}
          {activeSection === "Education" && (
            <div>
              <p className="font-bold text-white text-3xl mt-8 mb-2">Education</p>
              <ul className="text-white list-disc list-inside">
                <li>BSC in Computer Science</li>
                <li>Certified Java Full Stack Developer</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
