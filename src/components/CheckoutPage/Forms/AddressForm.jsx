import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const cities = [
  {
    value: 'Instructor',
    label: 'Instructor'
  },
  {
    value: 'Student',
    label: 'Student'
  }
];

const states = [
  {
    value: 'Abia State',
    label: 'Abia State'
  },
  {
    value: 'Adamawa',
    label: 'Adamawa'
  },
  {
    value: 'Akwa Ibom',
    label: 'Akwa Ibom'
  },
  {
    value: 'Anambra',
    label: 'Anambra'
  },
  {
    value: 'Bauchi',
    label: 'Bauchi'
  },
  {
    value: 'Bayelsa',
    label: 'Bayelsa'
  },
  {
    value: 'Benue',
    label: 'Benue'
  },
  {
    value: 'Borno',
    label: 'Borno'
  },
  {
    value: 'Cross River',
    label: 'Cross River'
  },
  {
    value: 'Delta',
    label: 'Delta'
  },
  {
    value: 'Ebonyi',
    label: 'Ebonyi'
  },
  {
    value: 'Edo',
    label: 'Edo'
  },
  {
    value: 'Ekiti',
    label: 'Ekiti'
  },
  {
    value: 'Enugu',
    label: 'Enugu'
  },
  {
    value: 'Gombe',
    label: 'Gombe'
  },
  {
    value: 'Imo',
    label: 'Imo'
  },
  {
    value: 'Jigawa',
    label: 'Jigawa'
  },
  {
    value: 'Kaduna',
    label: 'Kaduna'
  },
  {
    value: 'Kano',
    label: 'Kano'
  },
  {
    value: 'Lagos',
    label: 'Lagos'
  },
  {
    value: 'Kastina',
    label: 'Kastina'
  },
  {
    value: 'Kebbi',
    label: 'Kebbi'
  },
  {
    value: 'Kogi',
    label: 'Kogi'
  },
  {
    value: 'Kwara',
    label: 'Kwara'
  },
  {
    value: 'Nasarawa',
    label: 'Nasarawa'
  },
  {
    value: 'Niger',
    label: 'Niger'
  },
  {
    value: 'Ogun',
    label: 'Ogun'
  },
  {
    value: 'Ondo',
    label: 'Ondo'
  },
  {
    value: 'Osun',
    label: 'Osun'
  },
  {
    value: 'Oyo',
    label: 'Oyo'
  },
  {
    value: 'Plateau',
    label: 'Plateau'
  },
  {
    value: 'Rivers',
    label: 'Rivers'
  },
  {
    value: 'Sokoto',
    label: 'Sokoto'
  },
  {
    value: 'Taraba',
    label: 'Taraba'
  },
  {
    value: 'Yobe',
    label: 'Yobe'
  },
  {
    value: 'Abuja',
    label: 'Abuja'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: 'Front End',
    label: 'Front End'
  },
  {
    value: 'Back End',
    label: 'Back End'
  },
  {
    value: 'Full Stack',
    label: 'Full Stack'
  },
  {
    value: 'Data Science',
    label: 'Data Science'
  },
  {
    value: 'Block Chain',
    label: 'Block Chain'
  },
  {
    value: 'UI/UX',
    label: 'UI/UX'
  }
];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      email,
      address2,
      userType,
      state,
      phone,
      programs,
      accomodation
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={userType.name}
            label={userType.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={programs.name}
            label={programs.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={accomodation.name}
            label={accomodation.label}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
