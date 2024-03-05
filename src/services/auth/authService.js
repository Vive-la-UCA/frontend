import { CORE_API_URL } from "@/app/constants/session";
import axios from "axios";

const AuthService = {};

AuthService.Login = async (email, password) => {
  return axios
    .post(`${CORE_API_URL}/auth/login`, { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export default AuthService;
