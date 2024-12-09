import React from 'react';
import Monika from "../assets/Monika.jpeg"
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-52 lg:gap-96 px-4 md:px-5 lg:px-32 py-12 bg-gray-800 text-white ">
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2 text-2xl   ">
      <p className="text-7xl font-semibold mb-4 text-fuchsia-400 ">Hi, I'm </p>
      <p className="text-7xl font-semibold mb-4 text-fuchsia-400  mt-8"> Monika H J</p>
        <p className="text-xl mb-6 mt-5">I'm a Full Stack Developer passionate about building modern web applications.</p>
        <button className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-900">
          Contact Me
        </button>
      </div>  

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src={Monika}
          alt="Your Name" 
          className="rounded-full"
          width={350}
          height={350}
        />

      </div>
    </section>
  );
};

export default Home;
