import React from "react";
import Image from "next/image";
import JoboxHire from "../assets/JoboxHire.png";
import Shoipping from "../assets/Shoipping.png";
import Sigma_Hospital from "../assets/Sigma_Hospital.png";
import Weather from "../assets/Weather.png";

const Project = () => {
  return (
    <div className="px-8 py-6 mt-1 animate-fade-in border border-gray-700 ">
      <div>
        <p className="font-bold text-white ml-1 text-4xl">My Projects</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap gap-4 mt-10">
        {/* Project 1 */}
        <div className="p-5 group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={JoboxHire}
              alt="JoboxHire"
              className="shadow-lg border border-slate-950 rounded-lg transition-transform duration-300 group-hover:scale-125 object-cover"
              width={400}
              height={400}
            />
          </div>
          <p className="text-white mt-2 text-xl font-bold">Jobox Hire</p>
        </div>

        {/* Project 2 */}
        <div className="p-5 group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Shoipping}
              alt="Shopping Cart"
              className="shadow-lg border border-slate-950 rounded-lg transition-transform duration-300 group-hover:scale-125 object-cover"
              width={400}
              height={400}
            />
          </div>
          <p className="text-white mt-2 text-xl font-bold">Shopping Cart</p>
        </div>

        {/* Project 3 */}
        <div className="p-5 group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Sigma_Hospital}
              alt="Sigma Hospital"
              className="shadow-lg border border-slate-950 rounded-lg transition-transform duration-300 group-hover:scale-125 object-cover"
              width={400}
              height={400}
            />
          </div>
          <p className="text-white mt-2 text-xl font-bold">Sigma Hospital</p>
        </div>

        {/* Project 4 */}
        <div className="p-5 group">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={Weather}
              alt="Weather App"
              className="shadow-lg border border-slate-950 rounded-lg transition-transform duration-300 group-hover:scale-125 object-cover"
              width={400}
              height={400}
            />
          </div>
          <p className="text-white mt-2 text-xl font-bold">Weather Forecast</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
