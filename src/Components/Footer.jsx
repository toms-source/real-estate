import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Logoa from '../Logo/logo1.jpeg';
import Logob from '../Logo/logo2.jpeg';
import Logoc from '../Logo/logo3.jpeg';

const Footer = () => {
  return (
    <div className="px-4 py-12 md:px-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4 mb-4">
            <FaFacebook className="text-3xl" />
            <FaLinkedinIn className="text-3xl" />
          </div>
          <h1 className="font-karla text-lg text-center md:text-left">
            Website Designed & Developed by 
            <span className="underline decoration-transparent hover:decoration-black cursor-pointer"> Luxury Presence</span>
          </h1>
        </div>

        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <div className='flex gap-6 '>
            <img src={Logoa} alt="Logo A" className='h-[50px]' />
            <img src={Logob} alt="Logo B" className='h-[50px]' />
            <img src={Logoc} alt="Logo C" className='h-[10px]' />
          </div>
          <p className="font-karla text-center md:text-right">Copyright 2024 | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
