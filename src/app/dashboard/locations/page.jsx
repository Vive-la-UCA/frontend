'use client'
import SearchBar from "@/components/Inputs/SearchBar";
import LocateCard from "@/components/Cards/LocateCard";
import { useEffect, useState } from "react";
import { getAllLocations, getQuantityOfLocations, deleteLocation } from "@/services/data/Location.service";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
import { Pagination } from "@/components/Inputs/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [locations, setLocations] = useState([]);
  const [totalLocations, setTotalLocations] = useState(0);
  const limit = 10;
  const [page, setPage] = useState(0);
  const [responseDelete, setResponseDelete] = useState("")


  useEffect(() => {
    async function fetchLocations() {
      const locs = await getAllLocations({ page });
      const quantity = await getQuantityOfLocations();
      setTotalLocations(quantity);
      setLocations(locs);
    }
    fetchLocations();
  }, [page, locations.length]);


  function onStepped(page) {
    setPage(page);
  }

  const onDeleteLocation = async (locationId) => {
    try {
      const deleteResponse = await deleteLocation(locationId);
      console.log(deleteResponse)
      if (deleteResponse.status === 200) {
        setLocations(locations.filter(location => location.uid !== locationId));
        toast.sucess("La ubicación ha sido eliminada");
      } else if (deleteResponse.status === 400) {
        toast.info(deleteResponse.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.info(error);
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
      <div className="mt-10 mx-10 flex flex-row flex-wrap gap-10">
        {
          locations.map((location) => (
            <LocateCard key={location.id} location={location} onDeleteLocation={onDeleteLocation} />
          ))
        }
      </div >
      <div>
        <Pagination onStepped={onStepped} totalElements={totalLocations} limit={limit} />
      </div>

      <ToastContainer />

    </>
  );
}

