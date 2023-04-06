// import {
//   Autocomplete,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Icon,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   styled,
// } from '@mui/material';
// import { useEffect, useState } from 'react';
// import SendIcon from '@mui/icons-material/Send';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import CheckIcon from '@mui/icons-material/Check';
// import CancelIcon from '@mui/icons-material/Cancel';

// const TextField = styled(TextValidator)(() => ({
//   width: '100%',
//   marginBottom: '16px',
// }));

// const Course = [
//   'Basic Grammar-5000',
//   'CCC-4000',
//   'CCC With Advance Tally-12500',
//   'Data Science (Python and ML)-35000',
//   'Full Stack Development-31000',
//   'Full Stack Development (MERN)-40000',
//   'IELTS-10000',
//   'IELTS Advance-17000',
//   'Programming C & C++-10000',
//   'Programming in C-5000',
//   'Programming in C++-5000',
//   'Python-10000',
//   'Smart Pro. NET-25000',
//   'Spoken-5000',
//   'Spoken English-10000',
//   'Spoken English (8500) -8500',
//   'Spoken English (9000)-9000',
//   'Spoken+CCC-14000',
//   'Spoken+CCC+ Tally-20500',
//   'Spoken+ Tally-16500',
//   'Tally ERP 9-6500',
//   'Tally Prime-9000',
//   'Tally+CCC-10500',
// ];

// const UserForm = () => {
//   // const [state, setState] = useState({ date: new Date() });

//   const [data, setdata] = useState('');

//   useEffect(() => {
//     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//       if (value !== data.password) return false;

//       return true;
//     });
//     return () => ValidatorForm.removeValidationRule('isPasswordMatch');
//   }, [data.password]);

//   const handleChange = (e) => {
//     e.persist();
//     // setdata({ ...data, [e.target.name]: e.target.value });
//     if (e.target.name === 'course') {
//       const mydata = data.hobbies;

//       if (e.target.select) {
//         mydata.push(e.target.value);
//         setdata({ ...data, hobbies: mydata });
//       } else {
//         const mydata1 = mydata.filter((val) => {
//           return val !== e.target.value;
//         });
//         setdata({ ...data, hobbies: mydata1 });
//       }
//     } else {
//       setdata({ ...data, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = (e) => {
//     console.log(data);
//     e.preventDefault();
//     // --------------------------API----------------------------
//     axios.post('', data).then((r) => {
//       console.log(r.data);
//       toast('Registration successfully..');
//     });
//   };

//   // const handleDateChange = (date) => setState({ ...state, date });

//   const {
//     name,
//     parentsname,
//     studentmobile,
//     parentmobile,
//     email,
//     birthdate,
//     gender,
//     whatsapp,
//     education,
//     address,
//     city,
//     enquirydate,
//     takenby,
//     course = [],
//     leadsource,
//   } = data;

//   return (
//     <div>
//       <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
//         <Grid container spacing={8}>
//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
//               Student Details
//             </h4>
//             <TextField
//               type="text"
//               name="name"
//               id="standard-basic"
//               value={name || ''}
//               onChange={handleChange}
//               errorMessages={['this field is required']}
//               label="Student Name "
//               validators={['required']}
//             />

//             <TextField
//               type="text"
//               name="parentsname"
//               label="Parents Name"
//               onChange={handleChange}
//               value={parentsname || ''}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />
//             <TextField
//               name="birthdate"
//               label="Birth Date"
//               InputLabelProps={{ shrink: true }}
//               type="date"
//               value={birthdate || ''}
//               onChange={handleChange}
//               errorMessages={['this field is required']}
//             />
//             <TextField
//               type="text"
//               name="education"
//               value={education || ''}
//               label="Education"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />
//             <RadioGroup row name="gender" sx={{ mb: 2 }} value={gender || ''} onChange={handleChange}>
//               <FormControlLabel value="Male" label="Male" labelPlacement="end" control={<Radio color="secondary" />} />

//               <FormControlLabel
//                 value="Female"
//                 label="Female"
//                 labelPlacement="end"
//                 control={<Radio color="secondary" />}
//               />

//               <FormControlLabel
//                 value="Others"
//                 label="Others"
//                 labelPlacement="end"
//                 control={<Radio color="secondary" />}
//               />
//             </RadioGroup>
//           </Grid>
//           {/* ================================================================================== */}

//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
//               Student Contact Details
//             </h4>
//             <TextField
//               type="email"
//               name="email"
//               label="Email"
//               value={email || ''}
//               onChange={handleChange}
//               validators={['required', 'isEmail']}
//               errorMessages={['this field is required', 'email is not valid']}
//             />

//             <TextField
//               type="text"
//               name="studentmobile"
//               value={studentmobile || ''}
//               label="Student Mobile Nubmer"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />
//             <TextField
//               type="text"
//               name="parentmobile"
//               value={parentmobile || ''}
//               label="Parent Mobile Nubmer"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />
//             <TextField
//               type="text"
//               name="whatsapp"
//               value={whatsapp || ''}
//               label="Whatsapp Nubmer"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />

//             <TextField
//               placeholder="Address"
//               multiline
//               // rows={2}
//               // maxRows={4}
//               name="address"
//               value={address || ''}
//               label="Address"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />
//             <TextField
//               type="text"
//               name="city"
//               value={city || ''}
//               label="City"
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />

//             {/* <FormControlLabel control={<Checkbox />} label="I have read and agree to the terms of service." /> */}
//           </Grid>

//           {/* ================================================================================== */}

//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
//               Enquiry Details
//             </h4>
//             <TextField
//               name="enquirydate"
//               label="Enquiry Date"
//               InputLabelProps={{ shrink: true }}
//               type="date"
//               value={enquirydate || ''}
//               onChange={handleChange}
//               validators={['required']}
//               errorMessages={['this field is required']}
//             />

//             <TextField
//               label="Taken By"
//               select
//               variant="filled"
//               value={takenby || ''}
//               helperText="Please Select your taken BY"
//               onChange={handleChange}
//               name="takenby"
//               SelectProps={{
//                 native: 'true',
//               }}
//             >
//               <option />
//               <option>Counsellor Vadodara</option>
//               <option>Counsellor Aanand</option>
//               <option>Counsellor Ahmedabad</option>
//               <option>Counsellor Bhavnagar</option>
//             </TextField>

//             <TextField
//               label="Lead Source "
//               select
//               value={leadsource || ''}
//               variant="filled"
//               helperText="Please Select your lead source"
//               onChange={handleChange}
//               name="leadsource"
//               SelectProps={{
//                 native: 'true',
//               }}
//             >
//               <option />
//               <option>Discount Coupon</option>
//               <option>Facebook</option>
//               <option>Google</option>
//               <option>Just Dial</option>
//               <option>News Paper</option>
//               <option>Reference</option>
//               <option>Other</option>
//             </TextField>

//             <Autocomplete
//               multiple
//               id="tags-standard"
//               helperText="Please Select your lead source"
//               options={Course}
//               getOptionLabel={(option) => option}
//               disableCloseOnSelect
//               renderOption={(props, option, { selected }) => (
//                 <MenuItem key={option} value={option} sx={{ justifyContent: 'space-between' }} {...props}>
//                   {option}
//                   {selected ? <CheckIcon color="info" /> : null}
//                 </MenuItem>
//               )}
//               renderInput={(params) => <TextField {...params} variant="outlined" />}
//             />
//           </Grid>
//         </Grid>




//         <Button color="error" className='mx-2' variant="contained" type="submit" onClick={() => {
//           setdata('');
//         }}>
//           <DeleteIcon />
//           <span> Clear</span>
//         </Button>


//         <Button color="primary" className='mx-2' variant="contained" type="submit"    >
//           <SendIcon />
//           <span> Submit</span>
//         </Button>


//       </ValidatorForm>
//     </div>
//   );
// };

// export default UserForm;



import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  MenuItem,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';
import { toast } from 'react-toastify';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const Course = [
  'Basic Grammar-5000',
  'CCC-4000',
  'CCC With Advance Tally-12500',
  'Data Science (Python and ML)-35000',
  'Full Stack Development-31000',
  'Full Stack Development (MERN)-40000',
  'IELTS-10000',
  'IELTS Advance-17000',
  'Programming C & C++-10000',
  'Programming in C-5000',
  'Programming in C++-5000',
  'Python-10000',
  'Smart Pro. NET-25000',
  'Spoken-5000',
  'Spoken English-10000',
  'Spoken English (8500) -8500',
  'Spoken English (9000)-9000',
  'Spoken+CCC-14000',
  'Spoken+CCC+ Tally-20500',
  'Spoken+ Tally-16500',
  'Tally ERP 9-6500',
  'Tally Prime-9000',
  'Tally+CCC-10500',
];

const UserForm = () => {
  // const [state, setState] = useState({ date: new Date() });

  const [data, setdata] = useState({
    name: "",
    parentsname: "",
    studentmobile: "",
    parentmobile: "",
    email: "",
    birthdate: "",
    gender: "",
    whatsapp: "",
    education: "",
    address: "",
    city: "",
    enquirydate: "",
    takenby: "",
    course: [],
    leadsource: "",
  });


  const handleChange = (e) => {
    if (e.target.name === "course") {
      const mydata = data.course;
      if (e.target.selected) {
        mydata.push(e.target.value)
        setdata({ ...data, course: mydata })
      } else {
        const mydata1 = mydata.filter((val) => {
          return (
            val !== e.target.value
          )
        })
        setdata({ ...data, course: mydata1 })
      }
    } else {
      setdata({ ...data, [e.target.name]: e.target.value })
    }
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

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
        <Grid container spacing={8}>
          {/* <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Details
            </h4>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={data.name || ''}
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
              value={data.parentsname || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              name="birthdate"
              label="Birth Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.birthdate || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="education"
              value={data.education || ''}
              label="Education"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <RadioGroup row name="gender" sx={{ mb: 2 }} value={data.gender || ''} onChange={handleChange}>
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
          </Grid> */}
          {/* ================================================================================== */}

          {/* <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Student Contact Details
            </h4>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={data.email || ''}
              onChange={handleChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <TextField
              type="text"
              name="studentmobile"
              value={data.studentmobile || ''}
              label="Student Mobile Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="parentmobile"
              value={data.parentmobile || ''}
              label="Parent Mobile Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="text"
              name="whatsapp"
              value={data.whatsapp || ''}
              label="Whatsapp Nubmer"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            {/* <TextField
              placeholder="Address"
              multiline
              name="address"
              value={data.address || ''}
              label="Address"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            /> */}

            <TextareaAutosize
              name="address"
              aria-label="empty textarea"
              onChange={handleChange}
              validators={['required']}
              value={address || ''}
              minRows={3}
              placeholder="Address..."
              style={{ width: '100%' }}
            />
            <TextField
              type="text"
              name="city"
              value={data.city || ''}
              label="City"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid> */}

          {/* ================================================================================== */}

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
              Enquiry Details
            </h4>
            <TextField
              name="enquirydate"
              label="Enquiry Date"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={data.enquirydate || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <TextField
              label="Taken By"
              select
              variant="filled"
              value={data.takenby || ''}
              helperText="Please Select your taken BY"
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
              value={data.leadsource || ''}
              variant="filled"
              helperText="Please Select your lead source"
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

            <Autocomplete
              name="course"
              multiple
              onChange={handleChange}
              id="tags-standard"
              options={Course}
              getOptionLabel={(options) => options}
              disableCloseOnSelect
              renderOption={(props, option, { selected }) => (
                <MenuItem key={option} value={option} sx={{ justifyContent: 'space-between' }} {...props}>
                  {option}
                  {selected ? <CheckIcon color="info" /> : null}
                </MenuItem>
              )}
              renderInput={(params) => <TextField {...params} variant="outlined" name="course" label='Course'
                value={data.course || ''} />}
            />
          </Grid>
        </Grid>




        <Button color="error" className='mx-2' variant="contained" type="submit" onClick={() => {
          setdata('');
        }}>
          <DeleteIcon />
          <span> Clear</span>
        </Button>


        <Button color="primary" className='mx-2' variant="contained" type="submit"    >
          <SendIcon />
          <span> Submit</span>
        </Button>


      </ValidatorForm>
    </div>
  );
};

export default UserForm;
