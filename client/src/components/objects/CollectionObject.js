import React, { Fragment } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import API from '../utils/API';

const CollectionObject = ({object: {_id, title, artistDisplayName, primaryImageSmall, objectDate, objectURL, objectID, GalleryNumber}, user, loadCollection}) => {

    const cardImageStyle = {
        height: "300px",
        backgroundImage: `url(${primaryImageSmall})`,
        backgroundSize: "cover",
        borderRadius: ".28571429rem",
        marginBottom: "10px"
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

    return (
        <div>
            <Fragment>
                <Card style={{margin: "10px"}}>
                    <Card.Content style={{ padding: "0em" }}>
                        <Card.Header style={ cardImageStyle }/>
                        <Card.Header> {title} </Card.Header>
                        <Card.Meta>
                            <span className='date'> {objectDate} </span>
                        </Card.Meta>
                        <Card.Description>
                            {artistDisplayName}
                        </Card.Description>
                    </Card.Content>
                    <Button 
                        animated='vertical'
                        attached="bottom" 
                        onClick={removeFromCollection} >
                        <Button.Content hidden>Remove From Collection</Button.Content>
                        <Button.Content visible>
                            <Icon name='remove' />
                        </Button.Content>
                    </Button>   
                </Card>
            </Fragment>
        </div>
    )
}

export default CollectionObject
