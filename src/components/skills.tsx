import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiMui ,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const Skills = () => {
    const icons = [
      { icon: <SiJavascript color="#f7df1e" />, name: "JavaScript" },
      { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },
      { icon: <SiReact color="#61dafb" />, name: "React" },
      { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
      { icon: <SiNodedotjs color="#3c873a" />, name: "Node.js" },
      { icon: <SiBootstrap color="#7952b3" />, name: "Bootstrap" },
      { icon: <SiMui color="#007fff" />, name: "Material UI" },
      { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
      { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <SiPrisma color="#2d3748" />, name: "Prisma" },
    ];
  
    return (
      <div className="px-12 py-16 mt-1 animate-fade-in">
        <h2 className="text-4xl font-bold text-fuchsia-400 mb-8">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {icons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-lg font-medium text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Skills;
