import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "./Spinner.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
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
  const [agencia, setAgencia] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [destinatario, setDestinatario] = useState("");

  const leerAgencia = (e) => {
    setDestinatario(e.target.value);
    setAgencia(e.target.options[e.target.selectedIndex].text);
  };

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
    dataForm.append("mensaje", mensaje);
    dataForm.append("destinatario", destinatario);
    const respuesta = await axios.post(
      "https://backweb.hallo.ec/api/contacto",
      dataForm
    );
    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombre("");
        setEmail("");
        setCelular("");
        setCedula("");
        setAgencia("");
        setAsunto("");
        setMensaje("");
        e.target.reset();
        setActiveSpinner(false);
        Toast.fire({
          icon: "success",
          title: "Su mensaje ha sido enviado exitosamente",
        });
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

  /* console.log(agencia);
  console.log(destinatario); */
  return (
    <div className="info-form mx-auto">
      <Form className="contact-form mx-auto py-4" onSubmit={handleSubmit}>
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
                <Form.Select required onChange={leerAgencia}>
                  <option value="">Seleccione</option>
                  <option value="ventas.yantzaza@hallo.ec">
                    Azuay - Cuenca
                  </option>
                  <option value="ventas.pucara@hallo.ec">Azuay - Pucará</option>
                  <option value="ventas.lasnaves@hallo.ec">
                    Bolivar - Las Naves
                  </option>
                  <option value="ventas.latroncal@hallo.ec">
                    Cañar - La Troncal
                  </option>
                  <option value="ventas.loja@hallo.ec">Loja - Loja</option>
                  <option value="ventas.quinsaloma@hallo.ec">
                    Los Ríos - Quinsaloma
                  </option>
                  <option value="ventas.quito@hallo.ec">
                    Pichincha - Quito
                  </option>
                  <option value="ventas.lalibertad@hallo.ec">
                    Santa Elena - La Libertad
                  </option>
                  <option value="ventas.yantzaza@hallo.ec">
                    Zamora Chinchipe - Yantzaza
                  </option>
                  <option value="ventas.yantzaza@hallo.ec">
                    Zamora Chinchipe - Zamora
                  </option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel label="Asunto" className="mb-2">
                <Form.Select
                  required
                  onChange={(e) => setAsunto(e.target.value)}
                >
                  <option value="">Seleccione</option>
                  <option value="Facturación">Facturación</option>
                  <option value="Pagos">Pagos</option>
                  <option value="Planes">Planes</option>
                  <option value="Problemas con el servicio">
                    Problemas con el servicio
                  </option>
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
                <Button type="submit" variant="light" className="send-btn px-4">
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
    </div>
  );
};

export default ContactForm;
