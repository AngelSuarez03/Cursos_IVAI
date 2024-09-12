import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import PopupModificarC from '../Componentes/PopupModificarC.jsx'


function CardModificar(Props) {

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
            <Card variant="elevation" sx={{ maxWidth:'100%', maxHeight: '60%', backgroundColor: '#FFFFF', marginTop:2,marginLeft:5,marginRight:5, alignItems:'center',justifyContent:'center', borderRadius:5 }}>
                <CardHeader sx={{ color: '#A35494', marginLeft:2 }} title={Props.NombreCurso} />
                <CardContent sx={{ color: '#A35494', marginLeft: 2, marginTop:-3}}>
                    <Typography variant="body2">Persona que imparte el curso : {Props.ExpositorCurso}</Typography>
                    <Typography variant="body2">Lugar: {Props.LugarCurso}</Typography>
                    <Typography variant="body2">Fecha: {Props.FechaCurso}</Typography>
                    <Typography variant="body2">Hora: {Props.HoraCurso}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ backgroundColor: '#E7B756', color: "#1E1E1E",marginTop:-2, marginLeft:3, marginBottom:3 }} onClick={handleOpenPopup}>{Props.TextoBoton}</Button>
                </CardActions>
            </Card>

            {isPopupOpen && (
              <div className="popup-overlay-confirmacion">
                <div className={`popup-content ${isAnimating ? 'open' : 'close'}`}>
                    <PopupModificarC onClose={handleClosePopup} /> {/* Pasar handleClosePopup */}
                </div>
              </div>
            )}

        </>
    )
}
export default CardModificar;