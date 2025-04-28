"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={42} height={42} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Lidetu Amare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
