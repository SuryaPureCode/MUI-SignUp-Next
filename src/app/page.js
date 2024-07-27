"use client"
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Box, Card,Select } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailIcon from '@mui/icons-material/Mail';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const SignupForm = () => {
  const [selectedOption, setSelectedOption] = useState('Offer Terms');
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: 'male',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const handleChange2= (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full name is required';
    if (!formData.address) tempErrors.address = 'Invalid Address. Please select from suggestions.';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Required field.';
    if (!formData.city) tempErrors.city = 'City is required';
    if (!formData.state) tempErrors.state = 'State is required';
    if (!formData.dateOfBirth) tempErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) tempErrors.gender = 'Gender is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
    }
  };
  
  return (
    <Box sx={{display:'flex', flexDirection:{xs:'column',sm:"column",md:'row',lg:'row',xl:'row'},alignItems:'center',justifyContent:'center',width:'100%'}}>
   <Box sx={{height:{xs:'450px',sm:'450px',md:'800px',lg:'800px',xl:'800px'},maxWidth:'500px',width:'100%'}}>
      <img
        style={{ width: '100%',height:'100%' }}
        alt="Descriptive"
        src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?t=st=1722021464~exp=1722025064~hmac=30093e2380d73d78f3e9df142cc4a16024b7a5f156d03c2a7664d3b59242aef2&w=740"/>
 </Box>
    <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans serif', gap:'40px',padding:'10px',maxWidth:'500px',width:'100%' }}>
      <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <Typography sx={{fontSize:'16px',fontWeight:'bold',color:'green'}}>Quality Health</Typography>
        <Button sx={{padding:'3px 5px',fontSize:'12px',color:'green',borderColor:"green"}} variant="outlined">How it Works</Button>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: '400px', width:'100%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', alignItems: 'center', boxSizing: 'border-box' }}
        onSubmit={handleSubmit}
      >
        <Typography sx={{ color: '#242633', fontWeight: 'bold' }} variant="h4" component="h1" gutterBottom>
          Sign up
        </Typography>
        <Card sx={{ border: '1px solid lightgrey' }}>     
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', borderBottom: errors.fullName ? '1px solid red' : '1px solid lightgrey', padding: '15px 10px' }}>
            <FeedOutlinedIcon />
            <Typography variant='h5'>Your Information</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.fullName ? '#fef2f2' : '#fff', borderBottom: errors.fullName ? '1px solid red' : '1px solid lightgrey' }}>
            <TextField
              name="fullName"
              variant='filled'
              placeholder='Full Name'
              sx={{
                border: 'none',
                boxSizing: 'border-box',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'inherit',
                  '&:before, &:after': {
                    borderBottom: 'none',
                  },
                },
              }}
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              label={errors.fullName}
              fullWidth
            />
            <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.fullName ? 'red' : 'black' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.address ? '#fef2f2' : '#fff', borderBottom: errors.address ? '1px solid red' : '1px solid lightgrey' }}>
            <TextField
              placeholder="Address"
              variant='filled'
              sx={{
                border: 'none',
                boxSizing: 'border-box',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'inherit',
                  '&:before, &:after': {
                    borderBottom: 'none',
                  },
                },
              }}
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              label={errors.address}
              fullWidth
            />
            <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.address ? 'red' : 'black' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: errors.city ? '1px solid red' : '1px solid lightgrey' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.city ? '#fef2f2' : '#fff' }}>
              <TextField
                placeholder="City"
                variant='filled'
                name="city"
                sx={{
                  border: 'none',
                  boxSizing: 'border-box',
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'inherit',
                    '&:before, &:after': {
                      borderBottom: 'none',
                    },
                  },
                }}
                value={formData.city}
                onChange={handleChange}
                error={!!errors.city}
                label={errors.city}
                fullWidth
              />
              <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.city ? 'red' : 'black' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.state ? '#fef2f2' : '#fff' }}>
              <TextField
                placeholder='State'
                sx={{
                  border: 'none',
                  boxSizing: 'border-box',
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'inherit',
                    '&:before, &:after': {
                      borderBottom: 'none',
                    },
                  },
                }}
                name="state"  
                variant='filled'
                value={formData.state}
                onChange={handleChange}
                error={!!errors.state}
                label={errors.state}
                fullWidth
              />
              <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.state ? 'red' : 'black' }} />    
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.phoneNumber ? '#fef2f2' : '#fff', borderBottom: '1px solid lightgrey' }}>
            <TextField
              variant='filled'
              sx={{
                border: 'none',
                  type:"tel",
                boxSizing: 'border-box',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'inherit',
                  '&:before, &:after': {
                    borderBottom: 'none',
                  },
                },
              }}
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              label={errors.phoneNumber}
              fullWidth
            />
            <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.phoneNumber ? 'red' : 'black' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', backgroundColor: errors.dateOfBirth ? '#fef2f2' : '#fff', borderBottom: errors.dateOfBirth ? '1px solid red' : '1px solid lightgrey' }}>
            <TextField
              variant='filled'
              sx={{
                boxSizing: 'border-box',
                '& .MuiFilledInput-root': {
                  backgroundColor: 'inherit',
                  '&:before, &:after': {
                    borderBottom: 'none',
                  },
                },
              }}
              placeholder="Date of Birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              error={!!errors.dateOfBirth}
              label={errors.dateOfBirth}
              fullWidth
            />
            <EditOutlinedIcon sx={{ height: '30px', width: '40px', color: errors.dateOfBirth ? 'red' : 'black' }} />
          </Box>
          <TextField
            variant='filled'
            sx={{
              boxSizing: 'border-box',
              '& .MuiFilledInput-root': {
                backgroundColor: errors.gender ? '#fef2f2' : '#fff',
                '&:before, &:after': {
                  borderBottom: 'none',
                },
              },
            }}
            select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            error={!!errors.gender}
            label={errors.gender}
            fullWidth
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Card>
        <TextField
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          label={errors.email}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, display: 'flex', gap: '10px', alignItems: 'center', padding: '13px', backgroundColor: "#2b364a" }}
        >
          <MailIcon />
          <Typography>Continue with email</Typography>
        </Button>
        <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'2px'}}>
          <Typography sx={{ color: 'grey',whiteSpace:'nowrap' }}>By Signing up, I agree to the</Typography>
      <Select
        id="mui-simple-select"
        value={selectedOption}
        sx={{
          display:'inline',
          '& .MuiOutlinedInput-notchedOutline': {
            border:'none',
          },
          color:'green',
          padding:'3px'
        }}
        onChange={handleChange2}
      >
  
        <MenuItem value="Offer Terms">Offer Terms</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default SignupForm;
