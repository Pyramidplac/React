import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DialogTitle from '@mui/material/DialogTitle';
import CourseForm from './CourseForm';

const CourseDialog = () => {
    const [open, setOpen] = React.useState(false);
    const nav = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const backhome = () => {
        nav("/dashboard/master")
    };

    return (
        <div>
            <Button variant="contained" onClick={backhome} className='me-3'>
                <ArrowBackIcon />
            </Button>
            <Button variant="contained" onClick={handleClickOpen}>
                Add New
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                // fullScreen
                fullWidth
                maxWidth='sm'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h3 className="bg-light p-3 rounded-3">Add Course</h3>
                </DialogTitle>
                <DialogContent>
                    <CourseForm />
                </DialogContent>
                <DialogActions>
                    <Button className="btn btn-outline-danger" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CourseDialog;
