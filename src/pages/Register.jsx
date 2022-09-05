// import { Link as RouterLink } from 'react-router-dom';
// @mui
import React from 'react';
import { styled } from '@mui/material/styles';
// import { Paper } from '@material-ui/core';
import { Card, Container, Typography } from '@mui/material';
// import { ThemeProvider } from '@material-ui/core/styles';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// import { useStyle } from './styles';
// sections
import { RegisterForm } from '../sections/auth/register';
// import AuthSocial from '../sections/auth/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  // const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');




  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {/* {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
               {''} */}
              {/* <Link variant="subtitle2" component={RouterLink} to="/login">
                Login
              </Link> */}
            {/* </Typography>
          )} */}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle style={{width:'40%'}}>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Manage the job more effectively and carefully
            </Typography>
            {/* <img alt="register" src="/static/illustrations/illustration_register.png" /> */}
          </SectionStyle>
        )}

        <Container>
          <>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Create a user account  
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Please make you select the correct user type</Typography>

            {/* <AuthSocial /> */}

            <RegisterForm />
            
        {/* <Paper className={classes.paper}>{children}</Paper> */}
      
          </ContentStyle>
          </>
        </Container>
      </RootStyle>
    </Page>
  );
}
