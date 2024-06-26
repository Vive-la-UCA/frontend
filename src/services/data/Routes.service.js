import axios from 'axios'
import { CORE_API_URL } from '@/app/constants/session'

const api = axios.create({
  baseURL: CORE_API_URL
})

// Añadir un interceptor de solicitud
api.interceptors.request.use(
  config => {
    // Obtener el token del almacenamiento de la sesión
    const token = sessionStorage.getItem('token')

    // Si el token existe, añadirlo al encabezado de autorización
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Devolver la configuración modificada
    return config
  },
  error => {
    // Si hay un error, rechazar la promesa
    return Promise.reject(error)
  }
)

// Obtener todas las rutas
export const getAllRoutes = async ({ page }) => {
  return api
    .get(`/route?limit=10&skip=${page}`)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export const getRoutesWithoutPag = async () => {
  return api
    .get(`/route/all`)
    .then(response => {
      return response.data.routes
    })
    .catch(error => {
      return error
    })
}

export const getOneRoute = async id => {
  return api
    .get(`/route/${id}`)
    .then(response => {
      return response.data.route
    })
    .catch(error => {
      return error
    })
}

export const createNewRoute = async route => {
  const formData = new FormData()

  formData.append('name', route.name)
  formData.append('image', route.image)
  formData.append('description', route.description)

  route.locations.forEach(location => {
    formData.append('locations', location)
  })

  return api
    .post('/route', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido
      }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export const updateRoute = async route => {
  const formData = new FormData()

  formData.append('name', route.name)
  formData.append('image', route.image)
  formData.append('description', route.description)

  route.locations.forEach(location => {
    formData.append('locations', location.uid)
  })

  return api
    .put(`/route/${route.uid}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido
      }
    })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

export const deleteRoute = async id => {
  return api
    .delete(`/route/${id}`)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
