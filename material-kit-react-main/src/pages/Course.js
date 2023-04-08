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

import CourseDialog from '../sections/@dashboard/Master/Course/CourseDialog';

export default function Course() {
  const [rows, setrow] = useState([]);
  const [columns, setcol] = useState([
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'Course', width: 350 },
    { field: 'username', headerName: 'Course Fees', width: 200 },
    { field: 'email', headerName: 'Course Type', width: 200 },
  ]);
  useEffect(() => {
    fetch('http://localhost:2103/users')
      .then((y) => y.json())
      .then((y) => setrow(y.data));
  }, []);

  return (
    <>
      <Helmet>
        <title> Shital Academy Vadodara </title>
      </Helmet>

      <Container className="mt-4">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Course
          </Typography>
          <CourseDialog />
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
