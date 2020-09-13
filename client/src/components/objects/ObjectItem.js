import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react'

const ObjectItem = ({object: {title, artistDisplayName, primaryImageSmall, objectDate}}) => {
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
            </Card>
        </Fragment>
    )
}

ObjectItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default ObjectItem