import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Skills from "../pages/skills"

const Index = () => {
  useEffect(() => {
    // On refresh, force scroll to the top or the "home" section
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="bg-gray-800">
      {/* Navbar is visible at all times */}
      <Navbar />

      {/* Each section with a unique ID for navigation */}
      <div className="pt-28">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="Experience">
          <Experience />
        </section>



        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;
