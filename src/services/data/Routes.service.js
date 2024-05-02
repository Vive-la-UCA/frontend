import axios from "axios";
import { CORE_API_URL } from "@/app/constants/session";

const api = axios.create({
  baseURL: CORE_API_URL,
});

// Añadir un interceptor de solicitud
api.interceptors.request.use((config) => {
  // Obtener el token del almacenamiento de la sesión
  const token = sessionStorage.getItem("token");

  // Si el token existe, añadirlo al encabezado de autorización
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Devolver la configuración modificada
  return config;
}, (error) => {
  // Si hay un error, rechazar la promesa
  return Promise.reject(error);
});

// Obtener todas las rutas
export const getAllRoutes = async () => {
  return api.get('/route')
    .then((response) => {
      return response.data.routes;
    })
    .catch((error) => {
      return error;
    });
};

export const getOneRoute = async (id) => {
  return api.get(`/route/${id}`)
    .then((response) => {
      return response.data.route;
    })
    .catch((error) => {
      return error;
    });
}

export const createNewRoute = async (route) => {
  const formData = new FormData();

  formData.append('name', route.name);
  formData.append('image', route.image);
  formData.append('locations', route.locations);

  return api.post('/route', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Especificar el tipo de contenido
    },
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
};

export const updateRoute = async (route) => {
  const formData = new FormData();

  formData.append('name', route.name);
  formData.append('image', route.image);

  let locationsId = []

  route.locations.forEach(location => {
    locationsId.push(location.uid);
  });

  formData.append('locations', locationsId);

  console.log("Info mandada al back");

  console.log(formData);
  return api.put(`/route/${route.uid}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // Especificar el tipo de contenido
    },
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
};