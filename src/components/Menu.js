import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";
import Regulacion from "../docs/guia_control_parental_arcotel.pdf";
import Abonados from "../docs/reglamento_abonados.pdf";

const Menu = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <StaticImage
            src="../images/assets/hallo-logo.svg"
            alt="Hallo logo"
            className="light-logo me-4"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items me-auto">
            <Nav.Link as={Link} to="/" activeClassName="active">
              Inicio
            </Nav.Link>
            <AnchorLink
              as={Link}
              to="/#agencias"
              activeClassName="active"
              className="stripped nav-link"
              stripHash
            >
              Agencias
            </AnchorLink>
            <Nav.Link as={Link} to="/contacto" activeClassName="active">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" activeClassName="active">
              Quienes Somos
            </Nav.Link>
            <NavDropdown title="Soporte">
              <NavDropdown.Item href={Regulacion} target="_blank">
                Control y regulación
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/preguntas-frecuentes">
                Preguntas frecuentes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seguridad">
                Seguridad
              </NavDropdown.Item>
              <NavDropdown.Item
                href={Abonados}
                target="_blank"
                rel="noreferrer"
              >
                Reglamento abonados
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/capacidad">
                Capacidad
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.arcotel.gob.ec/"
                target="_blank"
                rel="noreferrer"
              >
                ARCOTEL
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://fast.com/es"
                target="_blank"
                rel="noreferrer"
              >
                Velocidad
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/franquiciados" activeClassName="active">
              Franquicias
            </Nav.Link>
            <Nav.Link as={Link} to="/universo-hallo" activeClassName="active">
              Universo Hallo
            </Nav.Link>
            <Nav.Link as={Link} to="/hallo-tv" activeClassName="active">
              Hallo TV
            </Nav.Link>
          </Nav>
          <Nav className="social-nav">
            <Nav.Link
              href="https://www.facebook.com/hallo.network/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/assets/facebook.svg"
                alt="facebook logo"
                className="social-logo"
              />
            </Nav.Link>
            <Nav.Link href="" target="_blank">
              <StaticImage
                src="../images/assets/instagram.svg"
                alt="instragram logo"
                className="social-logo"
              />
            </Nav.Link>
            <Nav.Link href="" target="_blank">
              <StaticImage
                src="../images/assets/twitter.svg"
                alt="twitter logo"
                className="social-logo"
              />
            </Nav.Link>
            <Nav.Link href="" target="_blank">
              <StaticImage
                src="../images/assets/tiktok.svg"
                alt="tik tok logo"
                className="social-logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
