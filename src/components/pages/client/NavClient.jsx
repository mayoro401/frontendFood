import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GiShoppingCart } from "react-icons/gi";

function NavClient() {
  return (
    <>
      <div className="navb-container">
        <Navbar bg="ligth" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <a class="nav-link" href="client/panier">
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
                <Nav.Link href="client/produit" id="produits">
                  Produits
                </Nav.Link>

                <NavDropdown title="Catégories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action" id="action">
                    Categorie
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#ohDelice" id="ohDelice">
                  Qui sommes-Nous?
                </Nav.Link>
              </Nav>

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
    </>
  );
}

export default NavClient;
