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

const AdmiForm = () => {
  // const [state, setState] = useState({ date: new Date() });

  const [data, setdata] = useState("");
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== data.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [data.password]);


  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault()
    // --------------------------API----------------------------
    axios.post("", data)
      .then(r => {
        console.log(r.data);
        toast("Registration successfully..")
      })
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  const { name } = data;





  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={8}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={name || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="Student Name "
              validators={['required']}
            />



          </Grid>
          {/* --------------------------------------------------------------------------------- */}

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>


            {/* <RadioGroup row name="gender" sx={{ mb: 2 }} value={gender || ''} onChange={handleChange}>
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
            </RadioGroup> */}


            {/* <TextField
              type="text"
              name="whatsapp"
              value={whatsapp || ''}
              label="Whatsapp Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            /> */}





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

export default AdmiForm;
