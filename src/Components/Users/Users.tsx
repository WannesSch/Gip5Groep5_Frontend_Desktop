import { faHammer, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../Hooks/useProfile";
import { User } from "../../Models/User";
import ErrorComponent from "../Error/Error";
import { StyledFontAwesomeIcon } from "../Shared/Shared.styled";
import {
  StyledUserBox,
  StyledUserButton,
  StyledUserIcon,
  StyledUserInfo,
  StyledUserInfoText,
  StyledUsersWrapper,
} from "./Users.styled";

function UsersComponent() {
  const { authentication, fetchAllUsers } = useProfile();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    if (!authentication) return;
    fetchAllUsers(authentication).then((res) => {
      setUsers(res);
    });
  }, [authentication, fetchAllUsers]);

  if (!authentication)
    return (
      <ErrorComponent
        title="Forbidden page."
        description="This page is only visible to admins"
      />
    );

  return (
    <StyledUsersWrapper>
      {users?.map((user) => (
        <StyledUserBox>
          <StyledUserIcon icon={faUser} />
          <StyledUserInfo>
            <StyledUserInfoText>
              {user.lastname + " " + user.firstname}
            </StyledUserInfoText>
            <StyledUserInfoText>{user.email}</StyledUserInfoText>
            <StyledUserInfoText>{user.birthdate}</StyledUserInfoText>
            <StyledUserInfoText>{user.roles}</StyledUserInfoText>
          </StyledUserInfo>
          <StyledUserButton $gridArea="12 / 6 / 15 / 8">
            <StyledFontAwesomeIcon icon={faUser} />
          </StyledUserButton>
          <StyledUserButton $gridArea="12 / 8 / 15 / 10">
            <StyledFontAwesomeIcon icon={faHammer} $color={"#a14225"} />
          </StyledUserButton>
          <StyledUserButton $gridArea="12 / 10 / 15 / 12">
            <StyledFontAwesomeIcon icon={faTrash} $color={"#a12525"} />
          </StyledUserButton>
        </StyledUserBox>
      ))}
    </StyledUsersWrapper>
  );
}

export default UsersComponent;
