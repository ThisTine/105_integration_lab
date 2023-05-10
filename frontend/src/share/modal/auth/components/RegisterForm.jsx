import { Box, Link, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';

const RegisterForm = ({ setIsLogin = () => {}, setStatus = () => {} }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');

  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    // 2. send request to server
    // 3. if successful, change modal to login mode
    // 4. if fail, show error message alert, and reset password fields
  };
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 5,
      }}
    >
      <Typography fontSize="1.25rem" fontWeight="400">
        CSC105 integration!
      </Typography>
      <Typography fontSize="2.5rem" fontWeight="700">
        Register
      </Typography>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        error={usernameError !== ''}
        helperText={usernameError}
        label="Username"
        placeholder="Type your username"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        error={emailError !== ''}
        helperText={emailError}
        label="Email"
        placeholder="Type your email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        error={passwordError !== ''}
        helperText={passwordError}
        type="password"
        label="Password"
        placeholder="Type your password"
      />
      <TextField
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        fullWidth
        error={rePasswordError !== ''}
        helperText={rePasswordError}
        type="password"
        label="Confirm password"
        placeholder="Type your password"
      />
      <Link color="#999999" sx={{ alignSelf: 'end', cursor: 'pointer' }} onClick={() => setIsLogin(true)}>
        Already have an account?
      </Link>
      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '.25rem',
          fontSize: '1.5rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(90deg, black 50%, white 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0%',
          transition: 'all .2s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundPosition = '0% 0%';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundPosition = '100% 0%';
        }}
      >
        Sign up
      </button>
    </Box>
  );
};

export default RegisterForm;
