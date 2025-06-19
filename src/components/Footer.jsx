import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-light py-5">
            <Container>
                <Row className="gx-5">
                    {/* Phone Column */}
                    <Col md={4} className="mb-4 mb-md-0 position-relative">
                        <h5 className="footer-heading">Phone</h5>
                        <ul className="list-unstyled text-muted">
                            <li>+91 98116 11352</li>
                            <li>+91 98112 09302</li>
                        </ul>
                        <div className="vr d-none d-md-block"></div>
                    </Col>

                    {/* Email Column */}
                    <Col md={4} className="mb-4 mb-md-0 position-relative">
                        <h5 className="footer-heading">Email</h5>
                        <ul className="list-unstyled text-muted">
                            <li>priyankd@indoorsy.co.in</li>
                            <li>Info@indoorsy.co.in</li>
                        </ul>
                        <div className="vr d-none d-md-block"></div>
                    </Col>

                    {/* Address Column */}
                    <Col md={4}>
                        <h5 className="footer-heading">Address</h5>
                        <address className='text-muted'>
                            SCO No. 33,<br />
                            Third Floor,<br />
                            M3M Market,<br />
                            Sector – 113,<br />
                            Gurugram (HR) – 122017
                        </address>
                    </Col>
                </Row>

                {/* Social Media Icons */}
                <Row className="mt-3 justify-content-start">
                    <Col md={4} xs="auto">
                        <div className="social-icons d-flex gap-3 pt-4">
                            <a href="#" className="text-dark"><Facebook size={30} /></a>
                            <a href="#" className="text-dark"><Twitter size={30} /></a>
                            <a href="#" className="text-dark"><Instagram size={30} /></a>
                            <a href="#" className="text-dark"><Linkedin size={30} /></a>
                        </div>
                    </Col>


                    {/* Copyright and Terms */}
                    <Col md={4} className="text-start mt-3">
                        <p className="">
                            Copyright © 2024 Indoorsy All Rights Reserved | Designed By
                        </p>
                    </Col>
                    <Col md={4} className='mt-3 text-start'>
                        <a href="#" className="text-decoration-none">Terms & Conditions</a>
                    </Col>


                </Row>
            </Container>
        </footer>
    );
};

export default Footer;