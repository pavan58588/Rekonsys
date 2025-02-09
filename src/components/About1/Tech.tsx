import React from 'react';
import { 
  FaFilter, FaJava, FaAws, FaSwift, 
  FaAndroid, FaPython, FaReact, FaNodeJs, FaAngular 
} from 'react-icons/fa';
import { 
  SiNx, SiVuedotjs, SiSpacy, SiGooglecloud, 
  SiLaravel, SiCodeigniter, 
  SiKeras, SiPytorch 
} from 'react-icons/si';

const technologies = [
  { icon: FaFilter, name: 'Flutter' },
  { icon: FaReact, name: 'React' },
  { icon: SiNx, name: 'Nuxt' },
  { icon: FaAngular, name: 'Angular' },
  { icon: FaJava, name: 'Java' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiVuedotjs, name: 'Vue.js' },
  { icon: FaPython, name: 'Python' },
  { icon: SiKeras, name: 'Keras' },
  { icon: SiSpacy, name: 'Spacy' },
  { icon: SiPytorch, name: 'Pytorch' },
  { icon: FaAws, name: 'AWS' },
  { icon: SiGooglecloud, name: 'Google Cloud' },
  { icon: FaAndroid, name: 'Android' },
  { icon: FaSwift, name: 'IOS/Swift' },
  { icon: SiLaravel, name: 'Laravel' },
  { icon: SiCodeigniter, name: 'Codeigniter' },
];

const TechnologyIcons: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 pointer-events-none"></div>
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl font-bold text-white">
          Technologies We Work With
        </h2>
        <p className="text-white mt-2">
          We help you understand and test how your business can embrace emerging technologies
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <tech.icon className="w-10 h-10 mr-2 text-gray-700" />
            <span className="text-sm font-medium text-gray-800">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyIcons;