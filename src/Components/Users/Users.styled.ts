import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";

type UserButtonProps = {
  $gridArea: string;
};

type UserBoxProps = {
  $borderColor: string;
};

export const StyledUsersWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "88vw",
  margin: "auto",
});

export const StyledUserBox = styled(Box)(({ $borderColor }: UserBoxProps) => ({
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)",
  gridTemplateRows: "repeat(15, 1fr)",
  width: "20vw",
  height: "15vh",
  boxShadow: "1px 2px 9px #a3a3a3",
  borderRadius: "5px",
  margin: "2vh",
  borderLeft: "10px solid",
  borderColor: $borderColor, //"#8c262a" "#295e29"
  boxSizing: "border-box",
}));

export const StyledUserIcon = styled(Box)({
  gridArea: "5 / 1 / 12 / 4",
  fontSize: "3rem",
  margin: "0",
  marginLeft: "2vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledUserInfo = styled(Box)({
  gridArea: "1 / 5 / 11 / 16",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginTop: "1vh",
});

export const StyledUserInfoText = styled(Box)({
  color: "#022B3A",
  fontFamily: "sans-serif",
  fontWeight: "bolder",
  fontSize: ".9rem",
});

export const StyledUserButton = styled(Button)(
  ({ $gridArea }: UserButtonProps) => ({
    gridArea: $gridArea,
    width: "1vw",
  })
);
