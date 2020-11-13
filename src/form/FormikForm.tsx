import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import style from './Form.module.css'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Button, Grid} from '@material-ui/core';
import {useFormik} from 'formik';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(3),
        },
        withoutLabel: {
            marginTop: theme.spacing(10),
        },
        textField: {
            width: '25ch',
        },
    }),
);

type FormikErrorType = {
    name?: string;
    email?: string;
    text?: string
}

export const Form = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Enter the data';
            } else if (values.name.length <= 2) {
                errors.name = 'name must be more than 2 characters';
            }
            if (!values.email) {
                errors.email = 'Enter the data';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {

            formik.resetForm();
            console.log(values)

        },
    });

    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <div className={style.formContainer}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.name}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                                <OutlinedInput
                                    label="Name"
                                    labelWidth={60}
                                    {...formik.getFieldProps('name')}
                                />
                            </FormControl>

                            {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                        </div>


                        <div className={style.email}>
                            <FormControl fullWidth className={style.email} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    label="Email"
                                    labelWidth={60}
                                    {...formik.getFieldProps('email')}
                                />
                            </FormControl>
                            {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        </div>


                        <TextareaAutosize className={style.text}
                                          aria-label="maximum height"
                                          rowsMin={5}
                                          {...formik.getFieldProps('text')}
                                          placeholder="Your message"/>
                        <div className={style.buttonSend}>
                            <Button className={style.button} type={'submit'} variant={'contained'}
                                    color={'primary'}>Send</Button>
                        </div>

                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

