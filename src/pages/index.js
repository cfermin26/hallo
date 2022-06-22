import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "../components/ContactForm";
import IdealPlan from "../components/IdealPlan";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Mapa from "../components/Mapa";
// import Iframe from "react-iframe";
/* import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form"; */

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

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
              <Swiper
                navigation={true}
                // autoplay={true}
                pagination={{ clickable: true }}
                modules={[Navigation]}
                slidesPerView={1}
                className="mySwiper"
              >
                <SwiperSlide>
                  <StaticImage
                    src="../images/home/hallo-banner.jpg"
                    alt="Hallo banner"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/home/hallo-banner-2.jpg"
                    alt="Hallo banner"
                    layout="fullWidth"
                  />
                </SwiperSlide>
              </Swiper>
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
                <span className="raleway-bold">RÁPIDA </span>
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
              <IdealPlan />
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

          <Row className="map-bg py-3 py-md-5">
            <Col md={12} className="px-0">
              <h2 className="title mb-md-4 pb-md-3 text-light text-center">
                NUESTRA COBERTURA
              </h2>
              <Mapa />
              {/* <StaticImage
                src="../images/home/hallo-mapa.png"
                alt="Hallo mapa"
                layout="fullWidth"
              /> */}
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
