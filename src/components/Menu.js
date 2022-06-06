import React from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";

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
            <Nav.Link as={Link} to="/agencias" activeClassName="active">
              Agencias
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" activeClassName="active">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/quienes-somos" activeClassName="active">
              Quienes Somos
            </Nav.Link>
            <Nav.Link as={Link} to="/soporte" activeClassName="active">
              Soporte
            </Nav.Link>
            <Nav.Link as={Link} to="/distribuidores" activeClassName="active">
              Distribuidores
            </Nav.Link>
          </Nav>
          <Nav className="social-nav">
            <Nav.Link
              href="https://www.facebook.com/hallo.network/"
              target="_blank"
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
