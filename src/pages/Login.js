import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/UserSlice';
import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Typography} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (!data.email.trim() || !data.password.trim()) {
      toast.error('Please enter both email and password.');
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser && data.email === registeredUser.email && data.password === registeredUser.password) {
      dispatch(login());
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box sx={{ margin:'auto', width: {xs:'80%',sm:'400px'}, border: '3px solid green', padding: '20px', marginTop:'100px' }}>
      <Typography variant='h4' component="h5" sx={{ textAlign: 'center', mb: '20px' }} >Login Page</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="email">Enter your Email</InputLabel>
          <Input
            id="email"
            type="text"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>}
          />
        </FormControl>

        <FormControl variant="standard" >
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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
          <Typography variant="body2" color="primary" component={Link} to="/forgot-password">Forgot password?</Typography>
        </Box>

        <Button variant="contained" onClick={handleLogin} sx={{ width: '100%' }}>Login</Button>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: '20px' }}>
          Don't have an account? <Link to="/register" ><Typography variant="p" sx={{color:'red'}}>Register Here</Typography></Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
