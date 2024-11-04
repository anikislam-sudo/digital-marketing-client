import { Menu, Search, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <span className="text-white font-bold text-xl">Axtra</span>
            <span className="text-white text-xs ml-1 hidden sm:inline">DIGITAL AGENCY STUDIO</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-700">HOME</Link>
            <Link to="/" className="text-white hover:text-gray-700">ABOUT</Link>
            <Link to="/pricing" className="text-white hover:text-gray-700">PRICING</Link>
            
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-gray-700 focus:outline-none">
                SERVICES
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg">
                  <Link to="/addService" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    Add Service
                  </Link>
                  <Link to="/service" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    Service
                  </Link>
                </div>
              )}
            </div>

            <Link to="/team" className="text-white hover:text-gray-700">TEAM</Link>
            <Link to="/" className="text-white hover:text-gray-700">BLOG</Link>
            <Link to="/contact" className="text-white hover:text-gray-700">CONTACT</Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-white" />
            <button onClick={toggleMobileMenu} className="lg:hidden">
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-b border-gray-200">
          <Link to="/" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">HOME</Link>
          <Link to="/" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">ABOUT</Link>
          <Link to="/pricing" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">PRICING</Link>
          
          {/* Services Dropdown - Mobile */}
          <div>
            <button 
              onClick={toggleServicesDropdown}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
            >
              SERVICES
              <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${servicesDropdownOpen ? 'block' : 'hidden'} pl-4`}>
              <Link to="/addService" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                Add Service
              </Link>
              <Link to="/service" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                Service
              </Link>
            </div>
          </div>

          <Link to="/team" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">TEAM</Link>
          <Link to="/" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">BLOG</Link>
          <Link to="/contact" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
