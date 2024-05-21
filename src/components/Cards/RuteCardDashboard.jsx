import { CORE_IMAGES_URL } from '@/app/constants/session'

export default function RuteCard({ name, image }) {
  return (
    <div className="rounded-lg p-0 bg-white shadow-md flex items-center justify-between mb-2">
      <div className="flex items-center">
        <div className="w-24 h-24 mr-4 relative">
          {/* Contenedor para la imagen de la ruta */}
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-none rounded-bl-lg"
            src={`${CORE_IMAGES_URL}/uploads/${image}`}
            alt="Imagen de la Ruta"
            width={150}
            height={150}
          />
        </div>
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  )
}
