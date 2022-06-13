import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Loja = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Loja</title>
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
                src="../images/agencias/loja/hallo-loja.jpg"
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
                          <Col xs={6} md={6} className="px-md-4">
                            <StaticImage
                              src="../images/agencias/loja/planes/loja-plan-basic.png"
                              alt="Hallo plan basic"
                              layout="fullWidth"
                            />
                          </Col>
                          <Col xs={6} md={6} className="px-md-4">
                            <StaticImage
                              src="../images/agencias/loja/planes/loja-plan-house.png"
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
                          <Col xs={6} md={6} className="px-md-4">
                            <StaticImage
                              src="../images/agencias/loja/planes/loja-plan-pro.png"
                              alt="Hallo plan basic"
                              layout="fullWidth"
                            />
                          </Col>
                          <Col xs={6} md={6} className="px-md-4">
                            <StaticImage
                              src="../images/agencias/loja/planes/loja-plan-gamer.png"
                              alt="Hallo plan house"
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
                          <Col xs={6} md={6} className="px-md-4 mx-auto">
                            <StaticImage
                              src="../images/agencias/loja/planes/loja-plan-platinum.png"
                              alt="Hallo plan basic"
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
      </main>
    </Layout>
  );
};

export default Loja;
