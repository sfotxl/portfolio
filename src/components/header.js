import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from 'reactstrap';

const Header = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        padding: 5,
        backgroundColor: 'forestgreen',
      }}
    >
      <Navbar color='white' className='text-primary' light expand='md'>
        <NavbarBrand href='/'>Aloha, World!</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>Contact</NavLink>
            </NavItem>
          </Nav>
          <div style={{ flexGrow: 1 }}></div>
          <div className='mr-0'>Kalani Man</div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
