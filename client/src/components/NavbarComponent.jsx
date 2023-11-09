import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand href="#home">TutorMe</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login"> 
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/classes"> 
              <Nav.Link>Classes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/studyGroups"> 
              <Nav.Link>Study Groups</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent