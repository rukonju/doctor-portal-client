import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const AppoinmentBannr = () => {
    const appinmentBg = {
        background:`url(${bg})`,
        marginTop:150,
        backgroundColor:'rgba(12, 27, 98, 0.8)',
        backgroundBlendMode: 'darken, luminosity'
    }

    return (
        <Box style={appinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{width:400, marginTop:'-120px'}}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display:'flex', justifyContent:'flex-start', textAlign:'left',alignItems:'center'}}>
                    <Box>
                        <Typography variant='h6' sx={{ color: 'info.main' }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ my:2 }} variant='h4' style={{color:'white'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ my:2 }} variant='h4' style={{color:'white', fontSize:15, fontWeight:300}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat modi neque ullam quibusdam? Odit voluptas error nulla quod delectus necessitatibus, quasi voluptatum cumque.
                        </Typography>
                        <Button variant='contained'>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBannr;