import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import './CalcGorjeta.css'

export default function CalcGorjeta() {

    const [valor, setValor] = useState(0.00)
    const [comanda, setComanda] = useState(0.00)
    const [gorjeta, setGorjeta] = useState(0.00)

    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Card sx={{ minWidth: 275, marginTop: 25, backgroundColor: '#e0e0e0' }}>
                            <Box sx={{ backgroundColor: 'primary.main', height: 60, width: 575 }}>
                                <Typography variant="h5" component="div" sx={{ padding: 2, color: 'white' }}>
                                    Calculadora de Gorjeta
                                </Typography>
                            </Box>
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={7}>
                                            <TextField id="outlined-basic" label="Comanda" name='Comanda' margin='normal' 
                                                variant="outlined" type='number' onChange={(e) => setComanda(e.target.value)}/>
                                            <TextField id="outlined-basic" label="Gorjeta" name='Gorjeta' margin='normal' 
                                                variant="outlined" type='number' onChange={(e) => setGorjeta(e.target.value)}/>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h5" component="div" sx={{ color: 'black', marginTop: 8, marginLeft: 3 }}>
                                            R$ {valor === 0 ? '00.00' : valor}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" onClick={() => setValor((parseFloat(comanda)+parseFloat(gorjeta)).toFixed(2))}>Calcular</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}