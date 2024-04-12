import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Link from "next/link";

export default function ActionsPopUp({ routeEdit, handleDelete }) {





  return (
    <div className="absolute z-20 top-0 -right-32 bg-white pl-2 py-1 rounded-lg shadow-lg">
      <div className="relative pr-2 pl-1">
        <Link
          href={routeEdit}
          className="flex items-center rounded-md hover:bg-gray-200"
        >
          <MdEdit className="text-gray-800 size-4 mx-1" />
          <p className="text-gray-800 p-1">Editar</p>
        </Link>
        <hr className="my-1 border-gray-300" />{" "}
        <button className="flex items-center rounded-md hover:bg-gray-200" onClick={() => handleDelete()}>
          <MdDeleteOutline className="text-gray-800 size-5 ml-1" />
          <p className="text-gray-800 p-1">Eliminar</p>
        </button>
        <div className="absolute top-3 -left-3 w-3 h-3 bg-white transform rotate-45"></div>
      </div>


    </div>
  );
}
