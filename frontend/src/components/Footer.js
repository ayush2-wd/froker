import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSquareInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { IoLogoYoutube, IoIosMail } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import logo from '../img/nav/logo.png';
import { IoIosArrowForward } from "react-icons/io";
import scan from '../img/nav/scan.jpg';
import decoration from '../img/decoration.png';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="mt-20 lg:mt-40 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-evenly items-start pt-16 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex justify-center mb-8 lg:mb-0">
          <img src={logo} alt="Company Logo" className="w-40 lg:w-auto" />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-2/5 justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col mb-8 lg:mb-0">
            <h4 className="text-orange-600 text-xl font-bold mb-4">Quicklink</h4>
            <div className="flex items-center mb-4">
              <IoIosArrowForward />
              {location.pathname === "/" ? (
                <span onClick={() => window.scrollTo(0, 0)} className="ml-4 cursor-pointer text-gray-800">
                  Home
                </span>
              ) : (
                <Link to="/" className="ml-4 text-gray-800">
                  Home
                </Link>
              )}
            </div>
            <div className="flex items-center mb-4">
              <IoIosArrowForward />
              <Link to="/about-us" className="ml-4 text-gray-800">
                About us
              </Link>
            </div>
            <div className="flex items-center mb-4">
              <IoIosArrowForward />
              <Link to="/privacy-policy" className="ml-4 text-gray-800">
                Privacy policy
              </Link>
            </div>
            <div className="flex items-center mb-4">
              <IoIosArrowForward />
              <Link to="/terms-and-conditions" className="ml-4 text-gray-800">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0">
            <h4 className="text-orange-600 text-xl font-bold mb-4">Contacts</h4>
            <div className="flex items-center mb-4">
              <a
                href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600"
              >
                <HiLocationMarker size="24px" />
              </a>
              <span className="ml-4 text-gray-800">Whitefield, Bengaluru, 560066</span>
            </div>
            <div className="flex items-center mb-4 cursor-pointer">
              <a href="mailto:Support@Froker.In" className="text-orange-600">
                <IoIosMail size="24px" />
              </a>
              <span className="ml-4 text-gray-800">support@froker.in</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://twitter.com/FrokerSocial" target="_blank" rel="noopener noreferrer" className="text-orange-600">
                <FaTwitter size="24px" />
              </a>
              <a href="https://www.linkedin.com/company/froker/" target="_blank" rel="noopener noreferrer" className="text-orange-600">
                <FaLinkedin size="24px" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600"
              >
                <FaFacebook size="24px" />
              </a>
              <a href="https://www.instagram.com/frokerofficial/" target="_blank" rel="noopener noreferrer" className="text-orange-600">
                <FaSquareInstagram size="24px" />
              </a>
              <a href="https://www.youtube.com/@frokerofficial" target="_blank" rel="noopener noreferrer" className="text-orange-600">
                <IoLogoYoutube size="24px" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="text-orange-600 text-xl font-bold mb-4">Scan To Download</h4>
          <img src={scan} alt="QR Code" className="w-40 lg:w-40" />
        </div>
      </div>

      <div className="relative w-full mt-16">
        <img src={decoration} alt="Footer Decoration" className="w-full" />
        <div className="absolute bottom-0 w-full h-16 bg-orange-500 flex items-center justify-center">
          <p className="text-white text-sm lg:text-base">© 2024 Arroz Technology. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
