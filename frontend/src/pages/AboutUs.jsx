import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/about.jpg';
import aboutCardImg from '../assets/images/aboutCard.png';
import aboutUsVideo from '../assets/videos/AboutUS.mp4';

const AboutUs = () => {
  return (
    <div>
     <section>
    <div className="container">
        <div className='flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/*=========== about image========*/}
           <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>
           <img src={aboutImg} alt='' className= 'rounded-[25px]'/>
             <div className='absolute z-20 bottom-10 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
             lg:right-[22%]'>
             <img src={aboutCardImg} alt='' className= 'rounded-[25px]' />
             </div>
           </div>
         {/*=========== about content========*/}  

         <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
         <h2 className='heading'> Proud to be  a  one  Of  the 
         nation  best
         </h2>
         <p className='text_para'>
         The Patient Care Hospital, located in Homagama , has been serving
         the community for over a decade with a commitment to delivering
         high-quality healthcare services.
        </p>

         <p className="text_para mt-[30px]" >
         The Patient Care Hospital, was established in 2005 by our founder 
         Chairman Dr.Suriyabandara. Over the last 19 years, Patient Care Hospital 
         has set the benchmark and led the way for private healthcare in Sri Lanka, 
         being the pioneer to introduce advanced medical technology and multi-specialist
          consultation and medical care in the private  healthcare sector.
         
         </p>
         {/* <Link to ='/aboutus'>
         <button className='btn  '> Learn More   </button>
         </Link> */}
         </div>

        </div>
    </div>
  </section>
    </div>
  )
}

export default AboutUs;

