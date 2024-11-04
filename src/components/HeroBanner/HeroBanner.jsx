import { Settings } from "lucide-react";

const HeroBanner = () => {
    return (
        <div className="pt-9 w-full">
            <div className="relative w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3"
                        alt="Office Background" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-screen items-center">
                        {/* Left Column - Text Content */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-10 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                                DIGITAL
                                <br />
                                MARK
                                <br />
                                ETING
                            </h1>
                            <p className="text-base sm:text-lg text-gray-200 max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                                Static and dynamic secure code review can prevent issues before your product is even released. We can integrate with your dev environment.
                            </p>
                            {/* Scroll indicator */}
                            <div className="mt-8 hidden sm:block">
                                <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center">
                                    <div className="animate-bounce text-white">↓</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Decorative Elements */}
                        <div className="relative h-[250px] sm:h-[400px] lg:h-full flex justify-center items-center lg:items-end">
                            {/* Video preview circle */}
                            <div className="absolute top-0 right-0 lg:top-8 lg:right-8 z-20">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-black/80 backdrop-blur-sm 
                                                flex items-center justify-center cursor-pointer 
                                                hover:bg-black/90 transition-colors group">
                                    <div className="text-white text-center">
                                        <p className="text-xs sm:text-sm">WATCH</p>
                                        <p className="text-xs sm:text-sm">VIDEO INTRO</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Settings icon */}
                            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20">
                                <Settings className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </div>

                            {/* Decorative dot */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 rounded-full bg-blue-500"></div>
                            </div>

                            {/* Glass effect panel */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
