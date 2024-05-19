import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { getLocationsWithoutPag } from '@/services/data/Location.service';
import { CORE_IMAGES_URL } from "@/app/constants/session";
import { IoClose } from "react-icons/io5";

export function Dropdown({ title, onClickDropwdown, values = null, onRemoveLocation = null }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);

    useEffect(() => {
        async function fetchLocations() {
            const locations = await getLocationsWithoutPag();
            if (values != null) {
                setSelectedLocations(values);
            }
            setLocations(locations);
        }

        fetchLocations();

    }, [values]);

    const quitOneLocation = (item) => {
        const newLocations = selectedLocations.filter(location => location.uid !== item.uid);
        if (onRemoveLocation) onRemoveLocation(item);
        setSelectedLocations(newLocations)
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectedItems = (item) => {
        if (selectedLocations.find(location => location.uid === item.uid)) return;
        setSelectedLocations([...selectedLocations, item]);
        onClickDropwdown(item);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredItems = locations.filter(item =>
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
                        Elegir localidades
                        <FaChevronDown />
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
                            {filteredItems.map(item => (
                                <div key={item.uid} onClick={() => handleSelectedItems(item)} className="flex flex-row px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    <img loading='lazy' src={`${CORE_IMAGES_URL}/uploads/${item.image}`} alt="Icono" className="w-10 object-cover rounded-xl h-10 inline-block mr-2" />
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Selected items */}
                {
                    selectedLocations.length > 0 &&
                    <div className="flex flex-col gap-5 mt-2">
                        {selectedLocations.map(item => (
                            <div key={item.uid}>
                                <div className="flex flex-row justify-between items-center">
                                    <div className='flex flex-row w-full justify-start gap-2 items-center'>
                                        <img className="rounded-lg h-10 w-10 object-cover" src={`${CORE_IMAGES_URL}/uploads/${item.image}`} alt="" />
                                        <p>{item.name}</p>
                                    </div>
                                    <IoClose size={20} onClick={() => quitOneLocation(item)} className='bg-gray-200 rounded-full cursor-pointer' />
                                </div>
                                <div className='h-[2px] mt-2 w-full bg-gray-200'></div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </label>
    );
};
