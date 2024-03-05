import { CORE_API_URL } from "@/app/constants/session";
import axios from "axios";

const Login = async (email, password) => {
  return axios
    .post(`${CORE_API_URL}/auth/login`, { email, password })
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch((error) => {
      return { data: error.response.data, status: error.response.status };
    });
};

export { Login };
