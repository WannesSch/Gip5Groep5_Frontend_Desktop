import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

type FontColor = { $color?: string };

//Colors
//#022B3A Accent color
//#1F7A8C Text color
//#BFDBF7 trim color
//#E1E5F2 text hover color
//#F1F1F1 background color

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<FontColor>(
  ({ $color }) => ({
    color: $color ?? "#152745",
    fontSize: "1.2rem",
    width: "2rem",
    cursor: "pointer",
  })
);

export const StyledLink = styled(Link)({
  margin: 0,
  height: "50%",
});

export const StyledAuthBox = styled(Box)({
  width: "30vw",
  boxShadow: "1px 2px 9px #a3a3a3",
  borderRadius: "5px",
  margin: "auto",
  marginBlock: "5vh",
  display: "flex",
  flexDirection: "column",
});

export const StyledTitle = styled(Typography)({
  color: "#022B3A",
  width: "100%",
  textAlign: "center",
  fontSize: "1.5rem",
  paddingTop: "1vh",
  position: "relative",
});
