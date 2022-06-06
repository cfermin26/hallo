import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Agencias = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Agencias</title>
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
        <Container fluid>
          <Row>
            <Col md={12} className="px-0 d-flex justify-content-center">
              <Card className="bg-dark text-white rounded-0 border-0">
                <StaticImage
                  src="../images/home/hallo-banner.png"
                  alt="Hallo banner"
                  className="main-banner w-100"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default Agencias;
