'use client'
import { Map } from "@/components";
import InputText from "@/components/Inputs/input-text";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";
import { createNewLocation } from "@/services/data/Location.service";
import LocationValidator from "@/app/validations/locationValidator";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Page() {

    const router = useRouter();

    //Creando el objeto a enviar a la base de datos.
    //1. Crear un objeto con los datos del formulario
    let location = {
        name: "",
        description: "",
        image: null,
        latitude: "",
        longitude: "",
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

    const getLocationCordsHandler = (longitude, latitude) => {
        location.latitude = longitude;
        location.longitude = latitude;
    }

    async function submitHandler(e) {
        e.preventDefault();

        const validate = LocationValidator(location);
        console.log(location);

        if (validate.status == false) {
            toast.info(validate.message);
            return;
        }

        const response = await createNewLocation(location);
        console.log(response);

        if (response) {
            toast.success("Ubicación creada con éxito");
            console.log("Ubicación creada");
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
            <h1 className="text-3xl font-semibold mb-4">Crear una localidad</h1>
            <ToastContainer />
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
