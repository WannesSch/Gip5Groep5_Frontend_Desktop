import React from "react";
import { StyledHeader } from "./Home.styled";

const user = {
  name: "Wannes",
};

function HomeComponent() {
  return <StyledHeader>Welkom {user.name}!</StyledHeader>;
}

export default HomeComponent;
