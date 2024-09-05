// import {Button, TextField, Box} from "@mui/material";
import './Principal.css'
import CardInfo from '../Componentes/CardInfo';

function Principal() {
    return(
    <>
        <section className="layout">
        <div className="header">1</div>
        <div className="main">
            <CardInfo NombreCurso="Capacitación: “Archivos: Datos personales y Acceso a la informacion: un vínculo normativo” ---> 24/09/2024"FechaCurso="19/09/2024" LugarCurso="Virtual" ExpositorCurso="Dirección de Archivos" HoraCurso="11:00" TextoBoton="Ver Disponibilidad"/>
        </div>
        <div className="footer">3</div>
        </section>
    </>
    );
}

export default Principal;