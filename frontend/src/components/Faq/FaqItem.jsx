import React, { useState } from 'react';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="p-3 lg:p-5 rounded-[12px] border border-[#00CCFF] mb-5 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className='text-[14px] leading-7 lg:text-[18px] lg:leading-8 text-[#000035] font-bold '>
          {item.question}
        </h4>
        <span className='text-[24px] lg:text-[30px]'>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <p className='mt-2 text-[12px] lg:text-[14px] text-bodyColor'>
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
