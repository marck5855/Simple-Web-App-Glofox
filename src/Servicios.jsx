import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import ServiciosComponent from './ServiciosComponent';
import Menu from './Menu';
import Footer from './Footer';

const servicios = [
    {
        "name": "Retención de Ingresos",
        "img": "https://www.glofox.com/wp-content/uploads/2016/01/145311069978500-3-1024x528.jpeg",
        "description": "Cobro o descuento de dinero que se realiza sobre las operaciones comerciales en concepto de impuestos."
    },
    {
        "name": "Generación de Ingresos",
        "img": "https://unplandenegocios.com/wp-content/uploads/2020/01/ingresos.jpg",
        "description": "Los ingresos que una organización sin fines de lucro devenga de la venta de productos, servicios prestados, y proyectos de trabajos cumplidos"

    },
    {
        "name": "Gestión de gimnasios",
        "img": "https://asesorias.com/empresas/wp-content/uploads/2020/02/Software-gimnasio.jpg",
        "description": "Es un trabajo complicado que requiere a un profesional, déjanos ayudarte con la solución goflox "
    }
]

const Servicios = ({ name, img, description }) =>
    <>
        <Menu />
        {
            servicios.map(d => <ServiciosComponent name={d.name} img={d.img} price={d.description} />)
        }
        <Footer />

    </>
export default Servicios;