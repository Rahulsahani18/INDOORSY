import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import '../components/Sidebar.css'; 
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center  py-4">
      <div className="logo">
        <img src={logo} alt="Indoorsy Logo" style={{ width: '80px' }} />
      </div>
          {/* Vertical divider */}
      <div className="sidebar-divider my-3"></div>
      <div className="social-icons d-flex flex-column gap-4 mt-5">
        <FaFacebookF />
        <FaInstagram />
        <FaPhoneAlt />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Sidebar;
