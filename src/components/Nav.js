import { Link } from "react-router-dom";
import logo2 from "../assets/oterhs/logo -light.png";
import { useState, useEffect } from "react";

const Nav = ({ type }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <img className="w-3/4 md:w-1/2" src={logo2} alt="" />
        </div>
        {isMobile ? (
          <button
            className="md:hidden"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-7 h-7 bg-gray-900 text-white rounded-lg mt-2 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <div className="text-xl flex gap-10 font-bold text-[#ffff]">
            <Link to="/">Home </Link>
            {type === "individual" && (
              <Link to="/regindivudal">
                <span className="whitespace-nowrap">Client-Registration</span>
              </Link>
            )}
            {type === "enterprice" && (
              <Link to="/regenterprise">
                <span className="whitespace-nowrap">Client Registration</span>
              </Link>
            )}
            <Link to="/career">Career </Link>
            <Link to="/blog">Blog </Link>
          </div>
        )}
      </div>
      {isMobile && isMobileMenuOpen && (
  <div className="sidebar-container">
    <div className="sidebar-content">
      <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4">
        
      <div>
          <img className="w-3/2 mb-4 mx-auto" src={logo2} alt="" />
              </div>
              
              <Link to="/" className="sidebar-link ">
          <span className="sidebar-link-text">Home</span>
        </Link>
        {type === "individual" && (
          <Link to="/regindivudal" className="sidebar-link">
            <span className="sidebar-link-text">Client Registration</span>
          </Link>
        )}
        {type === "enterprice" && (
          <Link to="/regenterprise" className="sidebar-link">
            <span className="sidebar-link-text">Client Registration</span>
          </Link>
        )}
        <Link to="/career" className="sidebar-link">
          <span className="sidebar-link-text">Career</span>
        </Link>
        <Link to="/blog" className="sidebar-link">
          <span className="sidebar-link-text">Blog</span>
        </Link>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Nav;
