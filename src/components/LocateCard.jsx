export default function LocateCard() {
  return (
    <>
      <div className="w-44 overflow-hidden max-w-lg shadow-xl rounded-lg h-56 relative cursor-pointer">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://picsum.photos/800/600"
          alt="Card Image"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
          <h2 className="text-xl font-semibold">Centro de servicio social</h2>
        </div>
      </div>
    </>
  );
}
