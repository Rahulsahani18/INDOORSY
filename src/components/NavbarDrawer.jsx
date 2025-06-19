import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "./NavbarDrawer.css";
import logo from "../assets/logo.png";

const NavbarDrawer = () => {
  const [show, setShow] = useState(false);

  const toggleDrawer = () => setShow(!show);

  return (
    <>
      {!show && (
        <Button
          onClick={toggleDrawer}
          variant="dark"
          style={{
            position: "fixed",
            top: 30,
            right: 30,
            zIndex: 1100,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <FaBars />
        </Button>
      )}

      <Offcanvas
        show={show}
        onHide={toggleDrawer}
        placement="end"
        backdrop={true}
        scroll={false}
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <div style={{ textAlign: "center" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "80px", filter: "invert(1)" }}
              />
              <hr
                style={{
                  border: "none",
                  height: "2px",
                  backgroundColor: "blue",
                  width: "100%",
                  marginTop: "10px",
                }}
              />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ul className="menu-list">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PROJECTS</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarDrawer;
