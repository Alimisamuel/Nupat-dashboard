import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    userType,
    phone,
    programs,
    accomodation,
    sponsorName,
    sponsorContact,
    entryDate,
    password
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [userType.name]: '',
  [phone.name]: '',
  [programs.name]: '',
  [accomodation.name]: false,
  [sponsorName.name]: '',
  [sponsorContact.name]: '',
  [entryDate.name]: '',
  [password.name]: ''
};
