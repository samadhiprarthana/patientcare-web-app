import React, { useState } from "react";
import ServiceCard from "../components/Services/ServiceCard";
import AboutUsVideo from "../assets/videos/AboutUS.mp4";
import { services } from "../assets/data/services";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src={AboutUsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <p className="text-lg mb-4">
            At Patient Care Hospital, we are dedicated to providing a comprehensive range of healthcare services. Our highly skilled professionals are committed to delivering quality care and ensuring the well-being of our patients. Whether you need routine check-ups, specialized treatments, or emergency care, we are here to provide you with the best possible medical services. Explore our wide array of services to find the care you need and deserve.
          </p>
          <p className="text-lg mb-4">
            Our hospital is equipped with state-of-the-art facilities and advanced medical technologies to ensure that you receive the most accurate diagnoses and effective treatments. We believe in a patient-centric approach and strive to create a comfortable and supportive environment for all our patients. Our dedicated team of doctors, nurses, and healthcare professionals work tirelessly to provide personalized care tailored to your individual needs.
          </p>
          <input
            type="text"
            placeholder="Search for a service..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-[#00CCFF]  rounded-lg w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-8">
        {filteredServices.map((item, index) => (
          <ServiceCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
