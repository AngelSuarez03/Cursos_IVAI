import { Card, CardContent, Typography } from "@mui/material";
import AgregarCurso from '../assets/add.svg';
import ModificarCurso from '../assets/update.svg';
import '../Estilos/RegistroMain.css';
import { useState, useEffect } from "react";
import SelectCurso from "../Componentes/SelectCurso.jsx";

function RegistroMain() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const handleOpenPopup = () => {
      setIsPopupOpen(true);
      document.body.style.overflow = "hidden";
      setScrollEnabled(false);
      setTimeout(() => {
        setIsAnimating(true); 
      }, 0);
    };

    const handleClosePopup = () => {
      setIsAnimating(false); 
      document.body.style.overflow = "auto";
    setScrollEnabled(true);
      setTimeout(() => {
        setIsPopupOpen(false);
      }, 300); 
    };

    return (
      <>
        <Card variant="outlined" sx={{ width:'30%', maxHeight:'70%', borderColor:'#a35494', borderWidth:4, borderRadius:3, display:'inline-flex', margin:2, cursor:'pointer' }}>
            <CardContent sx={{ textAlign:'center', width:'100%' }}>
                <img src={AgregarCurso} className="IconoCard"/>
                <Typography variant="h4" sx={{ color:'#A35494', fontSize:50 }}>Agregar Curso</Typography>
            </CardContent>
        </Card>
  
        <Card onClick={handleOpenPopup} variant="outlined" sx={{ width:'30%', maxHeight:'70%', borderColor:'#a35494', borderWidth:4, borderRadius: 3, display:'inline-flex',margin:2, cursor: 'pointer'}}>
            <CardContent sx={{ textAlign:'center', width:'100%' }}> 
                <img src={ModificarCurso} className="IconoCard"/>
                <Typography variant='h4' sx={{ color:'#A35494', fontSize:50 }}>Modificar Curso</Typography>
            </CardContent>
        </Card>

        {isPopupOpen && (
          <div className="popup-overlay">
            <div className={`popup-content ${isAnimating ? 'open' : 'close'}`}>
              <SelectCurso onClose={handleClosePopup} /> 
            </div>
          </div>
        )}
      </>
    );
}
  
export default RegistroMain;
