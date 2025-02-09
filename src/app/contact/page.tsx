import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import GoogleMap from "@/components/Contact/Googlemap";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We are here to transform your business operations and customer engagements through innovative, technology-driven solutions."
      />

      <Contact />
      <GoogleMap />
    </>
  );
};

export default ContactPage;
