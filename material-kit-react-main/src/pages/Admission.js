import { Helmet } from 'react-helmet-async';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

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

import axios from 'axios';
import AdmiDialog from '../sections/@dashboard/Admission/AdmiDialog';

export default function UserPage() {
  const [rows, setrow] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [columns, setcol] = useState([
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'Student name', width: 130 },
    { field: 'batch', headerName: 'Batch', width: 150 },
    { field: 'medium', headerName: 'Medium', width: 100 },
    { field: 'course', headerName: 'Course', width: 150 },
    { field: 'startD', headerName: 'Start Date', width: 150 },
    { field: 'endD', headerName: 'End Date', width: 150 },
    { field: 'takenby', headerName: 'Taken BY', width: 150 },
    { field: 'rollNO', headerName: 'Roll No', width: 80 },
    { field: 'invoice', headerName: 'Invoice', width: 80 },
    { field: 'admission', headerName: 'Admission Date', width: 150 },
    { field: 'academicYear', headerName: 'Academic Year', width: 130 }
  ]);
  useEffect(() => {
    axios.get('http://localhost:9999/api/admission').then((r) => {
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
            Admission
          </Typography>
          <AdmiDialog changeEdit={setEdit} />
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
