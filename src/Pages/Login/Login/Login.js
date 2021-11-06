import { Container, Grid, TextField } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';

const Login = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        type='email'
                        label='standard'
                    />
                    <TextField
                        type='password'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width='100%'/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;