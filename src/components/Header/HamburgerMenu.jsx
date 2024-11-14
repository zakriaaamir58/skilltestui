import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () =>{
    setIsOpen(false);
  }
  return (
    <div className="hamburger-menu lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none transition-transform transform hover:scale-110">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <nav className="bg-blue-700 absolute left-0 w-full transition-opacity duration-300 ease-in-out opacity-95 z-50">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block p-4 hover:bg-blue-500 transition duration-200 ease-in-out" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block p-4 hover:bg-blue-500 transition duration-200 ease-in-out" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <button className="w-full text-left p-4 hover:bg-blue-500 transition duration-200 ease-in-out">
                Services
              </button>
              <ul className="bg-blue-800">
                <li>
                  <Link to="/" className="block p-4 pl-8 hover:bg-blue-500 transition duration-200 ease-in-out" onClick={handleLinkClick}>Home</Link>
                </li>
                <li>
                  <Link to="/services" className="block p-4 pl-8 hover:bg-blue-500 transition duration-200 ease-in-out" onClick={handleLinkClick}>Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="block p-4 hover:bg-blue-500 transition duration-200 ease-in-out" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
