import React from 'react';
import './AboutIndoosy.css';
import aboutImgFront from './assets/aboutImgFront.png';
import aboutImgBack from './assets/aboutImgBack.png';  

const AboutIndoosy = () => {
  return (
    <div className="about-section container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 col-lg-6 col-12 col-xl-6">
          <h2 className="about-heading">ABOUT INDOORSY</h2>
          <ul className="about-points">
            <li>Founded on the simple belief that good designs bring quality to life with inspiringly joyful positive vibes.</li>
            <li>Intrinsically beautiful work stirred by client’s spoken and unspoken thoughts.</li>
            <li>We believe that every place has a story, so we let our designs be the narrator of the story.</li>
            <li>We innovatively challenge the creative boundaries irrespective of scope or scale of the project.</li>
            <li>Here Performance exquisitely complements aesthetics.</li>
            <li>Our best designs are our fierce competitors.</li>
            <li>Designing nuances are revered while creating and decorating even the smallest part.</li>
            <li>We design to make records only to beat our own records.</li>
          </ul>
          <button className="read-more-btn">Read More</button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 col-lg-6 col-12 col-xl-6position-relative d-flex justify-content-center">
          <div className="image-stack">
            <img src={aboutImgFront} className="front-img " alt="Decor Background" />
            <img src={aboutImgBack} className="back-img shadow-lg" alt="Indoorsy Studio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndoosy;
