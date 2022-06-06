import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer>
      <Container className="py-4 py-md-5">
        <Row>
          <Col>
            <h3 className="footer-title">HALLO</h3>
            <p>Acerca de</p>
          </Col>
          <Col>
            <h3 className="footer-title">PARTNERS</h3>
            <p>MUVECOM</p>
            <p>La Chismosa</p>
            <p>Lexsolutions</p>
          </Col>
          <Col>
            <h3 className="footer-title">
              SOPORTE <br /> TÉCNICO
            </h3>
            <p>0982522222</p>
          </Col>
          <Col className="mt-3 mt-md-0">
            <h3 className="footer-title">
              NORMAS Y <br />
              REGULACIONES <br />
              Arcotel
            </h3>
            <p>Ley orgánica de discapacidades</p>
            <p>REGLAMENTO ABONADOS</p>
            <p>Términos y condiciones</p>
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
