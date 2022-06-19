import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Capacidad = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Capacidad</title>
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
                src="../images/contacto/contacto-banner.jpg"
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
                    <StaticImage
                      src="../images/capacidad/hallo-capacidad.png"
                      alt="Hallo banner"
                      layout="fullWidth"
                    />
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

export default Capacidad;
