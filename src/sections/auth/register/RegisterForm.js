import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Select from 'react-select'

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const options = [
    { value: 'Student', label: 'Student' },
    { value: 'Instructor', label: 'Instructor' },
   
  ]
  const batch = [
    { value: 'May', label: 'May-August' },
    { value: 'June', label: 'June-September' },
    { value: 'July', label: 'July-October' },
   
  ]
  const program = [
    { value: 'Front End', label: 'Front End' },
    { value: 'Full', label: 'Full Stack' },
    { value: 'Data', label: 'Data  Science' },
    { value: 'Block', label: 'Block chain' },
   
  ]
  const accomodation = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
 
   
  ]

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard/review', { replace: true });
  };

  return (

  

    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
   


          
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" style={{ color: '#000'}}/>
        <RHFTextField name="text" label="House address" style={{ color: '#000'}}/>

        <RHFTextField
          name="password"
          label="Create Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div style={{color:'#131e47'}} >
<Typography variant="h7" sx={{ px: 0, mt: 10, mb: 5 }}>
              Select user  type... 
            </Typography>
<Select options={options} spacing={3}  backgroundColor={"red"}  />
{/* <div style={{marginRight: '10px'}}> */}
<Typography variant="h7" sx={{ px: 0, mt: 10, mb: 5 }}>
             Accomadation
            </Typography>
<Select options={accomodation} spacing={3}   />

</div>
<div style={{color:'#131e47', display: 'flex'}}>

<div style={{marginRight: '10px'}}>
<Typography variant="h7" sx={{ px: 0, mt: 10, mb: 5 }}>
              Select batch... 
            </Typography>
<Select options={batch} spacing={3}  />
</div>
<div>
<Typography variant="h7" sx={{ px: 0, mt: 10, mb: 5 }}>
              Select program... 
            </Typography>
<Select options={program} spacing={3}  backgroundColor={"red"}  />
</div>

</div>


        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
