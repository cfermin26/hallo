import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "./Spinner.js";
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
  var plan = planNombre;
  var megas = planMegas;
  var precio = planPrecio;
  // const [nombre, setNombre] = useState(show);
  const handleClose = () => setShow(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [activeSpinner, setActiveSpinner] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cedula, setCedula] = useState("");
  const [asunto, setAsunto] = useState("Planes");
  const [mensaje, setMensaje] = useState("");
  // const [destinatario, setDestinatario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActiveSpinner(true);
    const dataForm = new FormData();
    dataForm.append("nombre", nombre);
    dataForm.append("email", email);
    dataForm.append("celular", celular);
    dataForm.append("cedula", cedula);
    dataForm.append("agencia", agencia);
    dataForm.append("asunto", asunto);
    dataForm.append("plan", plan);
    dataForm.append("megas", megas);
    dataForm.append("precio", precio);
    dataForm.append("mensaje", mensaje);
    dataForm.append("destinatario", planEmail);
    const respuesta = await axios.post(
      "https://backweb.hallo.ec/api/agencia",
      dataForm
    );
    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombre("");
        setEmail("");
        setCelular("");
        setCedula("");
        setAsunto("");
        setMensaje("");
        e.target.reset();
        setActiveSpinner(false);
        Toast.fire({
          icon: "success",
          title: "Su mensaje ha sido enviado exitosamente",
        });
        setShow(false);
      } else {
        setActiveSpinner(false);
        Toast.fire({
          icon: "error",
          title: "Error al enviar la información",
        });
      }
    } else {
      setActiveSpinner(false);
      Toast.fire({
        icon: "error",
        title: "Error al enviar la información",
      });
    }
  };

  return (
    <>
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
          <Form className="contact-form mx-auto pb-4" onSubmit={handleSubmit}>
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
                  <h2 className="title text-center">{plan}</h2>
                  <h3 className="agency-card-plan p-2 p-md-3 mx-auto">
                    {megas} megas
                  </h3>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={12}>
                  <FloatingLabel label="Nombre" className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      required
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel label="Email" className="mb-2">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel label="Celular" className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Celular"
                      required
                      onChange={(e) => setCelular(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel label="Cédula" className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Cédula"
                      required
                      onChange={(e) => setCedula(e.target.value)}
                    />
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
                      onChange={(e) => setMensaje(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col
                  md={12}
                  className="text-center mb-4 mb-md-0 d-flex justify-content-center"
                >
                  {activeSpinner ? (
                    <Spinner className="mt-4" />
                  ) : (
                    <Button
                      type="submit"
                      variant="light"
                      className="send-btn px-4"
                    >
                      Enviar
                    </Button>
                  )}
                  {/* <Button variant="light" className="send-btn px-4">
              Enviar
            </Button> */}
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPlan;
