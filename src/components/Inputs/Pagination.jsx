import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export function Pagination({ onStepped, totalElements, limit, currentPage }) {

    const pages = Math.ceil(totalElements / limit);
    const [page, setPage] = useState(0);

    console.log("page" + page)
    console.log("currentpage" + currentPage)
    console.log("pages" + pages)

    function handlePreviousClick() {
        if (page > 0) {
            onStepped((page - limit));
            setPage((page - limit));
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
                            className={`relative inline-flex items-center px-4 py-2 text-sm ${page === 0 ? 'cursor-not-allowed' : 'text-white bg-blue-principal'
                                } font-semibold leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue bg-blue-deactivate text-white focus:z-10`}
                            aria-disabled={currentPage === 1}
                        >
                            <FaChevronLeft />
                        </a>
                        {Array.from({ length: pages }, (_, i) => (
                            <a
                                key={i}
                                href="#"
                                onClick={() => handleNumberClick(i + 1)}
                                className={`relative inline-flex items-center px-4 py-2 text-sm ${i * 10 === page ? 'text-white bg-blue-principal' : 'text-gray-700 bg-white border border-gray-100 hover:bg-blue-900 hover:text-white'
                                    } font-medium leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}

                            >
                                {i + 1}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={handleNextClick}
                            className={`relative inline-flex items-center px-4 py-2 text-sm ${page === pages * 10 - 10 ? 'cursor-not-allowed' : 'text-white bg-blue-principal'
                                } font-semibold leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue bg-blue-deactivate text-white focus:z-10`}
                            aria-disabled={currentPage === 1}
                        >
                            <FaChevronRight />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
