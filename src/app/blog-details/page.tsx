import Breadcrumb from "@/components/Common/Breadcrumb";
import { BentoGridThirdDemo } from "@/app/Servicestech/Servicesection";
import CardHoverEffectDemo from "@/app/Servicestech/Card";

import { Metadata } from "next";
import NavigationSections from "@/app/Servicestech/NavigateSection";
import SoftwareSection from "@/app/Servicestech/SoftwareSection";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description=""
      />
      <div className="my-8">
        <h2 className="text-4xl font-bold text-center">
          Enhance Your Business with Intelligent AI Services
        </h2>
      </div>
      <BentoGridThirdDemo />
      <br></br>
      <CardHoverEffectDemo />
        <br></br>
        <div className="my-8 max-w-8xl mx-auto">
        <h2 className="text-5xl font-bold text-center">
          We are Experts In
        </h2>
        <br /><br />
        <SoftwareSection/>
      </div>
      </>
  );
}

export default Services;
