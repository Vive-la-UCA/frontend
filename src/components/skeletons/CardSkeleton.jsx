export function CardSkeleton() {
    return (
        <div
            className="animate-pulse bg-gray-500 relative w-44 overflow-hidden max-w-lg shadow-xl rounded-lg h-56 cursor-pointer"
        >
            <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                <h2 className="text-xl font-semibold h-10 w-full mr-5 bg-gray-300 animation-pulse"></h2>

            </div>
        </div>
    );
};
