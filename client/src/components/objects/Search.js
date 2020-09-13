import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

const Search = ({ searchObjects, clearObjects, showClear }) => {
    
    const [text, setText] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        searchObjects(text)
        setText("")
    };

    const onChange = e => {
        setText(e.target.value)
    };
    
    return (
        <div>
            <h3>Search Museum Objects</h3>
            <Form onSubmit={onSubmit} className="ui form">
                <label>Search objects by keyword</label>
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search objects ..."
                    value={text}
                    onChange={onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="ui button"
                />
                {showClear && (<input
                    type="clear"
                    value="Clear"
                    className="ui button"
                    onClick={clearObjects}
                />)}
            </Form>
        </div>
    )
}

Search.propTypes = {
    searchObjects: PropTypes.func.isRequired,
    clearObjects: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}

export default Search;
