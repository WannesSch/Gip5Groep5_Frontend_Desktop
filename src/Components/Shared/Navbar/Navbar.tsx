import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../../../Hooks/useProfile";
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
    name: "Inventory",
    link: "/inventory",
    roles: ["USER", "ADMIN"],
  },
  {
    name: "Analitic data",
    link: "/analitics",
    roles: ["ADMIN"],
  },
  {
    name: "Users",
    link: "/users",
    roles: ["ADMIN"],
  },
];

function NavBarComponent() {
  const { logout, user, authentication } = useProfile();

  const HandleLogout = () => {
    logout();
  };

  return (
    <StyledNavBar>
      <StyledFontAwesomeIcon $color={"#F1F1F1"} icon={faUserGroup} />
      <StyledNavbarTitle>Gip 5 Groep 5</StyledNavbarTitle>
      <StyledNavbarBox>
        <Link to={"/"}>
          <StyledNavbarButton>Home</StyledNavbarButton>
        </Link>
        {pages.map((page) =>
          authentication && page.roles?.includes(authentication.roles) ? (
            <Link to={page.link}>
              <StyledNavbarButton key={page.name}>
                {page.name}
              </StyledNavbarButton>
            </Link>
          ) : (
            <></>
          )
        )}
      </StyledNavbarBox>
      {user ? (
        <StyledAvatarBox>
          <Tooltip title="Logout">
            <IconButton onClick={HandleLogout}>
              {user.firstname[0].toUpperCase()}
            </IconButton>
          </Tooltip>
        </StyledAvatarBox>
      ) : (
        <StyledLink to="/login">
          <StyledLoginButton>Login</StyledLoginButton>
        </StyledLink>
      )}
    </StyledNavBar>
  );
}

export default NavBarComponent;
