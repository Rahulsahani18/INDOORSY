import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./OurProjects.css";

import img1 from "./assets/projectImage1.jpg";
import img2 from "./assets/projectImg2.jpg";
import img3 from "./assets/projectImg3.jpg";
import img4 from "./assets/projectImg4.jpg";
import img5 from "./assets/projectImg5.jpg";

const slider1Data = [
  { title: "HEAD OFFICE", label: "INDOORSY", image: img1 },
  { title: "DLF CAMELLIAS", label: "INDOORSY", image: img2 },
  { title: "JOR BAGH", label: "INDOORSY", image: img3 },
  { title: "BATHROOM DESIGN", label: "INDOORSY", image: img4 },
  { title: "KITCHEN REMODEL", label: "INDOORSY", image: img5 },
  { title: "LIVING ROOM", label: "INDOORSY", image: img3 },
];



const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768, // for tablets and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const OurProjects = () => {
  return (
    <div>
      <div className="projects-section">
        <h2 className="title">OUR PROJECTS</h2>
        <Slider {...sliderSettings} className="project-slider">
          {slider1Data.map((item, index) => (
            
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <img src={item.image} alt={item.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-label">{item.label}</div>
                  <div className="project-title">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
  );
};

export default OurProjects;
