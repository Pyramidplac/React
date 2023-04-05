import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';

const QuestionForm = () => {
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

    const { question, answer } = data;
    return (
        <div>
            <Box
                sx={{ boxShadow: 3 }}
                onSubmit={handleSubmit}
                style={{ backgroundColor: '#ffffff' }}
                className="p-4 rounded-3"
            >
                <ValidatorForm onError={() => null} autocomplete="off">


                    <Grid container spacing={8}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                            <h4 className=" p-2 rounded-2 mb-3" style={{ backgroundColor: '#e8f0fe' }}>
                                Question & Answer
                            </h4>
                            <TextField
                                type="text"
                                name="question"
                                id="standard-basic"
                                value={question || ''}
                                fullWidth
                                onChange={handleChange}
                                errorMessages={['this field is required']}
                                label="Question "
                                validators={['required']}
                                helperText="Enter Your Question"
                            />
                            <TextField
                                type="text"
                                name="answer"
                                id="standard-basic"
                                value={answer || ''}
                                onChange={handleChange}
                                errorMessages={['this field is required']}
                                label="Answer"
                                validators={['required']}
                                helperText="Enter Your Answer"
                                fullWidth
                            />
                        </Grid>
                    </Grid>


                    <Button color="primary" variant="contained" type="submit">
                        <SendIcon />
                        <span> Submit</span>
                    </Button>
                </ValidatorForm>
            </Box>
        </div>
    );
}

export default QuestionForm;
