import axios from "axios";
import { CORE_API_URL } from "@/app/constants/session";
// Crear una instancia de axios
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

export const getAllLocations = async () => {
  return api.get('/location')
    .then((response) => {
      return response.data.locations;
    })
    .catch((error) => {
      return error;
    });
};

export const createNewLocation = async (location) => {
  const formData = new FormData();

  console.log(location);
  
  formData.append('name', location.name);
  formData.append('description', location.description);
  formData.append('image', location.image);
  formData.append('latitude', location.latitude);
  formData.append('longitude', location.longitude);

  return api.post('/location', formData, {
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


export const getOneLocation = async (id) => {
  return api.get(`/location/${id}`)
    .then((response) => {
      return response.data.location;
    })
    .catch((error) => {
      return error;
    });
};

export const updateLocation = async (location) => {
  const formData = new FormData();

  console.log("Location que viene al backend")
  console.log(location.uid);
  
  formData.append('name', location.name);
  formData.append('description', location.description);
  formData.append('image', location.image);
  formData.append('latitude', location.latitude);
  formData.append('longitude', location.longitude);

  return api.put(`/location/${location.uid}`, formData, {
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

export const deleteLocation = async (uid) => {
  return api.delete(`/location/${uid}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
  