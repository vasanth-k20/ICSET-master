import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#881B1B] text-white py-10">
      <div className="container w-full xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section - Moves to the left */}
        <div className="md:order-1">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-gray-200 text-sm sm:text-base">
            We provide the best solutions for your business. Contact us for more information.
          </p>
        </div>

        {/* Menu Section - Centered */}
        <div className="md:order-2 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 lg:ml-10">
            <li><a href="/" className="text-gray-200 hover:text-gray-300 text-sm sm:text-base">Home</a></li>
            <li><a href="/abtconf" className="text-gray-200 hover:text-gray-300 text-sm sm:text-base">About Us</a></li>
            <li><a href="/papersub" className="text-gray-200 hover:text-gray-300 text-sm sm:text-base">Paper Submission</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-gray-300 text-sm sm:text-base">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section - Moves to the end */}
        <div className="md:order-3 md:text-right">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-gray-200 text-sm sm:text-base">Email: contact@example.com</p>
          <p className="text-gray-200 text-sm sm:text-base">Phone: +123 456 7890</p>
          <div className="flex gap-4 justify-center md:justify-end mt-4">
            <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-200 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} BIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;