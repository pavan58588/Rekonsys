import React from 'react';

interface AboutSectionProps {
  title?: string;
  description?: string;
  readMoreLink?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Us",
  description = "",
  readMoreLink = "#"
}) => {
  return (
    <section className="bg-bg-color-dark py-16 px-4">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold mb-6 text-white">We Are Rekonsy Software Services</h3>
          <p className="text-lg mb-6 text-gray-300">{description}</p>
          <p className="text-gray-400 mb-8">
            Founded in January 2023, Rekonsys Software Services was built with a vision to revolutionize IT solutions for small and medium-sized businesses. What started as a passionate team of tech innovators has rapidly grown into a dynamic company dedicated to delivering cutting-edge digital solutions. In our journey so far, we’ve successfully collaborated with diverse clients, offering tailored services that enhance efficiency and drive growth. Our commitment to excellence and quality, combined with a customer-first approach, has earned us a reputation as a trusted IT partner. As we continue to evolve, we remain focused on leveraging the latest technologies and trends to empower your business for the future. Let’s build the future together!
          </p>
          <a 
            href={readMoreLink} 
            className="bg-blue-600 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center w-max"
          >
            Read More
          </a>
        </div>
        {/* Add any additional content for the right side here */}
      </div>
    </section>
  );
};

export default AboutSection;
