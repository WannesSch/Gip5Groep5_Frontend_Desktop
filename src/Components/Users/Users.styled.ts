import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mui/material";

type UserButtonProps = {
  $gridArea: string;
};

export const StyledUsersWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
});

export const StyledUserBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)",
  gridTemplateRows: "repeat(15, 1fr)",
  width: "20vw",
  height: "15vh",
  boxShadow: "1px 2px 9px #a3a3a3",
  borderRadius: "5px",
  margin: "5vh",
});

export const StyledUserIcon = styled(FontAwesomeIcon)({
  gridArea: "5 / 1 / 12 / 5",
  fontSize: "3rem",
  margin: "0",
  marginLeft: "2vw",
});

export const StyledUserInfo = styled(Box)({
  gridArea: "1 / 6 / 11 / 16",
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
  })
);
