import { Metadata } from 'next';
import CardHoverEffectDemo from "@/app/Servicestech/Card"; // Adjust the path as necessary
import Servicesection from "@/app/Servicestech/Servicesection"; // Adjust the path as necessary
import Breadcrumb from "@/components/Common/Breadcrumb"; // Adjust the path as necessary
import AboutSection from '../about/Aboutsection';

export const metadata: Metadata = {
  title: "Welcome to Rekonsys Software Services",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Services() {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description=""
      />
      <AboutSection />

    </>
  );
}

