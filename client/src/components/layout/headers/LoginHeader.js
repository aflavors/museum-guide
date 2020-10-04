import React, { Fragment } from 'react'
import login from './login.jpg'

const LoginHeader = () => {
    const header = {
        height: "200px",
        backgroundImage: `url(${login})`,
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
            <p style={citation}>Harunobu, Suzuki. <i>Night Rain at the Double-Shelf Stand.</i> ca. 1766.</p>
        </Fragment>
    )
}

export default LoginHeader
