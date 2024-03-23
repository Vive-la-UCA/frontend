import { FaTimes } from "react-icons/fa";

import { CORE_IMAGES_URL } from "@/app/constants/session";
import { MapView } from "..";

export default function InfoLocation({
  open,
  onClose,
  location,
}) {

  function handleClose(e) {
    // Verificar si se hizo clic fuera del contenido del modal
    if (e.target === e.currentTarget) {
      onClose(); // Cerrar el modal
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex flex-row items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleClose} // Agregar evento de clic para cerrar el modal al hacer clic fuera de él
    >
      <div className="relative flex flex-row w-3/5 h-96 justify-between bg-white rounded-lg shadow-md">
        <FaTimes
          className="absolute top-2 right-2 cursor-pointer text-gray-800 size-5"
          onClick={onClose}
        />
        <div className="flex items-center w-2/5 mt-0 py-6 px-6 justify-center">
          <img
            src={`${CORE_IMAGES_URL}/${location.image}`}
            alt="Foto Localidad"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-around w-3/5 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {location.name}
          </h2>
          <div className="h-full pr-8 overflow-y-scroll">
            <p className="font-bold">Descripción:</p>
            <p className="text-gray-700 text-sm mb-4">{location.description}</p>
            <p className="font-bold">Ubicación:</p>
            <MapView position={[location.latitude, location.longitude]} />
          </div>
        </div>
      </div>
    </div>
  );
}
