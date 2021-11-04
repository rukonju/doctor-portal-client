import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
             <Card sx={{ minWidth: 260, boxShadow:0 }}>
                <CardMedia
                    component="img"
                    style={{width:'auto', height:'80px', margin:'0 auto'}}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>       
        </Grid>
    );
};

export default Service;