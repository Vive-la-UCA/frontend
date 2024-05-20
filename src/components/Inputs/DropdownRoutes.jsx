import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getRoutesWithoutPag } from "@/services/data/Routes.service";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import { IoClose } from "react-icons/io5";

export default function DropdownRoutes({
  title,
  onClickDropdown,
  onRemoveRoute = null,
  values = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    async function fetchRoutes() {
      const routes = await getRoutesWithoutPag();
      if (values != null) {
        setSelectedRoute(values);
      }
      setRoutes(routes);
    }

    fetchRoutes();
  }, [values]);

  useEffect(() => {
    if (selectedRoute) {
      setIsOpen(false); // Cierra el dropdown después de seleccionar una ruta
    }
  }, [selectedRoute]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedRoute = (route) => {
    setSelectedRoute(route);
    onClickDropdown(route);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRoutes = routes.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <label className="flex my-2 w-full flex-col gap-2">
      <p className="font-bold">{title}</p>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex gap-2 items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 outline-none"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Elegir Ruta
            <FaChevronDown />
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-y-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Search input */}
            <div className="px-4 pt-2 pb-1">
              <input
                type="text"
                className="w-full bg-gray-200 px-5 py-2 rounded-md shadow-sm outline-none"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Dropdown items */}
            <div className="py-1" role="none">
              {filteredRoutes.map((route) => (
                <div
                  key={route.uid}
                  onClick={() => handleSelectedRoute(route)}
                  className="flex flex-row px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  <img
                    loading="lazy"
                    src={`${CORE_IMAGES_URL}/uploads/${route.image}`}
                    alt="Icono"
                    className="w-10 object-cover rounded-xl h-10 inline-block mr-2"
                  />
                  {route.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected route */}
        {selectedRoute && (
          <div className="flex flex-col gap-5 mt-2">
            <div key={selectedRoute.uid}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row w-full justify-start gap-2 items-center">
                  <img
                    className="rounded-lg h-10 w-10 object-cover"
                    src={`${CORE_IMAGES_URL}/uploads/${selectedRoute.image}`}
                    alt=""
                  />
                  <p>{selectedRoute.name}</p>
                </div>
                <IoClose
                  size={20}
                  onClick={() => {
                    setSelectedRoute(null);
                    if (onRemoveRoute) onRemoveRoute(selectedRoute);
                  }}
                  className="bg-gray-200 rounded-full cursor-pointer"
                />
              </div>
              <div className="h-[2px] mt-2 w-full bg-gray-200"></div>
            </div>
          </div>
        )}
      </div>
    </label>
  );
}
