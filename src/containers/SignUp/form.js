import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import { useStyles } from '../../theme/styles'

export default function SignUpForm(props) {
  const classes = useStyles()
  const {
      values: { name, email, password, confirmPassword},
      errors,
      touched,
      handleSubmit,
      handleChange,
      isValid,
      setFieldTouched
  } = props;
  const change = (name, e) =>{
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
  }
  return (
    <form className={classes.form} noValidate onSubmit={()=>{alert("submitted")}}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            autoComplete="name"
            name="name"
            helperText={touched.name ? errors.name : ""}
            error = {touched.name && Boolean(errors.name)}
            value = {name}
            onChange = {change.bind(null, "name")}
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            helperText={touched.email ? errors.email : ""}
            error = {touched.email && Boolean(errors.email)}
            value = {email}
            onChange = {change.bind(null, "email")}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            helperText={touched.password ? errors.password : ""}
            error = {touched.password && Boolean(errors.password)}
            value = {password}
            onChange = {change.bind(null, "password")}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            helperText={touched.confirmPassword ? errors.confirmPassword : ""}
            error = {touched.confirmPassword && Boolean(errors.confirmPassword)}
            value = {confirmPassword}
            onChange = {change.bind(null, "confirmPassword")}
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}>
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}
