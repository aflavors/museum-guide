import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card, Image, Button, Icon } from 'semantic-ui-react'

const ObjectItem = ({object: {title, artistDisplayName, primaryImageSmall, objectDate, objectURL}}) => {
    //Destructuring this.state for access to props
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
                    <Button animated='vertical'>
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
    user: PropTypes.object.isRequired,
};

export default ObjectItem