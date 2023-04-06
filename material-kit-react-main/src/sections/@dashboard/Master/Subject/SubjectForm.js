import { Button, Checkbox, FormControlLabel, Grid, Icon, Radio, RadioGroup, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';
import { toast } from 'react-toastify';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const SubjectForm = () => {
  // const [state, setState] = useState({ date: new Date() });

  const [data, setdata] = useState('');

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    // --------------------------API----------------------------
    axios.post('', data).then((r) => {
      console.log(r.data);
      toast('Registration successfully..');
    });
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  const { subject, timeline } = data;
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={8}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Subject Details
            </h4>
            <TextField
              type="text"
              name="subject"
              id="standard-basic"
              value={subject || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Subject "
              validators={['required']}
            />

            <TextField
              type="number"
              name="timeline"
              id="standard-basic"
              value={timeline || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Timeline in hours "
              validators={['required']}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <SendIcon />
          <span> Submit</span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SubjectForm;
