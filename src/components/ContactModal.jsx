import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return <>
    <Button variant="primary" onClick={handleShow}>
      Contact Me
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Container className="contact-section mt-5">
          <h2 className="text-center mb-4">Contact Me</h2>
          <p className="text-center mb-5">Feel free to reach out!</p>

          <Row className="justify-content-center">
            <Col md={3} className="text-center contact-link">
              <a href="https://www.linkedin.com/in/ibrahim-ali-khalil-7ba20b22a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} color="#0077b5" />
                <p className="mt-2">LinkedIn</p>
              </a>
            </Col>
            <Col md={3} className="text-center contact-link">
              <a href="https://github.com/Ibrahimali2020" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} color="#000" />
                <p className="mt-2">GitHub</p>
              </a>
            </Col>
            <Col md={3} className="text-center contact-link">
              <a href="mailto:ibrahimali201594@yahoo.com">
                <FaEnvelope size={50} color="#ff5733" />
                <p className="mt-2">Email</p>
              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}


