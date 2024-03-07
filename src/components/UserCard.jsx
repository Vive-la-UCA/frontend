import { LuBadgeCheck } from "react-icons/lu";

export default function UserCard() {
  return (
    <div className="rounded-lg p-4 bg-white shadow-md flex items-center justify-between mb-0.5">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden mr-2">
          {/* Contenedor circular para la foto del usuario */}
          <img
            className="h-full w-full object-cover"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
            alt="Foto del Usuario"
          />
        </div>
        <p className="text-lg font-semibold">Nombre del Usuario</p>
      </div>
      <div className="flex items-center">
        <LuBadgeCheck className="text-primary mr-2" size={20} />{" "}
        {/* Icono de insignia */}
        <p className="text-lg font-semibold">3</p>
      </div>
    </div>
  );
}
