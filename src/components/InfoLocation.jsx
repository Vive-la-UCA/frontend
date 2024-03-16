import { FaLocationArrow, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function InfoLocation() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-row flex-wrap gap-14 bg-white rounded-lg shadow-md p-6 relative">
          <div className="flex items-center w-48 h-60 justify-center">
            <img
              src="https://picsum.photos/800/600"
              alt="Foto Localidad"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center w-96">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Centro de Servicio Social
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, vel
              repellat ducimus possimus, aspernatur eveniet corrupti iusto
              consectetur ex debitis molestias. Sequi veritatis similique
              aspernatur quae natus magnam itaque quo.
            </p>
            <div className="flex items-center text-gray-700 ">
              <FaLocationArrow className="w-6 h-6" size={20} />
              <p className="inline-block align-middle">Monseñor Romero</p>
            </div>
            <div className="flex items-center text-gray-700">
              <FaMagnifyingGlassLocation className="mr-2" size={20} />
              <p>Coordenadas: Edificios D UCA</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 mt-3 mr-4">
          <FaTimes size={25} color="gray" />
        </div>
      </div>
    </>
  );
}
