import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import "../Componentes/CardInfo.css"

function CardInfo(NombreCurso, Capacitador, Lugar, Fecha, Hora, TxtBoton) {
    return (
        <>
            <Card variant="outlined" className="EstiloCard">
                <CardHeader className="HeaderCard" title="Capacitación: “Archivos: Datos personales y Acceso a la informacion: un vínculo normativo” ---> 24/09/2024" />
                <CardContent className="ContenidoCard">
                    <Typography variant="body2">Persona que imparte el curso : Dirección de Archivos</Typography>
                    <Typography variant="body2">Lugar: Virtual</Typography>
                    <Typography variant="body2">Fecha: 24/09/224</Typography>
                    <Typography variant="body2">Hora: 11:00</Typography>
                </CardContent>
                <CardActions>
                    <Button className="Boton">Ver Disponibilidad</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CardInfo;