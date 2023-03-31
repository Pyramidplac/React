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

const UserForm = () => {
  // const [state, setState] = useState({ date: new Date() });

  const [data, setdata] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== data.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [data.password]);

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

  const {
    name,
    parentsname,
    studentmobile,
    parentmobile,
    email,
    birthdate,
    gender,
    whatsapp,
    education,
    address,
    city,
    enquirydate,
    takenby,
    course,
    fees,
    leadsource,
  } = data;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={8}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Details
            </h4>
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

            <TextField
              type="text"
              name="parentsname"
              label="Parents Name"
              onChange={handleChange}
              value={parentsname || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="date"
              name="birthdate"
              label="Birth Date"
              value={birthdate || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="education"
              value={education || ''}
              label="Education"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
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
          {/* ================================================================================== */}

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Contact Details
            </h4>
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
              type="text"
              name="studentmobile"
              value={studentmobile || ''}
              label="Student Mobile Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="parentmobile"
              value={parentmobile || ''}
              label="Parent Mobile Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="whatsapp"
              value={whatsapp || ''}
              label="Whatsapp Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <TextField
              placeholder="Address"
              multiline
              // rows={2}
              // maxRows={4}
              name="address"
              value={address || ''}
              label="Address"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="city"
              value={city || ''}
              label="City"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            {/* <FormControlLabel control={<Checkbox />} label="I have read and agree to the terms of service." /> */}
          </Grid>

          {/* ================================================================================== */}

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Enquiry Details
            </h4>

            <TextField
              label="Taken By"
              select
              variant="filled"
              value={takenby || ''}
              helperText="Please Select your city"
              onChange={handleChange}
              name="takenby"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>Counsellor Vadodara</option>
              <option>Counsellor Aanand</option>
              <option>Counsellor Ahmedabad</option>
              <option>Counsellor Bhavnagar</option>
            </TextField>

            <TextField
              label="Lead Source "
              select
              value={leadsource || ''}
              variant="filled"
              helperText="Please Select your city"
              onChange={handleChange}
              name="leadsource"
              SelectProps={{
                native: 'true',
              }}
            >
              <option />
              <option>Discount Coupon</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Just Dial</option>
              <option>News Paper</option>
              <option>Reference</option>
              <option>Other</option>
            </TextField>
<<<<<<< HEAD
=======


            <TextField
              type="date"
              name="enquirydate"
              label="Enquiry Date"
              value={enquirydate || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

>>>>>>> 737b86ae6eb888aa42261123544a9c249cdcd930
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
