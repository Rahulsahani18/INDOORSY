import React from "react";
import { Carousel } from "react-bootstrap";
import './HeroSection.css';
import Sidebar from "../components/Sidebar";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';

const HeroSection = () => {
  return (
    <>
      <Sidebar />
      <div className="hero-section">
        <Carousel
          fade
          controls={true}
          indicators={false}
          interval={3000}
          pause={false}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={Img1} alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img2} alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img3} alt="Slide 3" />
          </Carousel.Item>
        </Carousel>

        <div className="hero-text">
          WELCOME TO INDOORSY
        </div>

        {/* Sticky Icons */}
        <div className="sticky-icon whatsapp-icon">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="" />
          </a>
        </div>

        <div className="sticky-icon call-icon">
          <a href="tel:+919999999999">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
