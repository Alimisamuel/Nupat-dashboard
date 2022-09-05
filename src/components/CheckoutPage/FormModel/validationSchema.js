import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    userType,
    // phone,
    programs,
    sponsorName,
    // cardNumber,
    entryDate
    // password
  }
} = checkoutFormModel;

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [userType.name]: Yup.string()
      .nullable()
      .required(`${userType.requiredErrorMsg}`),
    // [phone.name]: Yup.string()
    //   .required(`${phone.requiredErrorMsg}`)
    //   .test(
    //     'len',
    //     `${phone.invalidErrorMsg}`,
    //     val => val && val.length === 11
    //   ),
    [programs.name]: Yup.string()
      .nullable()
      .required(`${programs.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [sponsorName.name]: Yup.string().required(`${sponsorName.requiredErrorMsg}`),
    // [cardNumber.name]: Yup.string()
    //   .required(`${cardNumber.requiredErrorMsg}`)
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [entryDate.name]: Yup.string()
      .nullable()
      .required(`${entryDate.requiredErrorMsg}`)
      .test('expDate', entryDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      })
    // [password.name]: Yup.string()
    //   .required(`${password.requiredErrorMsg}`)
    //   .test('len', `${password.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
