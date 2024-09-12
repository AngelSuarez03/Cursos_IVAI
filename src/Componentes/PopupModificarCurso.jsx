import { Button, Card, CardActions, CardContent, CardHeader, Typography, IconButton, Grid, TextField, Select, MenuItem, ToggleButton, ToggleButtonGroup, Switch, Stack, Grid2 } from '@mui/material';
import { useState } from 'react';
import PopupMSJGuardado from './PopupMSJGuardado.jsx'
import Arrow from '../assets/arrow.svg'
import '../Principal/Principal.css'

function PopupModificarCurso({ onClose }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOpenConfirmation = () => {
      setIsPopupOpen(true);
      setTimeout(() => {
        setIsAnimating(true); 
      }, 0);
    };

    const handleCloseConfirmation = () => {
      setIsAnimating(false); 
      
      setTimeout(() => {
        setIsPopupOpen(false);
        onClose(); 
      }, 300); 
    };

    return (
        <>
            <Card variant="elevation" sx={{ maxWidth: '100%', maxHeight: '100vh', backgroundColor: '#A35494', margin: '7vh', justifyContent: 'center', borderRadius: 5, padding: '3vh', marginTop: '20vh' }}>
                <CardHeader
                    sx={{ color: '#FFFFFF' }}
                    title={
                        <Grid container justifyContent="space-between" alignItems="flex-start">
                            <Grid item>
                                <img src={Arrow} alt="Web" className='IconoSalir' onClick={onClose}/>
                            </Grid>
                            <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '100%', fontWeight: 'bold'}}>
                                Salir
                            </Typography>

                            <Grid item>
                                <Typography variant="body2" sx={{ maxWidth: 'auto', maxHeight: 'auto', color: '#FFFFFF',fontSize: '50%' }}>
                                    Los campos marcados con <br />
                                    asterisco (*) son obligatorios
                                </Typography>
                            </Grid>
                        </Grid>
                    }
                />

                <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '100%', fontWeight: 'bold', marginBottom: 0, textAlign:'center',  maxWidth: 'auto', maxHeight: 'auto' }}>
                    Modificar Curso
                </Typography>

                <div className='ScrollRegistro'>

                    <CardContent sx={{ color: '#FFFFFF' }}>
                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Nombre del curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant='outlined' size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Fecha:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', marginTop: 1, borderRadius: '15px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>


                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Hora:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Persona que imparte el curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Lugares Disponibles:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Correo de seguimiento:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Estatus:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar lugar</em>
                                    </MenuItem>
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Tipo de curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Curso:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '15px',
                                        }
                                    }}
                                    defaultValue=""
                                >
                                    <MenuItem value="Aula 1">Aula 1</MenuItem>
                                    <MenuItem value="Aula 2">Aula 2</MenuItem>
                                    <MenuItem value="Sala de conferencias">Sala de conferencias</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Liga de Teams:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Valor curricular en horas:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{
                                    backgroundColor: '#FFFFFF', borderRadius: '15px', marginTop: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '15px',
                                    }
                                }} />
                            </Grid>
                        </Grid>
                    </CardContent>

                </div>

                <CardActions sx={{ justifyContent: 'center' }}>
                <Button onClick={handleOpenConfirmation} variant="contained" sx={{ backgroundColor: '#E7B756', color: "#1E1E1E", marginTop: 2 }}>Guardar</Button>
                </CardActions>
            </Card>

            {isPopupOpen && (
              <div className="popup-overlay-confirmacion">
                <div className={`popup-content-confirmacion ${isAnimating ? 'open' : 'close'}`}>
                    <PopupMSJGuardado onClose={handleCloseConfirmation} />
                </div>
              </div>
            )}

        </>
    )
}
export default PopupModificarCurso;