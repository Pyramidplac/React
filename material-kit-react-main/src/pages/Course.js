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
import axios from 'axios';

import CourseDialog from '../sections/@dashboard/Master/Course/CourseDialog';

export default function Course() {
  const [rows, setrow] = useState([]);
  const [edit, setEdit] = useState(-1);
  const [columns, setcol] = useState([
    { field: 'course', headerName: 'Course Name', width: 200 },
    { field: 'coursefees', headerName: 'Course Fees', width: 200 },
    { field: 'year', headerName: 'Academic Year', width: 200 },
    { field: 'type', headerName: 'Course Type', width: 200 },
  ]);

  useEffect(() => {
    axios.get('http://localhost:9999/api/course').then((r) => {
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

      <Container className="mt-4">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Course
          </Typography>
          <CourseDialog changeEdit={setEdit} />
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
