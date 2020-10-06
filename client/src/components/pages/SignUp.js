import React, { useState, Fragment } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react';
import axios from "axios";
import SignupHeader from '../layout/headers/SignupHeader';

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signupError, setError] = useState(false)
    const [signupSuccess, setSuccess] = useState(false)

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
                setSuccess(true)
                setError(false)
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
                setError(true)
            });
    };

    return (
        <Fragment>
            <SignupHeader />
            <Container>
                <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='grey' textAlign='center'>
                        <Icon name='edit' /> Sign Up For An Account
                    </Header>
                    <Form size='large' onSubmit={onSubmit} error={signupError} success={signupSuccess}>
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
                        <Message
                            error
                            header='Error'
                            content='Please check credentials try again.'
                        />
                        <Message 
                            success
                            header="Account Registered"
                            content="You are signed up and can now log in" 
                        />    

                        <Button color='grey' fluid size='large'>
                            Sign Up
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href='/login'>Log In</a>
                    </Message>
                    </Grid.Column>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default SignUpForm