import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Localidades</h1>
        <SearchBar />
      </div>
      <div className="mt-4">
        <Link
          href="/dashboard/locations/create-location"
          className="bg-primary px-3 py-1 rounded-2xl text-white "
        >
          Create New
        </Link>
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        <LocateCard />
        <LocateCard />
        <LocateCard />
      </div>
    </>
  );
}
