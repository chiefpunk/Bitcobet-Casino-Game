import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Logo from '../../components/Logo'
import { useStyles } from './../../theme/styles';
import { Formik } from "formik";
import SingUpForm from "./form";
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: Yup.string("").min(8, "Password must contain at least 8 characters").required("Enter your password"),
  confirmPassword: Yup.string("Enter your password").required("Confrim your password").oneOf([Yup.ref("password")], "Password does not match")
})

export default function SignUpDialog(props) {
  const classes = useStyles()
  const values = {name: "", email: "", confirmPassword: "", password: ""};
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}><h1>Register</h1></DialogTitle>
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Logo width="200px" className={classes.logo}></Logo>
              {/* Form */}
              <Formik render={props=> <SingUpForm {...props}></SingUpForm>} initialValues = {values} validationSchema={validationSchema}></Formik>
            </div>
          </Container>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  )
}
