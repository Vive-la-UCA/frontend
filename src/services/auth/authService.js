import { CORE_API_URL } from '@/app/constants/session'
import axios from 'axios'

const Login = async (email, password) => {
  try {
    const response = await axios.post(`${CORE_API_URL}/auth/login`, {
      email,
      password
    })

    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    // Check if it's an Axios error
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status other than 200 range
        return {
          data: error.response.data,
          status: error.response.status
        }
      } else if (error.request) {
        // Request was made but no response received
        return {
          data: { message: 'No response from server' },
          status: null
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        return {
          data: { message: error.message },
          status: null
        }
      }
    } else {
      // Handle non-Axios errors
      return {
        data: { message: 'Unexpected error occurred' },
        status: null
      }
    }
  }
}

const CheckToken = async token => {
  return axios
    .get(`${CORE_API_URL}/auth/check-token`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      return { data: response.data, status: response.status }
    })
    .catch(error => {
      console.log(error)
      return { data: error.response.data, status: error.response.status }
    })
}

export { Login, CheckToken }
