import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HalloTv = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Hallo TV</title>
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
                src="../images/hallo-tv/hallo-tv-banner.png"
                alt="Hallo banner"
                className="w-100"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-3 my-md-4">
              <Container className="text-center page-cont py-1">
                <Row className="my-3 my-md-4">
                  <Col md={12}>
                    <h2 className="title mt-2 ">HALLO TV</h2>
                    <p className="text">
                      Relacionados con su equipo informático:
                    </p>
                    <p className="text">
                      * Actualice regularmente su sistema operativo y el
                      software instalado en su equipo, poniendo especial
                      atención a las actualizaciones de su navegador web. A
                      veces, los sistemas operativos presentan fallos, que
                      pueden ser aprovechados por delincuentes informáticos.
                      Frecuentemente aparecen actualizaciones que solucionan
                      dichos fallos. Estar al día con las actualizaciones, así
                      como aplicar los parches de seguridad recomendados por los
                      fabricantes, le ayudará a prevenir la posible intrusión de
                      hackers y la aparición de nuevos virus.
                    </p>

                    <p className="text">
                      * Instale un Antivirus y actualícelo con frecuencia.
                      Analice con su antivirus todos los dispositivos de
                      almacenamiento de datos que utilice y todos los archivos
                      nuevos, especialmente aquellos archivos descargados de
                      internet.
                    </p>
                    <p className="text">
                      * Instale un Firewall o Cortafuegos con el fin de
                      restringir accesos no autorizados de Internet.
                    </p>
                    <p className="text">
                      * Es recomendable tener instalado en su equipo algún tipo
                      de software anti-spyware, para evitar que se introduzcan
                      en su equipo programas espías destinados a recopilar
                      información confidencial sobre el usuario.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="px-0">
                    <StaticImage
                      src="../images/hallo-tv/hallo-tv-canales.png"
                      alt="Hallo TV canales"
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

export default HalloTv;
