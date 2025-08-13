import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return <>
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <img
            src="https://www.everythingtalent.ai/_next/static/media/acme-logo-dark.d4da7bf2.png"
            alt="Everything Talent Logo"
            className="h-10 mb-4"
          />
          {/* Brand Name */}
          <h2 className="text-xl font-semibold mb-2">Everything Talent</h2>
          {/* Tagline */}
          <p className="text-gray-400 text-sm mb-4">
            Enhancing Hiring with AI-powered assessment and tracking for
            accurate recruitment
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white">
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold mb-4">RESOURCES</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Whitepapers</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Hiring Guides</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h4 className="text-sm font-semibold mb-4">GET STARTED</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Hiring Solutions</a></li>
            <li><a href="#">Funded Startups</a></li>
            <li><a href="#">Free Trial</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Request Demo</a></li>
            <li><a href="#">Trust</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold mb-4">LEGAL</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">CCPA Compliance</a></li>
          </ul>
        </div>
      </div>
    </footer>
     <div className="w-full flex justify-center bg-black py-4">
        <img
          src="myImage.png"
          alt="Company Logo"
          className="h-50 w-[80vw]"
        />
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 flex justify-center items-center bg-black text-white border-t-5 border-blue-950">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
  </>
  
};

export default Footer;
