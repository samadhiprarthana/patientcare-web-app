import React from 'react';
import { Link } from 'react-router-dom';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';


const socialLinks = [
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className='group-hover:text-white w-6 h-6' />,
  },
  {
    path: 'https://github.com',
    icon: <AiFillGithub className='group-hover:text-white w-6 h-6' />,
  },
  {
    path: 'https://www.instagram.com/',
    icon: <AiOutlineInstagram className='group-hover:text-white w-6 h-6' />,
  },
  {
    path: 'https://linkedin.com',
    icon: <RiLinkedinFill className='group-hover:text-white w-6 h-6' />,
  },
  {
    path: 'https://twitter.com',
    icon: <RiTwitterFill className='group-hover:text-white w-6 h-6' />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/aboutus',
    display: 'About Us',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/blog',
    display: 'Blog',
  },
];

const quickLinks02 = [
  {
    path: '/find-a-doctor',
    display: 'Find a Doctor',
  },
  {
    path: '/appointment',
    display: 'Request an Appointment',
  },
  {
    path: '/location',
    display: 'Find a Location',
  },
  {
    path: '/opinion',
    display: 'Get an Opinion',
  },
];

const quickLinks03 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/donate',
    display: 'Donate',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='relative text-[#00CCFF] py-10' style={{ backgroundColor: '#000035' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks01.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-base text-[#00CCFF] hover:text-white'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              {quickLinks02.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-base text-[#00CCFF] hover:text-white'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className='text-lg font-semibold mb-4'>More</h4>
            <ul className='space-y-2'>
              {quickLinks03.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-base text-[#00CCFF] hover:text-white'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className='text-lg font-semibold mb-4'>Follow Us</h4>
            <div className='flex space-x-4'>
              {socialLinks.map((link, index) => (
                <a href={link.path} key={index} className='text-[#00CCFF] hover:text-white'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center border-[#00CCFF]">
          <p className='text-sm text-[#00CCFF]'>
            &copy; {year} Developed by Samadhi Prarthana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
