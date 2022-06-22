import React, { useState } from "react";
import ModalPlan from "../components/ModalPlan";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cuenca = () => {
  const [nombre, setNombre] = useState("");
  const [megas, setMegas] = useState("");
  const [precio, setPrecio] = useState("");
  const [show, setShow] = useState(false);

  const openModal = (e, plan, megas, precio) => {
    setNombre(plan);
    setMegas(megas);
    setPrecio(precio);
    setShow(true);
  };

  return (
    <Layout>
      <main>
        <Helmet>
          <title>Cuenca</title>
          <meta
            name="keywords"
            content="hallo, internet, planes, velocidad, experiencia, distribuidores, ecuador"
          />
          <meta
            name="description"
            content="Hallo es una marca creada
            como imagen para la provisión del servicio de acceso a
            internet en el ecuador, que opera bajo los estándares de
            calidad alemán."
          />
          <meta property="og:title" content="Hallo" />
          <meta property="og:url" content="https://hallo.ec" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="Hallo es una marca creada
            como imagen para la provisión del servicio de acceso a
            internet en el ecuador, que opera bajo los estándares de
            calidad alemán."
          />
        </Helmet>
        <Container fluid className="background">
          <Row>
            <Col md={12} className="px-0">
              <StaticImage
                src="../images/agencias/cuenca/hallo-cuenca.jpg"
                alt="Hallo banner"
                layout="fullWidth"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-3 my-md-4 mx-auto">
              <Container className="agency-cont py-1 px-3 px-lg-5">
                <Row>
                  <Col md={12}>
                    <h1 className="title mt-4 mt-md-4 pt-md-3">
                      Elige tu PLAN IDEAL
                    </h1>
                    <p className="agency-text">
                      Sube todas tus fotos más rápido que cualquier otro
                      proveedor de servicios. Carga y descarga videos, archivos
                      de gran peso o lo que necesites. Vive la mejor experiencia
                      en internet a velocidades incomparables.
                    </p>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={2} className="my-auto text-center text-md-start">
                    <h2 className="agency-title mb-0">
                      MEGA <span className="agency-subtitle">HALLO</span>
                    </h2>
                  </Col>
                  <Col md={10} className="mt-2 mt-md-0">
                    <div className="agency-card p-4 p-md-5">
                      <Container className="px-0">
                        <Row>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            onClick={(e) =>
                              openModal(e, "BASIC", "45", "$19.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-basic.png"
                              alt="Hallo plan basic"
                              layout="fullWidth"
                            />
                          </Col>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            onClick={(e) =>
                              openModal(e, "HOUSE", "80", "$23.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-house.png"
                              alt="Hallo plan house"
                              layout="fullWidth"
                            />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col md={2} className="my-auto text-center text-md-start">
                    <h2 className="agency-title mb-0">
                      ULTRA <span className="agency-subtitle">HALLO</span>
                    </h2>
                  </Col>
                  <Col md={10} className="mt-2 mt-md-0">
                    <div className="agency-card p-4 p-md-5">
                      <Container className="px-0">
                        <Row>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            onClick={(e) =>
                              openModal(e, "PRO", "100", "$29.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-pro.png"
                              alt="Hallo plan pro"
                              layout="fullWidth"
                            />
                          </Col>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            onClick={(e) =>
                              openModal(e, "GAMER", "160", "$40.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-gamer.png"
                              alt="Hallo plan gamer"
                              layout="fullWidth"
                            />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>

                <Row className="my-4">
                  <Col md={2} className="my-auto text-center text-md-start">
                    <h2 className="agency-title mb-0">
                      PRO <span className="agency-subtitle">HALLO</span>
                    </h2>
                  </Col>
                  <Col md={10} className="mt-2 mt-md-0">
                    <div className="agency-card p-4 p-md-5">
                      <Container className="px-0">
                        <Row>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            onClick={(e) =>
                              openModal(e, "PLATINUM", "250", "$56.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-platinum.png"
                              alt="Hallo plan platinum"
                              layout="fullWidth"
                            />
                          </Col>
                          <Col
                            xs={6}
                            md={6}
                            className="px-md-4"
                            // onClick={openModal}
                            // onClick={(e) => this.openModal(nombre, e)}
                            onClick={(e) =>
                              openModal(e, "INFINITY", "300", "$72.50")
                            }
                          >
                            <StaticImage
                              src="../images/agencias/cuenca/planes/cuenca-plan-infinity.png"
                              alt="Hallo plan infinity"
                              layout="fullWidth"
                            />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <ModalPlan
          planAgencia={"Azuay - Cuenca"}
          planEmail={"crferminr@gmail.com"}
          planNombre={nombre}
          planMegas={megas}
          planPrecio={precio}
          setShow={setShow}
          show={show}
        />
      </main>
    </Layout>
  );
};

export default Cuenca;
