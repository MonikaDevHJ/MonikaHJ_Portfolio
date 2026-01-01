
import React from 'react';
import Monika from "../../public/assets/Monika.jpeg";
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
  return (
    <section data-aos="fade-up" id="home" className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-52 lg:gap-96 px-4 md:px-5 lg:px-20 py-14 bg-gray-800 text-white animate-fade-in">
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2 text-2xl animate-slide-left">
        <p className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-4 text-fuchsia-400">Hi, I&#39;m</p>
        <p className="text-3xl md:text-5xl lg:text-5xl font-semibold mb-4 text-white mt-8 whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing w-full">
          Full Stack Developer
        </p>
        <p className="text-base md:text-lg lg:text-1xl mb-6 mt-7">
          passionate about building modern web applications.
        </p>
        <div className='flex gap-5 mt-8'>
          <div>
            <Link href="#contact">
              <button className="bg-fuchsia-700 text-white text-sm md:text-base mt-3 lg:text-lg px-6 py-2 rounded-lg hover:bg-fuchsia-900">
                Contact Me
              </button>
            </Link>
          </div>
          <div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-fuchsia-700 text-white text-sm md:text-base mt-3 lg:text-lg px-6 py-2 rounded-lg hover:bg-fuchsia-900">
                View My Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-2/5 mt-8 md:mt-0 animate-zoom-in">
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
