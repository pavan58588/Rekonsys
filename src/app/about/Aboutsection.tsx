"use client"
import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative w-full  from-blue-50 to-white py-16 md:py-24">
      {/* Main container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image section with diagonal cut */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              {/* Blue border frame */}
              <div className="absolute top-4 right-4 w-full h-full border-8 border-blue-500 transform -rotate-6" />
              
              {/* Main image container with diagonal clip */}
              <div className="relative w-full h-full overflow-hidden transform rotate-6">
                <img 
                  src="https://i.ibb.co/v6zC1Y71/About.jpg"
                  alt="Business professional"
                  className="w-full h-full object-cover transform -rotate-6"
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2">
            {/* About Us label */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                About Us
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Unleashing Digital Brilliance: Pioneering Transformation and Cloud Empowerment
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-6 text-gray-300">
              <p>
                Rekonsys is built on tenacity, determination, and an innate spirit to help businesses 
                transform and manage their operations by unlocking the value of technology, 
                making us one of the leading business solution providers. With our strong 
                domain expertise and knowledge of evolving fields, we address the entire 
                breadth of your business needs, from strategy and design to manage operations 
                of any industry.
              </p>
              
              <p>
                At Rekonsys, we harness the power of design, cutting-edge engineering, and cloud 
                technology to build future-proof products and solutions. As a digital 
                transformation and cloud solutions company, we can help your business 
                leverage modernized core technology and capitalize on automated operations to 
                fuel digital growth.
              </p>

              {/* Know More button */}
              <div className="pt-4">
                <button className="flex items-center group text-blue-600 font-medium">
                  Know More
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;