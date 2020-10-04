import React, { Fragment } from 'react'
import mycollection from './mycollection.jpg'

const MyCollectionHeader = () => {
    const header = {
        height: "200px",
        backgroundImage: `url(${mycollection})`,
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
            <p style={citation}>Whistler, James McNeil. <i>Variations in Violet and Grey—Market Place, Dieppe.</i> 1885.</p>
        </Fragment>
    )
}

export default MyCollectionHeader
