import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledFontAwesomeIcon, StyledLink } from "../Shared.styled";
import {
  StyledAvatarBox,
  StyledLoginButton,
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
    name: "Analitic data",
    link: "/analitics",
    icon: <StyledFontAwesomeIcon $color={"inherit"} icon={"hammer"} />,
  },
];

const user = "Wannes";

function NavBarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const HandleLogout = () => {
    setIsLoggedIn(false);
  };

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
      {isLoggedIn ? (
        <StyledAvatarBox>
          <Tooltip title="Logout">
            <IconButton onClick={HandleLogout}>
              {user[0].toUpperCase()}
            </IconButton>
          </Tooltip>
        </StyledAvatarBox>
      ) : (
        <StyledLink to="http://localhost:8080/api/v1/user/1">
          <StyledLoginButton>Login</StyledLoginButton>
        </StyledLink>
      )}
    </StyledNavBar>
  );
}

export default NavBarComponent;
