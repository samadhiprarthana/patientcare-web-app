import React from 'react';
import { formatDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  const phdStartDate = "2015-07-04";
  const phdEndDate = "2017-05-20";
  const masterStartDate = "2010-04-02";
  const masterEndDate = "2012-06-30";
  const mbbsStartDate = "2003-07-14";
  const mbbsEndDate = "2007-06-30";

  const formattedPhdStartDate = formatDate(phdStartDate);
  const formattedPhdEndDate = formatDate(phdEndDate);
  const formattedMasterStartDate = formatDate(masterStartDate);
  const formattedMasterEndDate = formatDate(masterEndDate);
  const formattedMbbStartDate = formatDate(mbbsStartDate);
  const formattedMbbEndDate = formatDate(mbbsEndDate);

  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dr. Kevin Silva
          </span>
        </h3>
        <p className='text_para text-[14px] leading-5 md:text-[15px] '>
          Dr. Kevin Silva works as a government doctor at the Colombo General Hospital, where he has established himself as a leading surgeon.
          With over a decade of experience in the medical field, he has successfully treated more than 1800 patients,
          earning a reputation for his exceptional surgical skills and compassionate care.<br /><br />
          Dr. Silva is known for his meticulous attention to detail, innovative approach to surgery, and dedication to patient well-being.
          He is actively involved in medical research and continuously updates his knowledge to incorporate the latest advancements in surgical techniques.
          His commitment to providing high-quality healthcare has made him a trusted name in the medical community.
        </p>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px]'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formattedPhdStartDate} - {formattedPhdEndDate}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PhD in Surgery
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              University of Colombo, Sri Lanka
            </p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formattedMasterStartDate} - {formattedMasterEndDate}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Master in Surgery
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              University of Colombo, Sri Lanka
            </p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formattedMbbStartDate} - {formattedMbbEndDate}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                MBBS/MD
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              University of Peradeniya, Sri Lanka
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-4'>
          <li className='p-4 rounded bg-[#000518]'>
            <span className='text-CyanColor text-[15px] leading-6 font-semibold'>
              {formatDate('2010-12-10')} - {formatDate('2015-11-05')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-white'>
              Senior Surgeon
            </p>
            <p className='text-[16px] leading-6 font-medium text-white'>
              National Hospital Galle
            </p>
          </li>

          <li className='p-4 rounded bg-[#000518]'>
            <span className='text-CyanColor text-[15px] leading-6 font-semibold'>
              {formatDate('2015-12-01')} - {formatDate('2018-03-31')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-white'>
              Consultant Surgeon
            </p>
            <p className='text-[16px] leading-6 font-medium text-white'>
              Colombo General Hospital
            </p>
          </li>

          <li className='p-4 rounded bg-[#000518]'>
            <span className='text-CyanColor text-[15px] leading-6 font-semibold'>
              {formatDate('2018-04-01')} - {formatDate('2020-06-30')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-white'>
              Chief of Surgery
            </p>
            <p className='text-[16px] leading-6 font-medium text-white'>
              Colombo General Hospital
            </p>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
