import { Card, CardContent, Typography } from "@mui/material";
import AgregarCurso from '../assets/add.svg';
import ModificarCurso from '../assets/update.svg';
import '../Estilos/RegistroMain.css';
import { useState } from "react";
import SelectCurso from "../Componentes/SelectCurso.jsx";


function RegistroMain() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <>



          

          <Card variant="outlined" sx={{ width:'30%', maxHeight:'70%', borderColor:'#a35494', borderWidth:4, borderRadius:3, display:'inline-flex', margin:2}}>
                <CardContent sx={{ textAlign:'center', width:'100%' }}>
                    <img src={AgregarCurso} className="IconoCard"/>
                    <Typography variant="h4">Agregar Curso</Typography>
                </CardContent>
            </Card>
  
          


          <Card onClick={handleOpenPopup} variant="outlined" sx={{ width:'30%', maxHeight:'70%', borderColor:'#a35494', borderWidth:4, borderRadius: 3, display:'inline-flex',margin:2}}>
                <CardContent sx={{ textAlign:'center', width:'100%' }}>
                    <img src={AgregarCurso} className="IconoCard"/>
                    <Typography variant='h4'>Modificar Curso</Typography>
                </CardContent>
            </Card>

  

        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <SelectCurso onClose={handleClosePopup} /> 
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default RegistroMain;