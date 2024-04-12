'use client'
import SearchBar from "@/components/Inputs/SearchBar";
import LocateCard from "@/components/Cards/LocateCard";
import { useEffect, useState } from "react";
import { getAllLocations, deleteLocation } from "@/services/data/Location.service";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const locs = await getAllLocations();
      setLocations(locs);
    }
    fetchLocations();
  }, []);

  const onDeleteLocation = async (locationId) => {
    try {
      await deleteLocation(locationId);
      setLocations(locations.filter(location => location.uid !== locationId));
    } catch (error) {
      console.error("Error al eliminar la ubicación:", error);
      toast.error("Error al eliminar la ubicación");
    }
  };

  return (
    <>
      <div className="mx-10">
        <h1 className="text-3xl font-semibold mb-4 ">Localidades</h1>
        <div className="flex flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton link="/dashboard/locations/create-location" text={"Crear Localidad"} type={"button"} Icon={<IoIosAddCircle size={25} />} />
        </div>
      </div>

      <div className="grid grid-cols-4 mx-10 mt-5 gap-10">
        {locations.map(location => (
          <LocateCard key={location.id} location={location} onDeleteLocation={onDeleteLocation} />
        ))}
      </div>

      <ToastContainer />
    </>
  );
}
