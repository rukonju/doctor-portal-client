import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import login from '../../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const {registerUser, loading}=useAuth()
    const [registerData, setRegisterData] = useState({})
    const [confirmPassword, setConfirmPassword] = useState(true);
    const history = useHistory()
    const handleOnBlur = e =>{
        const feild = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[feild] = value;
        setRegisterData(newRegisterData);
        console.log(registerData)
    }
    const handleResister= e =>{
        if(registerData.password !== registerData.password2){
            setConfirmPassword(false)
        }
        else{
            registerUser(registerData?.email, registerData?.password,registerData.name, history)
        }
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body" display="block" gutterBottom>
                        Register
                    </Typography>
                    {!loading && <form onSubmit={handleResister} >
                        <TextField
                            sx={{width:'75%', m:1}}
                            variant="standard"
                            name='name'
                            onBlur={handleOnBlur}
                            type='text'
                            label="Enter Name"
                        />
                        <TextField
                            sx={{width:'75%', m:1}}
                            variant="standard"
                            name='email'
                            onBlur={handleOnBlur}
                            type='email'
                            label="Enter Email"
                        />
                        <TextField
                            sx={{width:'75%', m:1}}
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                            label="Enter Password"
                        />
                        <TextField 
                            sx={{width:'75%', m:1}}
                            type='password'
                            variant="standard"
                            name='password2'
                            onBlur={handleOnBlur}
                            label="Confirm Password"
                        />
                        {
                            confirmPassword || <Alert 
                                sx={{width:'75%', m:1}}
                                severity="warning"
                                >
                                Password did not match
                                </Alert>
                        }
                        
                        <Button 
                            type="submit"
                            variant="contained"
                            sx={{width:'75%', m:1}}
                            >
                            Register
                        </Button>
                        <br/>
                        <NavLink style={{width:'75%', margin:'8px', textDecoration:'none'}} to='/login'>
                            Already Register? Please login
                        </NavLink>
                    </form>
                    }
                    {loading &&<CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width='100%'/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;