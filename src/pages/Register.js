import toast from 'react-hot-toast';
import React, { useState } from 'react';

import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate} from 'react-router-dom';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleRegister = () => {
    
    console.log(data);
    // Store user details in local storage
    localStorage.setItem('registeredUser', JSON.stringify(data));
    
    // Navigate to login page after successful registration
    navigate('/login');
    toast.success('Register successfully!');
  };
  

  return (
    <Box sx={{margin:'auto', width: '400px', border: '3px solid green', padding: '20px',marginTop:'100px' }}>
      <Typography variant='h4' component="h5" sx={{ textAlign: 'center', mb: '20px' }} >Register Here</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="name">Enter your Name</InputLabel>
          <Input
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
          />
        </FormControl>

        <FormControl variant="standard" >
          <InputLabel htmlFor="email">Enter your Email</InputLabel>
          <Input
            id="email"
            type="text"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start">✉️</InputAdornment>}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="password">Enter your password</InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={data.password}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
            endAdornment={
              <InputAdornment position="end" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel htmlFor="confirmPassword">Confirm your password</InputLabel>
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
            endAdornment={
              <InputAdornment position="end" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="contained"  onClick={handleRegister}>Register</Button>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: '20px' }}>Already have an account? <Link to="/login" ><Typography variant="p" sx={{color:'red'}}>Login</Typography></Link></Typography>
      </Box>
      
    </Box>
    
  );
};

export default Register;
