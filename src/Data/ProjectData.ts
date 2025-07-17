// data/ProjectData.ts
import JoboxHire from "../../src/assets/JoboxHire.png";
import Shoipping from "../../src/assets/Shoipping.png";
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
    image: Weather,
    alt: "Weather App",
    name: "Weather Forecast",
    githubLink: "https://github.com/MonikaDevHJ/Weather_App",
    websiteLink: "https://weatherforecast.com",
    routeName: "weather-forecast",
    details: `• Initialized the project using Next.js and Tailwind CSS, with dynamic class handling using the 'cn' utility function for cleaner conditional styling.
• Integrated OpenWeatherMap API to fetch real-time weather data using Axios and managed secure API calls with API keys.
• Used react-query for efficient data fetching and caching, ensuring optimal performance and user experience.
• Displayed formatted dates using date-fns and customized weather icons based on time (e.g., 6AM, 3PM) using a helper function getDayOrNight.ts.
• Modularized the UI into components like WeatherDetails, ForecastWeather, and WeatherIcon for a clean, maintainable structure showing 7-day forecasts and current weather insights.`

  },
  {
    image: Shoipping,
    alt: "Shopping Cart",
    name: "Shopping Cart",
    githubLink: "https://github.com/MonikaDevHJ/E_commerce_Website",
    websiteLink: "https://shoppingcart.com",
    routeName: "shopping-cart"
  },
];
