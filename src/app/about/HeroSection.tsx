import React from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] bg-gradient-to-br from-purple-900 via-red-900 to-orange-800 overflow-hidden rounded-3xl">
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      
      {/* Mars terrain image overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/XxvhdVCb/Ai-Bg.jpg" 
          alt="Automate" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left side with text */}
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Automate 
              <br />
              Business to The
              <br />
              Future
            </h1>
          </div>

          {/* Right side with robot and UI elements */}
          <div className="relative h-full flex-1 flex justify-between items-center">
            {/* Spacewalks chart */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white">
                <div className="mb-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span>Business Growth</span>
                </div>
                <div className="w-48 h-24 relative">
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="w-1/6 h-[60%] bg-orange-500/50 rounded-t mx-0.5" />
                    <div className="w-1/6 h-[40%] bg-orange-500/50 rounded-t mx-0.5" />
                    <div className="w-1/6 h-[80%] bg-orange-500/50 rounded-t mx-0.5" />
                    <div className="w-1/6 h-[50%] bg-orange-500/50 rounded-t mx-0.5" />
                    <div className="w-1/6 h-[70%] bg-orange-500/50 rounded-t mx-0.5" />
                    <div className="w-1/6 h-[90%] bg-orange-500/50 rounded-t mx-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Robot Image */}
            <div className="relative h-[90%] aspect-[3/4] mt-auto ml-left">
              <img
                src="https://i.ibb.co/Q35gdHwm/Ai-Robot-removebg-preview.png"
                alt="AI Robot Explorer"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            {/* Heart rate monitor */}
            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={16} />
                  <span>Less Man Power</span>
                </div>
                <div className="w-48 h-24 relative">
                  <svg viewBox="0 0 100 25" className="w-full h-full stroke-orange-500 stroke-2 fill-none">
                    <path d="M 0,12 L 20,12 L 25,5 L 30,19 L 35,12 L 100,12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave curve */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200V100C240 140 480 60 720 80C960 100 1200 160 1440 120V200H0Z"
            className="fill-orange-500/20"
          />
          <path
            d="M0 200V120C240 160 480 80 720 100C960 120 1200 180 1440 140V200H0Z"
            className="fill-orange-500/10"
          />
          <path
            d="M0 200V140C240 180 480 100 720 120C960 140 1200 200 1440 160V200H0Z"
            className="fill-orange-500/5"
          />
        </svg>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 right-0 w-1/3 h-48">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 right-0 w-full border-l border-t border-orange-500/20 rounded-tl-full"
            style={{
              height: `${100 - i * 15}%`,
              width: `${100 - i * 15}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;