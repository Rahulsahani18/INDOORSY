import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./components/HeroSection";
import NavbarDrawer from "./components/NavbarDrawer";
import AboutIndoorsy from "./AboutIndoosy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProjects from "./OurProjects";
import Interior from "./Interior";
import WorkStages from "./WorkStages";
import Testimonials from "./testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <HeroSection />
      <NavbarDrawer />
      <AboutIndoorsy />
      <OurProjects />
      <Interior />
      <WorkStages />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
