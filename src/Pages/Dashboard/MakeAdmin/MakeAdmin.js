import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = useAuth()

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e =>{
        const user ={email}
        fetch('https://stormy-harbor-41651.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                    label='Email'
                    sx={{width:'50%', m:1}}
                    type='email'
                    variant='standard'
                    onBlur={handleOnBlur}
                />
                <Button sx={{width:'50%', m:1}} type='submit' variant='contained'>Make Admin</Button>
                
            </form>
        </div>
    );
};

export default MakeAdmin;