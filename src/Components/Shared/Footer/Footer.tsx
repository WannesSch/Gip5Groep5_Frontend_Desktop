import React from "react";
import {
  StyledFooterBox,
  StyledFooterText,
  StyledFooterTitle,
} from "./Footer.styled";

function FooterComponent() {
  return (
    <StyledFooterBox>
      <StyledFooterTitle>Gip 5 Groep 5</StyledFooterTitle>
      <StyledFooterText>
        Wannes Schillebeeckx, Ararat Gündes, Yago Engels, Sander Raymakers
      </StyledFooterText>
    </StyledFooterBox>
  );
}

export default FooterComponent;
