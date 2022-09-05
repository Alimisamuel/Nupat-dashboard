import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

export default function PaymentForm(props) {
  const {
    formField: { sponsorName, sponsorContact, entryDate, password }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {/* Payment method */}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={sponsorName.name}
            label={sponsorName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={sponsorContact.name}
            label={sponsorContact.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={entryDate.name}
            label={entryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
