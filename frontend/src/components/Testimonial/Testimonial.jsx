import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.jpg';
import patientAvatar1 from '../../assets/images/patient-avatar1.jpg';
import patientAvatar2 from '../../assets/images/patient-avatar2.jpg';
import patientAvatar3 from '../../assets/images/patient-avatar3.jpg';
import patientAvatar4 from '../../assets/images/patient-avatar4.jpg';
import patientAvatar5 from '../../assets/images/patient-avatar5.jpg';

import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] border border-[#000035] shadow-lg ">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar} alt='Lahiru Imran' className="w-w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Lahiru Imran
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "The medical care I received was outstanding. The staff was professional and caring, and I felt well taken care of throughout my treatment."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] shadow-lg  border border-[#000035]">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar1} alt='Nimal Perera' className="w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Nashu Nimnadi
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "A wonderful experience from start to finish. The doctors were knowledgeable and attentive, and the facilities were top-notch."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] border border-[#000035] shadow-lg">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar2} alt='Selina Silva' className="w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Selina vindi
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "I highly recommend this medical center. <br/>The staff were friendly, and the level of care exceeded my expectations."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] border border-[#000035] shadow-lg ">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar3} alt='Lahiru Imran' className="w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Mohid Masthik
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "The medical care I received was outstanding. The staff was professional and caring, and I felt well taken care of throughout my treatment."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(4)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] border border-[#000035] shadow-lg">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar4} alt='Nimal Perera' className="w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Suchi Clovi
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "A wonderful experience from start to finish. The doctors were knowledgeable and attentive, and the facilities were top-notch."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[25px] border border-[#000035] shadow-lg">
            <div className="flex items-center gap-[13px] mb-4">
              <img src={patientAvatar5} alt='Selina Silva' className="w-12 h-12 rounded-full" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Senal Wasala
              </h4>
            </div>
            <p className="text-[14px] text-gray-600">
              "I highly recommend this medical center. <br/>The staff were friendly, and the level of care exceeded my expectations."
            </p>
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <HiStar key={index} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default Testimonial;
