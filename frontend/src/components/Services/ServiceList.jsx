import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../assets/data/services'; 



const ServiceList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 15000); // Change slide every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const getCurrentServices = () => {
    const startIndex = currentIndex * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  return (
    <div className='service-list-container'>
      <div className='service-list'>
        {getCurrentServices().map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
      <div className='pagination-buttons'>
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handlePaginationClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
