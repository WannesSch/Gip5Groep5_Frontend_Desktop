import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useProfile } from "../../Hooks/useProfile";
import { StyledHeader, StyledHomeBox } from "./Home.styled";

function HomeComponent() {
  const { user } = useProfile();

  return (
    <>
      {user ? (
        <StyledHomeBox>
          <StyledHeader>Welcome {user?.firstname}!</StyledHeader>
        </StyledHomeBox>
      ) : (
        <StyledHomeBox>
          <StyledHeader>Welcome User,</StyledHeader>
          <StyledHeader>to continue please log in.</StyledHeader>
          <Link to={"/login"}>
            <Button>Go to login page</Button>
          </Link>
        </StyledHomeBox>
      )}
    </>
  );
}

export default HomeComponent;
