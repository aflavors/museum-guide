import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { Card, Container, Grid, Label, Icon, List, Segment } from 'semantic-ui-react'
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
    const collectionDivStyle = {
        textAlign: "left",
        marginLeft: "10px",
        marginTop: "5px",
        marginBottom: "25px"
    }

    const collectionH2 = {
        marginTop: "30px"
    }

    return (
        <div>
            <Container>
                <Grid relaxed>
                    <Grid.Column width={16}>
                    <div style={collectionDivStyle}>
                        {collectionHeader}
                        <p>Browse museum objects added to your collection here.</p>
                        <Segment size="tiny" compact>
                        <List divided relaxed>
                            <List.Item>
                                <List.Icon name='times rectangle' size='large' verticalAlign='middle' color="red" />
                                <List.Content>
                                    <List.Header >Remove Object</List.Header>
                                    <List.Description as='a'>Click to remove object from your collection</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='square' size='large' verticalAlign='middle' color="green" />
                                <List.Content>
                                    <List.Header >View Map</List.Header>
                                    <List.Description as='a'>Click to view the object's location on the museum map</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='square outline' size='large' verticalAlign='middle' color="grey" />
                                <List.Content>
                                    <List.Header >Not on Display</List.Header>
                                    <List.Description as='a'>Object is currently not on display at museum. Click to learn more</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                        </Segment>
                        <hr />
                    </div>
                    <Card.Group itemsPerRow={4}>
                        {/* Iterate over objects for ObjectItem here */}
                        {collectionObjects.map(object => (
                            <CollectionObject key={object.objectID} object={object} loadCollection={loadCollection} />
                        ))}
                    </Card.Group>
                    </Grid.Column>
                </Grid>    
            </Container>
        </div>
    )
}

export default MyCollection