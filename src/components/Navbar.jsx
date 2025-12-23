//updated file 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
            Software Engineer
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-blue-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="flex flex-col text-center text-gray-300">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="py-4 border-b border-gray-800"
              >
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
