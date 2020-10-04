import React from 'react';
import ObjectItem from './ObjectItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Card, Container } from 'semantic-ui-react'

const Objects = ({ objects, loading, user }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <Container>
                    <Card.Group itemsPerRow={4}>
                        {/* Iterate over objects for ObjectItem here */}
                        {objects.map(object => (
                            <ObjectItem key={object.objectID} object={object} user={user}/>
                        ))}
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

Objects.propTypes = {
    objects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Objects;