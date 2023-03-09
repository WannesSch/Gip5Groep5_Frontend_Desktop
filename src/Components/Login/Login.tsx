import { Button, TextField } from "@mui/material";
import React from "react";
import { StyledAuthBox, StyledTitle } from "../Shared/Shared.styled";

function LoginComponent() {
  return (
    <>
      <StyledAuthBox>
        <StyledTitle>Login</StyledTitle>

        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          color="primary"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          color="primary"
        />
        <Button>Login</Button>
      </StyledAuthBox>
    </>
  );
}

export default LoginComponent;
