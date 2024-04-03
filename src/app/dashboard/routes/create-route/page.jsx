"use client"

import InputText from "@/components/Inputs/input-text";
import { Suspense } from "react";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";
import { Dropdown } from "@/components/Inputs/Dropdown";
import { SelectedRoutes } from "@/components/selectedRoutes";

let route = {
    name: "",
    description: "",
    image: null,
    locations: [],
}

const getNameHandler = (e) => {
    route.name = e.target.value;
}

const getDescriptionHandler = (e) => {
    route.description = e.target.value;
}

const getSelectedLocationHandler = (location) => {
    route.locations = [...route.locations, location.uid];
    console.log(route);
}

const getImageFileHandler = (file) => {
    route.image = file;
}

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Crear una ruta</h1>
            <hr />

            <form>
                <div className="flex flex-row justify-between w-full gap-4">
                    <div className="flex flex-col w-1/2">
                        <InputText title={"Nombre"} onChange={getNameHandler} />
                        <TextArea title={"Descripción"} onChange={getDescriptionHandler} />
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
