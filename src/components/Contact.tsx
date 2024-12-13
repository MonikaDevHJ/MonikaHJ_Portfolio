import React from "react";
import Image from "next/image";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import Github from "../assets/Github.png";

function Contact() {
  return (
    <div className="px-8 py-6 mt-4 animate-fade-in bg-gray-800">
      <div>
        <p className="font-bold text-fuchsia-400 ml-5 text-4xl">Let's Connect</p>
      </div>

      {/* First column */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 ml-5 space-y-8 md:space-y-0 md:space-x-16 p-6 border rounded-lg">
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
              <p className="text-white">monikahj7@gmail.com</p>
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
              <p className="text-white">monikahj7@gmail.com</p>
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
              <p className="text-white">monikahj7@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Second Column (Form) */}
        <div className="bg-white p-6 rounded-lg shadow-md md:w-2/3">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Email Me</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
