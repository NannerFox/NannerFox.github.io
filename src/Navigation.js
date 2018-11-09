import React from 'react';
import { Fade, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       fadein: true,
     }
   }
  render() {
    return(
      <Fade in={this.state.fadein}>
      <Nav vertical>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#links">Links / Contact</NavLink>
        </NavItem>
      </Nav>
    </Fade>
    )
  }
}

export default Navigation;
