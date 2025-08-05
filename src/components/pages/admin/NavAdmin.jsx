import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiShoppingCart } from "react-icons/gi";
// import NavDropdown from "react-bootstrap/NavDropdown";

function NavAdmin() {
  return (
    <div className="navb-container">
      <Navbar bg="ligth" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            {/* <img
              src="./images/logo.png"
              alt="Bootstrap"
              width="200"
              height="100"
            /> */}

            <a class="nav-link" href="administrateur/panier">
              <GiShoppingCart color="black" fontSize="50px" />
              <sup>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  25
                  <span class="visually-hidden">unread messages</span>
                </span>
              </sup>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="administrateur/produits" id="produits">
                Produits
              </Nav.Link>
              <Nav.Link href="administrateur/categorie" id="produits">
                Catégories
              </Nav.Link>
              <Nav.Link href="administrateur/utilisateurs" id="produits">
                Utilisateurs
              </Nav.Link>
              <Nav.Link href="#ohDelice" id="ohDelice">
                Qui sommes-Nous?
              </Nav.Link>
            </Nav>
            {/* <NavDropdown title="Catégories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action" id="action">Categorie</NavDropdown.Item>
            </NavDropdown> */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning" id="search">
                Recherche
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavAdmin;
