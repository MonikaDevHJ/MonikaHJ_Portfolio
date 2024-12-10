import React from 'react';
import Monika from "../assets/Monika.jpeg";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-52 lg:gap-96 px-4 md:px-5 lg:px-20 py-12 bg-gray-800 text-white animate-fade-in">
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2 text-2xl animate-slide-left   ">
        <p className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 text-fuchsia-400">Hi, I'm</p>
        <p className="text-3xl md:text-5xl lg:text-5xl font-semibold mb-4 text-white mt-8 whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing  w-full ">
          Full Stack Developer
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-6 mt-5">
           passionate about building modern web applications.
        </p>
        <button className="bg-fuchsia-700 text-white text-sm md:text-base lg:text-lg px-6 py-2 rounded-lg hover:bg-fuchsia-900">
          Contact Me
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-zoom-in ">
        <Image
          src={Monika}
          alt="Monika"
          className="rounded-full shadow-lg"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
};

export default Home;
