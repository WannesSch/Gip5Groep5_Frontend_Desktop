import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const StyledHeader = styled(Typography)({
  color: "#022B3A",
  width: "100%",
  fontSize: "3rem",
  textAlign: "center",
});

export const StyledHomeBox = styled(Box)({
  width: "100%",
  height: "100%",
  marginTop: "15vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
