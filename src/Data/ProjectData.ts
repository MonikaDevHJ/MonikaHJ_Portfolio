// data/ProjectData.ts
import JoboxHire from "../../public/assets/JoboxHire.png";
import getsetHire from "../../public/assets/getsetHire.png";
import Find_job from "../../public/assets/Find_job.png";

import Recruitearn from "../../public/assets/Recruitearn.png";
import { StaticImageData } from "next/image";

export type Project = {
  image: StaticImageData;
  alt: string;
  name: string;
  githubLink: string;
  websiteLink: string;
  routeName: string;
  details?: string;
};

export const projects: Project[] = [
  {
    image: Recruitearn,
    alt: "Recruit And Earn",
    name: "Recruit And Earn",
    githubLink: "https://github.com/JoboxOrg/JoboxHire",
    websiteLink: "https://www.joboxhire.co/",
    routeName: "recruit-and-earn",
    details: `• Led frontend development for employer and admin portals from inception to deployment.
   • Developed candidate referral workflows for recruiters to refer candidates and earn incentives.
    • Implemented form validation, authentication, and authorization for security and accessibility.
    • Optimized UI components for performance, responsiveness, and reusability using Next.js, React.js, and Tailwind
    CSS.
    • Integrated TypeScript for better type safety and reduced runtime errors.
    • Collaborated with backend teams to consume REST APIs for efficient data flow"`
  },

  {
    image: JoboxHire,
    alt: "Jobox Hire",
    name: "Jobox Hire Pvt Ltd",
    githubLink: "https://github.com/JoboxOrg/JoboxHire",
    websiteLink: "https://joboxhire.com/",
    routeName: "jobox-hire",
    details: `• Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).
• Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.
• Created server-side functionalities with Node.js and tRPC for seamless client-server communication.
• Managed PostgreSQL databases and used Prisma for ORM.
• Handled version control, PR management, and merge conflicts on GitHub.`
  },

  {
    image: getsetHire,
    alt: "Jobox Hire",
    name: "getsethire.co",
    githubLink: "https://github.com/Jobox-getsethire",
    websiteLink: "https://www.getsethire.co/",
    routeName: "getsethire.co",
    details: `• Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).
• Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.
• Created server-side functionalities with Node.js and tRPC for seamless client-server communication.
• Managed PostgreSQL databases and used Prisma for ORM.
• Handled version control, PR management, and merge conflicts on GitHub.`
  },

  {
    image: Find_job,
    alt: "Find_job",
    name: "Find_Job",
    githubLink: "https://github.com/MonikaDevHJ/Find_JobT3",
    websiteLink: "https://find-job-t3.vercel.app/",
    routeName: "Find_Job",
    details: `• Developed JOBOX, a job platform, using the T3 Stack (TypeScript, Tailwind CSS, tRPC).
• Built responsive front-end interfaces with React.js, Next.js, HTML, CSS, and Tailwind CSS.
• Created server-side functionalities with Node.js and tRPC for seamless client-server communication.
• Managed PostgreSQL databases and used Prisma for ORM.
• Handled version control, PR management, and merge conflicts on GitHub.`
  }
];
