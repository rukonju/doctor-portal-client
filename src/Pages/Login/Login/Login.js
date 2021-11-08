import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Login = () => {
    const {signIn, googleSignIn} = useAuth();
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData  ={...loginData}
        newLoginData[feild] = value
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = ()=>{
        googleSignIn(location, history);
    }
    const handleLogin = e =>{
        signIn(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body" display="block" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin} >
                        <TextField
                            sx={{width:'75%', m:1}}
                            variant="standard"
                            name='email'
                            onBlur={handleOnChange}
                            type='email'
                            label="Enter Email"
                        />
                        <TextField
                            sx={{width:'75%', m:1}}
                            type='password'
                            name='password'
                            onBlur={handleOnChange}
                            variant="standard"
                            label="Enter Password"
                        />
            
                        <Button 
                            type="submit"
                            variant="contained"
                            sx={{width:'75%', m:1}}
                            >
                                Login
                        </Button>
                        <br/>
                        <NavLink style={{width:'75%', margin:'8px', textDecoration:'none'}} to='/register'>
                            New user? Please register
                        </NavLink>
                    </form>
                    <Button
                        onClick={handleGoogleSignIn} 
                        variant="contained"
                        sx={{width:'75%', m:1}}
                        >
                            Sign in with google
                        </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" width='100%'/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;