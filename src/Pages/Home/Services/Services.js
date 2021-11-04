import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import caviy from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name:'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil, maiores commodi provident numquam minima ullam quisquam hic tenetur. Ipsam.',
        img:fluoride
    },
    {
        name:'Caviy Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil, maiores commodi provident numquam minima ullam quisquam hic tenetur. Ipsam.',
        img:caviy
    },
    {
        name:'Teeth whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil, maiores commodi provident numquam minima ullam quisquam hic tenetur. Ipsam.',
        img:whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ color: 'info.main', m: 2 }} variant="h6" component="div">OUR SERVICES</Typography>
            <Typography sx={{ mb: 5 }} variant="h4" component="div">Services we provide</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   services.map(service=><Service key={service.name} service={service}></Service>)
               } 
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;