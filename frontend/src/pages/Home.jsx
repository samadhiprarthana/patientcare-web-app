import React from 'react';
import heroImage01 from '../assets/images/heroImage01.png';
import heroImage02 from '../assets/images/heroImage02.jpg';
import heroImage03 from '../assets/images/heroImage03.jpg';
import icon01 from'../assets/images/icon01.png';
import icon02 from'../assets/images/icon02.png';
import icon03 from'../assets/images/icon03.png';
import featureImg from '../assets/images/featureImg.png'
import faqImg from '../assets/images/faqImg.png';
import { Link } from 'react-router-dom';
 import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';



const Home = () => {
  return <>
  {/*=============hero section===============*/}
 
  <section className='hero_section pt-[60px] 2xl:h[800px]'> 
  <div className='container'>
    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

       {/*=============hero content===============*/}
       <div>
       <div className='lg:w-[640px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  Take care of your health and happiness<br /> with us.
                </h1>
          <p className='text_para'>
          Access quality healthcare from the comfort of your home.
           Our e-channeling service connects you with top doctors,
            allowing you to book appointments, receive consultations, 
            and manage your health records seamlessly and securely.
             Your well-being is our priority.
          </p>
          <button className='btn'> Request an Appointment</button>
       </div>
        {/*=============hero counter===============*/}
        <div className='mt-[38px] lg:mt-[70] flex flex-row lg:items-center gap-5
        lg:gap-[30px]'>
         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font[700]
          text-headingColor'> 10+
          </h2>
          <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
           <p className='text_para'> Years of Experience</p>
         </div>

         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font[700]
          text-headingColor'> 20+
          </h2>
          <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
           <p className='text_para'> Channeling Services</p>
         </div>

         <div>
          <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font[700]
          text-headingColor'> 100%
          </h2>
          <span className='w-[100px] h-2 bg-red-500 rounded-full block mt-[-14px]'></span>
           <p className='text_para'> Patient Satisfacation</p>
         </div>


        </div>
       </div>
        {/*=============hero content===============*/}

        <div className='flex gap-[30px] justify-end'>
          <div>
            <img  className='w-full h-[100] rounded-[25px]' src={heroImage01} alt =" "/>
          </div>
          <div className='mt-[30px]'>
            <img   src={heroImage02} alt="" className='w-[400px] h-[250px]  rounded-[25px] mb-[30px] '/>
            <img  src={heroImage03} alt=""   className='w-[400px] h-[250px]  rounded-[25px]'/>
          </div>
        </div>

    </div>

  </div>
  
  {/*=============hero section end===============*/}

  <section >
    <div className='container' >
      <div className='lg:w[470px] mx-auto'>
        <h2 className='heading text-center'>
          Providing the best medical <br/> Services
        </h2>
        <p className='text_para text-center'>We are dedicated to delivering exceptional medical services,<br/>
           ensuring your health and well-being are our top priorities.With compassionate care and advanced treatments,<br/>  we strive to provide 
          you with the best possible healthcare experience.
          </p>

      </div>
       <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]
       lg:mt-[55px]'>
       

        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon01} alt=''/> 
          </div>

          <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
             Find a Doctor
           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
             We offer a diverse network of qualified professionals.Find 
            the perfect doctor to guide you on the road to optimal well-being.
            Personalized care awaits - schedule your appointment today!
           </p>
           
           <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  { <BsArrowRight className="group-hover:text-white w-6 h-5" /> }
            </Link>


        </div>
       </div>


       <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon02} alt=''/> 
          </div>

          <div className='mt-[30px]'>
           <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
             Find a Location
           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
           Our health system offers unmatched expert healthcare 
           from the lab to the clinic.Our comprehensive network ensures you receive the best possible
            care at a location that is convenient for you.
           </p>
           
           <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  { <BsArrowRight className="group-hover:text-white w-6 h-5" /> }
            </Link>


        </div>
       </div>

       <div className='py-[30px] px-5'>
          <div className='flex items-center justify-center'>
            <img src={icon03} alt=''/> 
          </div>
          <br/> <br/> 
          <div className='mt-[35px]'>
           <h2 className='text-[26px] leading-7 text-headingColor font-[700] text-center'>
             Book Appointment
           </h2>
           <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
           Schedule an appointment with our expert doctors at your convenience.  
           Enjoy seamless booking, personalized care, and the peace of mind that
            comes with our top-notch medical services.
            </p>
           
           <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  { <BsArrowRight className="group-hover:text-white w-6 h-5" /> }
            </Link>


        </div>
       </div>


      </div>
    </div>
  </section>
  </section>
  
 <About/>


 <div className='new_bgImag '>
 {/*=============services section===============*/}
<section >
 <div className="container">
   <div className='xl:w-[670px] mx-auto'>
    <div>
      <h2 className='heading text-center'> Our Medical Services</h2>
      <p className='text_para text-center'>
      We offer a comprehensive range of medical services, from routine check-ups to specialized treatments. Our dedicated team ensures personalized and compassionate care, using the latest 
      technology to provide the highest quality healthcare.
      </p> <br/>
    </div>
    
    <div className='mx-auto flex items-center justify-center'>
       <ServiceList/>
       </div>

   </div>
  
 </div> 

</section>
{/*=============services section end===============*/}

{/*=============feature section ===============*/}
<section>
  <div className="container">
    <div className="flex item-center justify-between flex-col lg:flex-row">
      {/*=============feature content ===============*/}
       <div className='xl:w-[1000px]'>
        <h2 className='heading'>
          Get Virtual treatment <br/>
          anytime
        </h2>
        <ul className="pl-4">
          <li className='text_para'>
            1.Schedule the appointment directly.
          </li>
          <li className='text_para'>
            2.Search for your physcian hear,and contac their office.
          </li>
          <li className='text_para'>
          3.View our physcian who are accepting new patients,use the 
             online scheduling tool to select an appointment time.
          </li>
         
        </ul>
        <Link to='/'> 
        <button className='btn'> Learn more </button>
        </Link>
     </div>
    {/*=============feature image============= ==*/}
       <div className='relative z-10 xl:w[770px]   mt-[50px] lg:mt-0'>
        <img  src={featureImg} className='w-3/4' alt=''/>

       </div>

    </div>
  </div>
</section>
{/*=============feature section end===============*/}

{/*=============Our grade doctors===============*/}
<section>
<div className="container">
  <div className="xl:w-[570px] mx-auto">
    <h2 className='heading text-center'>
     Our Grate Doctors
    </h2>
    <p className='text_para text-center'>
    Our team of highly skilled and experienced doctors is dedicated to 
    providing exceptional medical care to our patients.
    </p>
  </div>
  <DoctorList limit={4} />        {/* show 1st 4 doctors only*/}
</div>
</section>
{/*=============Our grade doctors end===============*/}


{/*=============FaQ Section===============*/}
<div className="container">
  <div className="flex justify gap-[50px] lg:gap-0">
     <div className='w-1/2 hidden md:block'>
        <img  src={faqImg}alt=''/>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className='heading'>
          Frequently asked questions from our valued patients
        </h2>
       <FaqList/>
      </div>

  </div>
</div>
{/*=============FaQ Section end===============*/}


{/*=============testimonials sec===============*/}
<section>
  
  <div className="container">
  <div className="xl:w-[570px] mx-auto">
    <h2 className='heading text-center'>
    Patient Testimonials
    </h2>
    <p className='text_para text-center'>
    Hear from our satisfied patients who have experienced exceptional care and service. 
    Their stories and feedback highlight our commitment to providing top-quality healthcare.
    </p>
  </div>

  <Testimonial/>
  </div>
</section>

{/*=============testimonials sec end===============*/}

</div> {/*new_bgImag close */}

 </>
  


};

export default Home;