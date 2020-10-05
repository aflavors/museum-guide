import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Container } from 'semantic-ui-react'

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

    const searchMainStyle = {
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "10px",
    minHeight: 900
    }
    
    return (
        <Fragment>
            <Container>
                <div style={ searchMainStyle }>
                    <h2 >Search</h2>
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
                <hr />
            </Container>
        </Fragment>
    )
}

Search.propTypes = {
    searchObjects: PropTypes.func.isRequired,
    clearObjects: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}



export default Search;
