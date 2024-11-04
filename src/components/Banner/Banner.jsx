import { ArrowUpRight } from 'lucide-react';
import img from "../../assets/1 (1).webp";

const Banner = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-xs md:max-w-md">
            <img
              src={img}
              alt="Office meeting space"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-xs md:text-sm uppercase tracking-wider">WHO WE ARE</h2>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              WE ARE A LEADING DIGITAL MARKETING AGENCY.
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We are a team of strategic digital marketers working globally with the largest brands. 
              We believe that progress only happens when you refuse to play it safe. 
              We combine ideas and insights with design and technology to produce brand experiences that customers love.
            </p>
            <div className="flex items-center justify-center lg:justify-start pt-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white backdrop-blur-sm 
                              flex items-center justify-center cursor-pointer 
                              hover:bg-black/90 transition-colors group">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-600">Explore us</p>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
