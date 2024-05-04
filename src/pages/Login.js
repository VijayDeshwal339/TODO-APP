// import toast from 'react-hot-toast';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// // import { login } from '../store/actions';
// import { login } from '../store/UserSlice';
// import { Button, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LockIcon from '@mui/icons-material/Lock';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Use useNavigate hook to get the navigation function
 

//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const handleLogin = () => {
//     // Retrieve user data from local storage
//     const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

//     if (registeredUser && data.email === registeredUser.email && data.password === registeredUser.password) {
//       // Dispatch login action
//       dispatch(login());
//       // Show success toast
//       toast.success('Logged in successfully!');
//       // Navigate to dashboard using the navigate function
//       navigate('/dashboard');
//     } else {
//       // Show error toast
//       toast.error('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div style={{ width: '400px', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '3px solid green',marginTop:'20px'}}>
//       <h1>Login Page</h1>
//       <form style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//         <FormControl variant="standard" fullWidth>
//           <InputLabel htmlFor="email">Enter your Email</InputLabel>
//           <Input
//             id="email"
//             type="text"
//             name="email"
//             value={data.email}
//             onChange={handleOnChange}
//             startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>}
//           />
//         </FormControl>

//         <FormControl variant="standard">
//           <InputLabel htmlFor="password">Enter your password</InputLabel>
//           <Input
//             id="password"
//             type={showPassword ? 'text' : 'password'}
//             name="password"
//             value={data.password}
//             onChange={handleOnChange}
//             startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
//             endAdornment={
//               <InputAdornment position="end" onClick={() => setShowPassword((prev) => !prev)}>
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </InputAdornment>
//             }
//           />
//         </FormControl>

//         <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', width: '100%', marginTop: '-15px' }}>
//           <p style={{ transition: 'color 0.3s', ':hover': { color: 'blue' } }}>Forgot password?</p>
//         </div>
//         <Button variant="contained" style={{ paddingInline: '40px' }} onClick={handleLogin}>Login</Button>
//         <p className='my-5'>Don't have an account? <Link to="/register" style={{ color: 'red' }}>Register Here</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Login;



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
        <Box sx={{margin:'auto', width: '400px', border: '3px solid green', padding: '20px',marginTop:'100px' }}>
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
