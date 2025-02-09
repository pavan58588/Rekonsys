"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const StatsSection: React.FC = () => {
  const stats = [
    { value: 3500, label: "Associates" },
    { value: 100, label: "Clients" },
    { value: 10, label: "Business Growth" },
    { value: 12, label: "Awards" },
  ];

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center mb-8 md:mb-0">
          <h2 className="text-7xl font-bold text-white">
            {startCount && <CountUp start={0} end={stat.value} duration={3} />}+
          </h2>
          <p className="text-gray-400 text-lg">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;