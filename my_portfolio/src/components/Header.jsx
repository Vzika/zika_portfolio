import bgImage from '../assets/picture/zika_pic.JPG';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logoImage from '../assets/picture/letter-n.png'; 

const Header = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="text-gray-800 text-4xl font-bold">Hello, I'm</h2>
          <h6 className="text-6xl font-extrabold">
            <span className="text-gray-400">NGOZI</span> OBASI
          </h6>
          <h2 className="text-gray-800 italic text-2xl">
            An Innovative Web Developer Building Seamless Web Solutions with Creativity and Code
          </h2>
          <p className="text-gray-700 text-lg">
            I am a Web Developer from Nigeria, with experience in Backend Development using Python, Flask, and RESTful APIs. 
            I also specialize in Frontend technologies such as React and Tailwind CSS. Additionally, I have knowledge 
            in database management using SQL and offer seamless integration of full-stack web solutions. Passionate about 
            leveraging code to build functional, creative, and user-centered web applications.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/ndukauba-ngozi-985326267/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaLinkedin size={40} className="text-gray-800 hover:text-blue-500" />
            </a>
            <a href="https://github.com/Vzika" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaGithub size={40} className="text-gray-800 hover:text-black" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
          <a href="https://drive.google.com/file/d/1qdJTpOxyFuRFFOyz6M27meZepjDjiISw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-600 cursor-pointer">
              DOWNLOAD CV
            </button>
          </a>
            <button className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
              2+ YEARS OF EXPERIENCE
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          {/* Profile Image */}
          <img
            src={bgImage}
            alt="Ngozi Obasi"
            className="w-[500px] h-[500px] object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
      <img
        src={logoImage}
        alt="Custom Logo"
        className="absolute top-0 right-0 opacity-40 w-24 h-24 mt-4 mr-4"
      />
    </section>
  );
};

export default Header;
