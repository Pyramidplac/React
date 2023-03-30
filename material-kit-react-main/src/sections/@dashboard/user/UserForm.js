import { Button, Checkbox, FormControlLabel, Grid, Icon, Radio, RadioGroup, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const UserForm = () => {
  const [state, setState] = useState({ date: new Date() });

  const handleSubmit = (event) => {
    console.log(state);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { username, firstName, creditCard, mobile, gender, email } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Details
            </h4>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Username (Min length 4, Max length 9)"
              validators={['required', 'minStringLength: 4', 'maxStringLength: 9']}
            />

            <TextField
              type="text"
              name="firstName"
              label="First Name"
              onChange={handleChange}
              value={firstName || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              value={email || ''}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <TextField
              sx={{ mb: 4 }}
              type="number"
              name="creditCard"
              label="Credit Card"
              onChange={handleChange}
              value={creditCard || ''}
              errorMessages={['this field is required']}
              validators={['required', 'minStringLength:16', 'maxStringLength: 16']}
            />
            <RadioGroup row name="gender" sx={{ mb: 2 }} value={gender || ''} onChange={handleChange}>
              <FormControlLabel value="Male" label="Male" labelPlacement="end" control={<Radio color="secondary" />} />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Contact Details
            </h4>
            <TextField
              type="text"
              name="mobile"
              value={mobile || ''}
              label="Mobile Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <FormControlLabel control={<Checkbox />} label="I have read and agree to the terms of service." />
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

export default UserForm;
