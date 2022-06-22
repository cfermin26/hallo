import React, { Fragment } from "react";
/* import React, { Fragment, useState, useEffect } from "react"; */
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import axios from "axios";
// import Swal from "sweetalert2";

function ModalPlan({
  planAgencia,
  planEmail,
  planNombre,
  planMegas,
  planPrecio,
  setShow,
  show,
}) {
  var agencia = planAgencia;
  // var email = planEmail;
  var nombre = planNombre;
  var megas = planMegas;
  /* var precio = planPrecio; */
  // const [nombre, setNombre] = useState(show);
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} centered className="modal-tucson">
        <Modal.Header closeButton>
          <Container>
            <Row>
              <Col xs={7} md={8} className="my-auto">
                {/* <h4 className="titulo-tucson-reserva">
                  <strong>Resérvalo ahora</strong>
                </h4> */}
              </Col>
            </Row>
          </Container>
          {/* <Modal.Title>Solicitud de repuesto</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Container className="px-2">
            <Row>
              <Col md={12} className="mt-4 pt-2 mt-md-3">
                <h2 className="info-title mb-0">
                  ACTIVA TU <span className="orange-text">PAQUETE</span>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="pt-2 mt-md-0">
                <h2 className="title text-center">{nombre}</h2>
                <h3 className="agency-card-plan p-2 p-md-3 mx-auto">
                  {megas} megas
                </h3>
              </Col>
            </Row>
            {/* <Row className="mt-2">
          <Col xs={4} md={6} className="pe-0">
            <h4 className="write-us-title">Escríbenos</h4>
          </Col>
          <Col xs={8} md={6} className="ps-0">
            <h4 className="call-us-title">
              <span className="orange-text">Llámanos Celular:</span> 098 252
              2222
            </h4>
          </Col>
        </Row> */}
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
                    <option value={agencia}>{agencia}</option>
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
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default ModalPlan;
