  
import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import MainLayout from './layouts';
// import 'src/mixins/chartjs';
import theme from './theme';
// import routes from 'src/routes';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
    </ThemeProvider>
  );
};

export default App;