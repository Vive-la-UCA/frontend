import { useState } from "react";

export function Pagination({ onStepped, totalElements, limit, currentPage }) {

    const pages = Math.ceil(totalElements / limit);
    const [page, setPage] = useState(0);

    function handlePreviousClick() {
        if (page > 0) {
            onStepped((page - limit));
            setPage((page - limit));
        } else {
            console.log("estas en la pagina inicial")
        }
    }

    function handleNumberClick(page) {
        setPage((page - 1) * limit);
        onStepped((page - 1) * limit);
    }

    function handleNextClick() {
        if (page < pages) {
            onStepped((page + limit));
            setPage((page + limit));
        } else {
            console.log("estas en la pagina final")
        }
    }



    return (
        <div className="flex items-center justify-center">
            <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-6 ">
                <div className="flex justify-center">
                    <nav className="flex space-x-2" aria-label="Pagination">
                        <a
                            href="#"
                            onClick={handlePreviousClick}
                            className={`relative inline-flex items-center px-4 py-2 text-sm ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-white bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 hover:text-white'
                                } font-semibold leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}
                            aria-disabled={currentPage === 1}
                        >
                            Previous
                        </a>
                        {Array.from({ length: pages }, (_, i) => (
                            <a
                                key={i}
                                href="#"
                                onClick={() => handleNumberClick(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 text-sm ${i + 1 === currentPage ? 'text-white bg-gray-600' : 'text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200'
                                    } font-medium leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}
                            >
                                {i + 1}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={handleNextClick}
                            className={`relative inline-flex items-center px-4 py-2 text-sm ${currentPage === pages ? 'cursor-not-allowed text-gray-400' : 'text-white bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 hover:text-white'
                                } font-semibold leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}
                            aria-disabled={currentPage === pages}
                        >
                            Next
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
