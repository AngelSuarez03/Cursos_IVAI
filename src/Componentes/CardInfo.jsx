import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";


function CardInfo(Props) {
    return (
        <>
            <Card variant="outlined" sx={{ width: 750, height: 270, backgroundColor: '#A35494' }}>
                <CardHeader sx={{ color: '#FFFFFF', marginLeft: 2 }} title={Props.NombreCurso} />
                <CardContent sx={{ color: '#FFFFFF', marginLeft: 2 }}>
                    <Typography variant="body2">Persona que imparte el curso : {Props.ExpositorCurso}</Typography>
                    <Typography variant="body2">Lugar: {Props.LugarCurso}</Typography>
                    <Typography variant="body2">Fecha: {Props.FechaCurso}</Typography>
                    <Typography variant="body2">Hora: {Props.HoraCurso}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ backgroundColor: '#E7B756', color: "#1E1E1E", marginLeft:3, marginBottom:3 }}>{Props.TextoBoton}</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CardInfo;