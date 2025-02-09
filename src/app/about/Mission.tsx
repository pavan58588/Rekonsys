import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h3 className="text-3xl font-bold text-blue-600">Mission</h3>
        <h2 className="text-3xl font-bold text-white">Empowering Businesses with Technology</h2>
        <p className="text-gray-300 mt-4">
          At <strong>Rekonsys Software Services</strong>, our mission is to drive digital 
          transformation through innovative IT solutions. We help businesses harness the power 
          of technology to streamline operations, enhance efficiency, and scale effectively.
        </p>
        <p className="text-gray-300 mt-2">
          With a strong focus on customer-centric solutions, we integrate the latest 
          advancements in software development, AI automation, cloud computing, and 
          digital marketing to ensure sustainable business success in a rapidly evolving 
          digital world.
        </p>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <img
          src="https://i.ibb.co/vxWLF3br/words-data-integration-with-dart-target.jpg"
          alt="Empowering Businesses"
          className="w-70 h-70 md:h-80 rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
