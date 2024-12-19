import React from "react";
import Image from "next/image";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import Github from "../assets/Github.png";




const Contact: React.FC = () => {
  return (
    <div id="contact" className="px-8 py-6 mt-4 animate-fade-in bg-gray-800">
      <div>
        <p className="font-bold text-fuchsia-400 ml-5 text-4xl">Let's Connect</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-5 ml-5 space-y-8 md:space-y-0 md:space-x-16 p-6  rounded-lg">
        {/* First Column */}
        <div className="flex flex-col space-y-8 md:w-1/3">  
          <div className="flex items-center">
            <Image
              src={email}
              alt="Monika"
              className="rounded-full shadow-lg"
              width={50}
              height={50}
            />
            <div className="ml-8">
              <p className="text-fuchsia-400">Email</p> 
              <a
                href="mailto:monikahj7@gmail.com"
                className="text-white hover:text-fuchsia-500 transition-colors"
              >
                monikahj7@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src={linkedin}
              alt="Monika"
              className="rounded-full shadow-lg"
              width={50}
              height={50}
            />
            <div className="ml-8">
              <p className="text-fuchsia-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/monika-h-j-80517122a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-fuchsia-500 transition-colors"
              >
                https://www.linkedin.com/in/monika-h-j-80517122a/
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src={Github}
              alt="Monika"
              className="rounded-full shadow-lg"
              width={50}
              height={50}
            />
            <div className="ml-8">
              <p className="text-fuchsia-400">GitHub</p>
              <a
                href="https://github.com/MonikaDevHJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-fuchsia-500 transition-colors"
              >
                https://github.com/MonikaDevHJ
              </a>
            </div>
          </div>
        </div>

        {/* Second Column (Form) */}
        <div className="bg-white p-7 rounded-lg shadow-md md:w-2/3 ">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Email Me</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-fuchsia-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-fuchsia-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-600 text-white font-bold py-2 rounded-md hover:bg-fuchsia-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
