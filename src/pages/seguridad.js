import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Seguridad = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>Seguridad</title>
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
                src="../images/seguridad/seguridad-banner.jpg"
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
                    <h2 className="title mt-2 mt-md-4 pt-md-3">Recomendamos</h2>
                    <p className="text mt-3">
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
                    <h2 className="title mt-4 mt-md-4 pt-md-3">
                      SEGURIDAD EN LA NAVEGACIÓN EN EL INTERNET Y{" "}
                      <br className="d-none d-sm-block" />
                      CORRECTA UTILIZACIÓN DE CORREO ELECTRÓNICO:
                    </h2>
                    <p className="text">
                      Utilice contraseñas seguras, es decir, aquellas compuestas
                      por ocho caracteres, como mínimo, y que combinen letras,
                      números y símbolos. Es conveniente además, que modifique
                      sus contraseñas con frecuencia. En especial, le
                      recomendamos que cambie la clave de su cuenta de correo si
                      accede con frecuencia desde equipos públicos.
                    </p>
                    <p className="text">
                      * Navegue por páginas web seguras y de confianza. Para
                      diferenciarlas identifique si dichas páginas tienen algún
                      sello o certificado que garanticen su calidad y
                      fiabilidad. Extreme la precaución si va a realizar compras
                      online o va a facilitar información confidencial a través
                      de internet. En estos casos reconocerá como páginas
                      seguras aquellas que cumplan dos requisitos:
                    </p>
                    <p className="text montserrat-bold">
                      * Deben empezar por https:// en lugar de http.
                    </p>
                    <p className="text">
                      * En la barra del navegador debe aparecer el icono del
                      candado cerrado. A través de este icono se puede acceder a
                      un certificado digital que confirma la autenticidad de la
                      página.
                    </p>
                    <p className="text">
                      * Sea cuidadoso al utilizar programas de acceso remoto. A
                      través de internet y mediante estos programas, es posible
                      acceder a un ordenador, desde otro situado a kilómetros de
                      distancia. Aunque esto supone una gran ventaja, puede
                      poner en peligro la seguridad de su sistema.
                    </p>
                    <p className="text">
                      * Ponga especial atención en el tratamiento de su correo
                      electrónico, ya que es una de las herramientas más
                      utilizadas para llevar a cabo estafas, introducir virus,
                      etc. Por ello le recomendamos que:
                    </p>
                    <p className="text montserrat-bold">
                      * No abra mensajes de correo de remitentes desconocidos.
                    </p>
                    <p className="text">
                      * Desconfíe de aquellos e-mails en los que entidades
                      bancarias, compañías de subastas o sitios de venta online,
                      le solicitan contraseñas, información confidencial, etc.
                    </p>
                    <p className="text">
                      * No propague aquellos mensajes de correo con contenido
                      dudoso y que le piden ser reenviados a todos sus
                      contactos. Este tipo de mensajes, conocidos como hoaxes,
                      pretenden avisar de la aparición de nuevos virus,
                      transmitir leyendas urbanas o mensajes solidarios,
                      difundir noticias impactantes, etc. Estas cadenas de
                      e-mails se suelen crear con el objetivo de captar las
                      direcciones de correo de usuarios a los que posteriormente
                      se les enviarán mensajes con virus, phishing o todo tipo
                      de spam
                    </p>
                    <p className="text">
                      * Utilice algún tipo de software Anti-Spam para proteger
                      su cuenta de correo de mensajes no deseados.
                    </p>
                    <p className="text">
                      * En general, es fundamental estar al día de la aparición
                      de nuevas técnicas que amenazan la seguridad de su equipo
                      informático, para tratar de evitarlas o de aplicar la
                      solución más efectiva posible.
                    </p>
                    <p className="text">
                      en el caso de estar interesado en más información respecto
                      a cómo ser parte de la familia hallo, puedes comunicarte
                      con uno de nuestros asesores comerciales.
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

export default Seguridad;
