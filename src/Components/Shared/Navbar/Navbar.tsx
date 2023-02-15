import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledFontAwesomeIcon } from "../Shared.styled";
import {
  StyledNavBar,
  StyledNavbarBox,
  StyledNavbarButton,
  StyledNavbarTitle,
} from "./Navbar.styled";

const pages = [
  {
    name: "Home",
    link: "/",
    icon: <StyledFontAwesomeIcon $color={"inherit"} icon={"home"} />,
  },
  {
    name: "Inventory",
    link: "/inventory",
    icon: <StyledFontAwesomeIcon $color={"inherit"} icon={"inventory"} />,
  },
  {
    name: "System builder",
    link: "/builder",
    icon: <StyledFontAwesomeIcon $color={"inherit"} icon={"hammer"} />,
  },
];

function NavBarComponent() {
  return (
    <StyledNavBar>
      <StyledFontAwesomeIcon $color={"#F1F1F1"} icon={faUserGroup} />
      <StyledNavbarTitle>Gip 5 Groep 5</StyledNavbarTitle>
      <StyledNavbarBox>
        {pages.map((page) => (
          <Link to={page.link}>
            <StyledNavbarButton key={page.name}>
              <>{page.icon}</>
              {page.name}
            </StyledNavbarButton>
          </Link>
        ))}
      </StyledNavbarBox>
    </StyledNavBar>
  );
}

export default NavBarComponent;
