// Todo, add scroll to position on page
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/About">About</NavLink>
            </NavItem>
            {/* May add this later
            <NavItem>
              <NavLink href="/components/Passion">Passion</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/components/Experience">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/Skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/Projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
