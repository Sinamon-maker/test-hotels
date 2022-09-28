import axios from "axios";
import { URL } from "./auth";

const refreshUrl = "api/v1/auth/login/refresh";

export const refresh = async (refreshToken) => {
  const response = await axios.post(URL + refreshUrl, { refreshToken });
  return response;
};
