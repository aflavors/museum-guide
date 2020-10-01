import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { Card } from 'semantic-ui-react'
import ObjectItem from "../objects/ObjectItem"
import CollectionObject from "../objects/CollectionObject"

const MyCollection = ({ user }) => {

    //Setting MyCollection component's initial state
    const [collectionObjects, setCollection] = useState([])

    //Loading all objects from datbase and storing in collectionObjects
    useEffect(() => {
        loadCollection()
    }, [])

    //Load objects and set to collectionObjects
    function loadCollection() {
        API.getObjects()
        .then(res => {
            console.log(res.data);
            setCollection(res.data)
            //Filter objects by user to match current user login
            setCollection(res.data.filter(userObject => userObject.user===`${user.email}`));
        }).catch(err => console.log(err))
    }

    //Conditional render for Collection Header 
    const isLoggedIn = user;
    let collectionHeader;
    if (isLoggedIn) {
        collectionHeader = <h2 style={collectionH2}>{user.name}'s Collection</h2>
    } else {
        collectionHeader = <h2 style={collectionH2}>My Collection</h2>
    }


    return (
        <div>
        <div style={collectionDivStyle}>
            {collectionHeader}
            <p>This is where objects added to your collection will be listed</p>
        </div>
        <Card.Group itemsPerRow={4}>
            {/* Iterate over objects for ObjectItem here */}
            {collectionObjects.map(object => (
                <CollectionObject key={object.objectID} object={object} loadCollection={loadCollection} />
            ))}
        </Card.Group>
    </div>
    )
}

const collectionDivStyle = {
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "25px"
}

const collectionH2 = {
    marginTop: "30px"
}

export default MyCollection