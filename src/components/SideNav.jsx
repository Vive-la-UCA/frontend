'use client' // Indica que el archivo se ejecutará en el navegador

import { usePathname } from "next/navigation";

export default function SideNav() {

    const pathname = usePathname();


    return (
        <>
            <h1>Hola Mundo!</h1>
        </>
    );
};
