import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material";

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
