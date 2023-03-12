import axios from "axios";
import { UserStore } from "../Hooks/useProfile";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import { Set } from "../Repositories/Set";
import { api_url } from "../Global";

export const getUserByEmail = async (
  set: Set<UserStore>,
  inputValues: InputValues
) => {
  const { data } = await axios.get<User>(
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
      username: inputValues.email,
      password: inputValues.password,
    },
  }));
};
