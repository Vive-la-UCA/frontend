export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        id="search-bar"
        className="block w-3/4 px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none"
        placeholder="Buscar..."
      />
    </div>
  );
}
