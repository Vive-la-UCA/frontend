'use client'
import SearchBar from "@/components/Inputs/SearchBar";
import PrincipalButton from "@/components/buttons/principal-button";
import { IoIosAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { getAllRoutes } from "@/services/data/Routes.service";
import { RouteCard } from "@/components/Cards/RouteCard";

export default function Page() {

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function fetchRoutes() {
      const routes = await getAllRoutes();
      setRoutes(routes);
      console.log(routes);
    }
    fetchRoutes();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Rutas</h1>
        <div className="flex pt-2 flex-row justify-between w-full items-center gap-2">
          <SearchBar />
          <PrincipalButton link="/dashboard/routes/create-route" text={"Crear Ruta"} type={"button"} Icon={<IoIosAddCircle size={25} />} />
        </div>
      </div>

      <div className="mt-10 flex flex-row flex-wrap gap-10">
        {
          routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))
        }
      </div>

    </div>
  );
}
