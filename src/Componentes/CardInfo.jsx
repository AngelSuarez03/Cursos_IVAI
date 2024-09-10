    import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";


    function CardInfo(Props) {
        return (
            <>
                <Card variant="elevation" sx={{ maxWidth:'90%', maxHeight: '60%', backgroundColor: '#A35494', margin:5, alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <CardHeader sx={{ color: '#FFFFFF', marginLeft:2 }} title={Props.NombreCurso} />
                    <CardContent sx={{ color: '#FFFFFF', marginLeft: 2, marginTop:-3}}>
                        <Typography variant="body2">Persona que imparte el curso : {Props.ExpositorCurso}</Typography>
                        <Typography variant="body2">Lugar: {Props.LugarCurso}</Typography>
                        <Typography variant="body2">Fecha: {Props.FechaCurso}</Typography>
                        <Typography variant="body2">Hora: {Props.HoraCurso}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" sx={{ backgroundColor: '#E7B756', color: "#1E1E1E",marginTop:-2, marginLeft:3, marginBottom:3,cursor: 'pointer', ":hover": { backgroundColor:'#E0D6A7' } }}>{Props.TextoBoton}</Button>
                    </CardActions>
                </Card>
            </>
        )
    }
    export default CardInfo;