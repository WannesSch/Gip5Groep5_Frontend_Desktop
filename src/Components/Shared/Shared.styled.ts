import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

type FontColor = { $color?: string };

type MessageProps = { $background?: string };
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

export const StyledMessage = styled(Box)<MessageProps>(({ $background }) => ({
  background: $background ?? "#ab2929",
  color: "#d9d9d9",
  fontSize: "1.5rem",
  width: "min-content",
  height: "5vh",
  margin: "auto",
  minWidth: "30vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2vh",
  boxShadow: "1px 2px 9px #a3a3a3",
}));

export const StyledOverlay = styled(Box)({
  position: "absolute",
  zIndex: "9999",
  background: "rgba(0, 0, 0, 0.7)",
  top: "0",
  width: "100%",
  height: "100%",
});

export const StyledOverlayBox = styled(Box)({
  width: "30vw",
  boxShadow: "1px 2px 9px #a3a3a3",
  borderRadius: "5px",
  margin: "auto",
  marginBlock: "5vh",
  display: "flex",
  flexDirection: "column",
  background: "#F1F1F1",
  padding: "3rem",
});
