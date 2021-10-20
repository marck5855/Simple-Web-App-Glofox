import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ServiciosComponent = ({name, img, description}) =>
    <>
        <Container>
        <h1>SERVICOS</h1>
            <p>Glofox permite a las empresas de fitness retener y generar ingresos.</p>
            <br />

            <article class="card">
                <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src={img} alt=""></img>
                </div>
                <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <h3 class="t5 s-mb-2 s-center">
                        {name}
                    </h3>
                    <p>{description}</p>
                    <div class="s-main-center">
                        <a class="button--ghost-alert button--tiny" href="#">SOLICITAR</a>
                    </div>
                </div>
            </article>
        </Container>


    </>
export default ServiciosComponent;