'use client'
import Link from 'next/link'
import { FaPowerOff } from 'react-icons/fa6'

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.clear()
  }
  return (
    <Link onClick={handleLogout} href="/">
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-principal md:flex-none md:justify-start md:p-2 md:px-3">
        <FaPowerOff className="w-6" />
        <div className="hidden md:block">Cerrar Sesión</div>
      </button>
    </Link>
  )
}

export default Logout
