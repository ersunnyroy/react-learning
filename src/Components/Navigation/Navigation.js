import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../../logo.png';
// import { Outlet, Link } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">  <img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>New Registration</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/candidates-list">
                <Nav.Link>Candidates List</Nav.Link>
            </LinkContainer>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
