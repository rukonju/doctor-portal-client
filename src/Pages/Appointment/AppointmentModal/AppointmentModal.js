import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({open, handleClose, appoint, date}) => {

    const {name, time} = appoint;

    const handleSubmit = e =>{
        handleClose();
        e.preventDefault();

    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    disabled
                    sx={{width:'90%',my:1}}
                    id="outlined-size-small"
                    size='small'
                    defaultValue={time}
                
                />
                <TextField
                    sx={{width:'90%',my:1}}
                    id="outlined-size-small"
                    size='small'
                    defaultValue='Your Name'
                
                />
                <TextField
                    sx={{width:'90%',my:1}}
                    id="outlined-size-small"
                    size='small'
                    defaultValue='Your Phone'
                
                />
                <TextField
                    sx={{width:'90%',my:1}}
                    id="outlined-size-small"
                    size='small'
                    defaultValue='Your Email'
                
                />
                <TextField
                    disabled
                    sx={{width:'90%',my:1}}
                    id="outlined-size-small"
                    size='small'
                    defaultValue={date.toDateString()}
                
                />
                <Button type='submit' variant='contained'>Submit</Button>
            </form>
            
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppointmentModal;