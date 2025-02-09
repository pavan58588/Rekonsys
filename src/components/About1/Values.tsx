"use client"; 
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TeamFeatures = () => {
  const features: FeatureCard[] = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 12L12 24M24 12L36 24M24 12V36" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="8" fill="#FB923C"/>
          <path d="M24 20L26 22M24 20L22 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Powerful Ownership",
      description: "We don't blindly follow the requirements. From top to bottom, we have an impact on Project direction."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect x="16" y="12" width="16" height="24" rx="2" fill="#3B82F6"/>
          <path d="M20 22H28M20 28H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="18" r="4" fill="#FB923C"/>
        </svg>
      ),
      title: "Consultancy Attitude",
      description: "We are engaged in the full business process. We're not just an agency we think of as a consultant."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 12L36 32H12L24 12Z" fill="#3B82F6"/>
          <circle cx="24" cy="28" r="2" fill="white"/>
          <circle cx="36" cy="24" r="4" fill="#FB923C"/>
          <circle cx="12" cy="24" r="4" fill="#FB923C"/>
        </svg>
      ),
      title: "Outcome Oriented",
      description: "We build adaptable digital products, not raw features. Our focus is on making your business succeed in the long term."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Behind every successful product
        </h1>
        <p className="text-2xl md:text-3xl font-light italic text-gray-400">
          we build is a great team
          <span className="inline-block ml-2">
            <motion.span
              animate={{ rotate: [0, 0, 14, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="inline-block origin-bottom-right text-orange-500"
            >
              :)
            </motion.span>
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#0A192F] rounded-2xl p-8 hover:shadow-xl transition-shadow"
            style={{
              boxShadow: '0 4px 6px -1px rgba(10, 25, 47, 0.1), 0 2px 4px -1px rgba(10, 25, 47, 0.06)'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mb-6"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-gray-100 text-xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamFeatures;