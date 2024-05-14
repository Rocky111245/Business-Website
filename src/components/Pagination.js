import React from 'react';
import './Pagination.css';

const Pagination = ({ totalCount, productsPerPage, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(totalCount / productsPerPage);
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

    return (
        <div className="pagination-container">
            {currentPage > 1 && (
                <button 
                    className="page-number previous" 
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
            )}
            {pages.map(page => (
                <button 
                    key={page} 
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < pageCount && (
                <button 
                    className="page-number next" 
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default Pagination;
