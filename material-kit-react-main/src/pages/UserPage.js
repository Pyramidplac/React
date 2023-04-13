import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components

import UserDialog from '../sections/@dashboard/user/UserDialog';

export default function UserPage() {
  const [rows, setrow] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [columns, setcol] = useState([
    // { field: '_id', headerName: 'First name', width: 130 },
    { field: 'name', headerName: 'Student name', width: 130 },
    { field: 'studentmobile', headerName: 'Mobile No', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'whatsapp', headerName: 'Whatsapp No', width: 150 },
    { field: 'education', headerName: 'Education', width: 150 },
    { field: 'enquirydate', headerName: 'Enquiry Date', width: 200 },
    { field: 'takenby', headerName: 'Taken By', width: 200 },
    { field: 'course', headerName: 'Course', width: 200 },
    { field: 'leadsource', headerName: 'Lead Source', width: 150 },

  ]);


  useEffect(() => {
    axios.get('http://localhost:9999/api/enquiry').then((r) => {
      const d = r.data.map((value, index) => {
        value.id = index + 1;
        return value;
      });
      setrow(d);
      console.log(r);
    });
  }, [edit]);

  return (
    <>
      <Helmet>
        <title> Shital Academy Vadodara </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Student/Trainee/Lead Info
          </Typography>
          <UserDialog changeEdit={setEdit} />
        </Stack>
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
