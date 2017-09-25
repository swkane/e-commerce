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
              header
              name='landing'
              active={activeItem === 'landing'}
              onClick={this.handleItemClick}
            >
              Memory Makers
            </Menu.Item>
          </NavLink>
          <Menu.Menu position='right'>
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
          </Menu.Menu>
        </Menu>
        <Menu secondary>
          <NavLink to="/beach">
            <Menu.Item name='beach' active={activeItem === 'beach'} onClick={this.handleItemClick} />
          </NavLink>
          <NavLink to='/mountains'>
            <Menu.Item name='mountains' active={activeItem === 'mountains'} onClick={this.handleItemClick} />
          </NavLink>
          <NavLink to='/metropolitan'>
            <Menu.Item name='metropolitan' active={activeItem === 'metropolitan'} onClick={this.handleItemClick} />
          </NavLink>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}
