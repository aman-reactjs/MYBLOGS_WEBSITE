import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal h-[50vh] bg-base-200 text-base-content p-10 flex justify-between items-top bg-black text-gray-300">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
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
  );
};

export default Footer;
