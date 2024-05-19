export default function IsSecurePopUp({ functionToYes, functionToNo, title }) {
    return (
        <div className="bg-white p-5 shadow-lg flex flex-col items-center justify-between rounded-xl w-full max-w-md mx-auto md:p-8">
            <h2 className="py-5 text-xl font-semibold text-center">{title}</h2>
            <div className="flex justify-center gap-5 w-full">
                <button onClick={functionToYes} className="text-lg bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300" >Eliminar</button>
                <button onClick={functionToNo} className="text-lg bg-blue-principal text-white px-4 py-2 rounded-md hover:bg-blue-950 transition duration-300">Cancelar</button>
            </div>
        </div>
    );
};
