// import {Button, TextField, Box} from "@mui/material";
import './Principal.css'
import CardInfo from '../Componentes/CardInfo';

function Principal() {
    return(
    <>
        <section className="layout">
        <div className="header">1</div>
        <div className="main">
            <CardInfo></CardInfo>
        </div>
        <div className="footer">3</div>
        </section>
    </>
    );
}

export default Principal;