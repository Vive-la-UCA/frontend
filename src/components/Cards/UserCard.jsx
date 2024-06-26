import Image from 'next/image'
import { BiSolidBadgeCheck } from 'react-icons/bi'

export default function UserCard({ name, email, badgeCount }) {
  return (
    <div className="rounded-lg p-4 h-full flex items-center bg-white mb-4 shadow-sm justify-between">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden mr-2">
          {/* Contenedor circular para la foto del usuario */}
          <Image
            className="h-full w-full object-cover"
            width={40}
            height={40}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
            alt="Foto del Usuario"
          />
        </div>
        <p className="pl-2 text-lg font-semibold">
          {name}
          <span className="font-thin text-gray-900"> {email}</span>
        </p>
      </div>
      <div className="flex items-center gap-1 text-yellow-badge ">
        {/* Icono de insignia */}
        <p className="text-lg font-bold">{badgeCount}</p>
        <BiSolidBadgeCheck size={30} />
      </div>
    </div>
  )
}
