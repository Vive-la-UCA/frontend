"use client";
import { useState, useEffect } from "react";
import InputText from "@/components/Inputs/input-text";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";
import { Map } from "@/components/";
import { useRouter } from "next/navigation";
import { updateLocation } from "@/services/data/Location.service";
import { getOneLocation } from "@/services/data/Location.service";
import LocationValidator from "@/app/validations/locationValidator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page({ params }) {

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await getOneLocation(params.id);
      setFormLocation(response);

    }
    fetchData();
  }, []);


  const [formLocation, setFormLocation] = useState({
    name: '',
    image: null,
    description: '',
    latitude: null,
    longitude: null,
  });

  const getNameHandler = (e) => {
    setFormLocation(prevState => ({ ...prevState, name: e.target.value }));
    console.log(formLocation);
  }

  const getImageFileHandler = (file) => {
    setFormLocation(prevState => ({ ...prevState, image: file }));
  }

  const getDescriptionHandler = (e) => {
    setFormLocation(prevState => ({ ...prevState, description: e.target.value }));
  }

  const getLocationCordsHandler = (latitude, longitude) => {
    setFormLocation(prevState => ({ ...prevState, latitude: latitude, longitude: longitude }));
  }

  const submitEditHandler = async (e) => {
    e.preventDefault();
    const validate = LocationValidator(formLocation);

    if (validate.status == false) {
      toast.info(validate.message);
      return;
    }
    const response = await updateLocation(formLocation);

    if (response) {
      toast.success("Ubicación editada con éxito");
      console.log("Ubicación editada");
      //3 segundos despues redirecciona
      setTimeout(() => {
        router.push("/dashboard/locations");
      }, 2000);

    } else {
      toast.error("Error al crear la ubicación");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Editar una localidad</h1>
      <ToastContainer />
      <hr />
      <form className="" onSubmit={submitEditHandler}>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-1/2">
            <InputText
              title={"Nombre"}
              onChange={getNameHandler}
              value={formLocation.name}
            />
            <TextArea
              title={"Descripción"}
              onChange={getDescriptionHandler}
              value={formLocation.description}
            />
          </div>

          <ImageUpload onSelectedFile={getImageFileHandler} previewImageEdit={formLocation.image} />
        </div>

        <p className="font-bold">Seleccionar ubicación</p>
        {formLocation.latitude && formLocation.longitude ? (
          <Map onClick={getLocationCordsHandler} idZoomedToPosition={true} coordsToEdit={[parseFloat(formLocation.latitude), parseFloat(formLocation.longitude)]} />
        ) : (
          "Cargando ubicación..."
        )}

        <div className="flex flex-row justify-center w-full">
          <button
            type="submit"
            className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5"
          >
            Actualizar ubicación
          </button>
        </div>
      </form>
    </div>
  );
}
