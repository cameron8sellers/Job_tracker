import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavbarText } from 'reactstrap';
import { useMediaQuery } from "react-responsive"
import "./Header.css"


function Header({loggedIn, setLoggedIn, setCreateModal}) {
    const [collapsed, setCollapsed] = useState(true)
    const isMobile = useMediaQuery({query: "(max-width:768px)"})

    const toggleNavbar = () => setCollapsed(!collapsed)

    function logUserOut() {
        localStorage.removeItem("token")
        setLoggedIn(false)
    }

    function loadSignIn() {
        setCreateModal(false)
    }

    function handleCreateAccount() {
        setCreateModal(true)
    }

    const logIn = <NavbarText className="navbar-text-scale"><Link to="/"  onClick={loadSignIn}>Log In</Link></NavbarText>;
    const logOut = <NavbarText className="navbar-text-scale"><Link to="/" onClick={logUserOut}>Log Out</Link></NavbarText>;

    return (
        <div className="header">
            { isMobile ?
                (
                    <Navbar color="faded" light>
                        <NavbarBrand href="/" onClick={handleCreateAccount}>Job Tracker</NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <Link style={{color: "#41b3a3"}} className="nav-link" to="/companies">Target Companies Applications</Link>
                                <Link style={{color: "#c38d9e"}} className="nav-link" to="/materials">Job Search Materials</Link>
                                <Link style={{color: "#41b3a3"}} className="nav-link" to="/network">Networking Contacts</Link>
                                <Link style={{color: "#c38d9e"}} className="nav-link" to="/resources">Resources</Link>
                                {loggedIn ? logOut : logIn}
                            </Nav>
                        </Collapse>
                    </Navbar>
                ) :
                (
                    <Navbar color="light" light expand="md">
                        <Nav className="mr-auto">
                            <Link style={{color: "#c38d9e"}} className="nav-link nav-link-scale" to="/companies">Target Companies Applications</Link>
                            <Link style={{color: "#41b3a3"}} className="nav-link nav-link-scale" to="/materials">Job Search Materials</Link>
                            <Link  className="navbar-brand navbar-brand-scale" to="/" onClick={handleCreateAccount}>Job Tracker</Link>
                            <Link style={{color: "#41b3a3"}} className="nav-link nav-link-scale" to="/network">Networking Contacts</Link>
                            <Link style={{color: "#c38d9e"}} className="nav-link nav-link-scale" to="/resources">Resources</Link>
                        </Nav>
                        {loggedIn ? logOut : logIn}
                    </Navbar>
                )
            }
        </div>
    );
}

export default Header;
