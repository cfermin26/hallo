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

const PlanForm = ({ type, size, number, agency, idealPlan }) => {
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

  var tipo = type;
  var numero = number;
  var agencia = agency;
  var megas = idealPlan;
  var destinatario;
  var nombreAgencia;
  var tamano;

  if (agencia === "1") {
    destinatario = "ventas.cuenca@hallo.ec";
    nombreAgencia = "Azuay - Cuenca";
  } else if (agencia === "2") {
    destinatario = "ventas.pucara@hallo.ec";
    nombreAgencia = "Azuay - Pucara";
  } else if (agencia === "3") {
    destinatario = "ventas.lasnaves@hallo.ec";
    nombreAgencia = "Bolivar - Las Naves";
  } else if (agencia === "4") {
    destinatario = "ventas.latroncal@hallo.ec";
    nombreAgencia = "Cañar - La Troncal";
  } else if (agencia === "5") {
    destinatario = "ventas.loja@hallo.ec";
    nombreAgencia = "Loja - Loja";
  } else if (agencia === "6") {
    destinatario = "ventas.quinsaloma@hallo.ec";
    nombreAgencia = "Los Ríos - Quinsaloma";
  } else if (agencia === "7") {
    destinatario = "ventas.quito@hallo.ec";
    nombreAgencia = "Pichincha - Quito";
  } else if (agencia === "8") {
    destinatario = "ventas.lalibertad@hallo.ec";
    nombreAgencia = "Santa Elena - La Libertad";
  } else if (agencia === "9") {
    destinatario = "ventas.yantzaza@hallo.ec";
    nombreAgencia = "Zamora Chinchipe - Yantzaza";
  }

  if (size === "1") {
    tamano = "Pequeño";
  } else if (size === "2") {
    tamano = "Mediano";
  } else if (size === "3") {
    tamano = "Grande";
  }

  /* console.log("tipo: " + tipo);
  console.log("tamaño: " + tamano);
  console.log("numero: " + numero);
  console.log("agencia:" + agencia);
  console.log("plan:" + plan);
  console.log("destinatario:" + destinatario);
  console.log("agencia: " + nombreAgencia); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActiveSpinner(true);
    const dataForm = new FormData();
    dataForm.append("nombre", nombre);
    dataForm.append("email", email);
    dataForm.append("celular", celular);
    dataForm.append("cedula", cedula);
    dataForm.append("agencia", nombreAgencia);
    dataForm.append("asunto", asunto);
    dataForm.append("tipo", tipo);
    dataForm.append("tamano", tamano);
    dataForm.append("numero", numero);
    dataForm.append("megas", megas);
    dataForm.append("mensaje", mensaje);
    dataForm.append("destinatario", destinatario);
    const respuesta = await axios.post(
      "https://backweb.hallo.ec/api/plan",
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
        window.location.replace("https://hallo.ec");
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
    <div className="info-form mx-auto">
      <Form className="contact-form mx-auto py-4" onSubmit={handleSubmit}>
        <Container className="px-2">
          <Row>
            <Col md={12} className="mt-4 pt-2 mt-md-0">
              <h2 className="info-title-plan">TU PLAN IDEAL RECOMENDADO</h2>
              <h2 className="info-title">
                <h3 className="agency-card-plan p-2 p-md-3 mx-auto">
                  {megas} MEGAS
                </h3>
              </h2>
              <h2 className="info-title-plan">ACTIVA TU PAQUETE</h2>
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
                  <option value={nombreAgencia}>{nombreAgencia}</option>
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
                <Button type="submit" variant="light" className="send-btn px-4">
                  Enviar
                </Button>
              )}
              {/* <Button variant="light" className="send-btn px-4">
              Enviar
            </Button> */}
            </Col>
            {/* <Col md={12} className="text-center mb-4 mb-md-0">
            <Button variant="light" className="send-btn px-4">
              Enviar
            </Button>
          </Col> */}
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default PlanForm;
