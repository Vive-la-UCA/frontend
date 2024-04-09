import Link from "next/link";

export default function PrincipalButton({ type, text, link, Icon }) {
    return (

        <Link href={link} className="bg-blue-principal hover:bg-blue-900 transition-colors duration-75 font-medium text-white py-3 px-5 rounded-xl flex flex-row items-center gap-2">{Icon}{text}</Link>

    );
};
