import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Localidades</h1>
      <div>
        <SearchBar />
      </div>
      <Link href="/dashboard/locations/create-location" className="bg-black px-5 py-2 rounded-2xl text-white">Create new</Link>
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        <LocateCard />
        <LocateCard />
        <LocateCard />
      </div>
    </>
  );
}
