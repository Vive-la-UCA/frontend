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