import { MdDeleteOutline, MdEdit } from "react-icons/md";
export default function ActionsPopUp() {
    return (
        <div className="absolute z-20 top-0 -right-32 bg-white px-2 py-1 rounded-lg shadow-lg">
            <div className="relative">
                <div className="flex items-center">
                    <MdEdit className="text-gray-800 size-4 mx-1" />
                    <p className="text-gray-800 p-1">Editar</p>
                </div>
                <hr className="my-1 border-gray-300" />{" "}
                <div className="flex items-center">
                    <MdDeleteOutline className="text-gray-800 size-5 ml-1" />
                    {/* Alinear verticalmente el icono con el texto */}
                    <p className="text-gray-800 p-1">Eliminar</p>
                </div>
                <div className="absolute top-3 -left-3 w-3 h-3 bg-white transform rotate-45"></div>
            </div>

        </div>
    );
};
