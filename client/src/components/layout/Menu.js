import React, { Component, Segment } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

var userStyle = {
    height: "50%",
    backgroundColor: "black"
    };

var headerTextStyle = {
    textAlign: "right",
    marginRight: "10px",
    marginBottom: "10px",
    fontFamily: "Noto Sans JP",
    fontWeight: "500",
    fontSize: "34px"
}

export default class MainMenu extends Component {
    state = { activeItem: '' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item as={ Link }
              to='/'
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ HashLink }
              to="/#search_section"
              name='Search'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ Link }
              to='/about'
              name='About'
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ Link }
              to='/mycollection'
              name='my collection'
              active={activeItem === 'my collection'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item as={ Link }
                to="/login"
                name='log-in'
                active={activeItem === 'log-in'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={ Link }
                to="/signup"
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
        </div>
      )
    }
  }