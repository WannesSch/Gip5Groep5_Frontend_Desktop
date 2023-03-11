import axios from "axios";
import { UserStore } from "../Hooks/useProfile";
import { InputValues } from "../Models/InputValues";
import { User } from "../Models/User";
import { Set } from "../Repositories/Set";
import { Buffer } from "buffer";

export const getUserByEmail = async (
  set: Set<UserStore>,
  inputValues: InputValues
) => {
  const encodedToken = Buffer.from(
    `${inputValues.email}:${inputValues.password}`
  ).toString("base64");

  var basicAuth =
    "Basic " + btoa(inputValues.email + ":" + inputValues.password);
  const api_url = "http://localhost:8080";
  console.log(inputValues);
  const { data } = await axios.get<User>(
    api_url + `/api/v1/user/email/${inputValues.email}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
        "Accept-Encoding": "gzip, deflate, br",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      auth: {
        username: inputValues.email,
        password: inputValues.password,
      },
    }
  );

  axios({
    method: "get",
    url: `http://localhost:8080/api/v1/user/email/${inputValues.email}`,
    withCredentials: false,
    params: {
      access_token: encodedToken,
    },
  });

  set((state) => ({ ...state, user: data }));
};
