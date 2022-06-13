import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
/* import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form"; */
import ContactForm from "../components/ContactForm";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Hallo</title>
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
                src="../images/home/hallo-banner.png"
                alt="Hallo banner"
                layout="fullWidth"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="px-0">
              <StaticImage
                src="../images/home/flash.png"
                alt="Hallo"
                layout="fullWidth"
              />
            </Col>

            <Col md={6} className="text-center my-auto">
              <h2 className="welcome-title mt-4 mt-md-0">Bienvenido a</h2>
              <h1 className="welcome-subtitle">
                LA CONEXIÓN MÁS <br />
                <span className="raleway-bold">RÁPIDA</span>
                DEL PAÍS
              </h1>
              <p className="welcome-text px-2 px-md-0 mx-auto mt-3">
                Sube todas tus fotos más rápido que cualquier otro proveedor de
                servicios. Carga y descarga videos, archivos de gran peso o lo
                que necesites. Vive la mejor experiencia en internet a
                velocidades incomparables.
              </p>
            </Col>
          </Row>

          <Row className="mb-4 mb-md-5 mt-3 mt-md-0">
            <Col md={12}>
              <div className="plan-card shadow mx-auto px-4 px-md-5 py-3 py-md-4">
                <Container>
                  <Row>
                    <Col md={12}>
                      <h3 className="plan-title">
                        Elige tu <span className="orange-text">PLAN IDEAL</span>
                      </h3>
                      <h4 className="plan-subtitle">
                        <span className="orange-text">¿</span>NECESITAS CONEXION
                        A INTERNET PARA{" "}
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
                      <Button variant="secondary" className="ms-md-5 plan-btn">
                        HOGAR
                      </Button>
                    </Col>
                    <Col xs={6} className="text-center">
                      <Button variant="secondary" className="me-md-5 plan-btn">
                        NEGOCIO
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>

          <Row className="experience-bg">
            <Col md={12}>
              <Container>
                <Row>
                  <Col md={6} className="my-auto px-4 px-md-0">
                    <Row>
                      <Col md={12} className="mt-5 mt-md-0">
                        <StaticImage
                          src="../images/home/experiencia-hallo.png"
                          alt="Experiencia hallo"
                        />
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col md={12} className="mt-3 mt-md-4" id="agencias">
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="ELIGE TU AGENCIA"
                        >
                          <Form.Select aria-label="Floating label select example">
                            <option value="">- Selecciona -</option>
                            <option value="1">Azuay</option>
                            <option value="2">El Oro</option>
                            <option value="3">Santa Elena</option>
                            <option value="4">Manabí</option>
                            <option value="5">Machala</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col md={12} className="mt-3 mt-md-4 agencias">
                        <h3 className="agency-list mt-4" id="agencias">
                          ELIGE TU AGENCIA
                        </h3>
                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Azuay
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/cuenca">
                              Cuenca
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Bolívar
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/las-naves">
                              Las Naves
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Cañar
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/la-troncal">
                              La Troncal
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Loja
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/loja">
                              Loja
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Los Ríos
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/quinsaloma">
                              Quinsaloma
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Pichincha
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/quito">
                              Quito
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Santa Elena
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/la-libertad">
                              La Libertad
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="danger">
                            Zamora Chinchipe
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/yantzaza">
                              Yantzaza
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/zamora">
                              Zamora
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <StaticImage
                      src="../images/home/hallo-experiencia.png"
                      alt="Hallo experiencia"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="my-md-4 my-md-5">
            <Col md={12}>
              <ContactForm />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="px-0">
              <StaticImage
                src="../images/home/hallo-mapa.png"
                alt="Hallo mapa"
                layout="fullWidth"
              />
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
