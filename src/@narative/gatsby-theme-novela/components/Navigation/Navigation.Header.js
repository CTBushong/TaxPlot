import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme, useStyles} from '../../../../styling/muitheme'

import { navigate } from 'gatsby';

import AuthNav from '../../../../components/AuthNav'


function NavigationHeader() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
          <Toolbar>
            
              <Typography 
                variant="h2" 
                className={classes.title}
                onClick={() => navigate('/')}
                >
                TaxPlot
              </Typography>
            
            <AuthNav /> 
          </Toolbar>
        </AppBar>
      </ThemeProvider>  
  );
}

export default NavigationHeader;