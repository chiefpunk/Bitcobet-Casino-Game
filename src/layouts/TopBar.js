import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import Logo from '../components/Logo'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SignInDialog from "../components/SignIn"
import SignUpDialog from "../components/SignUp"

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  toolbar: {
    height: 64,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  leftMenu: {
    flexGrow: 1,
    marginLeft: theme.spacing(6),
  },
}))

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles()
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const handleOpenSignIn = () => {
        setOpenSignIn(true);
    }
    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    }
    const handleOpenSignUp = () => {
        setOpenSignUp(true);
    }
    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    }
  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo height="35" />
        </RouterLink>
        <Grid className={classes.leftMenu}>
          <Button color="inherit" className={classes.menuButton}>
            Crash Game
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Bonuses
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            VIP
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Support
          </Button>
        </Grid>
        <Button color="inherit" onClick={handleOpenSignIn}>Login</Button>
        <Button color="inherit" onClick={handleOpenSignUp}>Sign Up</Button>
        <SignInDialog open={openSignIn} handleClose={handleCloseSignIn}></SignInDialog>
        <SignUpDialog open={openSignUp} handleClose={handleCloseSignUp}></SignUpDialog>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
}

export default TopBar
