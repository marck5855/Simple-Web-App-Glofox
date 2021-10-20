import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';


const Menu = () =>
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <img src="https://play-lh.googleusercontent.com/A6J4J3gWgjSPWtxe3oZF7jQ_OO2PErHAUTlB697x8SI8kklhCZ1kHd1zJg7M1_yfir8" alt="" height="10%" width="10%" />
                <Navbar.Brand href="#Inicio">Glofox</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Servicios</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <br />
    </>
export default Menu;
