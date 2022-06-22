import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm";

const TerminosCondiciones = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Términos y condiciones</title>
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
                src="../images/terminos-condiciones/terminos-condiciones-banner.jpg"
                alt="Hallo banner"
                layout="fullWidth"
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="my-3 my-md-4">
              <Container className="text-center page-cont py-1">
                <Row TerminosCondicionese="my-4">
                  <Col md={8} className="mx-auto">
                    <h2 className="title mt-4 mt-md-4 pt-md-3">SERVICIO</h2>
                    <p className="universe-text ">
                      <ul>
                        <li>
                          Precios no incluyen la instalación ni la provisión del
                          router.
                        </li>
                        <li>
                          Se realiza descuentos en la instalación cuando el
                          inmueble del usuario o cliente donde se brindará el
                          servicio, es propia y los pagos mensuales los realiza
                          con tarjeta de crédito o descuento de cuenta bancaria.
                        </li>
                        <li>
                          Servicio de Internet disponible en todas las agencias
                          autorizadas en el país.
                        </li>
                        <li>Compartición máxima servicio es de 1:1 y 2:1.</li>
                        <li>
                          Para la contratación del servicio de acceso a internet
                          el cliente deberá suscribir el correspondiente
                          contrato de adhesión y sus anexos, así como deberá
                          presentar copia de la cédula de ciudadanía y en el
                          caso de requerir descuento automático copia de la
                          tarjeta de crédito o cuenta bancaria.
                        </li>
                        <li>
                          En el caso de que se realice descuentos en la
                          instalación o instalación gratuita, se establecerá un
                          tiempo mínimo de permanencia.
                        </li>
                        <li>
                          El servicio se brindará a través de redes de fibra
                          óptica o radio enlace en el caso de ser necesario.
                        </li>
                      </ul>
                    </p>
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col md={12}>
                    <ContactForm />
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

export default TerminosCondiciones;
