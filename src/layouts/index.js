import React from 'react';
// import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import CustomChatbot from '../components/chatbot';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const MainLayout = () => {
  const classes = useStyles();
  const clickEventHandler =(res)=>{
    console.log(res);
  }
  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <h1>Hi This is Maksim Damaskin</h1>
          </div>
        </div>
      </div>
      <CustomChatbot eventHandler={clickEventHandler} />
    </div>
  );

};

export default MainLayout;