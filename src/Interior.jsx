
import "./Interior.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaTools, FaProjectDiagram } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "CONSULTANCY",
        description: `We’ve been working hard to establish our interior designing firm as India’s 
        award-winning firm. We have completed many residential interior design projects that have
         exceeded our clients expectations, thanks to our straightforward prices, glamorous design
          vision and automation-led approach. We maintain a sharp, accurate, and precise quality 
          check at each site during the process. The final product is often unique and personalized,
           reflecting the client’s personality and feelings about life.`,
        icon: <FaBuilding size={40} />,
    },
    {
        id: 2,
        title: "TURNKEY INTERIORS",
        description: `“For your designs, “Indoorsy” offers turnkey solutions.
                     Our turnkey solutions are available to those who are unable to visit our
                    office or who live in a different town or country. We provide turnkey services as 
                    a single- window solution for our clients in addition to individual interior design
                    services. For all of our clients, we have interior design, documentation, supervision,
                    and project management. This allows them to keep track of all pages on a daily basis and
                    with minimal effort. In India, we are a well- known turnkey service provider..`,
        icon: <FaTools size={40} />,
    },
    {
        id: 3,
        title: "PROJECT MANAGERS",
        description: `For interior design facilities, we have the best project management team.
                At every step, we are taskmasters. Most clients are concerned about a lack of accountability,
                sliding timelines, and inflated budgets. Our business-savvy project managers contribute technical
                experience to projects that are streamlined, on-time, and within the budget. 
                Coordination of consultants, budget management, monthly monitoring, design scheduling and forecasting.`,
        icon: <FaProjectDiagram size={40} />,
    },
];

const Interior = () => {
    return (
        <div className="services-section">
            <Container>
                <h2 className="section-title">INTERIOR SERVICES</h2>
                <Row>
                    {services.map((service) => (
                        <Col md={4} key={service.id} className="service-col">
                            <div className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h5 className="service-title">{service.title}</h5>
                                <p className="service-description">{service.description}</p>
                                <span className="service-number">
                                    {service.id.toString().padStart(2, "0")}
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Interior;
