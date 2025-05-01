import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white px-11 fixed top-0 left-0 w-full z-50 py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold ml-[-33px]">
          Monika H J
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/About" className="hover:text-gray-400">About</Link>
          <Link href="/skills" className="hover:text-gray-400">Skills</Link>
          <Link href="/Experience" className="hover:text-gray-400">Experience</Link>
          <Link href="/Project" className="hover:text-gray-400">Projects</Link>
          <Link href="/Contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 bg-gray-700">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">Home</Link>
            <Link href="/About" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">About</Link>
            <Link href="/skills" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">Skills</Link>
            <Link href="/Experience" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">Experience</Link>
            <Link href="/Project" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">Projects</Link>
            <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
