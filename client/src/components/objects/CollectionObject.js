import React, { Fragment } from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'
import API from '../utils/API';

const CollectionObject = ({object: {_id, title, artistDisplayName, primaryImageSmall, objectDate, objectURL, objectID, GalleryNumber}, user, loadCollection}) => {

    const cardImageStyle = {
        height: "300px",
        backgroundImage: `url(${primaryImageSmall})`,
        backgroundSize: "cover",
        borderRadius: ".28571429rem",
        marginBottom: "10px"
    }

    const removeButton = {
        top: "-3px"
    }

    const removeIcon = {
        top: "-.5em"
    }

    //Removes a specific object from the database using API.deleteObject
    function removeFromCollection (event) {
        event.preventDefault();
        console.log(_id)
        API.deleteObject(_id)
        //loadCollection()
        .then(res => {
            console.log(res);
            loadCollection()
        }).catch(err => console.log(err))

        console.log("Object deleted")
    };

    //Conditional render for On View label
    const isOnView = GalleryNumber
    const mapURL = `https://maps.metmuseum.org/galleries/fifth-ave/2/${GalleryNumber}`
    let onViewLabel;

    if(isOnView) {
        onViewLabel = <Label fluid color='green' as="a" href={mapURL} >
        On View
        <Label.Detail>Gallery: {GalleryNumber}</Label.Detail>
        </Label>
    } else {
        onViewLabel = <Label basic color='grey'>
        Not Currently On Display at Museum
        </Label>
    }

    return (
        <div>
            <Fragment>
                <Card style={{margin: "10px"}}>
                    <Label 
                        as='button' 
                        corner="right" 
                        color="red" 
                        style={removeButton}
                        onClick={removeFromCollection}
                        >
                        <Icon 
                            name="remove" 
                            corner="right" 
                            attached="corner" 
                            style={removeIcon} 
                        />
                    </Label>
                    <Card.Content style={{ padding: "0em" }}>
                        <Card.Header style={ cardImageStyle }/>
                        <Card.Header> {title} </Card.Header>
                        <Card.Meta>
                            <span className='date'> {objectDate} </span>
                        </Card.Meta>
                        <Card.Description>
                            {artistDisplayName}
                        </Card.Description>
                        {onViewLabel}
                    </Card.Content> 
                </Card>
            </Fragment>
        </div>
    )
}

export default CollectionObject
