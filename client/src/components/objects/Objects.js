import React from 'react';
import ObjectItem from './ObjectItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Objects = ({ objects, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                {/* Iterate over objects for ObjectItem here */}
            </div>
        )
    }
}

Objects.propTypes = {
    objects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Objects;