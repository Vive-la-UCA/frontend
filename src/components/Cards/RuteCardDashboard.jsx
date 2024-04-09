export default function RuteCard() {
  return (
    <div className="rounded-lg p-0 bg-white shadow-md flex items-center justify-between mb-2">
      <div className="flex items-center">
        <div className="w-24 h-24 mr-4 relative">
          {/* Contenedor para la imagen de la ruta */}
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-none rounded-bl-lg"
            src="https://www.uca.edu.sv/cmr/wp-content/uploads/2016/02/Fachada.png"
            alt="Imagen de la Ruta"
          />
        </div>
        <p className="text-lg font-semibold">Nombre de la Ruta</p>
      </div>
    </div>
  );
}
