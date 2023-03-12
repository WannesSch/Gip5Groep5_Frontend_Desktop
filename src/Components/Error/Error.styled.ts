import { Box, styled, Typography } from "@mui/material";

export const StyledErrorTitle = styled(Typography)({
  color: "#c42b25",
  fontSize: "3rem",
});

export const StyledErrorDescription = styled(Typography)({
  color: "#781511",
  fontSize: "1.5rem",
});

export const StyledErrorBox = styled(Box)({
  width: "100%",
  height: "100%",
  marginTop: "15vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
