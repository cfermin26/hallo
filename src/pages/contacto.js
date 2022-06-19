import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacto = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Contacto</title>
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
                    <p className="text">
                      hallo (hola traducción en alemán), es una marca creada
                      como imagen para la provisión del servicio de acceso a
                      internet en el ecuador, que opera bajo los estándares de
                      calidad alemán, cuya propiedad y creación le pertenece a
                      la compañía muvecom c.l., pudiendo cualquier persona
                      natural o jurídica ser distribuidor autorizado de la
                      marca, la cual será beneficiaria de todos los derechos que
                      le otorgue dicha distribución dentro de la circunscripción
                      territorial autorizada.
                    </p>
                    <h2 className="title mt-4 mt-md-4 pt-md-3">MISIÓN</h2>
                    <p className="text">
                      satisfacer la demanda del servicio de internet en el
                      ecuador, mediante un servicio diferenciado, mejorado y
                      superior al del prestador tradicional, con una
                      compartición 2:1 a través de una red de fibra óptica,
                      brindando una asesoría efectiva en la instalación del
                      servicio de internet a nuestros clientes finales, dando un
                      valor agregado al servicio de internet al que estábamos
                      acostumbrados, con equipos de última tecnología, que
                      permitirá al cliente final navegar con un número ilimitado
                      de dispositivos en su hogar.
                    </p>
                    <h2 className="title mt-4 mt-md-4 pt-md-3">VISIÓN</h2>
                    <p className="text">
                      constituirnos en el prestador de servicio de internet más
                      reconocido a nivel nacional, con una red de fibra óptica
                      robusta que permita conectarse a nuestros usuarios con el
                      mundo digital de las tic’s. políticas dentro de nuestra
                      organización conceptualizamos la calidad del servicio como
                      nuestra principal hoja de presentación para con nuestros
                      clientes y potenciales usuarios. buscamos que, a través de
                      la prestación de un servicio de calidad, no solo tengamos
                      clientes sino estos se vuelvan fans de nuestra marca,
                      fidelizándolos y haciéndolos de nuestra familia hallo.
                      nuestra red de distribución del servicio de internet,
                      cuenta con equipamiento de última tecnología, cumpliendo
                      los más exigentes estándares de calidad, asegurando al
                      cliente una experiencia única, mediante una compartición
                      2:1 y velocidades simétricas. la igualdad, la rectitud y
                      la transparencia serán las guías de nuestra actuación como
                      prestadores del servicio de internet, teniendo siempre
                      como objetivo final el bien común de todos los
                      involucrados en la prestación del servicio, sin excepción
                      ni exclusión de ninguna naturaleza. nuestra calidad moral
                      nos permitirá tomar decisiones oportunas que permitirán
                      mejorar continuamente la prestación del servicio.
                      capacitar permanente a nuestro personal, a fin de brindar
                      una atención al cliente especializada, efectiva y
                      oportuna.
                    </p>
                    <h2 className="title mt-4 mt-md-4 pt-md-3">POLÍTICAS</h2>
                    <p className="text">
                      dentro de nuestra organización conceptualizamos la calidad
                      del servicio como nuestra principal hoja de presentación
                      para con los clientes y potenciales usuarios de hallo.
                    </p>
                    <p className="text">
                      buscamos que, a través de la prestación de un servicio de
                      calidad, no solo tengamos clientes sino estos se vuelvan
                      fans de nuestra marca, fidelizándolos y haciéndolos parte
                      de nuestra familia hallo.
                    </p>
                    <p className="text">
                      nuestra red de distribución del servicio de internet,
                      cuenta con equipamiento de última tecnología, cumpliendo
                      los más exigentes estándares de calidad, asegurando al
                      cliente una experiencia única, mediante una compartición
                      1:1 y 2:1 y velocidades simétricas.
                    </p>
                    <p className="text">
                      la igualdad, la rectitud y la transparencia serán las
                      guías de nuestra actuación como prestadores del servicio
                      de internet y representantes de la marca hallo en ecuador,
                      teniendo siempre como objetivo final el bien común de
                      todos los involucrados en la prestación del servicio, sin
                      excepción ni exclusión de ninguna naturaleza.
                    </p>
                    <p className="text">
                      nuestra calidad moral nos permitirá tomar decisiones
                      oportunas que permitirán mejorar continuamente la
                      prestación del servicio.
                    </p>
                    <p className="text">
                      capacitar permanente a nuestro personal, a fin de brindar
                      una atención al cliente especializada, efectiva y
                      oportuna.
                    </p>
                    <p className="text">
                      en fin hallo significa calidad, estabilidad, velocidad,
                      tecnología, servicio, y, eficiencia, para nuestros
                      usuarios finales, y, sobre todo confianza para los
                      inversionistas.
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

export default Contacto;
