import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UniversoHallo = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Universo Hallo</title>
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
                src="../images/universo-hallo/universo-hallo-banner.jpg"
                alt="Hallo banner"
                layout="fullWidth"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-3 my-md-4">
              <Container className="text-center page-cont py-1">
                <Row className="my-4 my-md-5">
                  <Col md={12}>
                    <div className="text-start">
                      <h1 className="ready-title">¿ESTÁS LISTO</h1>
                      <h2 className="new-title">para una nueva</h2>
                      <h3 className="experience-title">EXPERIENCIA?</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <h3 className="home-security">HALLO Home Security</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mt-3">
                    <StaticImage
                      src="../images/universo-hallo/home-security.png"
                      alt="Hallo home security"
                    />
                  </Col>
                </Row>
                <Row className="mt-4 mt-md-5">
                  <Col md={12}>
                    <StaticImage
                      src="../images/universo-hallo/hallo-monitor.png"
                      alt="Hallo home security"
                    />
                    <p className="universe-text text-start mt-3">
                      <ul>
                        <li>
                          Plataforma de Smart Home con Aplicación personalizada
                          de HALLO BY AXON SMART HOME.
                        </li>
                        <li>
                          Aplicativo HALLO BY AXON subido en Google Play y Apple
                          Store.
                        </li>
                        <li>
                          Incluye Cámara de Seguridad para Hogar, giratoria
                          360°, con seguimiento humano HD. Para la App HALLO BY
                          AXON. Con marca y color empresarial de HALLO en cada y
                          cámara.
                        </li>
                        <li>
                          Acceso mediante una App móvil sin importar la
                          ubicación.
                        </li>
                        <li>
                          Acompañamiento permanente con soporte, entrenamiento y
                          capacitaciones para su Personal.
                        </li>
                      </ul>
                    </p>
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

export default UniversoHallo;
