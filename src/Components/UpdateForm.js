import React from 'react';
import { Card, CardContent, Dialog, Grid, Button, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field } from "formik"
import { TextField } from 'formik-material-ui';
import { grey, green } from '@mui/material/colors';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUserService } from '../Services/Users/userActions';

// const useStyle = makeStyles((theme) => {

// })

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
}


let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
})

const UpdateForm = ({ modal, setModal, user }) => {
const dispatch = useDispatch();
const onSubmit = (values) => {
    const res = {firstName: values.firstName, lastName: values.lastName}
    console.log("Submit",res);
    dispatch(updateUserService(res));
    }
    return (
        <Dialog open={modal} onClose={() => setModal(false)} sx={{}}>
            <Grid container fullWidth>
                <Grid item fullWidth>
                    <Card>
                        <div className='form-header'><h4>Update User {user.id}</h4><CloseIcon onClick={() => setModal(false)} /></div>
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            {({ values }) => {
                                return (
                                    <Form>
                                        <CardContent>
                                            <Grid item container spacing={1} justify="center" sx={{ width: 300, fontSize: 11 }}>
                                                <Grid item md={12}>
                                                    <Field
                                                        component={TextField}
                                                        label="First Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="firstName"
                                                        value={values.firstName}
                                                        size="small"
                                                        margin="normal"
                                                        inputProps={{ style: { fontSize: '12px' } }} // font size of input text
                                                        InputLabelProps={{ style: { fontSize: '12px' } }}
                                                    />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <Field
                                                        component={TextField}
                                                        label="Last Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="lastName"
                                                        value={values.lastName}
                                                        size="small"
                                                        margin="normal"
                                                        inputProps={{ style: { fontSize: '12px' } }} // font size of input text
                                                        InputLabelProps={{ style: { fontSize: '12px' } }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions sx={{ display: "inline-flex" }}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                type="Submit"
                                                onClick={(e)=>setModal(false)}
                                                >
                                                Update User
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="button"
                                                onClick={(e)=>setModal(false)}
                                                >
                                                Cancel
                                            </Button>
                                        </CardActions>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </Card>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default UpdateForm;