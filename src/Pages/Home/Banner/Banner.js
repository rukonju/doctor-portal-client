import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import { Button, Container, Typography, Box } from '@mui/material';

const Banner = () => {

    const verticalCenter = {
        display:'flex',
        height:'600px',
        alignItems:'center',
        justifyContent:'center'

    }
    return (
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{...verticalCenter }} item xs={12} md={6}>
                        <Box style={{textAlign:"left"}}>
                            <Typography variant='h3'>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant='h6' sx={{fontSize:13, my:3, fontWeight:300, color:'gray'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quasi dolore ullam nesciunt. Suscipit, illum modi repudiandae minus sequi ea inventore officiis quidem, aspernatur adipisci accusamus. Omnis, assumenda et? Aut!
                            </Typography>
                            <Button variant='contained'>Get Appontment</Button>
                        </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={12} md={6}>
                        <img style={{width:'100%'}} src={chair} alt=""/>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Banner;