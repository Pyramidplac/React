// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// // @mui
// import {
//   styled,
//   Grid,
//   Box,
//   Card,
//   Table,
//   Stack,
//   Paper,
//   Avatar,
//   Button,
//   Popover,
//   Checkbox,
//   TableRow,
//   MenuItem,
//   TableBody,
//   TableCell,
//   Container,
//   Typography,
//   IconButton,
//   TableContainer,
//   TablePagination,
// } from '@mui/material';
// // components

// import { Helmet } from 'react-helmet-async';
// import QuestionDialog from '../sections/@dashboard/Question/QuestionDialog';

// const Questionpage = () => {
//   const [rows, setrow] = useState([]);
//   const [columns, setcol] = useState([
//     { field: 'id', headerName: 'ID', width: 10 },
//     { field: 'question', headerName: 'Question', width: 350 },
//     { field: 'answer', headerName: 'Answer', width: 350 },
//   ]);
//   useEffect(() => {
//     axios.get("http://localhost:2103/api/shital")
//       .then((r) => {
//         const d = r.data.map((value, index) => {

//           value.id = index + 1;
//           return value;
//         })
//         setrow(d)
//         console.log(r);
//       })
//   }, []);
//   return (
//     <>
//       <Helmet>
//         <title> Shital Academy Vadodara </title>
//       </Helmet>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//         <Typography variant="h4" gutterBottom>
//           Question & Answer
//         </Typography>
//         <QuestionDialog />
//       </Stack>
//       <Card
//         style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
//         sx={{ boxShadow: 3, borderRadius: '16px' }}
//       >
//         <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />

//       </Card>
//     </>
//   );
// };
// export default Questionpage;


import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import axios from 'axios';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';
import { Card, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import QuestionDialog from '../sections/@dashboard/Question/QuestionDialog'



function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function Questionpage() {
  const [rows, setRows] = React.useState('');
  const [rowModesModel, setRowModesModel] = React.useState({});


  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };



  useEffect(() => {
    axios.get("http://localhost:2103/api/shital")
      .then((r) => {
        const d = r.data.map((value, index) => {

          value.id = index + 1;
          return value;
        })
        setRows(d)
        console.log(r);
      })
  }, []);

  const columns = [
    { field: 'question', headerName: 'Question', width: 10 },
    { field: 'answer', headerName: 'Answer', width: 130 },



    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Question & Answer
        </Typography>
        <QuestionDialog />
      </Stack>

      <Box
        sx={{
          height: 500,
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >


        <Card
          style={{ height: 500, width: '100%', backgroundColor: '#ffffff' }}
          sx={{ boxShadow: 3, borderRadius: '16px' }}
        >
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[10]} checkboxSelection />
        </Card>
      </Box>
    </>
  );
}