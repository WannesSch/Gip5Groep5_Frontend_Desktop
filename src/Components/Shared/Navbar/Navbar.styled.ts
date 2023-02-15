import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const StyledNavBar = styled(Toolbar)({
  background: "#022B3A",
  width: "100vw",
  height: "5vh",
  position: "relative",
});

export const StyledNavbarTitle = styled(Typography)({
  color: "#E1E5F2",
  marginLeft: "1vw",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

export const StyledNavbarBox = styled(Box)({
  position: "absolute",
  marginLeft: "50%",
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
