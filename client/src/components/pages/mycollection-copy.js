import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { Card } from 'semantic-ui-react'
import ObjectItem from "../objects/ObjectItem"
import CollectionObject from "../objects/CollectionObject"

const MyCollection = ({ user }) => {

    //Setting MyCollection component's initial state
    const [collectionObjects, setCollection] = useState([])
    let [filteredObjects, filterObjects] = useState([])
    //const [loggedInUser, setLoggedInUser] = useState([])

    //Loading all objects from datbase and storing in collectionObjects
    useEffect(() => {
        loadCollection()
    }, [])

    //Load objects and set to collectionObjects
    function loadCollection() {
        console.log(user);
        API.getObjects()
        .then(res => 
            setCollection(res.data)
            //filterByUser();

                       
            //insert function to filter by user
            ).catch(err => console.log(err))
    }

    function filterByUser() {
        filteredObjects = collectionObjects.filter(function(){
            if(res.data.user===user.email){
               //filteredObjects.push(res.data)
               console.log(res.data) 
            }
        })
    }

    // const filteredCollection = collectionObjects.filter(collectionObject)

    return (
        <div>
        <nav style={collectionDivStyle}>
            <h2 style={collectionH2}>My Collection</h2>
            <p>This is where objects added to your collection will be listed</p>
        </nav>
        <Card.Group itemsPerRow={4}>
            {/* Iterate over objects for ObjectItem here */}
            {filteredObjects.map(object => (
                <CollectionObject key={object.objectID} object={object} loadCollection={loadCollection} />
            ))}
        </Card.Group>
    </div>
    )
}

const collectionDivStyle = {
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "5px"
}

const collectionH2 = {
    marginTop: "30px"
}

export default MyCollection