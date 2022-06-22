import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import LeyDiscapacidades from "../docs/ley_organica_discapacidades.pdf";
import Abonados from "../docs/reglamento_abonados.pdf";

const Footer = () => {
  return (
    <footer>
      <Container className="py-4 py-md-5">
        <Row>
          <Col>
            <h3 className="footer-title">HALLO</h3>
            <Link to="/quienes-somos" className="text-decoration-none">
              <p>Acerca de</p>
            </Link>
          </Col>
          <Col>
            <h3 className="footer-title">PARTNERS</h3>

            <a
              href="https://muvecom.com/muvecom/"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <p>MUVECOM</p>
            </a>
            <a
              href="https://lachismosafm.ec"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <p>La Chismosa</p>
            </a>

            <a
              href="https://lexsolutionsecuador.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <p>Lexsolutions</p>
            </a>
          </Col>
          <Col>
            <h3 className="footer-title">
              SOPORTE <br /> TÉCNICO
            </h3>
            <a href="tel:+593982522222" className="text-decoration-none">
              <p>0982522222</p>
            </a>
          </Col>
          <Col className="mt-3 mt-md-0">
            <h3 className="footer-title">
              NORMAS Y <br />
              REGULACIONES <br />
              Arcotel
            </h3>
            <a
              href={LeyDiscapacidades}
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ley orgánica de discapacidades</p>
            </a>
            <a
              href={Abonados}
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              <p>Reglamento abonados</p>
            </a>
            <Link to="/terminos-condiciones" className="text-decoration-none">
              <p>Términos y condiciones</p>
            </Link>
          </Col>
          <Col className="mt-3 mt-md-0">
            <Link to="/">
              <StaticImage
                src="../images/assets/hallo-logo.svg"
                alt="Hallo logo"
                className="main-banner light-logo me-4"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
