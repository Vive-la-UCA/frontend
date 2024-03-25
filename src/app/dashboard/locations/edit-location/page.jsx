"use client";
import { useState } from "react";
import InputText from "@/components/Inputs/input-text";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";
import Map from "@/components/";
import { updateLocation } from "@/services/data/Location.service";

export default function Page({ location }) {
  // Crear un estado para el formulario con la ubicación recibida como prop
  const [formLocation, setFormLocation] = useState(location);

  const getNameHandler = (e) => {
    setFormLocation({ ...formLocation, name: e.target.value });
  };

  const getImageFileHandler = (file) => {
    setFormLocation({ ...formLocation, image: file });
  };

  const getDescriptionHandler = (e) => {
    setFormLocation({ ...formLocation, description: e.target.value });
  };

  const getLocationCordsHandler = (e) => {
    setFormLocation({
      ...formLocation,
      coords: { lat: e.lat, lng: e.lng },
    });
  };

  async function submitHandler(e) {
    e.preventDefault();
    const response = await updateLocation(formLocation);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Editar una localidad</h1>
      <hr />
      <form className="" onSubmit={submitHandler}>
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

          <ImageUpload onSelectedFile={getImageFileHandler} />
        </div>

        <p className="font-bold">Seleccionar ubicación</p>
        <Map onClick={getLocationCordsHandler} />

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
