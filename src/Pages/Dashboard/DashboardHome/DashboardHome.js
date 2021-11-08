import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calander from '../../Shared/Calander/Calander';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} >
                    <Calander
                        date={date}
                        setDate={setDate}
                    ></Calander>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Appointments date={date}></Appointments>
                </Grid>

            </Grid>
        </div>
    );
};

export default DashboardHome;