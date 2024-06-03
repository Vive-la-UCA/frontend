"use client";
import SearchBar from "@/components/Inputs/SearchBar";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { getAllRoutes, deleteRoute } from "@/services/data/Routes.service";
import { RouteCard } from "@/components/Cards/RouteCard";
import { Pagination } from "@/components/Inputs/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [routes, setRoutes] = useState([]);

  // Variables to manage pagination
  const [totalRoutes, setTotalRoutes] = useState(0); // Total number of routes
  const limit = 10; // Number of routes per page
  const [page, setPage] = useState(0); // Current page

  useEffect(() => {
    async function fetchRoutes() {
      const routes = await getAllRoutes({ page });
      setRoutes(routes.data.routes);
      setTotalRoutes(routes.data.total);
    }

    fetchRoutes();
  }, [page, routes.length]);

  // Function to change the page
  function onStepped(page) {
    setPage(page);
  }

  const onDeleteRoute = async (routeId) => {
    try {
      const deleteResponse = await deleteRoute(routeId);
      if (deleteResponse.status && deleteResponse.status === 200) {
        setRoutes(routes.filter(route => route.uid !== routeId));
        toast.success("La ruta ha sido eliminada");
      } else if (deleteResponse.response && deleteResponse.response.status === 400) {
        toast.info(deleteResponse.response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.info(error);
    }
  };


  return (
    <div>
      <div className="mx-10">
        <h1 className="text-3xl font-semibold mb-4">Rutas</h1>
        <div className="flex flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton
            link="/dashboard/routes/create-route"
            text={"Crear Ruta"}
            type={"button"}
            Icon={<IoIosAddCircle size={25} />}
          />
        </div>
      </div>

      <div className="mt-10 mx-10 flex flex-row flex-wrap gap-10">
        {routes.map((route) => (
          <RouteCard key={route.id} route={route} onDeleteRoute={onDeleteRoute} />
        ))}
      </div>
      <div>
        <Pagination
          onStepped={onStepped}
          totalElements={totalRoutes}
          limit={limit}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
