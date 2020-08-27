import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function SebNav(props) {
    const navItems = props.items.map((item) =>  NavItem(item));

    return(
      <Navbar variant="dark" collapseOnSelect  expand="md" bg="secondary" textUppercase fixedTop className="navbar navbar-expand-lg bg-secondary text-uppercase" id="mainNav">
        <div class="container">
          <a to="/"><Navbar.Brand>Sebastian Simmons.com</Navbar.Brand></a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                  {navItems}
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    );
}

function NavItem(props){
  return(
    <a to={props.link}><li class="nav-item mx-0 mx-lg-1"><p class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">{props.text}</p></li></a>
  );

}
