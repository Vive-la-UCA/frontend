import axios from "axios";
import { CORE_API_URL } from "@/app/constants/session";

// Crear una instancia de axios con la base URL
const api = axios.create({
  baseURL: CORE_API_URL,
});

// Añadir un interceptor de solicitud para manejar el token de autorización
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    // Si hay un token, agregarlo al encabezado de autorización
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // Devolver la configuración modificada
  },
  (error) => Promise.reject(error) // Rechazar la promesa en caso de error
);

// Función para obtener todos los badges
export const getAllBadges = async () => {
  try {
    const response = await api.get("/badge");
    return response.data.badges;
  } catch (error) {
    return error;
  }
};

export const createNewBadge = async (badge) => {
  const formData = new FormData();

  formData.append('name', badge.name);
  formData.append('image', badge.image);
  formData.append('route', badge.route);

  return api.post('/badge', formData, {
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

// Función para obtener un badge específico por su ID

export const getOneBadge = async (id) => {
  return api.get(`/badge/${id}`)
    .then((response) => {
      return response.data.badge;
    })
    .catch((error) => {
      return error;
    });
}
// Función para actualizar un badge existente
export const updateBadge = async (badge) => {
  const formData = new FormData();

  formData.append('name', badge.name);
  formData.append('image', badge.image);
  formData.append('route', badge.route.uid);

  console.log("Info mandada al back");

  console.log(formData);
  return api.put(`/badge/${badge.uid}`, formData, {
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

// Función para eliminar un badge por su ID
export const deleteBadge = async (id) => {
  try {
    const response = await api.delete(`/badge/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
