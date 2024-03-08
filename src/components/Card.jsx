export default function Card({ routeName, number }) {
  return (
    <div className="rounded-lg p-2 bg-gray-100 w-56 h-24 mb-4 flex items-center justify-center shadow-md">
      {/* Ajusta el ancho y alto del contenedor gris */}
      <div className="flex flex-col items-center">
        <p className="font-bold text-2xl">{number}</p>{" "}
        {/* Hace el número más grueso y más pequeño */}
        <p className="text-base">{routeName}</p>{" "}
        {/* Muestra el nombre de la ruta */}
      </div>
    </div>
  );
}
