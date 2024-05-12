"use client"; // Indica que el código se ejecutará en el navegador

import Link from "next/link";
import { FaHouse, FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { usePathname } from "next/navigation";

//Links del dashboard
const links = [
  { name: "Inicio", href: "/dashboard", icon: FaHouse },
  { name: "Rutas", href: "/dashboard/routes", icon: FaLocationArrow },
  { name: "Usuarios", href: "/dashboard/users", icon: FaUserAlt },
  { name: "Localidades", href: "/dashboard/locations", icon: FaLocationDot },
  { name: "Insignias", href: "/dashboard/badges", icon: BiSolidBadgeCheck },
];

export default function NavLinks() {

  const pathName = usePathname();


  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            href={link.href}
            key={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
            ${pathName === link.href ? 'bg-blue-principal text-white' : 'bg-gray-50 text-gray-700 hover:bg-sky-50 hover:text-blue-principal'}`}
          >
            <LinkIcon className="w-6" size={17} />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
