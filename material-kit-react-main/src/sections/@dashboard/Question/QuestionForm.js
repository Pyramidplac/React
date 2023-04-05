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

const QuestionForm = () => {
    // const [state, setState] = useState({ date: new Date() });

    const [data, setdata] = useState("");


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

    const { question, answer } = data;
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
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
                            onChange={handleChange}
                            errorMessages={['this field is required']}
                            label="Question"
                            validators={['required']}
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

export default QuestionForm;

