import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const appoints = [
    {
        id:1,
        name:'name-1',
        time:'02.00 PM - 03.00 PM',
        space:8
    },
    {
        id:2,
        name:'name-2',
        time:'03.00 PM - 04.00 PM',
        space:10
    },
    {
        id:3,
        name:'name-3',
        time:'04.00 PM - 05.00 PM',
        space:7
    },
    {
        id:4,
        name:'name-4',
        time:'05.00 PM - 06.00 PM',
        space:6
    },
    {
        id:5,
        name:'name-5',
        time:'06.00 PM - 07.00 PM',
        space:3
    },
    {
        id:6,
        name:'name-6',
        time:'07.00 PM - 08.00 PM',
        space:10
    },
]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography sx={{ color: 'info.main' }} variant='h4'>Available Appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    appoints.map(appoint=><Booking key={appoint.id} appoint={appoint} date={date}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;