export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required'
    },
    address2: {
      name: 'home',
      label: 'Home Address'
    },
    userType: {
      name: 'User Type',
      label: 'User Type*',
      requiredErrorMsg: 'User type is required'
    },
    state: {
      name: 'state',
      label: 'State/Province/Region'
    },
    phone: {
      name: 'phone',
      label: 'Phone Number*',
      requiredErrorMsg: 'Phone number is required',
      invalidErrorMsg: 'Phone number is not valid (e.g. 0902*****47)'
    },
    programs: {
      name: 'Program',
      label: 'Program*',
      requiredErrorMsg: 'Program is required'
    },
    accomodation: {
      name: 'Accomodation',
      label: 'Accomodation'
    },
    sponsorName: {
      name: 'Sponsor',
      label: 'Name of sponsor*',
      requiredErrorMsg: 'Name of sponsor is required'
    },
    sponsorContact: {
      name: 'Sponsor Contact',
      label: 'Sponsor contact*',
      requiredErrorMsg: 'Sponsor number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    // Password: {
    //   name: 'password',
    //   label: 'Create password*',
    //   requiredErrorMsg: 'Password is required'
    // },
    entryDate: {
      name: 'Entry Date',
      label: 'Entry Date*',
      requiredErrorMsg: 'Entry date is required',
      invalidErrorMsg: 'Entry date is not valid'
    },
    password: {
      name: 'password',
      label: 'Create password',
      requiredErrorMsg: 'Note is required',
      invalidErrorMsg: 'Note is invalid (e.g. 357)'
    }
  }
};
