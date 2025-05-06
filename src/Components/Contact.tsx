import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-12 bg-gray-50">
      <div className="md:w-[860px] mx-auto px-4 flex flex-col gap-5">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#22263F]">
          Contact Us
        </h2>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-12"> */}
        <div className="flex md:justify-between flex-col gap-4 md:flex-row">
          {/* Contact Info Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-[#AE8625]">
              Contact Information
            </h3>
            <div className="flex items-center mb-3">
              <FaPhone className="text-[#AE8625] mr-2" />
              <a href="tel:+1234567890" className="hover:text-[#AE8625]">
                +123 456 7890
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#AE8625] mr-2" />
              <a
                href="mailto:contact@dleventh.com"
                className="hover:text-[#AE8625]"
              >
                contact@dleventh.com
              </a>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-[#AE8625]">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#AE8625]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#AE8625]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#AE8625]">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#AE8625]">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-[#AE8625]">
              Visit Us
            </h3>
            <p className="text-gray-600">8b dipo awolesi street</p>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.337675027499!2d3.3493413!3d6.602300799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922f39f8c5a7%3A0x3b3c70f7f1e01e0d!2s8B%20Dipo%20Awolesi%20St%2C%20Magodo%20GRA%20Phase%201%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1699901234567!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
