import React, { useState } from 'react';
import doctorImg01 from '../../assets/images/doctorImg01.jpg';
import starIcon from '../../assets/images/star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  return ( 
    <section>
      <div className="max-w-[1170px] px-5 mx-auto mt-10">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className='w-full max-w-[200px]'>
                <img src={doctorImg01} alt='' className='w-full h-auto' />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Dr. Kevin Silva</h3>
                <div className='flex items-center gap-2 mt-1'>
                  <div className='flex items-center gap-1'>
                    <img src={starIcon} alt='' className='h-[25px] w-[25px]' />
                    <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>4.9</span>
                  </div>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(698)</span>
                </div>
                <p className='text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                 Dr. Kevin Silva is a renowned government surgeon at Colombo General Hospital with over a decade of experience.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab('about')}
                className={`${tab === 'about' ? 'border-b border-solid border-primaryColor' : ''} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' ? 'border-b border-solid border-primaryColor' : ''} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            

            <div className='mt-[50px]'>
                  
            { tab=='about' && <DoctorAbout/> }
            { tab=='feedback' && <Feedback/> }
         </div>
      </div>

          <div>
            <SidePanel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
