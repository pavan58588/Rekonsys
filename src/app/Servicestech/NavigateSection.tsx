"use client";

import React from 'react';
import Link from 'next/link';

interface SectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface Section {
  id: string;
  title: string;
  items: SectionItem[];
}

const sections: Section[] = [
  {
    id: 'software',
    title: 'Software',
    items: [
      {
        id: 'invoice-module',
        title: 'Invoice Module',
        description: 'Comprehensive invoice management system',
        image: '/images/invoice.jpg',
        tag: 'Environment'
      },
      {
        id: 'inventory-management',
        title: 'Inventory Management',
        description: 'Complete inventory tracking solution',
        image: '/images/inventory.jpg',
        tag: 'Events'
      },
      {
        id: 'e-learning',
        title: 'E Learning Platform',
        description: 'Interactive learning management system',
        image: '/images/elearning.jpg',
        tag: 'Technology'
      },
      {
        id: 'travel-management',
        title: 'Travel Management',
        description: 'Travel booking and management system',
        image: '/images/travel.jpg',
        tag: 'Web'
      },
      {
        id: 'school-management',
        title: 'School Management',
        description: 'Educational institution management',
        image: '/images/school.jpg',
        tag: 'Mobile'
      },
      {
        id: 'recruitment',
        title: 'Recruitment Management',
        description: 'HR and recruitment solution',
        image: '/images/recruitment.jpg',
        tag: 'Design'
      }
      // Add more items as needed for 3x3 grid
    ]
  }
];

const SectionCard: React.FC<{ item: SectionItem }> = ({ item }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
      {item.image && (
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 text-sm bg-white/80 rounded-full">
          {item.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

const NavigationSections: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('software');

  return (
    <div className="flex min-h-screen">
      {/* Left Side Navigation */}
      <div className="w-64 bg-white shadow-lg p-6">
        <nav>
          <ul className="space-y-4">
            {['Software', 'Web & Mobile Apps', 'Technology', 'Digital Marketing'].map((title) => (
              <li key={title}>
                <Link href={title === 'Software' ? '/Servicestech/SoftwareSection' : 'SoftwareSection'}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors
                      ${activeSection === title.toLowerCase().replace(/ & /g, '-')
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    onClick={() => setActiveSection(title.toLowerCase().replace(/ & /g, '-'))}
                  >
                    <span className="font-medium">{title}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="grid grid-cols-3 gap-6">
          {sections[0].items.map((item) => (
            <SectionCard key={`${sections[0].id}-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationSections;