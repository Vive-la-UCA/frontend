import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between w-full bg-gray-200 px-4 py-2 rounded-lg">
      <input
        type="text"
        id="search-bar"
        className="block w-full text-gray-700 bg-gray-200 focus:outline-none"
        placeholder="Buscar..."
      />
      <button className="bg-primary rounded-lg p-2 ml-2 focus:outline-none">
        <FaSearch className="text-white text-xl" />
      </button>
    </div>
  );
}
