import InputText from "@/components/input-text";
import { TextArea } from "@/components/TextArea";
import ImageUpload from "@/components/ImageUpload";
import MapLocations from "@/components/MapLocations";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4">Crear una localidad</h1>
            <hr />

            <form className="">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col w-1/2">
                        <InputText title={"Nombre"} />
                        <TextArea title={"Descripción"} />
                    </div>
                    <ImageUpload />
                </div>
                <MapLocations />
            </form>

        </div>
    );
};
