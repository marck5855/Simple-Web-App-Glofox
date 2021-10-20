import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import Footer from './Footer';
const FormularioRegistro = () =>
  <>
    <Menu />
    <Container>
      <h1>Regístrate en Glofox</h1>
      <p>Impulsando el futuro del fitnnes...!!</p>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="ingresar correo@gmail.com" />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirmacion de Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNameCuenta">
          <Form.Label>Nombre de la cuenta de Glofox</Form.Label>
          <Form.Control type="password" placeholder="Cuenta de Goflox" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
    <Footer />


  </>
export default FormularioRegistro;