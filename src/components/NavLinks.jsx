'use client' // Indica que el código se ejecutará en el navegador

import Link from "next/link";
import { FaHouse, FaLocationArrow } from "react-icons/fa6";


//Links del dashboard
const links = [
    { name: "Home", href: "/dashboard", icon: FaHouse },
    { name: "Routes", href: "/dashboard/routes", icon: FaLocationArrow }
]


export default function NavLinks() {

    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;

                    return (
                        <Link
                            href={link.href}
                            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                        >
                            <LinkIcon className="w-6" />
                            {link.name}
                        </Link>
                    )
                })
            }
        </>
    );
};