import SearchBar from "@/components/SearchBar";
import LocateCard from "@/components/LocateCard";
export default function Page() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-10">
        <LocateCard />
        <LocateCard />
        <LocateCard />
      </div>
    </>
  );
}
