import React, { Fragment } from 'react'

const MyCollection = () => {
    return (
        <nav style={collectionDivStyle}>
            <h2 style={collectionH2}>My Collection</h2>
            <p>This is where objects added to your collection will be listed</p>
        </nav>
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