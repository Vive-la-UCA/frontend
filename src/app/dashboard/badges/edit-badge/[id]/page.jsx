"use client";
import { getOneRoute } from "@/services/data/Routes.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import InputText from "@/components/Inputs/input-text";
import ImageUpload from "@/components/Inputs/ImageUpload";
import DropdownRoutes from "@/components/Inputs/DropdownRoutes";
import BadgeValidator from "@/app/validations/badgeValidator";
import { getOneBadge, updateBadge } from "@/services/data/Badge.service";

export default function Page({ params }) {
  const router = useRouter();

  // Define the state of the form
  const [formRoute, setFormRoute] = useState({
    uid: params.id,
    name: "",
    image: null,
    route: null,
  });

  console.log("FormRoute");
  console.log(formRoute);
  // Get the route data
  useEffect(() => {
    async function fetchData() {
      const response = await getOneBadge(params.id);
      console.log("Response from getOneBadge");
      console.log(response);
      const locationData = await getOneRoute(response.route._id);
      console.log("Location data");
      console.log(locationData);

      setFormRoute({
        uid: params.id,
        name: response.name,
        image: response.image,
        route: locationData,
      });
    }
    fetchData();
  }, []);

  const getNameHandler = (e) => {
    setFormRoute((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const getSelectedLocationHandler = (location) => {
    setFormRoute((prevState) => ({ ...prevState, route: location }));
  };

  const getImageFileHandler = (file) => {
    setFormRoute((prevState) => ({ ...prevState, image: file }));
  };

  const removeLocationFromFormRoute = () => {
    setFormRoute((prevState) => ({ ...prevState, route: null }));
  };

  const submitEditRoute = async (e) => {
    console.log("FormRoute");
    console.log(formRoute);
    e.preventDefault();
    const validate = BadgeValidator(formRoute);

    if (validate.status === false) {
      toast.info(validate.message);
      return;
    }

    const response = await updateBadge(formRoute);
    if (response) {
      toast.success("Badge editada con éxito");
      setTimeout(() => {
        router.push("/dashboard/badges");
      }, 2000);
    } else {
      toast.error("Error al crear el badge");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Editar insignia</h1>
      <hr />
      <ToastContainer />

      <form onSubmit={submitEditRoute}>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col w-1/2">
            <InputText
              title={"Nombre"}
              onChange={getNameHandler}
              value={formRoute.name}
            />
            <DropdownRoutes
              title={"Localidad"}
              onClickDropdown={getSelectedLocationHandler}
              values={formRoute.route}
              onRemoveLocation={removeLocationFromFormRoute}
            />
          </div>
          <ImageUpload
            onSelectedFile={getImageFileHandler}
            previewImageEdit={formRoute.image}
          />
        </div>

        <div className="flex flex-row justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5"
          >
            Actualizar insignia
          </button>
        </div>
      </form>
    </div>
  );
}
