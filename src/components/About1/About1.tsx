import React from 'react';
import { Bitcoin, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  title?: string;
  description?: string;
  readMoreLink?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Us",
  description = "",
  readMoreLink = "#"
}) => {
  return (
    <section className="bg-bg-color-dark py-16 px-4">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content Area */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold mb-6 text-white">We Are Rekonsy Software Services</h3>
          <p className="text-lg mb-6 text-gray-300">{description}</p>
          <p className="text-gray-400 mb-8">
          Founded in January 2023, Rekonsys Software Services was built with a vision to revolutionize IT solutions for small and medium-sized businesses. What started as a passionate team of tech innovators has rapidly grown into a dynamic company dedicated to delivering cutting-edge digital solutions. In our journey so far, we’ve successfully collaborated with diverse clients, offering tailored services that enhance efficiency and drive growth. Our commitment to excellence and quality, combined with a customer-first approach, has earned us a reputation as a trusted IT partner. As we continue to evolve, we remain focused on leveraging the latest technologies and trends to empower your business for the future. Let’s build the future together! 
          </p>
          <a 
            href={readMoreLink} 
            className="bg-blue-600 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center w-max"
          >
            Read More
          </a>
        </div>

        {/* Visualization Area */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative z-10 flex justify-center">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <Bitcoin className="text-white w-12 h-12" />
                <TrendingUp className="text-white w-12 h-12" />
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="h-16 w-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 animate-bounce"></div>
                <div className="h-2 bg-white/20 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-2 bg-white/20 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;