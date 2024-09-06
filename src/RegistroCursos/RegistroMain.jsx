import { Card, CardContent, Typography } from "@mui/material";
import AgregarCurso from '../assets/add.svg';
import ModificarCurso from '../assets/update.svg';

function RegistroMain(){
    return(
        <>
            <Card variant="outlined" sx={{ width:'20%', maxHeight:'90%', borderColor:'#a35494', borderWidth:4, borderRadius:3, display:'inline-flex', margin:2}}>
                <CardContent sx={{ textAlign:'center' }}>
                    <img src={AgregarCurso} className="IconoCard"/>
                    <Typography variant="h4">Agregar Curso</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width:'20%', maxHeight:'90%', borderColor:'#a35494', borderWidth:4, borderRadius: 3, display:'inline-flex',margin:2}}>
                <CardContent sx={{ textAlign:'center' }}>
                    <img src={AgregarCurso} className="IconoCard"/>
                    <Typography variant='h4'>Modificar Curso</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default RegistroMain;