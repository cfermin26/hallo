import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const FormPlan = ({ idealPlan }) => {
  var plan = idealPlan;
  return (
    <div className="info-form mx-auto">
      <Container className="px-2">
        <Row>
          <Col md={12} className="mt-4 pt-2 mt-md-0">
            <h2 className="info-title-plan">TU PLAN IDEAL RECOMENDADO</h2>
            <h2 className="info-title">
              <h3 className="agency-card-plan p-2 p-md-3 mx-auto">
                {plan} MEGAS
              </h3>
            </h2>
            <h2 className="info-title-plan">ACTIVA TU PAQUETE</h2>
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
              <Form.Select disabled>
                <option value="Azuay - Cuenca">Azuay - Cuenca</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Asunto" className="mb-2">
              <Form.Select disabled>
                <option value="Planes">Planes</option>
              </Form.Select>
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

export default FormPlan;
