import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import testimonialsImg from './assets/what-clients-says-background-1.jpg';
import './testimonials.css';
import testmonialFooterIcon1 from './assets/testmonialFooterIcon1.png';
import testmonialFooterIcon2 from './assets/testmonialFooterIcon2.png';
import testmonialFooterIcon3 from './assets/testmonialFooterIcon3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: `"Indoorsy transformed my home into a cozy retreat! Their design team truly understood my style."`,
      name: "Rohan Mishra",
      location: "(Uttar Pradesh, India)"
    },
    {
      quote: `"Professional service with amazing attention to detail. Our office space has never looked better!"`,
      name: "Priya Sharma",
      location: "(Delhi, India)"
    },
    {
      quote: `"From concept to completion, Indoorsy delivered beyond our expectations. Highly recommended!"`,
      name: "Arjun Patel",
      location: "(Mumbai, India)"
    }
  ];


  const slider1Data = [
    { image: testmonialFooterIcon1 },
    { image: testmonialFooterIcon2 },
    { image: testmonialFooterIcon3 },
    { image: testmonialFooterIcon1 },
    { image: testmonialFooterIcon2 },
    { image: testmonialFooterIcon3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);


  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,

  };

  return (
    <Container fluid className="testimonials-container px-0 mt-5">
      <div className="testimonials-wrapper">
        <img src={testimonialsImg} alt="Testimonials Background" className="testimonials-background" />

        <Row className="overlay-content g-0">
          <Col md={6} className="left-section">
          </Col>
          <Col md={6} className="">
            <div className="testimonial-card p-4 p-md-5 ">
              <div className="testimonial-content">
                <div className="text-center mb-5">
                  <h2 className="testimonials-heading">WHAT CLIENT'S SAY?</h2>
                  <div className="heading-underline mx-auto"></div>
                </div>
                <p className="testimonial-quote animate__animated animate__fadeIn">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="testimonial-author animate__animated animate__fadeInUp">
                  <h2 className="mb-1 author-name">{testimonials[activeTestimonial].name}</h2>
                  <p className="text-muted">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>

              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </Col>

        </Row>
      </div>


      <Row className="project-slider-row g-0 ">
        <Col md={6}>
          <Slider {...sliderSettings} className="project-slider ">
            {slider1Data.map((item, index) => (
              <div className="slider-item" key={index}>
                <img src={item.image} alt={item.title} style={{ width: '100px', height: 'auto' }} />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>


  );
};

export default Testimonials;