import React from 'react';
import './WorkStages.css';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHandshake,
  FaCogs,
  FaMap,
  FaChalkboardTeacher,
  FaRegFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";


const stages = [
  {
    id: 1,
    title: "Contract",
    description: "The designer’s contract with the client includes the design documents with requirements, schedules, costing and timeframes.",
    icon: <FaHandshake />,
  },
  {
    id: 2,
    title: "Stage of Work",
    description: "After completing the contract, we divide the work into different stages. Through this process, we complete the work on time and more effectively",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "Space Planning /Layout",
    description: "We proceed to space planning and management to an agreed-upon flow to your space, followed by categorization, based on the initial discussion.",
    icon: <FaMap />,
  },
  {
    id: 4,
    title: "Presentation",
    description: "A plan representing one or more design concepts is submitted to the client for analysis, input, and approval.",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 5,
    title: "Documentation",
    description: "We start working on Construction Documentation after you approve the plan. Construction reports are also useful for securing building permits.",
    icon: <FaRegFileAlt />,
  },
  {
    id: 6,
    title: "Execution",
    description: "The execution or implementation process follows the approval of the final design and marks the completion of the design.",
    icon: <FaClipboardCheck />,
  },
];

const WorkStages = () => {
    return (
        <Container className="work-stages my-4">
            <h2 className=" mb-5">WORK STAGES</h2>
            <Row>
                {stages.map((stage, idx) => (
                    <Col md={4} sm={6} xs={12} className="stage-box mb-4" key={idx}>
                        <span className="stage-number">0{stage.id}</span>
                        <div className="stage-content">
                            <div className="line-wrapper">
                                <div className="gray-line">
                                    <div className="blue-line"></div>
                                </div>
                            </div>

                            <h5 className="stage-title">{stage.title}</h5>
                            <p className="stage-desc">{stage.description}</p>
                            <div className="stage-icon">{stage.icon}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WorkStages;
