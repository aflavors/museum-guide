import React, { Fragment } from 'react'
import home from './home.jpg'

const HomeHeader = () => {

    const header = {
        height: "200px",
        backgroundImage: `url(${home})`,
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
            <p style={citation}>Vigée Le Brun, Elisabeth Louise. <i>Madame Grand (Noël Catherine Vorlée, 1761–1835).</i> 1783.</p>
        </Fragment>
    )
}

export default HomeHeader
