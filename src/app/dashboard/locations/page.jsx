'use client'
import SearchBar from "@/components/Inputs/SearchBar";
import LocateCard from "@/components/Cards/LocateCard";
import { useEffect, useState } from "react";
import { getAllLocations, getQuantityOfLocations } from "@/services/data/Location.service";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
import { Pagination } from "@/components/Inputs/Pagination";
export default function Page() {

  const [locations, setLocations] = useState([]);
  const [totalLocations, setTotalLocations] = useState(0);
  const limit = 10;
  const [page, setPage] = useState(0);



  useEffect(() => {
    async function fetchLocations() {
      const locs = await getAllLocations({ page });
      const quantity = await getQuantityOfLocations();
      setTotalLocations(quantity);
      setLocations(locs);
    }

    fetchLocations();
  }, [page]);


  function onStepped(page) {
    setPage(page);
  }

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
        <Pagination onStepped={onStepped} totalElements={totalLocations} limit={limit} />
      </div>
    </>
  );
}
