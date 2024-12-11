import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: LinkedIn and GitHub icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/ndukauba-ngozi-985326267/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Vzika" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>

        {/* Right side: Developer information */}
        <div>
          <p className="text-sm">Developed by Ngozi Obasi</p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-4">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Ngozi Obasi. All Rights Reserved.
    </p>
  </div>
    </footer>
  );
};

export default Footer;
