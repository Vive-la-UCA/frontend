import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getAllRoutes } from "@/services/data/Routes.service";
import { CORE_IMAGES_URL } from "@/app/constants/session";
import { IoClose } from "react-icons/io5";

export default function DropdownRoutes({
  title,
  onClickDropdown,
  onRemoveLocation = null,
  values = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    async function fetchLocations() {
      const locations = await getAllRoutes(0);
      if (values != null) {
        setSelectedLocation(values);
      }
      setLocation(locations.data.routes);
    }

    fetchLocations();
  }, [values]);

  useEffect(() => {
    if (selectedLocation) {
      setIsOpen(false); // Cierra el dropdown después de seleccionar una ubicación
    }
  }, [selectedLocation]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedLocation = (location) => {
    setSelectedLocation(location);
    onClickDropdown(location);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLocations = locations.filter((item) =>
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
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              {filteredLocations.map((location) => (
                <div
                  key={location.uid}
                  onClick={() => handleSelectedLocation(location)}
                  className="flex flex-row px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  <img
                    loading="lazy"
                    src={`${CORE_IMAGES_URL}/uploads/${location.image}`}
                    alt="Icono"
                    className="w-10 object-cover rounded-xl h-10 inline-block mr-2"
                  />
                  {location.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected location */}
        {selectedLocation && (
          <div className="flex flex-col gap-5 mt-2">
            <div key={selectedLocation.uid}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row w-full justify-start gap-2 items-center">
                  <img
                    className="rounded-lg h-10 w-10 object-cover"
                    src={`${CORE_IMAGES_URL}/uploads/${selectedLocation.image}`}
                    alt=""
                  />
                  <p>{selectedLocation.name}</p>
                </div>
                <IoClose
                  size={20}
                  onClick={() => {
                    setSelectedLocation(null);
                    if (onRemoveLocation) onRemoveLocation(selectedLocation);
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
