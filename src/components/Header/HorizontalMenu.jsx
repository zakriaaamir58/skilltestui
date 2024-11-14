import { Link } from "react-router-dom";
const HorizontalMenu = () => {
  return (
    <nav className="horizontal-menu hidden lg:flex space-x-8">
        <Link to="/" className="hover:text-gray-300 transition-colors duration-200 ease-in-out text-white font-medium">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition-colors duration-200 ease-in-out text-white font-medium">About</Link>
        <Link to="/services" className="hover:text-gray-300 transition-colors duration-200 ease-in-out text-white font-medium">Services</Link>
        <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200 ease-in-out text-white font-medium">Contact</Link>
    </nav>
  );
};

export default HorizontalMenu;
