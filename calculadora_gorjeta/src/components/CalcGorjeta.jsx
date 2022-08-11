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
    return (
        <>
            <Container maxWidth="sm">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Card sx={{ minWidth: 275, marginTop: 25, backgroundColor: '#e0e0e0'}}>
                            <Box sx={{ backgroundColor: 'primary.main', height: 60, width: 575 }}>
                                <Typography variant="h5" component="div" sx={{ padding: 2, color: 'white' }}>
                                    Calculadora de Gorjeta
                                </Typography>
                            </Box>
                            <CardContent>
                                <div>
                                    <TextField id="outlined-basic" label="Comanda" margin='normal' variant="outlined" type='number' />
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Gorjeta" margin='normal' variant="outlined" type='number' />
                                </div>
                                <div><Button variant="contained">Calcular</Button></div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}