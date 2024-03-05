import Link from "next/link";

const Navbar = () => {
    return(
        <div className="bg-primary font-montserrat h-[10vh] w-full flex justify-between items-center p-10 " >
            <Link href="/">
            <div className="">
                Logo
            </div>
            </Link>
            <div>
            <Link href="/login">
            <div className="">
                Iniciar sesion
            </div>
            </Link>
            </div>
            
        </div>
    )
} 

export default Navbar;