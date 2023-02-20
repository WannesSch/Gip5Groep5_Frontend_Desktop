import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

export const StyledFooterBox = styled(Box)({
  position: "absolute",
  height: "5vh",
  color: "#919191",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bottom: "0",

  width: "100%",
});

export const StyledFooterTitle = styled(Typography)({
  color: "inherit",
  fontSize: ".9rem",
});

export const StyledFooterText = styled(Typography)({
  color: "inherit",
  fontSize: ".7rem",
});
