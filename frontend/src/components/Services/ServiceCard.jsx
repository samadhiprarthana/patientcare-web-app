import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ item }) => {
  return (
    <div className='service-card xl:w-[300px]'>
      <h3 className='text-[20px] font-bold leading-[40px] lg:w-[600px]'>{item.title}</h3>
      <p className='text-[16px] text-gray-600 flex items-center justify-center'>{item.description}</p>
      <div className='flex items-center mt-4'>
        <Link to={item.link} className='text-primaryColor flex items-center'>
          Learn more <BsArrowRight className='ml-2' />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
