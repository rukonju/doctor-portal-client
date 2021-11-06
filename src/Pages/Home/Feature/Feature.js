import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Feature = () => {
    return (
        <Container>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={12} md={5}>
                    <img width='100%' src={treatment} alt="" /> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{textAlign:'left'}}>
                        <Typography sx={{mb:4}} variant='h3'>
                            Exceptional dantal care, on your terms
                        </Typography>
                        <Typography  variant='h7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit quis beatae! Vero impedit cum tempora autem, veritatis eveniet sequi facilis ea voluptatum, obcaecati eos dicta nesciunt nam consequatur repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit quis beatae! Vero impedit cum tempora autem, veritatis eveniet sequi facilis ea voluptatum, obcaecati eos dicta nesciunt nam consequatur repellendus!
                        </Typography>
                        <Button sx={{mt:4}} variant='contained'>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Feature;