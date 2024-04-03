"use client"

import InputText from "@/components/Inputs/input-text";
import { TextArea } from "@/components/Inputs/TextArea";
import ImageUpload from "@/components/Inputs/ImageUpload";

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

const getImageFileHandler = (file) => {
    route.image = file;
}

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Crear una ruta</h1>
            <hr />

            <form>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col w-1/2">
                        <InputText title={"Nombre"} onChange={getNameHandler} />
                        <TextArea title={"Descripción"} onChange={getDescriptionHandler} />
                    </div>

                    <ImageUpload onSelectedFile={getImageFileHandler} />

                </div>
            </form>
        </div>
    );
};
