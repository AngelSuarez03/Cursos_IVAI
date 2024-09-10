import { Button, Card, CardActions, CardContent, CardHeader, Typography, IconButton, Grid, TextField, Select, MenuItem, ToggleButton, ToggleButtonGroup, Switch, Stack } from '@mui/material';
import { useState } from 'react';
import PopupMSJConfirmacion from './PopupMSJConfirmacion.jsx'

function PopupRegistro(Props) {
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenConfirmation = () => {
        setIsPopupOpen(true)
    };
    const handleCloseConfirmation = () => {
        setIsPopupOpen(false)
    };

    return (
        <>
            <Card variant="elevation" sx={{ maxWidth: '100%', maxHeight: '100%', backgroundColor: '#A35494', margin: 5, justifyContent: 'center', borderRadius: 5, padding: 3 }}>
                <CardHeader
                    sx={{ color: '#FFFFFF' }}
                    title={
                        <Grid container justifyContent="space-between" alignItems="flex-start">
                            <Grid item>
                                <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '100%', fontWeight: 'bold', marginBottom: 0 }}>
                                    Datos Personales
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" sx={{ maxWidth: 'auto', maxHeight: 'auto', color: '#FFFFFF', marginLeft: -20, fontSize: '50%' }}>
                                    Los campos marcados con asterisco (*) <br />
                                    son obligatorios
                                </Typography>
                            </Grid>
                        </Grid>
                    }
                />

                <div style={{ overflowY: 'auto', maxHeight: '400px' }}>

                    <CardContent sx={{ color: '#FFFFFF' }}>
                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Nombre(s)*:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF' }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Apellidos*:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', marginTop: 1 }} />
                            </Grid>
                        </Grid>


                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Ultimo grado de estudios:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }}
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
                                <Typography variant="body2">Lugar de procedencia:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Orden de gobierno:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }}
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
                                <Typography variant="body2">Sexo:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }}
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
                                <Typography variant="body2">Estado:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Nombre de la entidad o dependencia:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Área de adquisición:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Cargo público que desempeña:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">¿Desea recibir información de nuestros eventos?</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid item>
                                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                                        <Typography>Sí</Typography>
                                        <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                        <Typography>No</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Correo electrónico institucional*:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">Telefono institucional*:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth variant="outlined" size="small" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, marginTop: 1 }} />
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} alignItems="center" spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body2">¿Requiere un intérprete de lenguaje de señas mexicanas?</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid item>
                                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                                        <Typography>Sí</Typography>
                                        <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                        <Typography>No</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>

                </div>

                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button onClick={handleOpenConfirmation} variant="contained" sx={{ backgroundColor: '#E7B756', color: "#1E1E1E", marginTop: 2 }}>Enviar registro</Button>
                </CardActions>
            </Card>

            {isPopupOpen && (
                <div className="popup-overlay-inicio">
                        <PopupMSJConfirmacion onClose={handleCloseConfirmation} />
                </div>
            )}
        </>
    )
}
export default PopupRegistro;