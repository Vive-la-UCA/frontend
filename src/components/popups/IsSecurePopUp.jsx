export default function IsSecurePopUp({ functionToYes, functionToNo, title }) {
    return (
        <div className="bg-white p-5 shadow-md flex flex-col items-center justify-between rounded-xl">
            <h2 className="py-5 text-lg">{title}</h2>
            <div className="flex justify-center gap-5">
                <button onClick={functionToYes} className="text-lg bg-red-500 text-white px-3 py-1 rounded-md" >Eliminar</button>
                <button onClick={functionToNo} className="text-lg bg-gray-300 text-white px-3 py-1 rounded-md">Cancelar</button>
            </div>
        </div>
    );
};
