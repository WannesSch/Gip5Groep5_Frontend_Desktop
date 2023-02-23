import React from "react";
import { Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledNavBar = styled(Toolbar)({
  background: "#022B3A",
  width: "auto",
  height: "5vh",
  position: "relative",
  display: "flex",
});

export const StyledNavbarTitle = styled(Typography)({
  color: "#E1E5F2",
  marginLeft: "1vw",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

export const StyledNavbarBox = styled(Box)({
  position: "relative",
});

export const StyledNavbarButton = styled(Button)({
  borderRadius: "0",
  color: "#E1E5F2",
  margin: "1rem",
  fontWeight: "bold",
  "&:hover": {
    color: "#141b24",
    background: "#F1F1F1",
  },
});

export const StyledAvatarBox = styled(Avatar)({
  display: "flex",
  position: "absolute",
  right: "5vw",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledLoginButton = styled(Button)({
  background: "#E1E5F2",
  display: "flex",
  position: "absolute",
  right: "5vw",
  alignItems: "center",
  justifyContent: "center",
  color: "#022B3A",
  "&:hover": {
    background: "#c3c4c7",
  },
}); 
