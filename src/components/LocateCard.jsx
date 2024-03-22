import React, { useState, useEffect } from "react";
import getAllLocations from "@/services/data/Location.service";
import { BsThreeDots } from "react-icons/bs";
import InfoLocation from "@/components/InfoLocation";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const LocateCard = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMenu, setShowMenu] = useState(null); // Estado para rastrear qué tarjeta muestra el menú
  const [showInfoLocation, setShowInfoLocation] = useState(false); // Estado para mostrar el modal de InfoLocation

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await getAllLocations(token);
        setLocations(response);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleMenuClick = (location, e) => {
    e.stopPropagation(); // Evitar que el evento se propague al contenedor padre
    setShowMenu(showMenu === location ? null : location); // Alternar el estado del menú solo si se hace clic en la misma tarjeta
  };

  const handleCardClick = (location) => {
    if (showMenu === location) return; // Si se hace clic en los tres puntos, no se mostrará el modal de InfoLocation
    setSelectedLocation(location);
    setShowInfoLocation(true);
  };

  return (
    <>
      {locations.map((location) => (
        <div
          key={location.name}
          className="relative w-44 overflow-hidden max-w-lg shadow-xl rounded-lg h-56 cursor-pointer"
          onClick={() => handleCardClick(location)}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={location.image}
            alt="Card Image"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <div onClick={(e) => handleMenuClick(location, e)}>
              <BsThreeDots className="absolute top-0 right-0 m-2 cursor-pointer size-9 text-white" />
              {showMenu === location && (
                <div className="absolute top-0 left-10 bg-white p-1 rounded-lg shadow-lg border border-gray-300">
                  <div className="flex items-center">
                    <MdEdit className="text-gray-800 size-4 mx-1" />
                    <p className="text-gray-800 p-1">Editar</p>
                  </div>
                  <hr className="my-1 border-gray-300" />{" "}
                  <div className="flex items-center">
                    <MdDeleteOutline className="text-gray-800 size-5 ml-1" />
                    {/* Alinear verticalmente el icono con el texto */}
                    <p className="text-gray-800 p-1">Eliminar</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      {showInfoLocation && (
        <InfoLocation
          open={showInfoLocation}
          onClose={() => setShowInfoLocation(false)}
          location={selectedLocation}
        />
      )}
    </>
  );
};

export default LocateCard;
