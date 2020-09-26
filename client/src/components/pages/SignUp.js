import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import axios from "axios";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmit = event => {
        event.preventDefault();

        const userData = {
            name,
            email,
            password
        };

        axios
            .post("/api/users/signup", userData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return (
    <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='grey' textAlign='center'>
            <Image src='' /> Sign up for an account
        </Header>
        <Form size='large' onSubmit={onSubmit}>
            <Segment stacked>
            <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='Name'
            onChange={event => {
                setName(event.target.value);
                console.log(name);
            }}
            //Do I need required here?
            required
            />
            <Form.Input 
            fluid icon='mail' 
            iconPosition='left' 
            placeholder='E-mail address'
            onChange={event => {
                setEmail(event.target.value);
                console.log(email);
            }}
            //Do I need required here?
            required
            />
            <Form.Input
                fluid icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={event => setPassword(event.target.value)}
            />

            <Button color='grey' fluid size='large'>
                Sign Up
            </Button>
            </Segment>
        </Form>
        <Message>
            Already have an account? <a href='/login'>Log-in</a>
        </Message>
        </Grid.Column>
    </Grid>
    )
}

export default SignUpForm