import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchObjects }) => {
    searchObjects();
    
    return (
        <div>
            <h3>Search Museum Objects</h3>
        </div>
    )
}

Search.propTypes = {
    searchObjects: PropTypes.func.isRequired,
}

export default Search;
