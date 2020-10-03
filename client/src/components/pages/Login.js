import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from "axios"

const LoginForm = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <Image src='' /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={onSubmit}>
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

          <Button color='grey' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to Museum Guide? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default LoginForm