import { CORE_API_URL } from '@/app/constants/session'
import axios from 'axios'

const api = axios.create({
  baseURL: CORE_API_URL
})

api.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const GetUsers = async () => {
  return api
    .get('/users/all')
    .then(response => {
      return response.data.users
    })
    .catch(error => {
      return error
    })
}

const GetUsersPag = async ({ page }) => {
  return api
    .get(`/users?limit=10&skip=${page}`)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export { GetUsers, GetUsersPag }
