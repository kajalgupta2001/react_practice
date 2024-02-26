import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./index.css"

function Header(args) {
    return (
        <Navbar {...args}>
            <NavbarBrand href="/">Reactstrap</NavbarBrand>
            <Nav className="me-auto gap-3 m-auto" navbar>
                <NavItem>
                    <NavLink to="/" className='text-decoration-none'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="service" className='text-decoration-none'>Service</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="contact" className='text-decoration-none'>Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;
