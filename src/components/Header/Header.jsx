import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
      {/* <img style={{height: '5rem'}} src={require('.../')}  alt="logo" /> */}
        <Typography variant="h6" color="inherit" noWrap>
          Nupat - Admin create account
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
