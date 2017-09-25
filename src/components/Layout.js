import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class Layout extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <NavLink to="/">
            <Menu.Item
              name='landing'
              active={activeItem === 'landing'}
              onClick={this.handleItemClick}
            >
              Memory Makers
            </Menu.Item>
          </NavLink>
          <NavLink to="/about">
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              About
            </Menu.Item>
          </NavLink>
          <NavLink to="/contact">
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            >
              Contact
            </Menu.Item>
          </NavLink>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}
