import axios from "axios";
import { CORE_API_URL } from "@/app/constants/session";

const getAllLocations = async (token) => {
    return axios
      .get(`${CORE_API_URL}/location`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data.locations ;
      })
      .catch((error) => {
        return error;
      });
  };

  export default getAllLocations; 

