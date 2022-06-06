import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div className="info-form mx-auto">
      <Container className="px-2">
        <Row>
          <Col md={12} className="mt-4 pt-2 mt-md-0">
            <h2 className="info-title">
              NECESITAS MÁS <span className="orange-text">INFORMACIÓN</span>
            </h2>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={4} md={6} className="pe-0">
            <h4 className="write-us-title">Escríbenos</h4>
          </Col>
          <Col xs={8} md={6} className="ps-0">
            <h4 className="call-us-title">
              <span className="orange-text">Llámanos Celular:</span> 098 252
              2222
            </h4>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={12}>
            <FloatingLabel label="Nombre" className="mb-2">
              <Form.Control type="text" placeholder="Nombre" required />
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-2">
              <Form.Control type="email" placeholder="Email" required />
            </FloatingLabel>
            <FloatingLabel label="Celular" className="mb-2">
              <Form.Control type="text" placeholder="Celular" required />
            </FloatingLabel>
            <FloatingLabel label="Cédula" className="mb-2">
              <Form.Control type="text" placeholder="Cédula" required />
            </FloatingLabel>
            <FloatingLabel label="Agencia" className="mb-2">
              <Form.Control type="text" placeholder="Agencia" required />
            </FloatingLabel>
            <FloatingLabel label="Mensaje" className="mb-2">
              <Form.Control
                as="textarea"
                placeholder="Mensaje"
                style={{ height: "80px" }}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mb-4 mb-md-0">
            <Button variant="light" className="send-btn px-4">
              Enviar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
