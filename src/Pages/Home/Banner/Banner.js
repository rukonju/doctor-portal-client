import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const Banner = () => {
    const bannerBg = {
        background:`url(${bg})`,
        
    }
    const verticalCenter = {
        display:'flex',
        height:'400px',
        alignItems:'center',

    }
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign:"left"}} item xs={12} md={6}>
                    <Box>
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
                    <img style={{width:'400px'}} src={chair} alt=""/>
                
                </Grid>
        
            </Grid>
        </Container>
    );
};

export default Banner;