import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Booking = ({appoint,date}) => {
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {name, time, space} = appoint;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper style={{padding:'30px 0px'}} elevation={3}>
                    <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                            {name}
                    </Typography>   
                    <Typography variant="h6" gutterBottom component="div">
                            {time}
                    </Typography>   
                    <Typography variant="caption" gutterBottom component="div">
                            {space} Space Available
                    </Typography>
                    <Button onClick={handleOpen} variant='contained'>Book Appointment</Button>   
                </Paper>         
            </Grid>
            <AppointmentModal date={date} appoint={appoint} open={open} handleClose={handleClose}></AppointmentModal>
        </>
    );
};

export default Booking;