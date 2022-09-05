import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { sponsorName, sponsorContact, entryDate } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Sponsor details
      </Typography>
      <Grid container>
        <React.Fragment>
          {/* <Grid item xs={6}>
            <Typography gutterBottom>Card type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>Visa</Typography>
          </Grid> */}
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Sponsor Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{sponsorName}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Sponsor number</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{sponsorContact}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>Entry Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {moment(entryDate).format('MM/YY')}
            </Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}

export default PaymentDetails;
