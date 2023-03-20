import axios from "axios";
import { UserStore } from "../Hooks/useProfile";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import { Set } from "../Repositories/Set";
import { api_url } from "../Global";
import { AuthProps } from "../Models/AuthProps";

export const getUserByEmail = async (
  set: Set<UserStore>,
  inputValues: InputValues
) => {
  const { status, data } = await axios.get<User>(
    api_url + `/api/v1/user/email/${inputValues.email}`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      auth: {
        username: inputValues.email,
        password: inputValues.password,
      },
    }
  );

  set((state) => ({ ...state, user: data }));
  set((state) => ({
    ...state,
    authentication: {
      id: data.id!,
      username: inputValues.email,
      password: inputValues.password,
      roles: data.roles,
    },
  }));

  return status;
};

export const createUser = async (
  set: Set<UserStore>,
  inputValues: InputValues
) => {
  const { data, status } = await axios.post<User>(
    `${api_url}/api/v1/user/adduser`,
    inputValues,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "*/*",
      },
    }
  );
  set((state) => ({ ...state, user: data }));
  set((state) => ({
    ...state,
    authentication: {
      id: data.id!,
      username: inputValues.email,
      password: inputValues.password,
      roles: data.roles,
    },
  }));
  return status;
};

export const getAllUsers = async (
  set: Set<UserStore>,
  authentication: AuthProps
) => {
  const { data } = await axios.get<User[]>(api_url + `/api/v1/user/getall`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    auth: {
      username: authentication.username,
      password: authentication.password,
    },
  });

  set((state) => ({ ...state, users: data }));

  return data;
};

export const deleteUser = async (authentication: AuthProps, id: number) => {
  if (!authentication) return;

  const { status } = await axios.delete<User>(
    `${api_url}/api/v1/user/delete/${id}`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
  return status;
};

export const demoteAdmin = async (
  authentication: AuthProps,
  userId: number
) => {
  await axios.put<User>(
    `${api_url}/api/v1/user/demoteAdmin/${userId}`,
    userId,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "*/*",
        "Content-Length": "80",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
};

export const promoteAdmin = async (
  authentication: AuthProps,
  userId: number
) => {
  await axios.put<User>(
    `${api_url}/api/v1/user/promoteAdmin/${userId}`,
    userId,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "*/*",
        "Content-Length": "80",
      },
      auth: {
        username: authentication.username,
        password: authentication.password,
      },
    }
  );
};
