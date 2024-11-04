import { Settings } from 'lucide-react';

const Footer = () => {
  return (



      <footer className="bg-black text-white w-full  bottom-0">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">Axtra <br />
              <span className="text-white text-xs ml-1 hidden sm:inline">DIGITAL AGENCY STUDIO</span>
              </div>
              <p className="text-gray-400 max-w-md">
                When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
              </p>
            </div>

            {/* Right side - Social Links */}
            <div className="flex flex-col space-y-2">
              <button className="w-full text-left p-4 bg-black hover:bg-gray-900 border-t border-gray-800">
                FACEBOOK
              </button>
              <button className="w-full text-left p-4 bg-black hover:bg-gray-900 border-t border-gray-800">
                TWITTER
              </button>
              <button className="w-full text-left p-4 bg-black hover:bg-gray-900 border-t border-gray-800">
                LINKEDIN
              </button>
              <button className="w-full text-left p-4 bg-black hover:bg-gray-900 border-t border-gray-800">
                INSTAGRAM
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400">
                © 2022 - 2025 | All rights reserved by Wealcoder
              </div>

              {/* Navigation Links */}
              <div className="flex space-x-8">
                <a href="#" className="text-white hover:text-gray-300">ABOUT US</a>
                <a href="#" className="text-white hover:text-gray-300">CONTACT</a>
                <a href="#" className="text-white hover:text-gray-300">CAREER</a>
                <a href="#" className="text-white hover:text-gray-300">FAQS</a>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Button - Fixed Position */}
        <button className="fixed bottom-8 right-8 bg-white p-2 rounded-full">
          <Settings className="w-6 h-6 text-black" />
        </button>
      </footer>
    
  );
};

export default Footer;
