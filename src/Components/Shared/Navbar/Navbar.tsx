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
import { StyledFontAwesomeIcon } from "../Shared.styled";
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

const settings = ["Logout"];

function NavBarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onAuthButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key={"logout"} onClick={onAuthButtonClick}>
              <Typography>Logout</Typography>
            </MenuItem>
          </Menu>
        </StyledAvatarBox>
      ) : (
        <StyledLoginButton onClick={onAuthButtonClick}>Login</StyledLoginButton>
      )}
    </StyledNavBar>
  );
}

export default NavBarComponent;
