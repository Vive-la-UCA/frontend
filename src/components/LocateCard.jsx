export default function LocateCard() {
  return (
    <>
      <div className="flex flex-col w-60 bg-white shadow-xl pb-4 rounded-lg h-fit">
        <img
          className="rounded-t-lg h-40 w-full object-cover"
          src="https://picsum.photos/800/600"
          alt="Card Image"
        />
        <div className="m-3 ">
        <h1 className=" font-bold text-gray-800 ">Card Title</h1>
        <p className="text-gray-600">
          Rutas asignadas</p>
        </div>
      </div>
    </>
  );
}
