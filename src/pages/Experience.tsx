"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" id="Experience" className="px-14 py-16 bg-gray-800">
      <p className="text-3xl text-fuchsia-400 font-bold">Experience</p>

      {/* Job 1 */}
      <div className="mt-10" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <p className="text-xl text-slate-300">2023 to Present</p>
          </div>

          <div>
            <p className="text-xl text-slate-300">Jobox Hire Private Limited</p>
            <p className="text-base text-slate-400 mt-2">Full Stack Developer</p>
            <div className="flex gap-3">
              <p className="text-base text-slate-400 mt-1">Project 1: Job Portal</p>
              <a
                href="https://joboxhire.com/Portal"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-slate-400 mt-1"
              >
                Link
              </a>
            </div>
            <ul className="text-base text-slate-400 mt-1">
              <li>• Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).</li>
              <li>• Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.</li>
              <li>• Created server-side functionalities with Node.js and tRPC.</li>
              <li>• Managed PostgreSQL databases and used Prisma ORM.</li>
              <li>• Handled version control and PR management on GitHub.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="mt-4" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div></div>
          <div>
            <p className="text-base text-slate-400 mt-2">Full Stack Developer</p>
            <div className="flex gap-3">
              <p className="text-base text-slate-400 mt-1">Project 2: Refer And Earn</p>
              <a
                href="https://www.joboxhire.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-slate-400 mt-1"
              >
                Link
              </a>
            </div>
            <ul className="text-base text-slate-400 mt-1">
              <li>• Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).</li>
              <li>• Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.</li>
              <li>• Created server-side functionalities with Node.js and tRPC.</li>
              <li>• Managed PostgreSQL databases and used Prisma ORM.</li>
              <li>• Handled version control and PR management on GitHub.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-slate-100/30 mt-8 w-full" />

      {/* Job 2 */}
      {/* <div className="mt-10" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <p className="text-xl text-slate-300">2023 to 2023</p>
          </div>
          <div>
            <p className="text-xl text-slate-300">InfinitroTechnology Pvt Ltd</p>
            <p className="text-base text-slate-400 mt-2">Front End Developer (Intern)</p>
            <div className="flex gap-3">
              <p className="text-base text-slate-400 mt-1">Project 1: Hospital Software</p>
              <a
                href="https://www.infinitrotech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-slate-400 mt-1"
              >
                Link
              </a>
            </div>
            <ul className="text-base text-slate-400 mt-1">
              <li>• Developed hospital software using HTML, CSS, and Bootstrap.</li>
              <li>• Implemented back-end with C and ASP.NET.</li>
              <li>• Managed database operations and ensured data integrity with SQL.</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <hr className="border-t border-slate-100/30 mt-8 w-full" /> */}

      {/* Job 3 */}
      <div className="mt-10" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
          <div>
            <p className="text-xl text-slate-300">2022 to 2023</p>
          </div>
          <div>
            <p className="text-xl text-slate-300">Accenture</p>
            <p className="text-base text-slate-400 mt-2">Exam Proctor</p>
            <ul className="text-base text-slate-400 mt-1">
              <li>
                • Oversaw exams for employee promotions, ensured adherence to company policies and test protocols.
              </li>
              <li>
                • Managed confidential materials and guided candidates during the exam process.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
