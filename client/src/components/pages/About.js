import React, { Fragment } from 'react'
import AboutHeader from '../layout/headers/AboutHeader'
import { Container, List, Header, Image } from 'semantic-ui-react'

const About = () => {
    return (
        <Fragment>
            <AboutHeader />
            <Container >
            <nav style={aboutDivStyle}>
                <h2 style={aboutH2}>About</h2>
                <Header as="h2" style={{ fontSize: '1.6em', fontWeight: 200 }}>Museum Guide provides users access to the full art collection held by the Metropolitan Museum of Art - one of the world's largest art museums.</Header>
                <List bulleted style={{ fontSize: '1.4em', fontWeight: 300 }}>
                    <List.Item>Most museums display only 2-4% of their entire collections at one time. Many people visiting them have no idea of the vast collections stored in vaults throughout the building and warehouses across the world.</List.Item>
                    <List.Item>Museum Guide takes advantage of The Metropolitan Museum of Art's Open Access Program to allow users to browse the more than 470,000 artworks in its collection.</List.Item>
                </List>
                <p style={{ fontSize: '1.2em', fontWeight: 300 }}>Click <a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access" target="blank">here</a> to learn more about the Metropolitan Museum of Art's Open Access Program.</p><hr />
                <p style={{ fontSize: '1em', fontWeight: 300, paddingTop: "10px" }}>Museum Guide was created by <a href="https://github.com/aflavors" target="blank">Akeem Flavors</a>.</p>
                <p style={{ fontSize: '0.9em', fontWeight: 300 }}>Version: 1.0.0</p>
            </nav>
            </Container>
        </Fragment>
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