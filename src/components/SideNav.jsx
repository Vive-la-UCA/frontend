import Link from 'next/link'
import NavLinks from './NavLinks'
import image from '@/images/logo.png'
import Logout from './buttons/Logout'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-principal p-4 md:h-40"
        href="/"
      >
        {image.src && (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full p-10 hover:scale-105 duration-150 transition-all object-cover"
          />
        )}
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <Logout />
        </form>
      </div>
    </div>
  )
}
