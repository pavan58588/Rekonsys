import React from 'react'

import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-7xl text-center font-bold mb-4">Our Services</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Software Development",
    description:
      "Have a great product idea? Kudos to your vision! With our expertise in delivering advanced, secure, and UI/UX-rich solutions, we can bring your idea to life and create a lasting impact together.",
    link: "#",
    imageSrc: "/images/logo/rekonsys-logo.png", // Ensure this is not an empty string
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "With your expertise in automating systems and processes, you need an AI team that offers end-to-end solutions, from defining project goals to seamless execution.",
    link: "#",
  },
  {
    title: "Cloud Service",
    description:
      "Leverage the power of cloud computing with our scalable, secure, and cost-effective cloud services. From migration to management, we ensure seamless performance and reliability for your business",
    link: "#",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand with our result-driven digital marketing services! From SEO and PPC to social media and content marketing, we craft strategies that drive traffic, engagement, and conversions.",
    link: "#",
  },
  {
    title: "IOT (Internet of Things)",
    description:
      "Built great hardware? We power it with world-class software. Rekonsys delivers smart, scalable IoT solutions to enhance connectivity, performance, and innovation. Let’s build the future together!",
    link: "#",
  },
  {
    title: "Mobile Application",
    description:
      "Transform your ideas into powerful mobile apps with Rekonsys! We design and develop high-performance, user-friendly applications to drive growth and engagement. Let’s build your dream app today!",
    link: "#",
  },
];


export default CardHoverEffectDemo;