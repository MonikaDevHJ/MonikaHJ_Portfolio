import React from "react";


const About: React.FC = () => {

  return (
    /* eslint-disable react/no-unescaped-entities */

    <div data-aos="fade-up" id="about" className="px-11 py-16 mt-1 animate-fade-in">
      <div className="flex flex-wrap lg:space-x-40">  
        {/* First Column */}
        <div className="flex-1 p-5">
          <p className="font-bold text-fuchsia-400   ml-1 text-4xl">About Me</p>  
          <p className="text-white font-semibold text-2xl mt-8" data-aos="fade-up">
            I have 1.5+ year of experience in software development, specializing
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

       
        </div>
     
     
      </div>
  );
};

export default About;
