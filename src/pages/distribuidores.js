import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/ContactForm";

const Distribuidores = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Distribuidores</title>
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
                src="../images/distribuidores/distribuidores-banner.png"
                alt="Hallo banner"
                className="main-banner w-100"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-3 my-md-4">
              <Container className="text-center page-cont py-1 px-3">
                <Row className="mt-3 mt-md-4">
                  <Col md={12}>
                    <h2 className="title mt-2 ">DISTRIBUIDORES</h2>
                    <p className="text">
                      HALLO (hola traducción en alemán), es una marca creada
                      como imagen para la provisión del servicio de acceso a
                      internet en el Ecuador, que opera bajo los estándares de
                      calidad alemán, cuya propiedad y creación le pertenece a
                      la compañía MUVECOM C.L., pudiendo cualquier persona
                      natural o jurídica ser distribuidor autorizado de la
                      marca, la cual será beneficiaria de todos los derechos que
                      le otorgue dicha distribución dentro de la circunscripción
                      territorial autorizada.
                    </p>
                    <p className="text">
                      La distribución concederá al distribuidor autorizado el
                      derecho y exclusividad a utilizar el nombre comercial y la
                      marca HALLO, teniendo el distribuidor acceso a los
                      siguientes beneficios:
                    </p>
                    <p className="text">
                      Manual de marca, de aplicaciones, de soporte técnico, de
                      instalación. Exclusividad de marca y nombre comercial en
                      una circunscripción territorial específica. Identificación
                      de la agencia del distribuidor en la Página Web principal
                      de HALLO www.hallo.ec
                    </p>
                    <p className="text">
                      Asesoría, manejo y gestión de Redes Sociales (COMMUNITY
                      MANAGER) Beneficios en los precios de compra de megas de
                      capacidad de Internet de los proveedores más reconocidos a
                      nivel mundial.
                    </p>
                    <p className="text">
                      Herramienta y software ERP para prestación del servicio de
                      internet Asistencia regulatoria, comercial, técnica y
                      administrativa sobre el KNOW HOW del negocio, de manera
                      continua.
                    </p>
                    <p className="text">Equipo especializado de contadores.</p>
                    <p className="text">
                      Diseño de oficinas y propaganda en general.
                    </p>
                    <p className="text">
                      Diseño y levantamiento de redes alámbricas o inalámbricas.
                    </p>
                    <p className="text">
                      Precios preferenciales en la venta de equipamiento e
                      instalaciones de redes.
                    </p>
                    <p className="text">
                      Amparo regulatorio en licencias y permisos para la
                      provisión del servicio de internet.
                    </p>
                    <p className="text">Servicio técnico, nivel 1 y 2.</p>
                    <p className="text">
                      Estudio de Mercado en territorio autorizado para
                      distribución.
                    </p>
                    <p className="text">
                      NOTA: Para mayor información puedes comunicarte con uno de
                      nuestros asesores llamando al 0990255555
                    </p>
                  </Col>
                </Row>
                <Row className="py-md-4 py-md-5">
                  <Col md={12} className="px-0">
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

export default Distribuidores;
