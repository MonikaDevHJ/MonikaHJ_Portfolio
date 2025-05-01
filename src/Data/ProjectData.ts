// data/ProjectData.ts
import JoboxHire from "../../src/assets/JoboxHire.png";
import Shoipping from "../../src/assets/Shoipping.png";
import Sigma_Hospital from "../../src/assets/Sigma_Hospital.png";
import Weather from "../../src/assets/Weather.png";

import Recruitearn from "../../src/assets/Recruitearn.png";
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
    image: Shoipping,
    alt: "Shopping Cart",
    name: "Shopping Cart",
    githubLink: "https://github.com/MonikaDevHJ/E_commerce_Website",
    websiteLink: "https://shoppingcart.com",
    routeName: "shopping-cart"
  },
  {
    image: Sigma_Hospital,
    alt: "Sigma Hospital",
    name: "Sigma Hospital",
    githubLink: "https://github.com/example-sigmahospital",
    websiteLink: "https://www.infinitrotech.com/",
    routeName: "sigma-hospital",
    details: `• Developed a comprehensive hospital software system using HTML, CSS, and Bootstrap for responsive and
user-friendly front-end design, while implementing back-end functionalities with C and ASP.NET to ensure robust
and scalable server-side operations.
• Managed database operations and ensured data integrity with SQL.`
  },
  {
    image: Weather,
    alt: "Weather App",
    name: "Weather Forecast",
    githubLink: "https://github.com/MonikaDevHJ/Weather_App",
    websiteLink: "https://weatherforecast.com",
    routeName: "weather-forecast"
  }
];
