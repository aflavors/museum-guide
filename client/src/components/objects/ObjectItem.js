import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import API from "../utils/API"

const ObjectItem = ({object: {title, artistDisplayName, primaryImageSmall, objectDate, objectURL, objectID, GalleryNumber}}) => {
    //Destructuring this.state for access to props

    //Setting ObjectItem component's initial state
    const [dbObjects, setDbObjects] = useState([])

    //Loading all objects and storing with setDbObjects
    useEffect(() => {
        loadObjects()
    }, [])

    //Load all objects and set them to dbObjects
    function loadObjects() {
        API.getObjects()
        .then(res =>
            setDbObjects(res.data)
            )
            .catch(err => console.log(err));
    };

    //Adds an object to the database using API.saveObject
    //.Then reloads objects from the database
    function addToCollection (event) {
        event.preventDefault();
        console.log(artistDisplayName)
        API.saveObject({
            title: title,
            artistDisplayName,
            objectDate,
            objectURL,
            primaryImageSmall,
            objectID,
            GalleryNumber
        })
        .then(res => loadObjects())
        .catch(err => console.log(err))

        console.log("Added to collection" + JSON.stringify(dbObjects))
    };


    return (
        <Fragment>
            <Card>
                <Image src= {primaryImageSmall} wrapped ui={false} />
                <Card.Content>
                    <Card.Header> {title} </Card.Header>
                    <Card.Meta>
                        <span className='date'> {objectDate} </span>
                    </Card.Meta>
                    <Card.Description>
                        {artistDisplayName}
                    </Card.Description>
                </Card.Content>
                <Button.Group attached="bottom">
                    <Button animated='vertical' onClick={addToCollection}>
                        <Button.Content hidden>Add to Collection</Button.Content>
                        <Button.Content visible>
                            <Icon name='add' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical' href={objectURL} target="blank">
                        <Button.Content hidden>Learn More</Button.Content>
                        <Button.Content visible>
                            <Icon name='info circle' />
                        </Button.Content>
                    </Button>
                </Button.Group>    
            </Card>
        </Fragment>
    )
}

ObjectItem.propTypes = {
    object: PropTypes.object.isRequired,
};

export default ObjectItem