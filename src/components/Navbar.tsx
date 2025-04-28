import React, { useState } from "react";
import Link from "next/link";  // Import Link from next/link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-11 fixed top-0 left-0 w-full z-50 py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link href="/" className="text-3xl font-semibold ml-[-33px] ">
          Monika H J
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/About" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="/Experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="/Project" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/Contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-700">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="/experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
