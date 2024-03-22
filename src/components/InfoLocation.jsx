import React from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function InfoLocation({
  open,
  onClose,
  location, // Utilizamos la prop location para obtener la información de la ubicación
}) {
  const handleClose = (e) => {
    // Verificar si se hizo clic fuera del contenido del modal
    if (e.target === e.currentTarget) {
      onClose(); // Cerrar el modal
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleClose} // Agregar evento de clic para cerrar el modal al hacer clic fuera de él
    >
      <div className="relative w-96 bg-white rounded-lg shadow-md">
        <FaTimes
          className="absolute top-0 right-0 m-1 cursor-pointer text-gray-800 size-5"
          onClick={onClose}
        />
        <div className="flex items-center mt-0 w-96 h-72 pt-6 px-6 justify-center">
          <img
            src={location.image}
            alt="Foto Localidad"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-96 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {location.name}
          </h2>
          <p className="text-gray-700 text-sm mb-4">{location.description}</p>
          <div className="flex items-center text-gray-700">
            <FaLocationDot className="w-5 h-5 mr-2" size={20} />
            <p>
              {location.coordinates[0]} - {location.coordinates[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
