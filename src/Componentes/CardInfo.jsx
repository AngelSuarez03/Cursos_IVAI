import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import "./CardInfo.css"

function CardInfo(Props) {
    return (
        <>
            <Card variant="elevation" className="EstiloCard">
                <CardHeader className="HeaderCard" title={Props.NombreCurso} />
                <CardContent className="ContenidoCard">
                    <Typography variant="body2">Persona que imparte el curso : {Props.ExpositorCurso}</Typography>
                    <Typography variant="body2">Lugar: {Props.LugarCurso}</Typography>
                    <Typography variant="body2">Fecha: {Props.FechaCurso}</Typography>
                    <Typography variant="body2">Hora: {Props.HoraCurso}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" className="Boton">{Props.TextoBoton}</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CardInfo;