import Card from "@/components/Card";
import UserCard from "@/components/UserCard";
import RuteCard from "@/components/RuteCard";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="flex flex-row space-x-4">
        <Card routeName="Rutas" number="20" />
        <Card routeName="Usuarios" number="20,000" />
        <Card routeName="Localidades" number="500" />
      </div>
      <div className="border-box flex flex-row gap-5">
        <div className="w-1/2 pr-2">
          {" "}
          {/* Ajusta el tamaño de UserCard */}
          <h1 className="text-xl font-semibold my-4">
            Usuarios con mas insignias
          </h1>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div className="w-1/2 pr-2">
          {" "}
          {/* Ajusta el tamaño de RuteCard */}
          <h1 className="text-xl font-semibold my-4">Rutas populares</h1>
          <RuteCard />
          <RuteCard />
          <RuteCard />
        </div>
      </div>
    </>
  );
}
