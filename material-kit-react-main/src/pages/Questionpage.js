import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// @mui
import {
  styled,
  Grid,
  Box,
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

import { Helmet } from 'react-helmet-async';
import QuestionDialog from '../sections/@dashboard/Question/QuestionDialog';

const Questionpage = () => {
  const [rows, setrow] = useState([]);
  const [columns, setcol] = useState([
    { field: 'id', headerName: 'ID', width: 10 },
    { field: 'name', headerName: 'Question', width: 350 },
    { field: 'username', headerName: 'Answer', width: 350 },
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Question & Answer
        </Typography>
        <QuestionDialog />
      </Stack>
      <Card
        style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
        sx={{ boxShadow: 3, borderRadius: '16px' }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
      </Card>
    </>
  );
};
export default Questionpage;
