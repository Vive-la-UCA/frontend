import Card from "@/components/Card";
import UserCard from "@/components/UserCard";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-7">Dashboard</h1>
      <div className="flex flex-row space-x-4">
        <Card routeName="Rutas" number="20" />
        <Card routeName="Usuarios" number="20,000" />
        <Card routeName="Localidades" number="500" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-semibold mb-7">
          Usuarios con mas insignias
        </h1>
        {/* Establece que la tarjeta de usuario ocupe el 50% del espacio */}
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}
