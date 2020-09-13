import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'

const Search = ({ searchObjects }) => {
    
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
            </Form>
        </div>
    )
}

Search.propTypes = {
    searchObjects: PropTypes.func.isRequired,
}

export default Search;
