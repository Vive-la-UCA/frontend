import { CORE_IMAGES_URL } from "@/app/constants/session";
import { BsThreeDots } from "react-icons/bs";
import ActionsPopUp from "../popups/ActionsPopUp";
import IsSecurePopUp from "../popups/IsSecurePopUp";
import { useState } from "react";
import InfoRoute from "../popups/InfoRoute";

export function RouteCard({ route, onDeleteRoute }) {

    const [showMenu, setShowMenu] = useState(null);
    const [showInfoRoute, setShowInfoRoute] = useState(false);
    const [showISecurePopUp, setShowISecurePopUp] = useState(false);

    const handleMenuClick = (route, e) => {
        e.stopPropagation();
        setShowMenu(showMenu === route ? null : route);
    };

    async function handleDeleteCardFromDatabase() {
        onDeleteRoute(route.uid);
    }

    const handleClosePopUp = () => {
        setShowISecurePopUp(false);
    }

    const handleDeleteCard = () => {
        setShowISecurePopUp(true);
    };
    const handleCardClick = () => {
        if (showMenu === route) return;
        setShowInfoRoute(true);
    };

    return (
        <div>
            <div >
                <div
                    key={route.name}
                    onClick={() => handleCardClick(route)}
                    className="relative w-44 max-w-lg shadow-xl rounded-lg h-56 cursor-pointer"
                >
                    <img
                        className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        src={`${CORE_IMAGES_URL}/uploads/${route.image}`}
                        alt="Card Image"
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-lg"></div>{" "}
                    {/* Filtro de fondo oscuro*/}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                        <h2 className="text-xl font-semibold">{route.name}</h2>
                        <div onClick={(e) => handleMenuClick(route, e)}>
                            <BsThreeDots className="absolute top-0 right-0 m-2 cursor-pointer size-9 text-white" />
                            {showMenu === route && <ActionsPopUp routeEdit={`/dashboard/routes/edit-route/${route.uid}`} handleDelete={handleDeleteCard} />}
                        </div>
                    </div>
                </div>

                {showInfoRoute && (
                    <InfoRoute
                        open={showInfoRoute}
                        onClose={() => setShowInfoRoute(false)}
                        route={route}
                    />
                )}

                {
                    showISecurePopUp && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <IsSecurePopUp
                                functionToNo={handleClosePopUp}
                                functionToYes={handleDeleteCardFromDatabase}
                                title={`¿Está seguro de eliminar la ruta ${route.name}?`}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
}
