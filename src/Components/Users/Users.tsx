import { faHammer, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const { authentication, fetchAllUsers, removeUser, setAdmin, setUser } =
    useProfile();
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

  const SetUser = (user: User) => {
    setUser(authentication, user);
  };
  const SetAdmin = (user: User) => {
    setAdmin(authentication, user);
  };
  const RemoveUser = (id: number) => {
    removeUser(authentication, id);
  };

  return (
    <StyledUsersWrapper>
      {users?.map((user) => (
        <StyledUserBox
          $borderColor={user.roles === "ADMIN" ? "#8c262a" : "#295e29"}
        >
          <StyledUserIcon>
            <FontAwesomeIcon icon={faUser} />
          </StyledUserIcon>
          <StyledUserInfo>
            <StyledUserInfoText>
              {user.lastname + " " + user.firstname}
            </StyledUserInfoText>
            <StyledUserInfoText>{user.email}</StyledUserInfoText>
            <StyledUserInfoText>{user.birthdate}</StyledUserInfoText>
            <StyledUserInfoText>{user.roles}</StyledUserInfoText>
          </StyledUserInfo>
          <StyledUserButton
            $gridArea="12 / 6 / 15 / 9"
            onClick={() => SetUser(user)}
          >
            <StyledFontAwesomeIcon icon={faUser} />
          </StyledUserButton>
          <StyledUserButton
            $gridArea="12 / 9 / 15 / 12"
            onClick={() => SetAdmin(user)}
          >
            <StyledFontAwesomeIcon icon={faHammer} $color={"#a14225"} />
          </StyledUserButton>
          <StyledUserButton
            $gridArea="12 / 12 / 15 / 15"
            onClick={() => RemoveUser(user.id!)}
          >
            <StyledFontAwesomeIcon icon={faTrash} $color={"#a12525"} />
          </StyledUserButton>
        </StyledUserBox>
      ))}
    </StyledUsersWrapper>
  );
}

export default UsersComponent;