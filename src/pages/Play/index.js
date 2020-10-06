import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Chathistory from '../../containers/ChatHistory'
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    flexGrow: 1,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    backgroundColor: 'lightgrey',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}))
export default function PlayPage(props) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item container spacing={3} direction="column" xs>
            <Grid item >
              <Paper className={classes.paper}>Game</Paper>
            </Grid>
            <Grid item>
              <Chathistory></Chathistory>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Betting Pool</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
