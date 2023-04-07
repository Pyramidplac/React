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
  const [columns, setcol] = useState([
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
    { field: '', headerName: 'delete', width: 200 },
  ]);
  useEffect(() => {
    fetch('http://localhost:8008/users')
      .then((y) => y.json())
      .then((y) => setrow(y.data));
  }, []);

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
          <UserDialog />
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
