import React, { Fragment } from 'react'
import search from './search.jpg'

const SearchHeader = () => {
    const header = {
        height: "200px",
        backgroundImage: `url(${search})`,
        backgroundSize: "cover"
    }
    const citation = {
        textAlign: "right",
        fontSize: "10px",
        marginRight: "5px"
    }

    return (
        <Fragment>
            <div style={header} />
            <p style={citation}>Buonarroti, Michelangelo. <i>Studies for the Libyan Sibyl (recto);.</i> ca. 1510–11.</p>
        </Fragment>
    )
}

export default SearchHeader
