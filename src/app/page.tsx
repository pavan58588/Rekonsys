import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSection from "@/components/About1/About1";
import TechnologyIcons from "@/components/About1/Tech";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
// import { WorldMap } from "@/components/ui/world-map";
import Video from "@/components/Video";
import { Metadata } from "next";
import TeamFeatures from "@/components/About1/Values";
import Servicesection from "./Servicestech/Servicesection";

export const metadata: Metadata = {
  title: "Welcome to Rekonsys Software Services",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSection />
      <Features />
      <TechnologyIcons />
      <Video />
      <Brands />
      <TeamFeatures />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
