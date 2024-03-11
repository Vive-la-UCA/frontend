export default function CreateLocation() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-6">
        <h2 className="text-center font-semibold text-2xl text-gray-800">
          Crear localidad
        </h2>

        <div className="mt-8">
          <div>
            <p className="text-gray-700">Nombre: </p>
            <input
              type="text"
              id="location-name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              placeholder="Ingrese el nombre de la ubicación"
            />
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Descripción: </p>
            <textarea
              id="location-description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
              placeholder="Ingrese la descripción de la ubicación"
              rows="4"
            ></textarea>
            <div className="pt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
