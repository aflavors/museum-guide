import React, { Fragment } from 'react'

const About = () => {
    return (
        <nav style={aboutDivStyle}>
            <h2 style={aboutH2}>About</h2>
            <p>App to search artwork/objects in The Metropolitan Museum of Art collection.</p>
            <p>Version: 1.0.0</p>
        </nav>
    )
}

const aboutDivStyle = {
    textAlign: "left",
    marginLeft: "10px",
    marginTop: "5px"
}

const aboutH2 = {
    marginTop: "30px"
}

export default About