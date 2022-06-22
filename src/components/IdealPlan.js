import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import FormPlan from "./FormPlan";
import { useEffect } from "react";

const IdealPlan = () => {
  const StepUno = () => {
    document.getElementById("step1").className = "d-block";
    document.getElementById("step2casa").className = "d-none";
    document.getElementById("step2negocio").className = "d-none";
  };

  const StepDosCasa = () => {
    document.getElementById("step1").className = "d-none";
    document.getElementById("step2casa").className = "d-block";
    document.getElementById("step3casa").className = "d-none";
  };

  const StepDosNegocio = () => {
    document.getElementById("step1").className = "d-none";
    document.getElementById("step2negocio").className = "d-block";
    document.getElementById("step3negocio").className = "d-none";
  };

  const StepTresCasa = () => {
    document.getElementById("step2casa").className = "d-none";
    document.getElementById("step3casa").className = "d-block";
    document.getElementById("step4casa").className = "d-none";
  };

  const StepTresNegocio = () => {
    document.getElementById("step2negocio").className = "d-none";
    document.getElementById("step3negocio").className = "d-block";
    document.getElementById("step4negocio").className = "d-none";
  };

  const StepCuatroCasa = () => {
    document.getElementById("step3casa").className = "d-none";
    document.getElementById("step4casa").className = "d-block";
    document.getElementById("step5casa").className = "d-none";
    document.getElementById("plan-title").className = "d-block";
  };
  const StepCuatroNegocio = () => {
    document.getElementById("step3negocio").className = "d-none";
    document.getElementById("step4negocio").className = "d-block";
    document.getElementById("step5negocio").className = "d-none";
    document.getElementById("plan-title").className = "d-block";
  };
  const StepCincoCasa = () => {
    document.getElementById("step4casa").className = "d-none";
    document.getElementById("step5casa").className = "d-block";
    document.getElementById("plan-title").className = "d-none";
  };
  const StepCincoNegocio = () => {
    document.getElementById("step4negocio").className = "d-none";
    document.getElementById("step5negocio").className = "d-block";
    document.getElementById("plan-title").className = "d-none";
  };

  const [houseSize, setHouseSize] = useState(0);
  const [houseNumber, setHouseNumber] = useState(0);
  const [houseAgency, setHouseAgency] = useState(0);
  // const [housePlan, setHousePlan] = useState("");
  const [businessNumber, setBusinesNumber] = useState(0);
  const [businessAgency, setBusinessAgency] = useState(0);

  // useEffect(() => {
  //   console.log("Plan: " + housePlan);
  // }, [houseSize]);

  var housePlan;

  if (houseSize === "1" && houseNumber === "1" && houseAgency === "1") {
    housePlan = 45;
  } else if (houseSize === "2" && houseNumber === "1" && houseAgency === "1") {
    housePlan = 80;
  }

  console.log("Tamaño: " + houseSize);
  console.log("Número: " + houseNumber);
  console.log("Agencia: " + houseAgency);
  console.log("Plan: " + housePlan);
  // console.log(housePlan);

  // useEffect(() => {
  //   console.log(houseSize);
  // }, [houseSize]);

  return (
    <div className="plan-card shadow mx-auto px-0 px-md-5 py-3 py-md-4">
      <Container id="plan-title">
        <Row>
          <Col md={12}>
            <h3 className="plan-title text-center">
              Elige tu <span className="orange-text">PLAN IDEAL</span>
            </h3>
          </Col>
        </Row>
      </Container>
      {/************************** step1 ¿Hogar o negocio? ************************/}
      <section id="step1" className="d-non">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                <span className="orange-text">¿</span>NECESITAS CONEXION A
                INTERNET PARA{" "}
                <span className="orange-text">HOGAR O NEGOCIO?</span>
              </h4>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-planes.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={6} className="text-center">
              <Button
                variant="secondary"
                className="ms-md-5 plan-btn"
                onClick={() => StepDosCasa()}
              >
                HOGAR
              </Button>
            </Col>
            <Col xs={6} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                onClick={() => StepDosNegocio()}
              >
                NEGOCIO
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step2 Tamaño de tu casa ************************/}
      <section id="step2casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                <span className="orange-text">¿</span>CUÁL ES EL TAMAÑO DE{" "}
                <span className="orange-text">TU CASA O DEPARTAMENTO?</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-plan-hogar.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="ms-md-5 plan-btn"
                value="1"
                onClick={(e) => setHouseSize(e.target.value)}
              >
                PEQUEÑO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="2"
                onClick={(e) => setHouseSize(e.target.value)}
              >
                MEDIANO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button
                variant="secondary"
                className="me-md-5 plan-btn"
                value="3"
                onClick={(e) => setHouseSize(e.target.value)}
              >
                GRANDE
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepUno()}
              >
                Anterior
              </Button>
              <Button variant="danger next-btn" onClick={() => StepTresCasa()}>
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step2 Tamaño de tu negocio ************************/}
      <section id="step2negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h4 className="plan-subtitle">
                <span className="orange-text">¿</span>CUÁL ES EL TAMAÑO DE{" "}
                <span className="orange-text">TU NEGOCIO?</span>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StaticImage
                src="../images/home/hallo-plan-negocio.png"
                alt="Hallo planes"
              />
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={4} className="text-center">
              <Button variant="secondary" className="ms-md-5 plan-btn">
                PEQUEÑO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button variant="secondary" className="me-md-5 plan-btn">
                MEDIANO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button variant="secondary" className="me-md-5 plan-btn">
                GRANDE
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepUno()}
              >
                Anterior
              </Button>
              <Button
                variant="danger next-btn"
                onClick={() => StepTresNegocio()}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step3 Número de navegantes casa ************************/}
      <section id="step3casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                ¿Número de navegantes?
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <Button
                variant="secondary"
                className="number-btn"
                value="1"
                onClick={(e) => setHouseNumber(e.target.value)}
              >
                1
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="2"
                onClick={(e) => setHouseNumber(e.target.value)}
              >
                2
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="3"
                onClick={(e) => setHouseNumber(e.target.value)}
              >
                3
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="4"
                onClick={(e) => setHouseNumber(e.target.value)}
              >
                4
              </Button>
              <Button
                variant="secondary"
                className="ms-3 number-btn"
                value="5"
                onClick={(e) => setHouseNumber(e.target.value)}
              >
                5+
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepDosCasa()}
              >
                Anterior
              </Button>
              <Button
                variant="danger next-btn"
                onClick={() => StepCuatroCasa()}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step3 Número de navegantes negocio ************************/}
      <section id="step3negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                ¿Número de navegantes?
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <Button variant="secondary" className="number-btn">
                1
              </Button>
              <Button variant="secondary" className="ms-3 number-btn">
                2
              </Button>
              <Button variant="secondary" className="ms-3 number-btn">
                3
              </Button>
              <Button variant="secondary" className="ms-3 number-btn">
                4
              </Button>
              <Button variant="secondary" className="ms-3 number-btn">
                5+
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepDosNegocio()}
              >
                Anterior
              </Button>
              <Button
                variant="danger next-btn"
                onClick={() => StepCuatroNegocio()}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step4 Selecciona una agencia ************************/}
      <section id="step4casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                Selecciona una agencia
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <FloatingLabel label="Agencia" className="mb-2">
                <Form.Select
                  required
                  onChange={(e) => setHouseAgency(e.target.value)}
                >
                  <option value="">Seleccione</option>
                  <option value="1">Azuay - Cuenca</option>
                  <option value="2">Bolivar - Las Naves</option>
                  <option value="3">Cañar - La Troncal</option>
                  <option value="4">Loja - Loja</option>
                  <option value="5">Los Ríos - Quinsaloma</option>
                  <option value="6">Pichincha - Quito</option>
                  <option value="7">Santa Elena - La Libertad</option>
                  <option value="8">Zamora Chinchipe - Yantzaza</option>
                  <option value="9">Zamora Chinchipe - Zamora</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepTresCasa()}
              >
                Anterior
              </Button>
              <Button variant="danger next-btn" onClick={() => StepCincoCasa()}>
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step4 Selecciona una agencia ************************/}
      <section id="step4negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="plan-subtitle text-center">
                Selecciona una agencia
              </h4>
            </Col>
          </Row>
          <Row className="mt-2 mb-2">
            <Col xs={12} className="text-center d-flex justify-content-center">
              <FloatingLabel label="Agencia" className="mb-2">
                <Form.Select required>
                  <option value="">Seleccione</option>
                  <option value="Azuay - Cuenca">Azuay - Cuenca</option>
                  <option value="Bolivar - Las Naves">
                    Bolivar - Las Naves
                  </option>
                  <option value="Cañar - La Troncal">Cañar - La Troncal</option>
                  <option value="Loja - Loja">Loja - Loja</option>
                  <option value="Los Ríos - Quinsaloma">
                    Los Ríos - Quinsaloma
                  </option>
                  <option value="Pichincha - Quito">Pichincha - Quito</option>
                  <option value="Santa Elena - La Libertad">
                    Santa Elena - La Libertad
                  </option>
                  <option value="Zamora Chinchipe - Yantzaza">
                    Zamora Chinchipe - Yantzaza
                  </option>
                  <option value="Zamora Chinchipe - Zamora">
                    Zamora Chinchipe - Zamora
                  </option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepTresNegocio()}
              >
                Anterior
              </Button>

              <Button
                variant="danger next-btn"
                onClick={() => StepCincoNegocio()}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step5 formulario ************************/}
      <section id="step5casa" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <FormPlan idealPlan={housePlan} />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepCuatroCasa()}
              >
                Anterior
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/************************** step5 formulario ************************/}
      <section id="step5negocio" className="d-none">
        <Container>
          <Row>
            <Col md={12}>
              <FormPlan />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary prev-btn"
                onClick={() => StepCuatroNegocio()}
              >
                Anterior
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default IdealPlan;
