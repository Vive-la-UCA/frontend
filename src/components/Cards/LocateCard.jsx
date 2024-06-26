import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import InfoLocation from "@/components/popups/InfoLocation";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton"; // Importa tu componente de skeleton
import ActionsPopUp from "../popups/ActionsPopUp";
import IsSecurePopUp from "../popups/IsSecurePopUp";
import { deleteLocation } from "@/services/data/Location.service";
import "react-toastify/dist/ReactToastify.css";

export default function LocateCard({ location, loading, onDeleteLocation }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  const [showInfoLocation, setShowInfoLocation] = useState(false);
  const [showISecurePopUp, setShowISecurePopUp] = useState(false);
  const [locateToDeleteId, setLocateToDeleteId] = useState(null);

  // Función para manejar el clic en el menú de tres puntos
  const handleMenuClick = (location, e) => {
    e.stopPropagation();
    setShowMenu(showMenu === location ? null : location);
  };

  const handleCardClick = (location) => {
    if (showMenu === location) return;
    setSelectedLocation(location);
    setShowInfoLocation(true);
  };

  async function handleDeleteCardFromDatabase() {
    onDeleteLocation(location.uid);
  }

  const handleDeleteCard = () => {
    setShowISecurePopUp(true);
    setLocateToDeleteId(location.uid);
  };

  const handleClosePopUp = () => {
    setShowISecurePopUp(false);
  }

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
            src={`${CORE_IMAGES_URL}/uploads/${location.image}`}
            alt="Card Image"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-lg"></div>{" "}
          {/* Filtro de fondo oscuro*/}
          <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <div onClick={(e) => handleMenuClick(location, e)}>
              <BsThreeDots className="absolute top-0 right-0 m-2 cursor-pointer size-9 text-white" />
              {showMenu === location && <ActionsPopUp routeEdit={`/dashboard/locations/edit-location/${location.uid}`} handleDelete={handleDeleteCard} />}
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

      {
        showISecurePopUp && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <IsSecurePopUp
              functionToNo={handleClosePopUp}
              functionToYes={handleDeleteCardFromDatabase}
              title={`¿Está seguro de eliminar la localidad ${location.name}?`}
            />
          </div>
        )
      }
    </div>
  );
}
