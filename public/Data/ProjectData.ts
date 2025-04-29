// data/ProjectData.ts
import JoboxHire from "../../src/assets/JoboxHire.png";
import Shoipping from "../../src/assets/Shoipping.png";
import Sigma_Hospital from "../../src/assets/Sigma_Hospital.png";
import Weather from "../../src/assets/Weather.png";
import Github from "../assets/Github.png";
import Link from "../assets/Link.png";
import Recruitearn from "../../src/assets/Recruitearn.png";
import { StaticImageData } from "next/image";

export type Project = {
  image: StaticImageData;
  alt: string;
  name: string;
  githubLink: string;
  websiteLink: string;
};

export const projects: Project[] = [
  {
    image: Recruitearn,
    alt: "Recruit And Earn",
    name: "Recruit And Earn",
    githubLink: "https://github.com/JoboxOrg/JoboxHire",
    websiteLink: "https://www.joboxhire.co/",
  },
  {
    image: JoboxHire,
    alt: "Jobox Hire",
    name: "Jobox Hire Pvt Ltd",
    githubLink: "https://github.com/JoboxOrg/JoboxHire",
    websiteLink: "https://joboxhire.com/",
  },
  {
    image: Shoipping,
    alt: "Shopping Cart",
    name: "Shopping Cart",
    githubLink: "https://github.com/MonikaDevHJ/E_commerce_Website",
    websiteLink: "https://shoppingcart.com",
  },
  {
    image: Sigma_Hospital,
    alt: "Sigma Hospital",
    name: "Sigma Hospital",
    githubLink: "https://github.com/example-sigmahospital",
    websiteLink: "https://www.infinitrotech.com/",
  },
  {
    image: Weather,
    alt: "Weather App",
    name: "Weather Forecast",
    githubLink: "https://github.com/MonikaDevHJ/Weather_App",
    websiteLink: "https://weatherforecast.com",
  },
];
