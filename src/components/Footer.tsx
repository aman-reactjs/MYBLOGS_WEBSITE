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
            src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=256&q=75"
            alt="Everything Talent Logo"
            className="h-30 mx-4 "
          />
          {/* Brand Name */}
          <h2 className="text-xl font-semibold mb-2">Everything Talent</h2>
          {/* Tagline */}
          <p className="text-gray-400 text-sm mb-4">
            Enhancing Hiring with AI-powered assessment and tracking for
            accurate recruitment
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 mx-4 text-white">
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
        {/* <div className="  flex justify-end items-center min-h-20 bg-black-300">
  <h1 className ="text-5xl font-extrabold uppercase bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text 
             drop-shadow-[2px_2px_0_#a100f2] hover:drop-shadow-[5px_5px_0_#ff3cac] transition duration-300">
    EVERYTHINGTALENT.AI
  </h1>
</div> */}
      </div>
    </footer>
     <div className="w-full relative flex justify-center bg-black py-4 overflow-hidden">
  {/* Background Image */}
  <img
    src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom_san_fransisco_skyline.d6d7fc0b.png&w=1536&q=75"
    alt="San Francisco Skyline"
    className="w-full h-auto object-cover max-h-[350px]"
  />

  {/* Transparent Black Layer */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
</div>

<footer className="footer sm:footer-horizontal footer-center bg-black text-center text-white py-4 border-t-4 border-purple-950">
  <aside>
    <p>
      © {new Date().getFullYear()} - Everything Talent Labs, LLC. All Rights Reserved.
    </p>
  </aside>
</footer>

  </>
  
};

export default Footer;
