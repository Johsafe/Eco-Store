import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="success">
        <Container>
          <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="nav-link"
                  style={{ backgroundColor: 'transparent' }}
                >
                  Signin
                </NavLink>
              </li>
              {/* <li  className="nav-item">
                <NavLink to="/signup" className="nav-link">Signup </NavLink>
              </li> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
