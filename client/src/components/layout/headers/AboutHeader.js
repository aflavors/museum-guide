import React, { Fragment } from 'react'
import about from './about.jpg'

const AboutHeader = () => {
    const header = {
        height: "200px",
        backgroundImage: `url(${about})`,
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
            <p style={citation}>New Kingdom. <i>Arm Panel From a Ceremonial Chair of Thutmose IV.</i> ca. 1400–1390 B.C.</p>
        </Fragment>
    )
}

export default AboutHeader
