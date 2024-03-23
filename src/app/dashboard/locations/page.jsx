'use client'
import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
import { Suspense, useEffect, useState } from "react";
import { getAllLocations } from "@/services/data/Location.service";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
export default function Page() {

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      const locs = await getAllLocations();
      setLocations(locs); //Guarda las localidades en el estado
      setLoading(false);
    }
    fetchLocations();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Localidades</h1>
        <div className="flex flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton link="/dashboard/locations/create-location" text={"Crear Localidad"} type={"button"} Icon={<IoIosAddCircle size={25} />} />
        </div>
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        {
          locations.map((location) => (
            <LocateCard key={location.id} location={location} />
          ))
        }

      </div >
      <div>

      </div>
    </>
  );
}
