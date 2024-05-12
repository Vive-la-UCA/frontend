import { FaTimes } from "react-icons/fa";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import { useState, useEffect } from "react";
import { getOneLocation } from "@/services/data/Location.service";


export default function InfoRoute({ open, onClose, route }) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const locationDetails = await Promise.all(
                    route.locations.map(async (locationId) => {
                        return await getOneLocation(locationId);
                    })
                );
                setLocations(locationDetails);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, [route.locations]);

    function handleClose(e) {
        // Verificar si se hizo clic fuera del contenido del modal
        if (e.target === e.currentTarget) {
            onClose(); // Cerrar el modal
        }
    }

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
                    onClick={handleClose}
                />
                <div className="flex items-center w-2/5 mt-0 py-6 px-6 justify-center">
                    <img
                        src={`${CORE_IMAGES_URL}/uploads/${route.image}`}
                        alt="Foto Localidad"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col w-3/5 p-6">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        {route.name}
                    </h2>

                    <p>Localidades de esta ruta:</p>
                    <ul className="list-disc list-inside overflow-y-scroll px-10">
                        {locations.map((location) => (
                            <div className="flex flex-row items-center gap-2 mt-5 rounded-lg bg-gray-100 p-2">
                                <img className="h-12 w-12 object-cover rounded-lg" src={`${CORE_IMAGES_URL}/uploads/${location.image}`} alt="" />
                                <div>
                                    <p>{location.name}</p>
                                </div>
                            </div>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}
