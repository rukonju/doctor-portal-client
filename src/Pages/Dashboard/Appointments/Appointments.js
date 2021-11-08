import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({date}) => {
    const {user, token} = useAuth();
    const [appontments, setAppoinments] = useState([])

    useEffect(() =>{
        const url = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`
        fetch(url,{
            headers:{
                'authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setAppoinments(data))
    },[date,user.email,token])
    return (
        <div>
            <h2>Appointments {appontments.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Schedule</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {appontments.map((appointment) => (
                        <TableRow
                        key={appointment._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {appointment.patientName}
                        </TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.serviceName}</TableCell>
                        <TableCell align="right">{appointment.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;