import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Grid container spacing={4} alignItems='center'>
                <Grid item xs={12} md={3}>
                    <Box sx={{textAlign:'left'}}>
                        <Typography sx={{mb:4}} variant='h6'>
                            
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{textAlign:'left'}}>
                        <Typography sx={{mb:4}} variant='h6'>
                            Services
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{textAlign:'left'}}>
                        <Typography sx={{mb:4}} variant='h6'>
                            Orals Health
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                        <Typography variant='h7'>
                            Orals Health
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{textAlign:'left'}}>
                        <Typography sx={{mb:4}} variant='h6'>
                            Our Address
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant='h7'> &copy; Copyright 2021 All Rights Reserved</Typography>
        </>
    );
};

export default Footer;