import React from 'react'

function handleFilter(selectedFilter, products) {
    
    return products.filter(product => product.description === selectedFilter);
}



export default handleFilter;