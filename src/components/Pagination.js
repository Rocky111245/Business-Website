import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ productsPerPage, totalProducts, currentPage, paginate }) {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Show max 7 page numbers at a time
    const getPageNumbers = () => {
        if (totalPages <= 7) return pageNumbers;

        if (currentPage <= 4) {
            return [...pageNumbers.slice(0, 5), '...', totalPages];
        }

        if (currentPage >= totalPages - 3) {
            return [1, '...', ...pageNumbers.slice(totalPages - 5)];
        }

        return [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages
        ];
    };

    return (
        <nav className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                    currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md'
                }`}
            >
                <FaChevronLeft className="text-sm" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((number, index) => (
                <React.Fragment key={index}>
                    {number === '...' ? (
                        <span className="px-3 py-2 text-gray-500">...</span>
                    ) : (
                        <button
                            onClick={() => paginate(number)}
                            className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200 ${
                                currentPage === number
                                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-110'
                                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                            }`}
                        >
                            {number}
                        </button>
                    )}
                </React.Fragment>
            ))}

            {/* Next Button */}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                    currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md'
                }`}
            >
                <FaChevronRight className="text-sm" />
            </button>
        </nav>
    );
}

export default Pagination;