import React, { useState,useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import UsersContext from '../../context/users/UsersContext';
function Menu() {
  const [active, setActive] = useState('default');
  const {user} = useContext(UsersContext);
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shopcart</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
            <LinkContainer to="/">
              <Nav.Link eventKey="default">Home</Nav.Link>
            </LinkContainer>
              {!user && 
            <LinkContainer to="/register">
              <Nav.Link eventKey="register">Register</Nav.Link>
            </LinkContainer>}
            
            {user && <LinkContainer to="/members-area">
              <Nav.Link eventKey="members">Members Area</Nav.Link>
            </LinkContainer>}

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
