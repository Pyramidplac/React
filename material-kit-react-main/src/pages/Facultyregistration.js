import * as React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import axios from 'axios';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import {
    Card,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// components

import FacultyregiDialog from '../sections/@dashboard/Master/Facultyregistration/FacultyregiDialog';
import FacultyregistrationEditForm from '../sections/@dashboard/Master/Facultyregistration/FacultyregistrationEditForm';

export default function Facultyregistration() {
    const [rows, setRows] = useState([]);
    const [edit, setEdit] = useState(-1);
    // ========================================================
    const [open, setOpen] = React.useState(false);
    const handleEditClick = (id) => () => {
        setOpen(true);
    };
    const handleEditClose = () => {
        setOpen(false);
    };
    // ========================================================



    const handleDeleteClick = (row) => () => {
        Swal.fire({
            title: 'Do you want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                axios.delete(`http://localhost:9999/api/fees/${row.row._id}`).then((r) => {
                    setRows(rows.filter((rowd) => rowd.id !== row.id));
                });
            }
        });
    };



    const columns = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'name', headerName: 'Subject', width: 350 },
        { field: 'username', headerName: 'Timeline', width: 350 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: (row) => {

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(row)}
                        color="inherit"
                    />,
                    <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(row)} color="inherit" />,
                ];
            },
        },
    ];



    useEffect(() => {
        axios.get('').then((r) => {
            const d = r.data.map((value, index) => {
                value.id = index + 1;
                return value;
            });
            setRows(d);
        });
    }, [edit]);

    return (
        <>


            <Container className="mt-4">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Faculty Registration Form
                    </Typography>
                    <FacultyregiDialog />
                </Stack>
                <Dialog
                    open={open}
                    onClose={handleEditClose}
                    // fullScreen
                    fullWidth
                    maxWidth="sm"
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{'Question & Answer'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when
                            no apps are running.
                        </DialogContentText>
                        <FacultyregistrationEditForm changeEdit={setEdit} handleEditClose={handleEditClose} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={handleEditClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
                <Card
                    style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
                    sx={{ boxShadow: 3, borderRadius: '16px' }}
                >
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
                </Card>
            </Container>
        </>
    );
}