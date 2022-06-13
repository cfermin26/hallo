import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm";

const PreguntasFrecuentes = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Preguntas frecuentes</title>
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
                src="../images/preguntas-frecuentes/preguntas-frecuentes.png"
                alt="Hallo banner"
                layout="fullWidth"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="my-3 my-md-4">
              <Container className="text-center page-cont py-1">
                <Row className="my-4 my-md-5">
                  <Col md={9} className="my-auto px-md-5">
                    <h2 className="title mt-2 mt-md-4 pt-md-3">
                      ¿Qué es Banda Ancha?
                    </h2>
                    <p className="text">
                      * Según lo estipulado en la Resolución
                      216-09-CONATEL-2009“Es el ancho de banda suministrado a un
                      usuario mediante una velocidad detransmisión de bajada
                      (proveedor hacia usuario) mínima efectiva igual o superior
                      a 256 Kbps y una velocidad de transmisión de subida
                      (usuario hacia proveedor) mínimaefectiva igual o superior
                      a 128 Kbps para cualquier aplicación”.
                    </p>
                  </Col>
                  <Col md={3} className="my-auto">
                    <StaticImage
                      src="../images/quienes-somos/banda-ancha.png"
                      alt="Hallo banner"
                    />
                  </Col>
                </Row>

                <Row className="my-4 my-md-5">
                  <Col md={9} className="my-auto px-md-5">
                    <h2 className="title mt-2 mt-md-4 pt-md-3">
                      ¿Qué es compartición ó canal compartido?
                    </h2>
                    <p className="text">
                      * Según lo estipulado en la Resolución 216-09-CONATEL-2009
                      “Es un canal de comunicación en el que se divide el ancho
                      de banda disponible para el número de usuarios que lo
                      ocupan simultáneamente”. en el caso de estar interesado en
                      más información respecto a cómo ser parte de la familia
                      hallo, puedes comunicarte con uno de nuestros asesores
                      comerciales.
                    </p>
                  </Col>
                  <Col md={3} className="my-auto">
                    <StaticImage
                      src="../images/quienes-somos/canal-compartido.png"
                      alt="Hallo banner"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="py-md-4 py-md-5">
            <Col md={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default PreguntasFrecuentes;
