import React from "react";
import { TextField, Typography, styled } from "@mui/material";

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

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    token: ""
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
    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h4">Create Account</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
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
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Token"
          name="token"
          value={state.token}
          onChange={handleChange}
        />
        <StyledButton type="submit">
          Sign Up
        </StyledButton>
      </form>
    </div>
  );
}

export default SignUpForm;