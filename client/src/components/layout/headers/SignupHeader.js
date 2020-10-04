import React, { Fragment } from 'react'
import signup from './signup.jpg'

const SignupHeader = () => {
    const header = {
        height: "200px",
        backgroundImage: `url(${signup})`,
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
            <p style={citation}>Attributed to Polykleitos. <i>Fragments of a marble statue of the Diadoumenos.</i> ca. A.D. 69–96.</p>
        </Fragment>
    )
}

export default SignupHeader
