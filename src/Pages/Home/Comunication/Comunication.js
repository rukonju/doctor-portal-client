import { AccessTime, Place, PhoneInTalk } from '@mui/icons-material';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';

const Comunication = () => {
    const paperStyle ={
        padding:'10px',
        height:'100px',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'darkblue'
    };
    
    return (
        <Container style={{marginTop:"-80px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper style={paperStyle} elevation={0}>
                        <AccessTime sx={{ fontSize: 80, color:'white'}}/>
                        <Box sx={{color:'white', textAlign:'left', margin:'0px 10px'}}>
                            <Typography variant='h5'>
                                Opening Hours
                            </Typography>
                            <Typography variant='h8'>
                                Everyday 24 hours and every week
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper style={paperStyle} elevation={0}>
                        <Place sx={{ fontSize: 80, color:'white'}}/>
                        <Box sx={{color:'white', textAlign:'left', margin:'0px 10px'}}>
                            <Typography variant='h5'>
                                Visit Our Location
                            </Typography>
                            <Typography variant='h8'>
                                Sherpur Shadar, Sherpur, Mymensignh
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper style={paperStyle} elevation={0}>
                        <PhoneInTalk sx={{ fontSize: 80, color:'white'}}/>
                        <Box sx={{color:'white', textAlign:'left', margin:'0px 10px'}}>
                            <Typography variant='h5'>
                                Contact Us Now
                            </Typography>
                            <Typography variant='h8'>
                                +00478237781
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Comunication;