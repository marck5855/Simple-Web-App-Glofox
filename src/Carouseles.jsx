import React from "react";
import { Carousel } from 'react-bootstrap';

const Carouseles = () =>
<>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2019/11/20/Glofox-Founders.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 color="white">Equipo</h5>
      <p color="white">Dedicado a impulsar la industria del fitness con soluciones digitales.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/oP16gs-xHPHkyITGq-7ZchJrlLfkUFEAc8jnJ0e8b3sJrD9B1vL63qKUxVDWXrw_hYOkhPXBbw5MnJkS-CByDxbuc8EE62GnV_3ueiFGVVQAWioceTVDftgPGMtAnJDprLyHJKI"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 color="white" >Clientes</h5>
      <p color="white" >Tiene una base de clientes en constante crecimiento que cuenta con mas de 3,000 gimnasios.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.leisureopportunities.co.uk/images/imagesX/SOCIAL341837_836524_490277.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 color="white">Glofox</h5>
      <p color="white">Permite a las empresas de fitness retener y generar ingresos.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />
</>

export default Carouseles;
