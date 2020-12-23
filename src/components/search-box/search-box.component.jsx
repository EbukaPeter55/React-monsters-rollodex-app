import React from 'react';
import './search-box.styles.css';


// Using react funtional component
export const SearchBox = ({placeholder, handleChange}) => (
    <input type="search"
    className="search"
        placeholder={placeholder}
        onChange={ handleChange }
        />
);