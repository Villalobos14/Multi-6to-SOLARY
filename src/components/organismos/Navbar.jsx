import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from "../../assets/LogoVenture.png";
import { navItems } from "../../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-6 w-6 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Solary</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  className="cursor-pointer"
                  smooth={true}
                  to={item.href}>
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/login" className="py-2 px-3 border rounded-md bg-white bg-opacity-10 backdrop-blur">
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-[#52288e] py-2 px-3 rounded-md"
            >
              Crear una cuenta
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <ScrollLink
                    className="cursor-pointer"
                    smooth={true}
                    to={item.href}
                    onClick={() => setMobileDrawerOpen(false)}>
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/register"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
