"use client"

import InputText from "@/components/Inputs/input-text";
import ImageUpload from "@/components/Inputs/ImageUpload";
import { Dropdown } from "@/components/Inputs/Dropdown";
import { createNewRoute } from "@/services/data/Routes.service";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";


export default function Page() {

    const router = useRouter();

    let route = {
        name: "",
        image: null,
        locations: [],
    }

    const getNameHandler = (e) => {
        route.name = e.target.value;
    }

    const getSelectedLocationHandler = (location) => {
        route.locations = [...route.locations, location.uid];
        console.log(route);
    }

    const getImageFileHandler = (file) => {
        route.image = file;
    }

    async function submitHandler(e) {
        e.preventDefault();

        const response = await createNewRoute(route);
        console.log(response);

        if (response) {
            toast.success("Ruta creada con éxito");
        }

        setTimeout(() => {
            router.push("/dashboard/routes");
        }, 2000);
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Crear una ruta</h1>
            <hr />
            <ToastContainer />
            <form onSubmit={submitHandler}>
                <div className="flex flex-row justify-between w-full gap-4">
                    <div className="flex flex-col w-1/2">
                        <InputText title={"Nombre"} onChange={getNameHandler} />
                        <Dropdown title={"Localidades"} onClickDropwdown={getSelectedLocationHandler} />
                    </div>
                    <ImageUpload onSelectedFile={getImageFileHandler} />
                </div>

                <div className="flex flex-row mt-10 justify-center w-full">
                    <button type="submit" className="bg-black text-white text-2xl py-2 px-5 rounded-xl mt-5">Crear ruta</button>
                </div>
            </form>
        </div>
    );
};
