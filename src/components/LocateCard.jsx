import { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import InfoLocation from "@/components/InfoLocation";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import InformationPopUp from "./popups/InformationPopUp";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton"; // Importa tu componente de skeleton

export default function LocateCard({ location, loading }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  const [showInfoLocation, setShowInfoLocation] = useState(false);

  // Función para manejar el clic en el menú de tres puntos
  const handleMenuClick = (location, e) => {
    e.stopPropagation();
    setShowMenu(showMenu === location ? null : location);
  };

  // Función para manejar el clic en la tarjeta
  const handleCardClick = (location) => {
    if (showMenu === location) return;
    setSelectedLocation(location);
    setShowInfoLocation(true);
  };

  // Renderizar el skeleton mientras se carga la ubicación
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <div>
      <div>
        <div
          key={location.name}
          className="relative w-44 max-w-lg shadow-xl rounded-lg h-56 cursor-pointer"
          onClick={() => handleCardClick(location)}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-lg"
            src={`${CORE_IMAGES_URL}/${location.image}`}
            alt="Card Image"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-lg"></div> {/* Filtro de fondo oscuro*/}
          <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <div onClick={(e) => handleMenuClick(location, e)}>
              <BsThreeDots className="absolute top-0 right-0 m-2 cursor-pointer size-9 text-white" />
              {showMenu === location && (
                <InformationPopUp />
              )}
            </div>
          </div>
        </div>

        {showInfoLocation && (
          // Mostrar el modal de información de la ubicación
          <InfoLocation
            open={showInfoLocation}
            onClose={() => setShowInfoLocation(false)}
            location={selectedLocation}
          />
        )}
      </div>
    </div>
  );
};
