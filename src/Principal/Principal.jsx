// import {Button, TextField, Box} from "@mui/material";
import './Principal.css'
import rlceImage from '../Imagenes/rlce.webp'; 
import ivaiImage from '../Imagenes/ivai.webp'

function Principal() {
    return(
    <>
        <section class="layout">
        <div class="header">
            <img src={rlceImage} alt="" className="header-img-right"/>
            <h1 className="header-title">
                    Cursos disponibles
            </h1>
            <img src={ivaiImage} alt="" className="header-img-left"/>
        </div>
        <div class="main">
            <p>Parrafo</p>
        </div>
        <div class="footer">3</div>
        </section>
    </>
    );
}

export default Principal;