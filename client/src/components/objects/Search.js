import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Container, List, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
    minHeight: 400
    }
    
    return (
        <Fragment>
            <Container>
                <div style={ searchMainStyle }>
                    <h2 >Search</h2>
                    <p>Search museum objects by keyword to add to your collection here.</p>
                    <Segment size="medium">
                        <List divided relaxed style={{padding: "5px"}}>
                            <List.Item style={{padding: "5px"}}>
                                <List.Icon name='add' size='large' verticalAlign='middle' color="grey" />
                                <List.Content>
                                    <List.Header >Add to Collection</List.Header>
                                    <List.Description as='a' style={{marginBottom: "10px"}}>Click to add this object to your collection.</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item style={{paddingTop: "15px", marginTop: "5px", marginBottom:"15px"}}>
                                <List.Icon name='info circle' size='large' verticalAlign='middle' color="grey" />
                                <List.Content>
                                    <List.Header >Learn More</List.Header>
                                    <List.Description as='a'>Click to view more information on this object.</List.Description>
                                </List.Content>
                            </List.Item>
                            <Segment.Group horizontal>
                                <Segment inverted as={Link} to="/mycollection" style={{backgroundColor: "grey"}}>View Your Collection</Segment>
                            </Segment.Group>
                        </List>
                        </Segment>
                    <Form onSubmit={onSubmit} className="ui form" size="big" style={{padding: "5px"}}>
                        <input 
                            type="text" 
                            name="text" 
                            placeholder="Search keyword ..."
                            value={text}
                            onChange={onChange}
                            style={{margin: "5px"}}
                        />
                        <input 
                            type="submit" 
                            value="Search" 
                            className="ui button"
                            style={{margin: "5px"}}
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
