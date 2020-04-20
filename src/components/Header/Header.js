import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavbarText,
    Collapse,
    NavbarToggler
} from 'reactstrap';


function Header({loggedIn, setLoggedIn, setCreateModal}) {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)

    function logUserOut() {
        localStorage.removeItem("token")
        setLoggedIn(false)
    }

    function loadSignIn() {
        setCreateModal(false)
    }

    const logIn = <NavbarText onClick={loadSignIn}>Log In</NavbarText>;
    const logOut = <NavbarText onClick={logUserOut} >Log Out</NavbarText>;

    return (
        <div className="header">
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">Job Tracker</Link>
                {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar> */}
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/companies">Target Companies Applications</Link>
                    <Link className="nav-link" to="/materials">Job Search Materials</Link>
                    <Link className="nav-link" to="/network">Networking Contacts</Link>
                    <Link className="nav-link" to="/resources">Resources</Link>
                </Nav>
                {loggedIn ? logOut : logIn}
                {/* </Collapse> */}
            </Navbar>
        </div>
    );
}

export default Header;
