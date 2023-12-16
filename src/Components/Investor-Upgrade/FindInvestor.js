import React, { Fragment, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    Checkbox,
    DialogTitle,
    Typography,
    FormLabel,
    Select,
    FormGroup,
    MenuItem
} from '@mui/material';
import { Close, East } from '@mui/icons-material';
import './../Homepage/HomeBody.css'
import './../Homepage/WTS&Trainings.css'
import './InvUpg.css'

export default function FindInvestor() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button class='button-1' onClick={handleClickOpen}>
                <Typography class='investor'>Find Investor</Typography>
                <East></East>
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography class='wts-name'>Find Investor</Typography>
                        <Typography class='wts-role'>Connect your best investor here</Typography>
                    </Box>
                    <Close sx={{ cursor: 'pointer' }} onClick={handleClose}></Close>
                </DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Full Name</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="full-name"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Email Address</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Phone Number</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Company Name</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company-name"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        ></TextField>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Company Category</FormLabel>
                        <Select
                            autoFocus
                            margin="dense"
                            id="company-cat"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        >
                            <MenuItem value="1">Logistic</MenuItem>
                            <MenuItem value="2">B2B E-Commerce</MenuItem>
                            <MenuItem value="3">Argitech</MenuItem>
                        </Select>
                        <FormLabel sx={{ marginTop: '1.5em' }} id="full-name" >Company Location</FormLabel>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="company-loc"
                            label="Required"
                            fullWidth
                            variant="standard"
                            required
                        ></TextField>
                    </FormGroup>
                </DialogContent>
                <DialogActions sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '.7em'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        gap: '.3em',
                        alignItems: 'center'
                    }}>
                        <Checkbox></Checkbox>
                        <Typography>Accept terms & conditions</Typography>
                    </Box>
                    <Button class='button-send' onClick={handleClose}>
                        <Typography class='send-text'>Send</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
