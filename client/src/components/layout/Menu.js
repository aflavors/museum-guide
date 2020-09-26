import React, { Component, Segment } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { BrowserRouter as Link } from 'react-router-dom'

var userStyle = {
    height: "50%",
    backgroundColor: "black"
    };

var headerTextStyle = {
    textAlign: "right",
    marginRight: "10px"
}

export default class MainMenu extends Component {
    state = { activeItem: '' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item
              href='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href='/about'
            //   as={Link} to="/about"
              name='About'
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              href='/mycollection'
              name='my collection'
              active={activeItem === 'my collection'}
              onClick={this.handleItemClick}
            />
            {/* <Dropdown text='Collections' pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Header>Custom</Dropdown.Header>
                    <Dropdown.Item>My Collection</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Curated</Dropdown.Header>
                    <Dropdown.Item>Collection 1</Dropdown.Item>
                    <Dropdown.Item>Collection 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            <Menu.Menu position='right'>
              <Menu.Item
                href="/login"
                name='log-in'
                active={activeItem === 'log-in'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                href="/signup"
                name='sign-up'
                active={activeItem === 'sign-up'}
                onClick={this.handleItemClick}
              />
              {this.props.user && <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />}
            </Menu.Menu>
          </Menu>
          <h2 style={ headerTextStyle }>Museum Guide</h2>
          <Image style={ userStyle } src='https://i.ibb.co/xgHC6qd/Header-Test.jpg' fluid />
        </div>
      )
    }
  }