import { Button, Card, CardActions, CardContent, SvgIcon, Typography } from "@mui/material";
import check from '../assets/check.svg'
import '../Principal/Principal.css'

function PopupMSJConfirmacion() {
    return (
        <>
            <Card variant="outlined" sx={{  maxWidth: '35%', minHeight: 500, borderRadius:5 }}>
                {/* <CardHeader title='Aqui va la imagen' sx={{ maxHeight:'50%', maxWidth:'100%', margintop:5,textAlign:'center'}}/> */}
                <CardContent sx={{ textAlign:'center' }}>
                <img src={check} className="IconoCard"/>
                    <Typography variant="h4">Registro Exitoso</Typography>
                    <Typography sx={{ marginTop:3 }} variant="body2">El proceso se ha realizado correctamente.Le hemos enviado un correo electrónico con el enlace de acceso, favor de verificar todas las bandejas del correo electrónico</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent:'center' }}>
                    <Button sx={{ backgroundColor: '#E7B756', color:'#1E1E1E', minWidth:150 }} variant="contained">Aceptar</Button>
                </CardActions>

            </Card>
        </>
    )
}

export default PopupMSJConfirmacion;