import React from "react";
import { TextField, Typography, Link, styled } from "@mui/material";

const StyledButton = styled('button')({
  borderRadius: '20px',
  border: '1px solid #005086',
  backgroundColor: '#005086',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '12px 45px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  transition: 'transform 80ms ease-in',
  '&:active': {
    transform: 'scale(0.95)',
  },
  '&:focus': {
    outline: 'none',
  },
  '&.ghost': {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
  },
});

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h4">Log in</Typography>
        <Typography variant="subtitle1">Welcome to Vis-CAT</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <Link href="#" variant="body2">
          Forgot your password?
        </Link>
        <StyledButton type="submit">
          Log In
        </StyledButton>
      </form>
    </div>
  );
}

export default SignInForm;