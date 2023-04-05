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

const CourseForm = () => {
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

    const { course, coursefees, type } = data;
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={8}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
                            Course Details
                        </h4>
                        <TextField
                            type="text"
                            name="course"
                            id="standard-basic"
                            value={course || ''}
                            onChange={handleChange}
                            errorMessages={['this field is required']}
                            label="Course* "
                            validators={['required']}
                        />


                        <TextField
                            type="text"
                            name="coursefees"
                            id="standard-basic"
                            value={coursefees || ''}
                            onChange={handleChange}
                            errorMessages={['this field is required']}
                            label="CourseFees Amount"
                            validators={['required']}
                        />

                        <TextField
                            label="Type"
                            select
                            variant="filled"
                            value={type || ''}
                            onChange={handleChange}
                            name="type"
                            SelectProps={{
                                native: 'true',
                            }}
                        >
                            <option />
                            <option>Onsite (Learning in classroom) </option>
                            <option>Online (Online Learning)</option>
                        </TextField>


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

export default CourseForm;

