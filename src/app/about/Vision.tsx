import React from "react";

const VisionSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co/tTCnmFKX/business-strategy-success-target-goals.jpg"
          alt="Innovation and Excellence"
          className="w-70 h-70 md:h-80 rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
      <h3 className="text-3xl font-bold text-blue-600">Vision</h3>
        <h2 className="text-3xl font-bold text-white">Innovation & Excellence</h2>
        <p className="text-gray-400 mt-4">
          At <strong>Rekonsys Software Services</strong>, we are driven by a passion for 
          innovation and a commitment to excellence. We leverage cutting-edge technology 
          to deliver high-quality IT solutions that empower businesses to grow and thrive.
        </p>
        <p className="text-gray-400 mt-2">
          Our approach is built on collaboration, integrity, and continuous improvement. 
          By integrating the latest trends in software development, cloud computing, 
          and digital transformation, we help businesses stay ahead in a competitive landscape.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;