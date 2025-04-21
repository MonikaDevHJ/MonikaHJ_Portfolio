import React, { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma
} from "react-icons/si";

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const icons = [
    {
      icon: <SiJavascript color="#f7df1e" />,
      name: "JavaScript",
      category: ["Frontend", "Backend"]
    },
    {
      icon: <SiTypescript color="#3178c6" />,
      name: "TypeScript",
      category: ["Frontend", "Backend"]
    },
    { icon: <SiReact color="#61dafb" />, name: "React", category: "Frontend" },
    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next.js",
      category: ["Frontend", "Backend"]
    },
    {
      icon: <SiTailwindcss color="#38bdf8" />,
      name: "Tailwind CSS",
      category: "Frontend"
    },
    {
      icon: <SiMui color="#007fff" />,
      name: "Material UI",
      category: "Frontend"
    },
    {
      icon: <SiBootstrap color="#7952b3" />,
      name: "Bootstrap",
      category: "Frontend"
    },

    {
      icon: <SiNodedotjs color="#3c873a" />,
      name: "Node.js",
      category: "Backend"
    },
    { icon: <SiPrisma color="#2d3748" />, name: "Prisma", category: "Backend" },

    {
      icon: <SiPostgresql color="#336791" />,
      name: "PostgreSQL",
      category: "Database"
    }
  ];

  const filteredIcons =
    filter === "All"
      ? icons
      : icons.filter((tech) => tech.category.includes(filter));

  return (
    <div data-aos="fade-up" className="px-12 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-8">Skills</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {["All", "Frontend", "Backend", "Database"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium ${
              filter === cat
                ? "bg-fuchsia-500 text-white"
                : "bg-gray-200 text-black"
            } hover:scale-105 transition-all duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
        {filteredIcons.map((tech, index) => (
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
