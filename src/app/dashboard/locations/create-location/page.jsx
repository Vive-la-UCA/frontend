'use client'
import InputText from "@/components/Inputs/input-text";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";
import Map from "@/components/";
import { createNewLocation } from "@/services/data/Location.service";


export default function Page() {

    //Creando el objeto a enviar a la base de datos.
    //1. Crear un objeto con los datos del formulario
    let location = {
        name: "",
        description: "",
        image: null,
        coords: {
            lat: "",
            lng: ""
        }
    }

    const getNameHandler = (e) => {
        location.name = e.target.value;
    }

    const getImageFileHandler = (file) => {
        location.image = file;
    }

    const getDescriptionHandler = (e) => {
        location.description = e.target.value;
    }

    const getLocationCordsHandler = (e) => {
        location.coords.lat = e.lat;
        location.coords.lng = e.lng;
    }

    async function submitHandler(e) {
        e.preventDefault();
        const response = await createNewLocation(location);
    }


    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Crear una localidad</h1>
            <hr />
            <form className="" onSubmit={submitHandler}>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col w-1/2">
                        <InputText title={"Nombre"} onChange={getNameHandler} />
                        <TextArea title={"Descripción"} onChange={getDescriptionHandler} />
                    </div>

                    <ImageUpload onSelectedFile={getImageFileHandler} />

                </div>

                <p className="font-bold">Seleccionar ubicación</p>
                <Map onClick={getLocationCordsHandler} />

                <div className="flex flex-row justify-center w-full">
                    <button type="submit" className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5">Crear ubicación</button>
                </div>
            </form>

        </div>
    );
};
