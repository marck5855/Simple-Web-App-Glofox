import React from "react";


//const Curso = props => 
const Curso = ({name, img, price}) => 
    <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={img} alt=""/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
            {name}
            </h3>
            
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="#">{price}</a>
            </div>
        </div>
    </article>



export default Curso;
