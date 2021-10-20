import React, { Fragment } from 'react';
import Banner from './Banner';
import Carouseles from './Carouseles';
import Curso from './Curso';
import Menu from './Menu';
import Footer from './Footer';
const cursos = [
    {
        "name": "Facilite a los clientes reserver y comprar con una aplicacion de miembro de marca",
        "img": "https://www.glofox.com/wp-content/uploads/2016/01/145311069978500-3-1024x528.jpeg",
        "price": "Obtener"
    },
    {
        "name": "Applicacion WEB y Movil",
        "img": "https://support.glofox.com/hc/article_attachments/360005618337/Member_App_gif.gif",
        "price": "Obtener"

    },
    {
        "name": "Alimente a su base de miembros una aplicacion para miembros de marca",
        "img": "https://www.glofox.com/wp-content/uploads/2020/02/iphone11-mockup-scaled-1.jpg",
        "price": "Obtener"
    }
]

const Inicio = () =>
    <>
        <Menu />
        <Carouseles />
        <Banner />
        <div className="ed-grid m-grid-3">
            {
                cursos.map(d => <Curso name={d.name} img={d.img} price={d.price} />)
            }
        </div>
        <Footer />

    </>

export default Inicio;
