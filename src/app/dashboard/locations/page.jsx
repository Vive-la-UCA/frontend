import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold mb-4">Localidades</h1>
        <SearchBar />
      </div>
      <div className="mt-10 flex flex-row flex-wrap content-start gap-8">
        <LocateCard />
        <LocateCard />
        <LocateCard />
        <LocateCard />
      </div>
    </>
  );
}
