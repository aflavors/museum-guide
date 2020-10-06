import React, { Fragment } from 'react'
import { Container, Segment, Header, Button, Icon, Divider, Image, Grid } from 'semantic-ui-react'
import homeSegmentImage from './home-segment.png'

const HomeSegment = () => {

    const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

    return (
        <Fragment>
            <Segment style={{ minHeight: 1500, padding: '1em 0em', backgroundColor: "rgba(229, 224, 217, 0.09)" }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                     <Grid.Column floated='left' width={8}>
                        <Image fluid bordered rounded size='big' src={homeSegmentImage} />
                    </Grid.Column>   
                    <Grid.Column floated="left" width={6}>
                        <Header as='h3' style={{ fontSize: '2em', fontWeight:400 }}>
                        Welcome to Museum Guide
                        </Header>
                        <p style={{ fontSize: '1.2em', fontWeight: 200 }}>
                        Browse, view, and add objects to custom collections from the more than 470,000 artworks in The Metropolitan Museum of Art's collection.
                        </p>
                        <Header as='h3' style={{ fontSize: '1.5em', fontWeight:400 }}>
                        Be Your Own Guide
                        </Header>
                        <p style={{ fontSize: '1.2em', fontWeight: 200 }}>
                        Prepare for your next trip to The Met by knowing which artworks are on display - and where to find them.
                        </p>
                    </Grid.Column>
                    
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column textAlign='center'>
                    <Button as="a" href="#search_section" size="large" style={{backgroundColor:"#3e4b4e", color:"white" }}>Get Started <Icon name='right arrow' /></Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Fragment>
    )
}

export default HomeSegment
