import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Header from '../containers/Header/index';
import CustomChatbot from '../components/Chatbot';
import PlayPage from '../pages/Play';

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
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Route path="/" exact component={PlayPage}></Route>
          </div>
        </div>
      </div>
      <CustomChatbot eventHandler={clickEventHandler} />
    </div>
  );

};

export default MainLayout;