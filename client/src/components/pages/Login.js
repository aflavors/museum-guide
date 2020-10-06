import React, { useState, Fragment } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Icon } from 'semantic-ui-react'
import axios from "axios"
import LoginHeader from '../layout/headers/LoginHeader';

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setError] = useState(false)
  const [loginSuccess, setSuccess] = useState(false)

  const onSubmit = event => {
    event.preventDefault();

    const loginData = {
        email,
        password
    };

    axios
        .post("/api/users/login", loginData)
        .then(res => {
            console.log(res);
            //set user in state to login email
            setUser(res.data)
            console.log(res.data.name + " logged in!")
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
      <LoginHeader />
    <Container>
      <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='grey' textAlign='center'>
            <Icon name='sign in' /> Log In To Your Account
          </Header>
          <Form size='large' onSubmit={onSubmit} error={loginError} success={loginSuccess}>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                onChange={event => {
                  setEmail(event.target.value);
                  console.log(email);
              }} 
                />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={event => setPassword(event.target.value)}
              />
              <Message
                error
                header='Error'
                content='Incorrect e-mail address or password.'
              />
              <Message 
                success
                header="Log In Successful"
                content="You are now logged in." 
              />

              <Button color='grey' fluid size='large'>
                Log In
              </Button>
            </Segment>
          </Form>
          <Message>
            New to Museum Guide? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
  </Container>
  </Fragment>
)
}

export default LoginForm